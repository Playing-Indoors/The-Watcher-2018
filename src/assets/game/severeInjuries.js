export default {
	blind: {
		type: 'head',
		limit: 2,
		name: 'Blind',
		value: [false, false]
	},
	'broken-arm': {
		type: 'arms',
		name: 'Broken Arm',
		limit: 2,
		value: [false, false]
	},
	'broken-hip': {
		type: 'waist',
		name: 'Broken Hip',
		disableDodge: true,
		limit: 1,
		value: [false]
	},
	'broken-leg': {
		limit: 2,
		type: 'legs',
		name: 'Broken Leg',
		value: [false, false]
	},
	'broken-rib': {
		type: 'chest',
		name: 'Broken Rib',
		limit: 0,
		value: [false, false, false, false, false]
	},
	contracture: {
		type: 'arms',
		name: 'Contracture',
		limit: 0,
		value: [false, false, false, false, false]
	},
	deaf: {
		type: 'head',
		name: 'Deaf',
		limit: 1,
		value: [false]
	},
	'destroyed-back': {
		limit: 1,
		type: 'chest',
		name: 'Destroyed Back',
		value: [false]
	},
	'destroyed-genitals': {
		type: 'waist',
		name: 'Destroyed Genitals',
		limit: 1,
		value: [false]
	},
	'dismembered-arm': {
		limit: 2,
		type: 'arms',
		name: 'Dismembered Arm',
		value: [false, false]
	},
	'dismembered-leg': {
		limit: 2,
		disableDash: true,
		type: 'legs',
		name: 'Dismembered Leg',
		value: [false, false]
	},
	'gaping-chest-wound': {
		type: 'chest',
		name: 'Gaping chest wound',
		limit: 0,
		value: [false, false, false, false, false]
	},
	hamstrung: {
		limit: 1,
		type: 'legs',
		name: 'Hamstrung',
		value: [false]
	},
	'intestinal-prolapse': {
		limit: 1,
		disableWaist: true,
		type: 'waist',
		name: 'Intestinal Prolapse',
		value: [false]
	},
	'intracranial-hemorrhage': {
		type: 'head',
		name: 'Intracranial Hemorrhage',
		limit: 1,
		effects: {
			disableSurvivalGain: true,
			disableSurvivalUse: true
		},
		value: [false]
	},
	'ruptured-muscle': {
		effects: {
			disableFightingArts: true
		},
		type: 'hands',
		name: 'Ruptured Muscle',
		limit: 1,
		value: [false]
	},
	'shattered-jaw': {
		type: 'head',
		name: 'Shattered Jaw',
		limit: 1,
		effect: {
			disableEncourage: true,
			// TODO: change this?
			disableConsume: true
		},
		value: [false]
	},
	'warped-pelvis': {
		type: 'waist',
		name: 'Warped Pelvis',
		limit: 0,
		value: [false, false, false, false, false]
	}
};
