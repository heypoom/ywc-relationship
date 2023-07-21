import { writable } from 'svelte/store'

import type { Relationship } from '$lib/types/relationship'

export const onboarding = writable<Relationship>({
	inRelationship: false,
	looking: false,
	gender: 'male',
	type: 'serious',
	preferences: {
		gender: 'female'
	}
})
