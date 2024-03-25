abstract class UIElement {
    protected element: HTMLElement;

    /**
     * Returns the respective HTML element that this UI Element is for
     * @returns HTMLElement
     */
    public getHTMLElement(): HTMLElement {
        return this.element;
    }

    /**
     * Finds the corresponding DOM element and assigns it to the element property
     * @param elementId 
     */
    public setElementFromId(elementId: string): void {
        this.element = document.querySelector(elementId) as HTMLElement;
    }
 }

 export default UIElement;