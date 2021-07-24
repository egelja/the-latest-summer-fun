/*
 * Shaped crafting table recipes
 *
 * Template: `event.shaped("MOD:OUTPUT", [inputs on crafting table], {input mapping})`
 *
 ** See L24 of https://mods.latvian.dev/books/kubejs/page/recipeeventjs for more details.
 */
onEvent("recipes", (event) => {
  // Click machine
  event.shaped("clickmachine:auto_clicker", [
    "OIO",
    "IDI",
    "OIO"
  ], {
    O: "minecraft:obsidian",
    I: "#forge:ingots/invar",
    D: "minecraft:dispenser"
  });

  //! Vanilla jetpack recipes
  //** Iron
  // Iron thruster
  event.shaped("simplyjetpacks:thruster_vanilla1", [
    " I ",
    "IFI",
    "ICI"
  ], {
    I: "#forge:ingots/iron",
    F: "minecraft:furnace",
    C: "quark:bottled_cloud"
  });
  // Iron jetpack
  event.shaped("simplyjetpacks:jetpack_vanilla1", [
    "ICI",
    "ISI",
    "T T"
  ], {
    I: "#forge:ingots/iron",
    C: "thermal:rf_coil",
    S: "simplyjetpacks:leather_strap",
    T: "simplyjetpacks:thruster_vanilla1"
  });
  //** Gold
  // Gold thruster
  event.shaped("simplyjetpacks:thruster_vanilla2", [
    " G ",
    "GFG",
    "GBG"
  ], {
    G: "#forge:ingots/gold",
    F: "minecraft:furnace",
    B: "minecraft:blaze_powder"
  });
  // Gold jetpack
  event.shaped("simplyjetpacks:jetpack_vanilla2", [
    "GIG",
    "GJG",
    "T T"
  ], {
    G: "#forge:ingots/gold",
    I: "quark:redstone_inductor",
    J: "simplyjetpacks:jetpack_vanilla1",
    T: "simplyjetpacks:thruster_vanilla2"
  });
  //** Diamond
  // Diamond thruster
  event.shaped("simplyjetpacks:thruster_vanilla3", [
    " D ",
    "DFD",
    "DBD"
  ], {
    D: "#forge:gems/diamond",
    F: "minecraft:furnace",
    B: "quark:soul_bead"
  });
  // Diamond jetpack
  event.shaped("simplyjetpacks:jetpack_vanilla3", [
    "DCD",
    "DJD",
    "T T"
  ], {
    D: "#forge:gems/diamond",
    C: "minecraft:comparator",
    J: "simplyjetpacks:jetpack_vanilla2",
    T: "simplyjetpacks:thruster_vanilla3"
  });
  //** Netherite
  // Netherite thruster
  //? See block.js
  // Netherite jetpack
  event.shaped("simplyjetpacks:jetpack_vanilla4", [
    "NRN",
    "NJN",
    "T T"
  ], {
    N: "minecraft:netherite_scrap",
    R: "#forge:storage_blocks/redstone",
    J: "simplyjetpacks:jetpack_vanilla3",
    T: "simplyjetpacks:thruster_vanilla4"
  });

  //! Thermal jetpack recipes
  //** Crafting components
  // Blitz Unit
  event.shaped("simplyjetpacks:unit_glowstone", [
    "RUR"
  ], {
    R: "thermal:blitz_rod",
    U: "simplyjetpacks:unit_glowstone_empty"
  });
  // Blizz Unit
  event.shaped("simplyjetpacks:unit_glowstone", [
    "RUR"
  ], {
    R: "thermal:blizz_rod",
    U: "simplyjetpacks:unit_cryotheum_empty"
  });
  //** Leadstone
  // Leadstone Thruster
  event.shaped("simplyjetpacks:thruster_te1", [
    " L ",
    "LDL",
    "RRR"
  ], {
    L: "#forge:ingots/lead",
    R: "#forge:dusts/redstone",
    D: "thermal:dynamo_stirling"
  });
  // Leadstone Jetpack
  event.shaped("simplyjetpacks:jetpack_te1", [
    " L ",
    "LSL",
    "TCT"
  ], {
    L: "#forge:ingots/lead",
    S: "simplyjetpacks:leather_strap",
    T: "simplyjetpacks:thruster_te1",
    C: "thermal:flux_capacitor"
  });
  //** Hardened
  // Hardened Thruster
  event.shaped("simplyjetpacks:thruster_te2", [
    " I ",
    "IDI",
    "RCR"
  ], {
    I: "#forge:ingots/invar",
    R: "#forge:dusts/redstone",
    D: "thermal:dynamo_compression",
    C: "thermal:rf_coil"
  });
  // Hardened Jetpack
  event.shaped("simplyjetpacks:jetpack_te2", [
    " I ",
    "IJI",
    "TUT"
  ], {
    I: "#forge:ingots/invar",
    J: "simplyjetpacks:jetpack_te1",
    T: "simplyjetpacks:thruster_te2",
    U: "thermal:upgrade_augment_1"
  });
  //** Reinforced
  // Reinforced Thruster
  event.shaped("simplyjetpacks:thruster_te3", [
    " E ",
    "EDE",
    "RCR"
  ], {
    E: "#forge:ingots/electrum",
    R: "thermal:rf_coil",
    D: "thermal:dynamo_magmatic",
    C: "#forge:gems/cinnabar"
  });
  // Reinforced Jetpack
  event.shaped("simplyjetpacks:jetpack_te3", [
    " E ",
    "EJE",
    "TUT"
  ], {
    E: "#forge:ingots/electrum",
    J: "simplyjetpacks:jetpack_te2",
    T: "simplyjetpacks:thruster_te3",
    U: "thermal:upgrade_augment_2"
  });
  //** Resonant
  // Resonant Thruster
  event.shaped("simplyjetpacks:thruster_te4", [
    " E ",
    "EDE",
    "CSC"
  ], {
    E: "#forge:ingots/enderium",
    S: "#forge:ingots/signalum",
    D: "thermal:dynamo_lapidary",
    C: "#forge:gems/cinnabar"
  });
  // Resonant Jetpack
  event.shaped("simplyjetpacks:jetpack_te4", [
    " E ",
    "EJE",
    "TUT"
  ], {
    E: "#forge:ingots/enderium",
    J: "simplyjetpacks:jetpack_te3",
    T: "simplyjetpacks:thruster_te4",
    U: "thermal:upgrade_augment_3"
  });
  //** Fluxed
  // Fluxed Thruster
  event.shaped("simplyjetpacks:thruster_te5", [
    " L ",
    "LDL",
    "SGS"
  ], {
    L: "#forge:plates/lumium",
    S: "#forge:ingots/signalum",
    D: "thermal:dynamo_numismatic",
    G: "simplyjetpacks:unit_glowstone"
  });
  // Fluxed Jetpack
  event.shaped("simplyjetpacks:jetpack_te5", [
    "LLL",
    "CJC",
    "TNT"
  ], {
    L: "#forge:plates/lumium",
    J: "simplyjetpacks:jetpack_te4_armored",
    T: "simplyjetpacks:thruster_te5",
    N: "gildedarmor:gilded_netherite_chestplate"
  });

  //! Rework Mechworks
  // Drawbridge
  event.shaped("tmechworks:drawbridge", [
    "GDG",
    "BPB",
    "GBG"
  ], {
    G: "#forge:ingots/gold",
    D: "minecraft:dispenser",
    B: "#forge:ingots/bronze",
    P: "minecraft:sticky_piston"
  });
  // Firestarter
  event.shaped(Item.of("tmechworks:firestarter", {extinguish: 1}), [
    "GNG",
    "BFB",
    "GBG"
  ], {
    G: "#forge:ingots/gold",
    N: "#forge:netherrack",
    B: "#forge:ingots/bronze",
    F: "minecraft:flint_and_steel"
  });
  // Blank Upgrade
  event.shaped("tmechworks:upgrade_blank", [
    "GBG",
    "B B",
    "GBG"
  ], {
    G: "#forge:ingots/gold",
    B: "#forge:ingots/bronze"
  });
  // Advanced Upgrade
  event.shaped("tmechworks:upgrade_drawbridge_advanced", [
    "CEC",
    "EUE",
    "CEC"
  ], {
    C: "#forge:ingots/cobalt",
    E: "#forge:ingots/electrum",
    U: "tmechworks:upgrade_blank"
  });

  //! Chunk Loaders
  // Chunk loader
  event.shaped("chickenchunks:spot_loader", [
    "EGE",
    "GOG"
  ], {
    E: "minecraft:ender_eye",
    G: "#forge:ingots/gold",
    O: "minecraft:crying_obsidian"
  });
  // Spot loader
  event.shaped("chickenchunks:chunk_loader", [
    "LLL",
    "LSL",
    "LLL"
  ], {
    L: "chickenchunks:spot_loader",
    S: "#forge:nether_stars"
  });

  //! F O O D
  // Waffles
  event.shaped("kubejs:waffle", [
    " S ",
    "WWW"
  ], {
    S: "kubejs:syrup_bottle",
    W: "#forge:crops/wheat",
  });
  event.shaped("2x kubejs:waffle", [
    " S ",
    "WWW"
  ], {
    S: "minecraft:honey_bottle",
    W: "#forge:crops/wheat",
  });
  // Pizza
  event.shaped("kubejs:pizza", [
    "CTC",
    "WWW"
  ], {
    C: "kubejs:cheese",
    T: "#forge:crops/tomato",
    W: "#forge:crops/wheat",
  });
  // Calzone
  event.shaped("2x kubejs:calzone", [
    "WWW",
    "CTC",
    "WWW"
  ], {
    C: "kubejs:cheese",
    T: "#forge:crops/tomato",
    W: "#forge:crops/wheat",
  });
  // Not-bread
  event.shaped("kubejs:bread", [
    "WDW"
  ], {
    W: "#forge:crops/wheat",
    D: "#forge:dusts/wood",
  });
  // Neapolitan
  event.shaped("kubejs:gamer_neapolitan", [
    "IPI",
    "FIS",
    "IBI"
  ], {
    I: "#forge:ices/packed",
    P: "#forge:crops/potato",
    F: "#forge:crops/strawberry",
    S: "minecraft:sugar",
    B: "minecraft:bowl",
  });
});
