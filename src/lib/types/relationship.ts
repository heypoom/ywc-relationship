import type { Gender } from './gender'

export interface Relationship {
	/** Is this person in a relationship? */
	inRelationship: boolean

	/** Is this person looking for a relationship? */
	looking: boolean

	/** What is this person's gender? */
	gender: Gender

	/** What is the kind of the relationship we're aiming for? */
	type: RelationshipType

	preferences: {
		/** What gender is this person looking to? */
		gender: Gender
	}
}

type RelationshipType = 'serious' | 'casual' | 'fwb'
