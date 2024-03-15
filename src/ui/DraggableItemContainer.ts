import UIElement from "../contracts/UIElement";
import { DraggableItem } from "./DraggableItem";

export class DraggableItemContainer extends UIElement {
    private type: string;

    constructor(type: string) {
        super();
        this.type = type;

        this.createDomElement();
    }

    public addDraggableItem(item: DraggableItem): void {
        this.element.querySelector('.container-draggable-items').appendChild(item.getHTMLElement());
    }

    /**
     * Create the following structure
     * Div container for the object that will hold a Title and below its draggable items
     * 
     * Title
     * - Div container
     * -- Draggable items holder here --
     */
    private createDomElement(): void {
        const container = document.createElement('div');

        // Create title
        const title = document.createElement('h1');
        title.classList.add('mt-4');
        title.textContent = this.type;

        // Create draggable items container
        const containerDraggableItems = document.createElement('div');
        containerDraggableItems.classList.add('d-flex', 'container-draggable-items');

        // Merge together
        container.appendChild(title);
        container.appendChild(containerDraggableItems);

        this.element = container;
    }
}