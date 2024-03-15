import UIElement from "../contracts/UIElement";
import { blocks, pathBlocks, fileExtensionBlocks } from "../data/Blocks";
import { DraggableItem } from "./DraggableItem";
import { DraggableItemContainer } from "./DraggableItemContainer";

class MapGrid extends UIElement {
    private draggableBlocks: BlockHolder;

    constructor() {
        super();
        this.element = document.querySelector('.map-grid') as HTMLElement;
        this.draggableBlocks = blocks;
        
        this.initialize();
    }

    /**
     * Creates the grid based on the selected size.
     */
    public generateGrid(width: number, height: number) {
        this.element.innerHTML = ''; // Clear previous grid

        // Remove all map-grid-repeat classes
        this.element.classList.remove('map-grid-repeat-4');
        this.element.classList.remove('map-grid-repeat-8');
        this.element.classList.remove('map-grid-repeat-16');

        // Calculate number of rows and columns based on size
        this.element.classList.add('map-grid-repeat-' + height);

        // Create grid of boxes
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const box = document.createElement('div');
                box.classList.add('box');
                this.element.appendChild(box);
            }
        }
    }

    /**
     * Initializes the MapGrid instance.
     */
    private initialize() {
        // this.createDraggableItems();
        // this.setupEventListeners();
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
            this.element.parentNode!.insertBefore(container.getHTMLElement(), this.element.nextSibling);
        }
    }

    /**
     * Sets up event listeners for drag and drop events and grid size selection change.
     */
    private setupEventListeners() {
        this.element.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        this.element.addEventListener('drop', (event) => {
            event.preventDefault();
            const data = JSON.parse(event.dataTransfer.getData('text/plain')) as { imageUrl: string, type: string };
            const target = event.target as HTMLElement;
            if (target.classList.contains('box')) {
                target.style.backgroundImage = `url(${data.imageUrl})`;
                target.dataset.type = data.type;
            }
        });
    }
}

export default MapGrid;
