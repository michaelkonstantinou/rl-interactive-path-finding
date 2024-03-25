import UIElement from "../contracts/ui/UIElement";
import { UIRenderableElement } from "../contracts/ui/UIRenderableElement";
import { DraggableItem } from "./DraggableItem";

export class DraggableItemContainer extends UIRenderableElement {
    private type: string;

    constructor(type: string) {
        super();
        this.type = type;

        this.render();
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
    public render(): void {
        const container = document.createElement('div');
        container.classList.add('col-lg-3', 'col-md-6', 'col-sm-12');

        // Create title
        const title = document.createElement('h4');
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