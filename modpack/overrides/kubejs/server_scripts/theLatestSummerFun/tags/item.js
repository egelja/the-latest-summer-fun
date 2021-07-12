// priority: 6000
/*
 * Add item tags.
 *
 * Templates:
 *  - `event.add(tag, item)`
 *  - `event.remove(tag, item)`
 *  - `event.removeAll(tag)`
 *
 ** See https://mods.latvian.dev/books/kubejs/page/tageventjs for more info.
 */
onEvent("item.tags", (event) => {
  // Jelly/Jam tags
  event.add("forge:jelly_or_jam", ["kubejs:jelly", "upgrade_aquatic:mulberry_jam_bottle"]);

  // Dimensional Shards
  event.add("forge:dimensional_ores", /rftoolsbase:dimensionalshard_/);

  // Piglins
  event.add("minecraft:piglin_loved", [
    "druidcraft:amber",
    "druidcraft:amber_block",
    "#forge:dusts/gold",
    "#forge:gears/gold",
    "#forge:plates/gold",
  ]);

  // Cryptic Redstone ore
  event.add("forge:ores/redstone", "byg:cryptic_redstone_ore");

  // IE Slag
  event.add("forge:slag", "immersiveengineering:slag");

  // Raritanium
  event.add("forge:ingots/copper", "calemiutils:raritanium");

  // Equality for Blueberries
  event.add("forge:crops/blueberries", "byg:blueberries");

  // Sawdust - bit jank but it should work
  event.add("forge:storage_blocks/wood", "thermal:sawdust_block");

  // Lapis Lazuli Plate
  event.add("forge:plates/lapis_lazuli", "emendatusenigmatica:lapis_plate");

  // Fluix block
  event.add("forge:storage_blocks", "appliedenergistics2:fluix_block");
  event.add("forge:storage_blocks/fluix", "appliedenergistics2:fluix_block");

  //** Planks
  // Non-vanilla
  event.add("forge:non_vanilla_planks", "#minecraft:planks").remove(/minecraft:.*_planks/);

  // BYG Planks
  event.add("forge:only_byg_planks", /byg:.*_planks/);
});
