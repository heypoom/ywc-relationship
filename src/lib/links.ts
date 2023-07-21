export type OnboardingIntent = 'check' | 'match' | 'reject'

export const onboardLink = (intent: OnboardingIntent) => `/onboarding?intent=${intent}`
