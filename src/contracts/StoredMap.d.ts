interface StoredMapBlock {
    type: string;
    image: string;
}

interface StoredMap {
    width: number;
    height: number;
    blocks: StoredMapBlock[];
}