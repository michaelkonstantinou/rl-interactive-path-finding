import { UserOption } from "../../contracts/UserOption";
import MapGrid from "../MapGrid";

export class GridBorderOption extends UserOption {

    constructor(elementId: string, mapGrid: MapGrid) {
        super(elementId);
        (this.element as HTMLInputElement).checked = false;
        this.onChange(() => {
            mapGrid.toggleGridBorders();
        })
    }

    public getValue(): string
    {
        return (this.element as HTMLInputElement).value
    }
}