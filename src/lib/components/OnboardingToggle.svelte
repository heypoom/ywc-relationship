<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton'

	export let disabled = false
	export let title: string
	export let value: boolean
	export let choices: [string, string] = ['ใช่', 'ไม่']

	$: [yes, no] = choices
</script>

<div class="flex items-center justify-between">
	<div>{title}</div>

	<div class="flex items-center gap-x-4">
		<div class="text-gray-700" class:text-green-600={value} class:opacity-60={disabled}>
			{value ? yes : no}
		</div>

		<SlideToggle
			name="in-relationship"
			active="bg-primary-500"
			size="lg"
			checked={value}
			bind:disabled
		/>
	</div>
</div>
