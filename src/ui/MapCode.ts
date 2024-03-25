import UIElement from "../contracts/ui/UIElement";
import { MapBox } from "./MapBox";

export class MapCode extends UIElement {

    constructor(elementId: string = '#map-code') {
        super();
        this.setElementFromId(elementId);
    }

    /**
     * Iterate all the boxes of the map and generate a code representation as used in the StoredMap
     * @param boxes 
     */
    public generate(boxes: MapBox[]): void {
        let codeAsString: string = "";

        // Iterate boxes and fill the map's values
        for (let i in boxes) {
            codeAsString += `{'type': '${boxes[i].getType()}', 'image': '${boxes[i].getImage()}'}\n`;
        }

        this.element.innerHTML = `<pre>${codeAsString}</pre>`
    }
}