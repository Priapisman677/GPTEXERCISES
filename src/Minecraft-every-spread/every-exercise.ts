import { inventory } from "./data.js";
import { InventoryInterface } from "./interfaces.js";

function validateInventory(inventory: InventoryInterface) {
	const inventoryItems = Object.keys(inventory);
	const countCheck = inventoryItems.every((item) => {
		return inventory[item].count > 0;
	});
	if (countCheck) {
		console.log("All items have a count greater than 0");
	} else {
		console.log("Not all items have a count greater than 0");
	}
	//$ We could merge the line below with the same line above

	const metadataCheck = inventoryItems.every((item) => {
		const requiredKeys = ["type", "rarity"];
		const metadata = Object.keys(inventory[item].metadata);

		return requiredKeys.every((requiredKey) => {
			return metadata.includes(requiredKey);
		});

		//$same as:
		// const metaCheck = requiredKeys.every((requiredKey) => {
		// 	return metadata.includes(requiredKey);
		// });
		// return metaCheck
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



	//$ This is my simple solution but ChatGPT set dot it could use a lot of improvement:
	const rarityList: any = [];
	const rarityCheck = inventoryItems.every((item) => {
		const currentRarity = inventory[item].metadata.rarity;

		if (!rarityList.includes(currentRarity)) {
			rarityList.push(currentRarity);
			return true;
		} else {
			return false;
		}
	});
	if (rarityCheck) {
		console.log("All rarities are unique");
	} else {
		console.log("Not all rarities are unique");
	}
}

validateInventory(inventory);
