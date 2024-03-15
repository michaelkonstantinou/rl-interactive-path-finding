import UIElement from "../contracts/UIElement";
import { blocks, fileExtensionBlocks, pathBlocks } from "../data/Blocks";
import { DraggableItem } from "./DraggableItem";
import { DraggableItemContainer } from "./DraggableItemContainer";

export class MapToolbox extends UIElement {
    private draggableBlocks: BlockHolder;

    constructor(elementId: string = '#map-toolbox') {
        super();
        this.element = document.querySelector(elementId) as HTMLElement;
        this.draggableBlocks = blocks;

        this.createDraggableItems();
    }

    /**
     * Creates draggable items dynamically.
     */
    private createDraggableItems(): void {
        for (const type in blocks) {
            const images = blocks[type];
            const container = new DraggableItemContainer(type);
            
            images.forEach((image: string) => {
                const imagePathUrl = pathBlocks + image + fileExtensionBlocks;
                container.addDraggableItem(new DraggableItem(type, imagePathUrl))
            });
            this.element.appendChild(container.getHTMLElement());
        }
    }
}