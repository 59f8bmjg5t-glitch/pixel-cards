```javascript
/*
 * PIXEL CARDS — Registre des cartes
 * Les identifiants 1 à 10 sont réservés aux cartes de Noël existantes.
 * Les cartes permanentes utilisent les identifiants 101 à 130.
 */

window.PIXEL_CARDS = {
  permanent: [
    { id: "101", number: "001", name: "Aki", rarity: "common", season: "permanent", available: true, description: "Un jeune combattant pixel prêt à prouver sa valeur." },
    { id: "102", number: "002", name: "Mina", rarity: "common", season: "permanent", available: true, description: "Une apprentie rapide qui maîtrise l'énergie lumineuse." },
    { id: "103", number: "003", name: "Ren", rarity: "common", season: "permanent", available: true, description: "Un épéiste déterminé qui ne recule jamais." },
    { id: "104", number: "004", name: "Yuna", rarity: "common", season: "permanent", available: true, description: "Une exploratrice capable de sentir la magie." },
    { id: "105", number: "005", name: "Kael", rarity: "common", season: "permanent", available: true, description: "Un combattant qui canalise la force du vent." },

    { id: "106", number: "006", name: "Sora", rarity: "uncommon", season: "permanent", available: true, description: "Une voyageuse qui bondit entre les courants d'air." },
    { id: "107", number: "007", name: "Nami", rarity: "uncommon", season: "permanent", available: true, description: "Une mage dont les pouvoirs suivent les marées." },
    { id: "108", number: "008", name: "Kiro", rarity: "uncommon", season: "permanent", available: true, description: "Un inventeur qui transforme ses gadgets en armes." },
    { id: "109", number: "009", name: "Ayame", rarity: "uncommon", season: "permanent", available: true, description: "Une guerrière silencieuse aux réflexes redoutables." },
    { id: "110", number: "010", name: "Daichi", rarity: "uncommon", season: "permanent", available: true, description: "Un gardien qui puise sa force dans la terre." },

    { id: "111", number: "011", name: "Akira", rarity: "rare", season: "permanent", available: true, description: "Un duelliste qui concentre une énergie rouge." },
    { id: "112", number: "012", name: "Hikari", rarity: "rare", season: "permanent", available: true, description: "Une combattante entourée d'une aura dorée." },
    { id: "113", number: "013", name: "Takeshi", rarity: "rare", season: "permanent", available: true, description: "Un maître du sabre forgé dans les flammes." },
    { id: "114", number: "014", name: "Mei", rarity: "rare", season: "permanent", available: true, description: "Une magicienne qui manipule les cristaux." },
    { id: "115", number: "015", name: "Raiden", rarity: "rare", season: "permanent", available: true, description: "Un guerrier dont les attaques crépitent d'électricité." },

    { id: "116", number: "016", name: "Kagura", rarity: "epic", season: "permanent", available: true, description: "Une danseuse mystique qui déchaîne des flammes bleues." },
    { id: "117", number: "017", name: "Shiro", rarity: "epic", season: "permanent", available: true, description: "Un chevalier masqué protégé par une armure spectrale." },
    { id: "118", number: "018", name: "Riku", rarity: "epic", season: "permanent", available: true, description: "Un aventurier qui traverse les failles dimensionnelles." },
    { id: "119", number: "019", name: "Tsuki", rarity: "epic", season: "permanent", available: true, description: "Une guerrière lunaire dont la lame brille dans la nuit." },
    { id: "120", number: "020", name: "Kuro", rarity: "epic", season: "permanent", available: true, description: "Un combattant des ombres enveloppé d'une aura violette." },

    { id: "121", number: "021", name: "Emperor Zero", rarity: "legendary", season: "permanent", available: true, description: "Un souverain ancien capable de plier l'espace." },
    { id: "122", number: "022", name: "Celestia", rarity: "legendary", season: "permanent", available: true, description: "Une gardienne céleste qui commande aux étoiles." },
    { id: "123", number: "023", name: "Inferno", rarity: "legendary", season: "permanent", available: true, description: "Un guerrier incandescent dont la puissance grandit au combat." },
    { id: "124", number: "024", name: "Shogun Eclipse", rarity: "legendary", season: "permanent", available: true, description: "Un seigneur masqué qui absorbe la lumière." },
    { id: "125", number: "025", name: "Dragon Astral", rarity: "legendary", season: "permanent", available: true, description: "Un dragon antique qui protège les frontières du cosmos." },

    { id: "126", number: "026", name: "Oracle des Mondes", rarity: "secret", season: "permanent", available: true, description: "Une entité mystérieuse qui connaît les chemins oubliés." },
    { id: "127", number: "027", name: "Phantom X", rarity: "secret", season: "permanent", available: true, description: "Un être insaisissable qui apparaît entre deux réalités." },
    { id: "128", number: "028", name: "Néantys", rarity: "secret", season: "permanent", available: true, description: "Une présence cosmique violette et bleue née du vide." },
    { id: "129", number: "029", name: "Archange Pixel", rarity: "secret", season: "permanent", available: true, description: "Un protecteur légendaire lié à une énergie céleste." },
    { id: "130", number: "030", name: "Le Créateur", rarity: "secret", season: "permanent", available: true, description: "Une figure énigmatique capable de façonner les mondes." }
  ],

  events: {
    noel: {
      name: "Winter Pixels",
      active: false,
      cards: [
        { id: "1", name: "Frosty", rarity: "common" },
        { id: "2", name: "Lutin 8-Bit", rarity: "common" },
        { id: "3", name: "Rudolph Pixel", rarity: "uncommon" },
        { id: "4", name: "Golem de Glace", rarity: "rare" },
        { id: "5", name: "Mage Boréal", rarity: "rare" },
        { id: "6", name: "Loup Polaire", rarity: "epic" },
        { id: "7", name: "Draco Givré", rarity: "epic" },
        { id: "8", name: "Reine Boréale", rarity: "legendary" },
        { id: "9", name: "Gardien du Grand Atelier", rarity: "legendary" },
        { id: "10", name: "Winter Core", rarity: "secret" }
      ]
    }
  }
};
```
