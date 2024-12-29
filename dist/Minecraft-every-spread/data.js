// Ensures every item in the inventory has:
// ---A count greater than 0.
// ---A valid metadata object containing the keys "rarity" and "type".
// Validates enchantments:
// If the metadata object includes "enchantments", ensure:
// ---All enchantment levels are numbers greater than 0.
//! I didn't do this below:
// Validates item names:
// ---Ensure all item names (keys in the inventory object) contain only:
// ---Lowercase letters (a-z), numbers (0-9), and underscores (_).
// ---Invalid names (e.g., "diamond_sword!") should cause the validation to fail.
// Ensures unique rarity:
// ---There must not be duplicate "rarity" values across items.
export const inventory = {
    diamond: {
        count: 3,
        metadata: {
            rarity: "rare", //This metadata doesn't have type
            enchantments: {
                unbreaking: 3,
                mending: 1,
            },
        },
    },
    gold_ingot: {
        count: 10,
        metadata: {
            rarity: "common", // Duplicate rarity
            type: "material",
        },
    },
    oak_plank: {
        count: 0, // Invalid count
        metadata: {
            rarity: "common", //Duplicate rarity
            type: "building",
        },
    },
    enchanted_book: {
        count: 1,
        metadata: {
            rarity: "legendary",
            type: "tool",
            enchantments: {
                sharpness: 5,
                efficiency: 0, // Enchantment greater than 0
            },
        },
    },
    stone: {
        count: 5,
        metadata: {
            rarity: "ultra",
            type: "building",
        },
    },
    iron_sword: {
        count: 1,
        metadata: {
            rarity: "uncommon",
            type: "weapon",
            enchantments: {
                unbreaking: 2,
            },
        },
    },
};
//# sourceMappingURL=data.js.map