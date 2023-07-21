<script lang="ts">
	import { onboarding } from '$lib/stores/onboarding'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'

	import type { OnboardingIntent } from '$lib/links'
	import OnboardingToggle from '$lib/components/OnboardingToggle.svelte'

	onMount(() => {
		if (browser) {
			const intent = $page.url.searchParams.get('intent') as OnboardingIntent

			if (intent === 'check' || intent === 'match') {
				$onboarding.inRelationship = false
				$onboarding.looking = true
			}
		}
	})
</script>

<div class="max-w-xl mx-auto px-6">
	<main class="flex flex-col justify-center w-full min-h-screen gap-6 text-xl">
		<section class="space-y-1">
			<h2 class="font-bold text-3xl">สถานะและความต้องการ</h2>
		</section>

		<div class="flex flex-col gap-4">
			<OnboardingToggle
				title="กำลังมองหาแฟน?"
				value={$onboarding.looking}
				on:change={(v) => ($onboarding.looking = v.detail)}
			/>
			<OnboardingToggle
				title="อยู่ในความสัมพันธ์?"
				value={$onboarding.inRelationship}
				on:change={(v) => ($onboarding.inRelationship = v.detail)}
			/>
		</div>
	</main>
</div>
