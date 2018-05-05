export default {
	blind: {
		limit: 2,
		name: 'Blind'
	},
	broken_arm: {
		name: 'Broken Arm',
		limit: 2
	},
	broken_hip: {
		name: 'Broken Hip',
		disableDodge: true
	},
	broken_leg: {
		limit: 2,
		name: 'Broken Leg'
	},
	broken_rib: {
		name: 'Broken Rib',
		limit: 0
	},
	contracture: {
		name: 'Contracture',
		limit: 0
	},
	deaf: {
		name: 'Deaf',
		limit: 1
	},
	destroyed_back: {
		limit: 1,
		name: 'Destroyed Back'
	},
	destroyed_genitals: {
		name: 'Destroyed Genitals',
		limit: 1
	},
	dismembered_arm: {
		limit: 2,
		name: 'Dismembered Arm'
	},
	dismembered_leg: {
		limit: 2,
		disableDash: true,
		name: 'Dismembered Leg'
	},
	gaping_chest_wound: {
		name: 'Gaping chest wound',
		limit: 0
	},
	hamstrung: {
		limit: 1,
		name: 'Hamstrung'
	},
	intestinal_prolapse: {
		limit: 1,
		disableWaist: true,
		name: 'Intestinal Prolapse'
	},
	intracranial_hemorrhage: {
		name: 'Intracranial Hemorrhage',
		limit: 1,
		effects: {
			disableSurvivalGain: true,
			disableSurvivalUse: true
		}
	},
	ruptured_muscle: {
		effects: {
			disableFightingArts: true
		},
		name: 'Ruptured Muscle',
		limit: 1
	},
	shattered_jaw: {
		name: 'Shattered Jaw',
		limit: 1,
		effect: {
			disableEncourage: true,
			// TODO: change this?
			disableConsume: true
		}
	},
	warped_pelvis: {
		name: 'Warped Pelvis',
		limit: 0
	}
};
