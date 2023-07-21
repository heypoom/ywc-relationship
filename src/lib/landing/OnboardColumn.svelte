<script lang="ts">
	import { onboardLink, type OnboardingIntent } from '$lib/links'
	import Icon from '@iconify/svelte'

	export let icon: string
	export let color: string
	export let intent: OnboardingIntent
	export let btnTitle: string
</script>

<div class="space-y-4 flex flex-col items-center text-center sm:text-left sm:items-start px-5 py-5">
	<Icon {icon} class="text-6xl text-{color} min-h-[50px]" />

	<p>
		<slot />
	</p>

	<div>
		<a
			href={onboardLink(intent)}
			class="btn text-white bg-{color}"
			data-sveltekit-preload-data="hover"
		>
			{btnTitle}
		</a>
	</div>
</div>
