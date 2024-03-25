import { UIRenderableElement } from "../contracts/ui/UIRenderableElement";

export class MapBox extends UIRenderableElement {
    private index: number;
    private type?: string = null;
    private image?: string = null;
    
    constructor(index: number) {
        super();

        this.index = index;
        this.render();
    }

    public render(): void {
        this.element = document.createElement('div');
        this.element.classList.add('box');
        this.element.id = this.index.toString();
    }

    /**
     * Setter for image property
     * 
     * @param image 
     */
    public setImage(image?: string): void {
        this.element.style.backgroundImage = `url(${image})`;
        this.image = image;
    }

    /**
     * Setter for type property
     * 
     * @param type 
     */
    public setType(type?: string): void {
        this.element.dataset.type = type;
        this.type = type;
    }


    /**
     * Getter for type property
     * 
     * @returns 
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Getter for image property
     * 
     * @returns 
     */
    public getImage(): string {
        return this.image;
    }
}