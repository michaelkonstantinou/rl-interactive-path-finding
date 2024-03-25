import { StoredMap } from "../contracts/StoredMap"

const exampleMap1: StoredMap = {
    width: 4,
    height: 4,
    blocks: [
        {'type': 'Start', 'image': 'assets/blocks/tile_0147.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0000.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0000.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0002.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0000.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0000.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0001.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0000.png'},
        {'type': 'Wall', 'image': 'assets/blocks/tile_0144.png'},
        {'type': 'Wall', 'image': 'assets/blocks/tile_0143.png'},
        {'type': 'Wall', 'image': 'assets/blocks/tile_0142.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0000.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0000.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0001.png'},
        {'type': 'Road', 'image': 'assets/blocks/tile_0002.png'},
        {'type': 'End', 'image': 'assets/blocks/tile_0145.png'},
    ]
}

export const storedMaps = [exampleMap1]