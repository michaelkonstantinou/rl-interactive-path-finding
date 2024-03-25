import UIElement from "../contracts/ui/UIElement";
import { UIRenderableElement } from "../contracts/ui/UIRenderableElement";
import { blocks, fileExtensionBlocks, pathBlocks } from "../data/Blocks";
import { DraggableItem } from "./DraggableItem";
import { DraggableItemContainer } from "./DraggableItemContainer";

export class MapToolbox extends UIRenderableElement {

    constructor(elementId: string = '#map-toolbox') {
        super();
        this.setElementFromId(elementId);

        this.render();
    }

    /**
     * Creates draggable items dynamically.
     */
    public render(): void {
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