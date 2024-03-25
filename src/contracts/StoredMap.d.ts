import { StoredMapBlock } from "./StoredMapBlock";

export interface StoredMap {
    width: number;
    height: number;
    blocks: StoredMapBlock[];
}