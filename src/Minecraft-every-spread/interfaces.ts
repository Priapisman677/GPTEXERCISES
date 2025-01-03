type Rarity = "common" | "uncommon" | "rare" | "epic"| "legendary" | "ultra";
type ItemType = "material" | "building" | "tool" | "weapon";

interface MetadataInterface {
	rarity?: Rarity;
	type?: ItemType;
	enchantments?: { [key: string]: number};
}

interface InventoryItem {
	count: number;
	metadata: MetadataInterface;


}

export interface InventoryInterface {
	 [key: string]: InventoryItem 
}
