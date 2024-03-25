import UIElement from "./UIElement";

export abstract class UIUserOption extends UIElement {
    protected value: string|number;

    constructor(elementId: string) {
        super();
        this.setElementFromId(elementId);
    }

    protected onChange(callback: (this: HTMLElement, ev: Event) => any): void
    {
        this.element.addEventListener('change', callback);
    }

    public abstract getValue(): string;
}