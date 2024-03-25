import UIElement from "../contracts/UIElement";
import { fileExtensionBlocks, pathBlocks } from "../data/Blocks";
import { DraggableItem } from "./DraggableItem";
import { DraggableItemContainer } from "./DraggableItemContainer";
import { MapCode } from "./MapCode";

class MapGrid extends UIElement {

    // Contains the map grid boxes that are automatically generated
    private boxes: HTMLElement[];

    // Contains the code representation of the map grid
    private mapCode: MapCode;

    constructor(elementId: string = '#map-grid') {
        super();
        this.element = document.querySelector(elementId) as HTMLElement;
        this.mapCode = new MapCode();

        this.setupEventListeners();
    }

    /**
     * Creates the grid based on the selected size.
     */
    public generateGrid(width: number, height: number): void {
        
        // Clear previous grid
        this.element.innerHTML = ''; 

        // Remove all map-grid-repeat classes
        this.element.classList.remove('map-grid-repeat-4');
        this.element.classList.remove('map-grid-repeat-8');
        this.element.classList.remove('map-grid-repeat-16');

        // Calculate number of rows and columns based on size
        this.element.classList.add('map-grid-repeat-' + height);

        // Create grid of boxes
        this.boxes = [];
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const box = document.createElement('div');
                box.classList.add('box');
                this.element.appendChild(box);
                this.boxes.push(box);
            }
        }
    }

    /**
     * Given a StoredMap object, the function generates a grid based on the values of 
     * the stored map
     * 
     * @param storedMap 
     */
    public generateFromStoredMap(storedMap: StoredMap): void {
        
        // Create empty grid
        this.generateGrid(storedMap.width, storedMap.height);

        // Iterate boxes and fill the map's values
        for (let i in this.boxes) {
            this.boxes[i].style.backgroundImage = storedMap.blocks[i].image;
            this.boxes[i].dataset.type = storedMap.blocks[i].type;
        }

        // Update the code representation
        this.mapCode.generate(this.boxes);
    }

    /**
     * Toggle the class that is responsible for showing the grid boxes with borders or merged as a whole
     */
    public toggleGridBorders(): void
    {
        this.element.classList.toggle('hidden-borders');
    }

    /**
     * Sets up event listeners for drag and drop events and grid size selection change.
     */
    private setupEventListeners(): void {
        this.element.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        this.element.addEventListener('drop', (event) => {
            event.preventDefault();
            const data = JSON.parse(event.dataTransfer.getData('text/plain')) as { imageUrl: string, type: string };
            const target = event.target as HTMLElement;
            if (target.classList.contains('box')) {

                // Set the box's values to reflect the draggable item's values
                target.style.backgroundImage = `url(${data.imageUrl})`;
                target.dataset.type = data.type;

                // Update the code representation
                this.mapCode.generate(this.boxes);
            }
        });
    }
}

export default MapGrid;
