import UIElement from "./UIElement";

export abstract class UIRenderableElement extends UIElement {
    
    public hide(): void
    {
        this.element.classList.add('d-none');
    }

    public show(): void
    {
        this.element.classList.remove('d-none');
    }

    public abstract render(): void
}