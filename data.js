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
 ['Aeolus',32.2,52.1,'Aeolus gives Odysseus a bag containing the contrary winds. His crew opens it, unleashing a storm that prevents them from reaching home.'],
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

// French translations follow the same order as the original English map entries.
const FRENCH_MAPS = {
 iliad:{title:'L’Iliade',subtitle:'Champ de bataille',kicker:'01 / LA GUERRE',places:[
 ['Mont Ida','Une montagne dominant la plaine troyenne, associée dans la mythologie grecque aux dieux et au jugement de Pâris.'],
 ['Camp grec','Sous le commandement d’Agamemnon, les rois grecs s’unissent pour reprendre Hélène. Une flotte de 1 186 navires met le cap sur les rivages de Troie, où les armées grecques s’engagent dans une guerre de dix ans.'],
 ['Plaine de bataille','La plaine qui sépare les navires grecs de Troie est le théâtre de nombreux affrontements dans l’Iliade.'],
 ['Troie','Gouvernée par le roi Priam et défendue par son fils Hector, Troie abrite Pâris et Hélène derrière ses puissantes murailles. Des alliés venus de contrées lointaines, dont les Amazones et les Éthiopiens, finissent par rejoindre sa défense.'],
 ['Scamandre','Dans l’Iliade, il est représenté par une divinité qui tente de noyer Achille.']]},
 troy:{title:'La Chute de Troie',subtitle:'Plan de la cité',kicker:'02 / LA CITÉ',places:[
 ['Scamandre','Le fleuve de la plaine troyenne apparaît dans l’Iliade à la fois comme un cours d’eau et comme une divinité.'],
 ['Citadelle','Les guerriers grecs prennent d’assaut le palais royal. Néoptolème, fils d’Achille, tue le roi Priam devant l’autel de Zeus. La famille royale est anéantie et les dernières défenses de Troie s’effondrent.'],
 ['Quartier aristocratique','Tandis que Troie brûle, Énée se bat désespérément pour défendre la cité. Contraint de fuir, il s’échappe avec son père Anchise et son fils Ascagne, emportant avec lui les espoirs d’une nouvelle Troie.'],
 ['Temple d’Athéna','Ulysse et Diomède dérobent le Palladium, la statue sacrée d’Athéna qui protégeait Troie. Sans elle, la cité devient vulnérable.'],
 ['Quartier résidentiel','Les Grecs envahissent les rues, incendient les maisons et massacrent les habitants. À l’aube, la cité autrefois glorieuse n’est plus que ruines.'],
 ['Cheval de Troie','Ulysse imagine le cheval de bois, qui permet aux guerriers grecs d’entrer dans Troie sans être décelés. Après dix ans de combats infructueux, son stratagème permet de faire tomber la cité.'],
 ['Portes Scées','Les portes Scées sont un lieu clé de l’Iliade : c’est là que les anciens de Troie observent les combats depuis les remparts.']]},
 odyssey:{title:'L’Odyssée',subtitle:'Le voyage',kicker:'03 / LE VOYAGE',places:[
 ['Troie','Après la chute de Troie, Ulysse et ses compagnons prennent le chemin du retour.'],
 ['Cicones','Ulysse et ses hommes attaquent Ismaros, la cité des Cicones, et subissent de nombreuses pertes dans le combat qui s’ensuit.'],
 ['Lotophages','Le lotus fait oublier à ceux qui en mangent leur désir de rentrer chez eux.'],
 ['Cyclope','Ulysse s’échappe de la grotte du cyclope Polyphème, mais s’attire la colère de Poséidon.'],
 ['Éole','Éole remet à Ulysse une outre contenant les vents contraires ; son équipage l’ouvre et déclenche une tempête qui les empêche de rentrer chez eux.'],
 ['Lestrygons','Les géants Lestrygons attaquent la flotte et détruisent tous les navires, à l’exception de celui d’Ulysse.'],
 ['Circé','Circé la magicienne transforme une partie de l’équipage en porcs avant d’aider Ulysse à poursuivre son voyage.'],
 ['Royaume des morts','Ulysse se rend au royaume des morts pour demander conseil au devin Tirésias.'],
 ['Sirènes','Ulysse écoute le chant des Sirènes, attaché au mât, tandis que ses compagnons gardent les oreilles bouchées.'],
 ['Scylla et Charybde','Ulysse doit naviguer entre le monstre Scylla et le tourbillon mortel de Charybde.'],
 ['Hélios','Malgré les avertissements, l’équipage abat les troupeaux sacrés d’Hélios, le dieu du soleil.'],
 ['Calypso','La nymphe Calypso retient Ulysse sur son île jusqu’à ce que les dieux ordonnent sa libération.'],
 ['Phéacie','Les Phéaciens accueillent Ulysse et le reconduisent enfin chez lui, à Ithaque.'],
 ['Ithaque','Ulysse revient sur son île natale, où Pénélope et Télémaque l’attendent.']]}
};
