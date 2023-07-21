<script>
	import OnboardColumn from '$lib/landing/OnboardColumn.svelte'
</script>

<div class="max-w-4xl mx-auto px-6 py-12">
	<main class="flex flex-col justify-center w-full min-h-screen gap-6 text-xl">
		<section class="space-y-3">
			<h2 class="font-bold text-4xl">
				YWC: ค่ายสร้าง<span class="text-pink-600">รัก</span> นักสร้าง<span class="text-pink-600"
					>เว็บ</span
				>
			</h2>

			<h3 class="text-2xl">คุณมองหาอะไรจากความสัมพันธ์ในค่าย?</h3>
		</section>

		<section class="grid sm:grid-cols-3 gap-y-8 gap-x-4">
			<OnboardColumn
				icon="solar:heart-angle-line-duotone"
				iconClass="text-pink-600"
				btnClass="bg-pink-600"
				intent="check"
				btnTitle="เช็คก่อน"
			>
				<strong>อยากจีบคนนี้</strong><br /> เค้าจะสนใจไหม?
			</OnboardColumn>

			<OnboardColumn
				icon="solar:card-search-line-duotone"
				iconClass="text-purple-600"
				btnClass="bg-purple-600"
				intent="match"
				btnTitle="แมทช์ดู"
			>
				<strong>อยากหาแฟน</strong><br />
				เหมาะกับคนไหน?
			</OnboardColumn>

			<OnboardColumn
				icon="solar:forbidden-circle-line-duotone"
				iconClass="text-orange-600"
				btnClass="bg-orange-600"
				intent="reject"
				btnTitle="ลงสถานะ"
			>
				<strong>อยากให้เลิกจีบ</strong><br />
				ไม่ได้สนใจ
			</OnboardColumn>
		</section>
	</main>
</div>
