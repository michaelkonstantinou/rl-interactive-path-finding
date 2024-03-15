abstract class UIElement {
    protected element: HTMLElement;

    /**
     * Returns the respective HTML element that this UI Element is for
     * @returns HTMLElement
     */
    public getHTMLElement(): HTMLElement {
        return this.element;
    }
 }

 export default UIElement;