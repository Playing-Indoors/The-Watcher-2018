export default {
	masteryClub: {
		name: 'Mastery - Club',
		description:
			"When a Club Master attacks with a club, if a successful wound attempt total is greater than or equal to twice the monster's toughness, inflict an additional wound.",
		weapon_proficiency: 'club',
		weapon_name: 'club'
	},
	masteryScythe: {
		name: 'Mastery - Scythe',
		description:
			'When you critically wound with a scythe, roll 1d10. On a 6+, shuffle the hit location deck (do not shuffle unresolved hit locations).<br/>Limit, once per round.',
		expansion: 'dragon_king',
		weapon_proficiency: 'scythe',
		weapon_name: 'scythe'
	},
	masteryKatana: {
		name: 'Mastery - Katana',
		description:
			"When a survivor reaches Katana Mastery, they leave the settlement forever, heeding the call of the storm to hone their art.<br/>Before the master leaves, you may nominate a survivor. Set that survivor's weapon type to Katana and their weapon proficiency level to 1.",
		expansion: 'sunstalker',
		do_not_add_to_innovations: true,
		weapon_proficiency: 'katana',
		weapon_name: 'katana'
	},
	masteryKatar: {
		name: 'Mastery - Katar',
		description:
			'If you are a Katar Master, gain a <i>+1 evasion</i> token on a <b>perfect hit</b> with a katar. When you are knocked down, remove all +1 evasion tokens.',
		weapon_proficiency: 'katar',
		weapon_name: 'katar'
	},
	masteryBow: {
		name: 'Mastery - Bow',
		description:
			'If you are a Bow Master, all bows in your gear grid gain <b>Deadly 2</b>. In addition, ignore <b>cumbersome</b> on all Bows.',
		weapon_proficiency: 'bow',
		weapon_name: 'bow'
	},
	masteryTwilightSword: {
		name: 'Mastery - Twilight Sword',
		description:
			"Any Survivor who attains Twilight Sword Mastery leaves the settlement forever in pursuit of a higher purpose. Remove them from the settlement's population. You may place the master's Twilight Sword in another survivor's gear grid or archive it.",
		excluded_campaigns: ['people_of_the_stars', 'people_of_the_sun'],
		weapon_proficiency: 'twilight_sword',
		weapon_name: 'Twilight Sword'
	},
	masteryAxe: {
		name: 'Mastery - Axe',
		description:
			'When an Axe Master wounds a monster with an axe at a location with a persistent injury, that wound becomes a critical wound.',
		weapon_proficiency: 'axe',
		weapon_name: 'axe'
	},
	masterySpear: {
		name: 'Mastery - Spear',
		description:
			'Whenever a Spear Master hits a monster with a Separ, they may spend 1 survival to gain the Priority Target token. If they made the hit from directly behind another survivor, that survivor gains the Priority Target token instead.',
		weapon_proficiency: 'spear',
		weapon_name: 'spear'
	},
	masteryFistAndTooth: {
		name: 'Mastery - Fist & Tooth',
		description:
			'While a survivor is a Fist & Tooth Master, they gain <i>+2 permanent accuracy</i> and <i>+2 permanent strength</i> (they receive this bonus even when not attacking with Fist and Tooth).',
		weapon_proficiency: 'fist_and_tooth',
		weapon_name: 'fist & tooth'
	},
	masteryGrandWeapon: {
		name: 'Mastery - Grand Weapon',
		description:
			'When a Grand Weapon Master perfectly hits with a grand weapon, cancel all reactions for that attack.',
		weapon_proficiency: 'grand_weapon',
		weapon_name: 'grand weapon'
	},
	masteryWhip: {
		name: 'Mastery - Whip',
		description:
			'Whip Masters gain <i>+5 strength</i> when attacking with a Whip.',
		weapon_proficiency: 'whip',
		weapon_name: 'whip'
	},
	masteryShield: {
		name: 'Mastery - Shield',
		description:
			'When a Shield Master is adjacent to a survivor that is targeted by a monster, they may swap spaces on the baord with the survivor and become the target instead. The master must have a shield to perform this.',
		weapon_proficiency: 'shield',
		weapon_name: 'shield'
	},
	masteryDagger: {
		name: 'Mastery - Dagger',
		description:
			'After a wounded hit location is discarded, a Dagger Master who is adjacent to the attacker and the wounded monster may spend 1 survival to re-draw the wounded hit location and attempt to wound with a dagger. Treat monster reactions on the re-drawn hit location card normally.',
		weapon_proficiency: 'dagger',
		weapon_name: 'dagger'
	},
	masterySword: {
		name: 'Mastery - Sword',
		description:
			'A Sword master gains +1 accuracy, +1 strength, and +1 speed when attacking with a Sword.',
		weapon_proficiency: 'sword',
		weapon_name: 'sword'
	},
	clubSpecialization: {
		name: 'Specialization - Club',
		description:
			'When attacking with a club, on a <b>perfect hit</b>, double your wound attempt total on the first selected hit location.<br/>Limit, once per attack.'
	},
	twilightSwordSpecialization: {
		name: 'Specialization - Twilight Sword',
		description:
			"This sentient sword improves as it's used. Gain the effect as proficiency rank increases. Rank 2: Ignore <b>Cumbersome</b> on Twilight Sword. Rank 4: When attacking with the Twilight Sword, ignore <b>slow</b> and gain +2 speed. Rank 6: Twilight Sword gains <b>Deadly</b>.",
		excluded_campaigns: ['people_of_the_stars', 'people_of_the_sun']
	},
	axeSpecialization: {
		name: 'Specialization - Axe',
		description:
			'When attacking with an axe, if your wound attempt fails, you may ignore it and attempt to wound the selected hit location again. Limit, once per attack.'
	},
	spearSpecialization: {
		name: 'Specialization - Spear',
		description:
			'When attacking with a spear, if you draw a <b>trap</b>, roll 1d10. On a 7+, cancel the <b>trap</b>. Discard it, then reshuffle the hit location discard into the hit location deck and draw a new card. Limit, once per round.'
	},
	fistAndToothSpecialization: {
		name: 'Specialization - Fist & Tooth',
		description:
			"You may stand (if knocked down) at the start of the monster's turn or the survivor's turn. Limit once per round."
	},
	grandWeaponSpecialization: {
		name: 'Specialization - Grand Weapon',
		description:
			'When attacking with a grand weapon, gain <i>+1 accuracy</i>.<br/>When attacking with a Grand Weapon during your act, if you critically wound, the monster is knocked down.'
	},
	whipSpecialization: {
		name: 'Specialization - Whip',
		description:
			'When you wound with a whip, instead of moving the top card of the AI deck into the wound stack, you may move the top card of the AI discard pile. Limit once per attack.'
	},
	shieldSpecialization: {
		name: 'Specialization - Shield',
		description:
			'While a shield is in your gear grid, you are no longer knocked down after <b>collision</b> with a monster. While a shield is in your gear grid, add <font class="inline_shield">1</font> to all hit locations.'
	},
	swordSpecialization: {
		name: 'Specialization - Sword',
		description:
			'When attacking with a sword, after drawing hit locations, make a wound attempt and then select a hit location to resolve with that result. Limit, once per attack.'
	},
	daggerSpecialization: {
		name: 'Specialization - Dagger',
		description:
			'When attacking with a Dagger, if a wound attempt fails, after performing any reactions, you may discard another drawn hit location card to attempt to wound that hit location again. Limit, once per attack.'
	},
	katanaSpecialization: {
		name: 'Specialization - Katana',
		description:
			'You may not select this as your weapon type.<br/>If you are <b>blind</b> and have 4+ levels of Katana proficiency, gain the following:<br/>On your first <b>Perfect Hit</b> each attack with a Katana, do not draw a hit location. The monster suffers 1 wound.',
		expansion: 'sunstalker'
	},
	scytheSpecialization: {
		name: 'Specialization - Scythe',
		description:
			'When you critically wound with a scythe, roll 1d10. On a 6+, shuffle the hit location deck (do not shuffle unresolved hit locations).<br/>Limit, once per round.',
		expansion: 'dragon_king'
	},
	bowSpecialization: {
		name: 'Specialization - Bow',
		description:
			'When attacking with a bow, you may reroll any misses once. Limit, once per attack.'
	},
	katarSpecialization: {
		name: 'Specialization - Katar',
		description:
			'When attacking with a Katar, cancel reactions on the first selected hit location.'
	}
};
