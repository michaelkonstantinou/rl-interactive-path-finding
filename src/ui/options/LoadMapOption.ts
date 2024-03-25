import { UserOption } from "../../contracts/UserOption";
import { storedMaps } from "../../data/StoredMaps";
import MapGrid from "../MapGrid";

export class LoadMapOption extends UserOption {
    constructor(elementId: string, mapGrid: MapGrid) {
        super(elementId);
        this.onChange(() => {
            if (this.getValue() === "-1") {
                mapGrid.generateGrid(4, 4);
            } else {
                this.loadMap(mapGrid);
            }
        })
    }

    public getValue(): string
    {
        return (this.element as HTMLSelectElement).value
    }

    /**
     * Generates a new map based on the stored map value
     * 
     * @param mapGrid 
     */
    private loadMap(mapGrid: MapGrid): void
    {
        const mapIndex: number = Number.parseInt(this.getValue());
        mapGrid.generateFromStoredMap(storedMaps[mapIndex]);
    }
}