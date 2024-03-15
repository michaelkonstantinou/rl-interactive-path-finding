import UIElement from "./UIElement";

export abstract class UserOption extends UIElement {
    protected value: string|number;

    constructor(elementId: string) {
        super();
        this.element = document.querySelector(elementId) as HTMLElement;
    }

    protected onChange(callback: (this: HTMLElement, ev: Event) => any): void
    {
        this.element.addEventListener('change', callback);
    }

    public abstract getValue(): string;
}