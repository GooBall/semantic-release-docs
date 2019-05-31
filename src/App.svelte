<script>
	import { fade } from 'svelte/transition';
	let type = 'feat';
	let scope = '';
	let commit = 'Commit message';
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
	.tag {
		color: #fff;
		font-family: monospace;
		font-size: 3rem;
	}
	.content-bg {
		background-color: #00171F;
		color: #fff;
		padding: 20px;
	}
	:global(body) {
		padding: 0;
	}
</style>

<div class="tag-bg">
	<h1 class="tag">
		{#if type}<span transition:fade>{type}</span>{/if}{#if scope !== ''}<span transition:fade>({scope})</span>{/if}: {commit}
	</h1>
</div>

<div class="content-bg">

<h2>What is in this commit?</h2>

<label>
	<input type=radio bind:group={type} value={'feat'}>
	A new feature
</label>

<label>
	<input type=radio bind:group={type} value={'fix'}>
	A fix
</label>

<label>
	<input type=radio bind:group={type} value={'perf'}>
	Performance improvements
</label>

<label>
	<input type=radio bind:group={type} value={'docs'}>
	Documentation changes
</label>

<label>
	<input type=radio bind:group={type} value={'style'}>
	Styling changes
</label>

<label>
	<input type=radio bind:group={type} value={'refactor'}>
	Code Refactor
</label>

<label>
	<input type=radio bind:group={type} value={'test'}>
	Test additions or changes
</label>

<label>
	<input type=radio bind:group={type} value={'build'}>
	Build changes
</label>

<label>
	<input type=radio bind:group={type} value={'ci'}>
	Continuous integration changes
</label>

<label>
	<input type=radio bind:group={type} value={'chore'}>
	Dev things
</label>

<h2>What is the scope?</h2>
<p>
	Leave blank if you don't need this
</p>
<input bind:value={scope} placeholder="aka 'User Admin'">

<h2>What is the change?</h2>
<p>
	Keep is short and sweet!
</p>
<input bind:value={commit} placeholder="Add state fallback is user does not exist">
</div>
