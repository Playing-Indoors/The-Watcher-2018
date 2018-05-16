export default {
	ageless: {
		description:
			'You may hunt if you are retired. When you gain Hunt XP, you may decide not to gain it.',
		name: 'Ageless'
	},
	analyze: {
		description:
			"At the start of the Survivors' turn, if you are adjacent to the monster, reveal the top AI card, then place back on top of the deck.",
		name: 'Analyze'
	},
	bitterFrenzy: {
		description:
			'Each showdown, the first time you suffer the frenzy brain trauma, gain d10 survival. You may spend survival while <b>Frenzied</b>.',
		name: 'Bitter Frenzy'
	},
	blueLifeExchange: {
		description:
			'In the <b>Aftermath</b>, gain 3 additional Hunt XP. You may not place <b>other</b> gear in your grid. Gain +1 permanent luck with each <b>Age</b> milestone. When you retire, you cease to exist.',
		name: 'Blue Life Exchange'
	},
	burntNerves: {
		name: 'Burnt Nerves',
		description: 'You are immune to <b>Bash</b>.'
	},
	caratosis: {
		description:
			'Before making an attack roll, you may declare "Caratosis X" in a loud, booming voice. If you do, that attack gains X automatic hits. X cannot be more than your total red affinities. When the attack ends, gain +X hunt Xp.<br/>When you trigger Age 2, gain the <b>Beast of Caratosis</b> secret fighting art.',
		name: 'Caratosis'
	},
	crystalSkin: {
		description:
			'You ignore <b>cursed</b> and cannot wear armor. When you <b>depart</b>, gain <font class="inline_shield">3</font> to all hit locations. Suffer -2 to the result of all severe injury rolls. When you participate in <b>Intimacy</b>, newborns gain <b>Crystal Skin</b> in addition to any other roll results.',
		name: 'Crystal Skin'
	},
	dormenatus: {
		description: `When you suffer damage, you may declare 'Dormenatus X' in a loud, booming voice. If you do, gain <font class="inline_shield">x</font> to each hit location. X cannot be more than your total green affinities. After the damage is resolved, gain +X hunt XP.<br/>When you trigger Age 2, gain the <b>Grace of Dormenatus</b> secret fighting art.`,
		name: 'Dormenatus'
	},
	dreamOfTheBeast: {
		description: '1 permanent red affinity.',
		name: 'Dream of the Beast'
	},
	dreamOfTheCrown: {
		description: '1 permanent green affinity.',
		name: 'Dream of the Crown'
	},
	dreamOfTheLantern: {
		description: '1 permanent blue affinity.',
		name: 'Dream of the Lantern'
	},
	explore: {
		description:
			'When you roll on an investigate table, add +2 to your roll result.',
		name: 'Explore'
	},
	fatedBattle: {
		description:
			'At the start of a showdown with the picked monster, gain +1 speed token.',
		name: 'Fated Battle'
	},
	greenLifeExchange: {
		description:
			'In the <b>Aftermath</b>, gain 3 additional Hunt XP. You may not place <b>other</b> gear in your grid. Gain +1 permanent evasion with each <b>Age</b> milestone. When you retire, you cease to exist.',
		name: 'Green Life Exchange'
	},
	homingInstinct: {
		name: 'Homing Instinct',
		description: 'Add +5 to your rolls on the Run Away story event.'
	},
	ironWill: {
		name: 'Iron Will',
		description:
			'You cannot be knocked down. Reduce all knockback you suffer to <b>knockback 1</b>.'
	},
	legendcaller: {
		description:
			'Once a lifetime, on a hunt board space after <b>Overwhelming Darkness</b>, in place of rolling a random hunt event, use "53" as your result.',
		name: 'Legendcaller'
	},
	leylineWalker: {
		description:
			'While there is no armor or accessory gear in your grid, gain +3 evasion.',
		name: 'Leyline Walker'
	},
	lucernae: {
		description: `Before making a wound attempt, you may declare "Lucernae X" in a loud, booming voice. If you do, that wound attempt gains X luck. X cannot be more than your total blue affinities. When the attack ends, you gain +X hunt XP.<br/> When you trigger Age 2, gain the <b>Lucernae's Lantern</b> secret Fighting Art.`,
		name: 'Lucernae'
	},
	madOracle: {
		description:
			'Once per showdown, as a monster draws an AI, name a card out loud. If the AI card drawn is the card you named, gain +1 evasion token.',
		name: 'Mad Oracle'
	},
	matchmaker: {
		description:
			'When you are a returning survivor, once per year you may spend 1 Endeavor to trigger Intimacy (story event).',
		name: 'Matchmaker',
		endeavors: ['matchmaker_trigger_intimacy']
	},
	metalMaw: {
		description:
			'Your Fist & Tooth gains <b>Sharp</b>. (Add 1d10 strength to each wound attempt using this gear. This d10 is not a wound roll, and cannot cause critical wounds.)',
		name: 'Metal Maw'
	},
	partner: {
		description:
			'When you both <b>Arrive</b>, gain survival up to the survival limit. Partners may only nominate each other for <b><font class="kdm_font">g</font> Intimacy</b>. When a partner dies, the remaining partner gains a random disorder and loses this ability.',
		name: 'Partner'
	},
	peerless: {
		description:
			'When you gain insanity, you may gain an equal amount of survival.',
		name: 'Peerless'
	},
	possessed: {
		description:
			'Cannot use weapon specialization, weapon mastery, or fighting arts.',
		name: 'Possessed'
	},
	prepared: {
		description:
			'When rolling to determine a straggler, add your hunt experience to your roll result.',
		name: 'Prepared'
	},
	redLifeExchange: {
		description:
			'In the <b>Aftermath</b>, gain 3 additional Hunt XP. You may not place <b>other</b> gear in your grid. Gain +1 permanent strength with each <b>Age</b> milestone. When you retire, you cease to exist.',
		name: 'Red Life Exchange'
	},
	sourDeath: {
		description:
			"When you are knocked down, you may encourage yourself (even if you're deaf). If you do, gain +1 strength token.",
		name: 'Sour Death'
	},
	stalwart: {
		description:
			'Ignore being knocked down by brain trauma and intimidation actions.',
		name: 'Stalwart'
	},
	storyOfTheForsaker: {
		description:
			'You cannot be knocked down during a showdown with a nemesis monster.',
		name: 'Story of the Forsaker'
	},
	storyOfTheGoblin: {
		description:
			'Once per showdown you may...roll 1d10. On a 3+, gain the priority target token and the monster gains +1 damage token.',
		name: 'Story of the Goblin'
	},
	storyOfTheYoungHero: {
		description:
			'At the start of your act, you may...[g]ain 2 bleeding tokens and +1 survival.',
		name: 'Story of the Young Hero'
	},
	sweetBattle: {
		description:
			'Once per round, you may <b>surge</b> without spending survival. If you do, the Activation must be used to activate the weapon.',
		name: 'Sweet Battle'
	},
	thundercaller: {
		description:
			'Once a lifetime, on a hunt board space after <b>Overwhelming Darkness</b>, in place of rolling a random hunt event, use "100" as your result.',
		name: 'Thundercaller'
	},
	tinker: {
		description:
			'When you are a returning survivor, gain +1 Endeavor to use this settlement phase.',
		name: 'Tinker'
	},

	nightmareBlood: {
		description:
			'Whenever you gain a bleeding token, add <font class="inline_shield">1</font> to all hit locations.',
		expansion: 'lonelyTree',
		name: 'Nightmare Blood'
	},
	nightmareMembrane: {
		description:
			'You may spend <font class="kdm_font">a c</font> to exchange any 1 of your tokens for a +1 strength token.',
		expansion: 'lonelyTree',
		name: 'Nightmare Membrane'
	},
	nightmareSpurs: {
		description:
			'Once per showdown, you may spend all your survival (at least 1) to lose all your +1 strength tokens and gain that many +1 luck tokens.',
		expansion: 'lonelyTree',
		name: 'Nightmare Spurs'
	},
	superHair: {
		description:
			'You may spend <font class="kdm_font">a</font> to freely exchange any tokens with adjacent survivors who have <b>Super Hair</b>.',
		expansion: 'lonelyTree',
		name: 'Super Hair'
	},

	rivalsScar: {
		name: "Rival's Scar",
		expansion: 'spidicules',
		description: 'Gain +1 permanent strength and -1 permanent evasion.'
	},
	// check to see what this is considered
	sleepingVirusFlower: {
		name: 'Sleeping Virus Flower',
		expansion: 'flowerKnight',
		description:
			'When you die, a flower blooms from your corpse. Add <font class="kdm_font">g</font> <b>A Warm Virus</b> to the timeline next year. You are the guest.'
	},
	reflection: {
		description:
			'<ul><li>Your complete affinities and incomplete affinity halves count as all colors.</li><li>You may dodge at any time and as many times as you like each round.</li><li>When you attack from a blind spot, add +1d10 to all wound attempts for that attack.</li></ul>',
		expansion: 'sunstalker',
		name: 'Reflection'
	},
	refraction: {
		description:
			'<ul><li>Your complete affinities and incomplete affinity halves count as all colors.</li><li>During the Showdown, after you perform a survival action, gain +1 survival.</li></ul>',
		expansion: 'sunstalker',
		name: 'Refraction'
	},
	forgettable: {
		name: 'Forgettable',
		expansion: 'slenderman',
		description:
			'Gain +2 permanent evasion. Forgettable survivors cannot be encouraged.'
	},
	acidPalms: {
		description:
			'Add 1d10 strength to your wound attempts when attacking with Fist & Tooth.',
		name: 'Acid Palms'
	},
	heartOfTheSword: {
		description:
			'If you gain weapon proficiency during the Aftermath, gain +3 additional ranks. You cough up a hunk of your own solidified blood and gain +1 <b>Iron</b> strange resource.',
		expansion: 'dragonKing',
		name: 'Heart of the Sword'
	},
	iridescentHide: {
		description:
			'Gain +<font class="inline_shield">1</font> to all hit locations for each different-colored affinity in your gear grid.',
		expansion: 'dragonKing',
		name: 'Iridescent Hide'
	},
	limbMaker: {
		description:
			'Once per settlement phase, spend 2 <font class="kdm_font">d</font> to carve a prosthetic limb. Remove a survivor\'s <b>dismembered</b> injury and add 1 bone to the settlement\'s storage.',
		expansion: 'dragonKing',
		name: 'Limb-maker'
	},
	oraclesEye: {
		description:
			'At the start of the showdown, look through the AI deck then shuffle.',
		expansion: 'dragonKing',
		name: "Oracle's Eye"
	},
	presage: {
		description:
			'Each time you attack, before drawing hit locations, loudly say a name. You lightly bite the eye in your cheek to see what it sees. If you draw any hit locations with that name, gain +3 insanity and +10 strength when attempting to wound them.',
		expansion: 'dragonKing',
		name: 'Presage'
	},
	pristine: {
		description:
			'When you suffer a <b>dismembered</b> severe injury, ignore it and gain 1 bleeding token instead.',
		expansion: 'dragonKing',
		name: 'Pristine'
	},
	psychovore: {
		description:
			"Once per showdown, you may eat an adjacent survivor's disorder. If you do, remove the disorder. They gain 1 bleeding token and you gain +1 permanent strength. At the end of the showdown, if you haven't eaten a disorder, you die.",
		expansion: 'dragonKing',
		name: 'Psychovore'
	},
	rootedToAll: {
		description:
			'If you are standing at the start of your act, reveal the top 2 cards of the AI deck and put them back in any order.',
		expansion: 'dragonKing',
		name: 'Rooted to All'
	},
	twelveFingers: {
		description:
			'You cannot carry two-handed gear. On a Perfect hit, your right hand pulses. Gain +5 insanity and +1 luck for the attack. However, for each natural 1 rolled when attempting to hit, your left hand shakes. Suffer 5 brain damage and -1 luck for the attack.',
		expansion: 'dragonKing',
		name: 'Twelve Fingers'
	},
	wayOfTheRust: {
		description: 'Your bleeding tokens are also +1 evasion tokens.',
		expansion: 'dragonKing',
		name: 'Way of the Rust'
	}
};
