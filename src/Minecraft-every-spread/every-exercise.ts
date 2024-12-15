import { inventory } from "./data.js";
import { InventoryInterface } from "./interfaces.js";

function validateInventory(inventory: InventoryInterface) {
	
	const inventoryItems = Object.keys(inventory)
	const countCheck = inventoryItems.every((item)=>{
		return (inventory[item].count > 0)
	})
	if (countCheck) {
		console.log("All items have a count greater than 0");
	} else {
		console.log("Not all items have a count greater than 0");
	}
	//$ We could merge the line below with the same line above
	const metadataCheck = inventoryItems.every((item) => {
		const requiredKeys = ["type", "rarity"];
		const metadataKeys = Object.keys(inventory[item].metadata);

		const metaCheck = requiredKeys.every((data) => {
			return metadataKeys.includes(data);
		});
		return metaCheck;
	});
	if (metadataCheck) {
		console.log("All metadata for items include type and rarity");
	} else {
		console.log("Not all metadata for items include type and rarity");
	}

	const enchantmentsCheck = inventoryItems.every((item) => {
        const enchantments = inventory[item].metadata.enchantments;
        if (!enchantments) {
            return true; // No enchantments to validate
        }
        const enchantmentKeys = Object.keys(enchantments);
        return enchantmentKeys.every((key) => enchantments[key] > 0);
    });

	if (enchantmentsCheck) {
		console.log("All enchantments are greater than 0");
	} else {
		console.log("Not all enchantments are greater than 0");
	}
}

validateInventory(inventory);
