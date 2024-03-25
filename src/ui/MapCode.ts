import UIElement from "../contracts/UIElement";

export class MapCode extends UIElement {

    constructor(elementId: string = '#map-code') {
        super();
        this.element = document.querySelector(elementId) as HTMLElement;
    }

    /**
     * Iterate all the boxes of the map and generate a code representation as used in the StoredMap
     * @param boxes 
     */
    public generate(boxes: HTMLElement[]): void {
        let codeAsString: string = "";

        // Iterate boxes and fill the map's values
        for (let i in boxes) {
            codeAsString += `{'type': '${boxes[i].dataset.type}', 'image': '${boxes[i].style.backgroundImage}'}\n`;
        }

        this.element.innerHTML = `<pre>${codeAsString}</pre>`
    }
}