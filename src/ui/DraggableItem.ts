import UIElement from "../contracts/ui/UIElement";
import { UIRenderableElement } from "../contracts/ui/UIRenderableElement";

export class DraggableItem extends UIRenderableElement {
    private type: string;
    private imagePathUrl: string;

    constructor(type: string, imagePathUrl: string) {
        super();
        this.type = type;
        this.imagePathUrl = imagePathUrl;

        this.render();
        this.addDragStartListener();
    }

    public render(): void {
        const draggableItem = document.createElement('div');
        draggableItem.classList.add('draggable', 'box', 'mt-2', 'me-2');
        draggableItem.draggable = true;
        draggableItem.dataset.type = this.type;
        draggableItem.dataset.imageUrl = this.imagePathUrl;
        draggableItem.innerHTML = `<img src="${this.imagePathUrl}" alt="${this.type}">`;

        this.element = draggableItem;
    }

    private addDragStartListener(): void {
        this.element.addEventListener('dragstart', (event) => {
            const imageUrl = (event.target as HTMLElement).parentElement.dataset.imageUrl;
            const itemType = (event.target as HTMLElement).parentElement.dataset.type;
            event.dataTransfer.setData('text/plain', JSON.stringify({ imageUrl, type: itemType }));
        });
    }
}