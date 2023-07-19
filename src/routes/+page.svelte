<script>
	import Icon from '@iconify/svelte'
</script>

<div class="max-w-4xl mx-auto px-6">
	<main class="flex flex-col justify-center w-full min-h-screen gap-6 text-xl">
		<section class="space-y-1">
			<h2 class="font-bold text-3xl">ค่ายสร้างรัก นักสร้างเว็บ</h2>

			<h3>มองหาอะไรจากความสัมพันธ์ในค่าย?</h3>
		</section>

		<section class="grid grid-cols-3">
			<div class="space-y-4">
				<Icon icon="solar:heart-angle-line-duotone" class="text-6xl text-pink-600" />

				<p>
					<strong>อยากจีบคนนี้</strong><br />
					เค้าจะสนใจไหม?
				</p>

				<button class="btn variant-filled bg-pink-600">แอบบอก</button>
			</div>

			<div class="space-y-4">
				<Icon icon="solar:card-search-line-duotone" class="text-6xl text-purple-600" />

				<p>
					<strong>อยากหาแฟน</strong><br />
					เหมาะกับคนไหน?
				</p>

				<button class="btn variant-filled bg-purple-600">แมทช์ดู</button>
			</div>

			<div class="space-y-4">
				<Icon icon="solar:forbidden-circle-line-duotone" class="text-6xl text-orange-600" />

				<p>
					<strong>อยากให้เลิกจีบ</strong><br />
					ไม่ได้สนใจ!
				</p>

				<button class="btn variant-filled bg-orange-600">ลงสถานะ</button>
			</div>
		</section>
	</main>
</div>
