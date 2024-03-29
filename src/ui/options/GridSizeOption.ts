import { UIUserOption } from "../../contracts/ui/UIUserOption";
import MapGrid from "../MapGrid";

export class GridSizeOption extends UIUserOption {
    private width: number;
    private height: number;

    constructor(elementId: string, mapGrid: MapGrid) {
        super(elementId);
        this.onChange(() => {
            [this.width, this.height] = this.getValue().split('x').map(Number)    
            mapGrid.generateGrid(this.width, this.height);
        })
    }

    public getValue(): string
    {
        return (this.element as HTMLSelectElement).value
    }
}