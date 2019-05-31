<script>
	export let value = 'feat';
	export let label = 'A new feature'
</script>
<style>
	.tag-bg {
		background-image: linear-gradient(45deg, #312a6c, #852d91);
		width: 100%;
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center
	}
</style>

<label>
	<input type=radio bind:group={value} value={value}>
	{label}
</label>
