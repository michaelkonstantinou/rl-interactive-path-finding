import MapGrid from "./ui/MapGrid";

document.addEventListener('DOMContentLoaded', () => {   
    // Init the Map Grid with default values
    const mapGrid = new MapGrid();
    mapGrid.generateGrid(4, 4);

    // Grid Size Selector - Get User's width and height preferences and update the grid
    const gridSizeSelect = document.getElementById('grid-size-select') as HTMLSelectElement;
    gridSizeSelect.addEventListener('change', () => {
        const [width, height] = gridSizeSelect.value.split('x').map(Number);
        mapGrid.generateGrid(width, height);
    });
});