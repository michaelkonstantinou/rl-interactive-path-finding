import { blocks, fileExtensionBlocks, pathBlocks } from "../data/blocks";
import DraggableItem from "../ui/DraggableItem";
import DraggableItemContainer from "../ui/DraggableItemContainer";

class MapGrid {
    private mapGrid: HTMLElement;
    private gridSizeSelect: HTMLSelectElement;
    private draggableBlocks: BlockHolderInterface;

    constructor() {
        this.mapGrid = document.querySelector('.map-grid') as HTMLElement;
        this.gridSizeSelect = document.getElementById('grid-size-select') as HTMLSelectElement;
        this.draggableBlocks = blocks;
        
        this.initialize();
    }

    /**
     * Initializes the MapGrid instance.
     */
    private initialize() {
        this.createGrid('4x4');
        this.createDraggableItems();
        this.setupEventListeners();
    }

    /**
     * Creates draggable items dynamically.
     */
    private createDraggableItems() {
        for (const type in blocks) {
            const images = blocks[type];
            const container = new DraggableItemContainer(type);
            
            images.forEach((image: string) => {
                const imagePathUrl = pathBlocks + image + fileExtensionBlocks;
                container.addDraggableItem(new DraggableItem(type, imagePathUrl))
            });
            this.mapGrid.parentNode!.insertBefore(container.getHTMLElement(), this.mapGrid.nextSibling);
        }
    }

    /**
     * Sets up event listeners for drag and drop events and grid size selection change.
     */
    private setupEventListeners() {
        this.mapGrid.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        this.mapGrid.addEventListener('drop', (event) => {
            event.preventDefault();
            const data = JSON.parse(event.dataTransfer.getData('text/plain')) as { imageUrl: string, type: string };
            const target = event.target as HTMLElement;
            if (target.classList.contains('box')) {
                target.style.backgroundImage = `url(${data.imageUrl})`;
                target.dataset.type = data.type;
            }
        });

        this.gridSizeSelect.addEventListener('change', () => {
            this.createGrid(this.gridSizeSelect.value);
        });
    }

    /**
     * Creates the grid based on the selected size.
     * @param size - The selected size in the format "rows x columns".
     */
    private createGrid(size: string) {
        this.mapGrid.innerHTML = ''; // Clear previous grid

        // Remove all map-grid-repeat classes
        this.mapGrid.classList.remove('map-grid-repeat-4');
        this.mapGrid.classList.remove('map-grid-repeat-8');
        this.mapGrid.classList.remove('map-grid-repeat-16');

        // Calculate number of rows and columns based on size
        const [rows, columns] = size.split('x').map(Number);
        this.mapGrid.classList.add('map-grid-repeat-' + columns);

        // Create grid of boxes
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const box = document.createElement('div');
                box.classList.add('box');
                this.mapGrid.appendChild(box);
            }
        }
    }
}

export default MapGrid;
