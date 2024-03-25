import MapGrid from "./ui/MapGrid";
import { MapToolbox } from "./ui/MapToolbox";
import { GridBorderOption } from "./ui/options/GridBorderOption";
import { GridSizeOption } from "./ui/options/GridSizeOption";
import { LoadMapOption } from "./ui/options/LoadMapOption";

document.addEventListener('DOMContentLoaded', () => {   

    // Init the Map Grid with default values
    const mapGrid = new MapGrid();
    mapGrid.generateGrid(4, 4);
    const mapToolbox = new MapToolbox();

    // Grid Size Selector - Get User's width and height preferences and update the grid
    const gridSizeOption: GridSizeOption = new GridSizeOption('#grid-size-select', mapGrid);
    const gridBorderOption: GridBorderOption = new GridBorderOption('#grid-border-select', mapGrid);
    const loadMapOption: LoadMapOption = new LoadMapOption('#load-map-option', mapGrid);
});
