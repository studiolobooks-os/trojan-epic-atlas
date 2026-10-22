// Edit descriptions and positions here. x and y are percentages of the original image.
const MAPS = {
 iliad:{title:'The Iliad', subtitle:'Battlefield', kicker:'01 / THE WAR', image:'assets/iliad.jpg', places:[
 ['Mount Ida',40.5,11.6,'A mountain overlooking the Trojan plain, associated in Greek myth with the gods and the judgment of Paris.'],
 ['Greek Camp',14.9,45.2,'Under Agamemnon’s command, the Greek kings unite to reclaim Helen. A fleet of 1,186 ships carries their armies to the shores of Troy, where they wage war for ten years.'],
 ['Battle Plain',45.2,50,'The plain between the Greek ships and Troy is the setting for many encounters in the Iliad.'],
 ['Troy',78.2,39.4,'Ruled by King Priam and defended by his son Hector, Troy shelters Paris and Helen behind its mighty walls. Allies from distant lands, including the Amazons and Ethiopians, eventually join its defense.'],
 ['Scamander River',72.9,65.4,'The river flows across the Trojan plain. In the Iliad, its divine personification confronts Achilles.']]},
 troy:{title:'The Fall of Troy', subtitle:'City Map', kicker:'02 / THE CITY', image:'assets/troy.png', places:[
 ['Scamander River',9.6,7,'The river of the Trojan plain appears in the Iliad as both a waterway and a deity.'],
 ['Citadel',39.9,15.8,'Greek warriors storm the royal palace. Neoptolemus, the son of Achilles, kills King Priam at the altar of Zeus. The royal family is destroyed, and Troy\'s last defenses collapse.'],
 ['Aristocratic Area',69.9,24.3,'As Troy burns, Aeneas fights desperately to defend the city. Forced to retreat, he escapes with his father Anchises and his son Ascanius, carrying the hopes of Troy into exile.'],
 ['Athena’s Temple',56.1,44.7,'Odysseus and Diomedes steal the Palladium, the sacred statue of Athena believed to protect Troy. Without it, the city is vulnerable.'],
 ['Residential Area',17.7,55.2,'The Greeks spread through the streets, setting houses ablaze and slaughtering the inhabitants. By dawn, the once-great city lies in ruins.'],
 ['Trojan Horse',57.7,70,'Odysseus devises the wooden horse, allowing Greek warriors to enter Troy undetected. After ten years of failed assaults, his stratagem finally brings down the city.'],
 ['Scaean Gate',41.6,92.6,'The Scaean Gate is a landmark in the Iliad, where Trojan elders watch the fighting from the walls.']]},
 odyssey:{title:'The Odyssey', subtitle:'Journey', kicker:'03 / THE VOYAGE', image:'assets/odyssey.png', places:[
 ['Troy',77.6,38.4,'After the fall of Troy, Odysseus and his companions set out for home.'],
 ['Cicones',73.8,29.2,'Odysseus and his men raid Ismarus, a city of the Cicones, and suffer losses in the ensuing fight.'],
 ['Lotus Eaters',46.1,79.6,'The lotus makes those who eat it forget their desire to return home.'],
 ['Cyclops',42.3,52.2,'Odysseus escapes the cave of the Cyclops Polyphemus, but earns the anger of Poseidon.'],
 ['Aeolus',32.2,52.1,'Aeolus gives Odysseus a bag containing the winds; his crew open it before they reach home.'],
 ['Laestrygonians',35.2,20.2,'The giant Laestrygonians attack the fleet, destroying all but Odysseus’s own ship.'],
 ['Circe',16.5,48.4,'The enchantress Circe transforms some of the crew into pigs before helping Odysseus on his journey.'],
 ['Land of the Dead',24,16.5,'Odysseus travels to the realm of the dead to seek counsel from the seer Tiresias.'],
 ['Sirens',42.9,33,'Odysseus hears the Sirens’ song while bound to the mast, as his crew keep their ears stopped.'],
 ['Scylla & Charybdis',45.1,45.4,'Odysseus must navigate between the monster Scylla and the deadly whirlpool Charybdis.'],
 ['Helios',51.2,58.4,'The crew slaughter the sacred cattle of the sun god Helios, despite warnings.'],
 ['Calypso',49.6,72.6,'The nymph Calypso keeps Odysseus on her island until the gods order his release.'],
 ['Phaeacia',59,38.9,'The Phaeacians receive Odysseus and finally carry him home to Ithaca.'],
 ['Ithaca',63.3,48.5,'Odysseus returns to his island home, where Penelope and Telemachus await him.']]}
};
