<script>
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from '@js/custom-transition.js';
	import { inner, outer } from '@js/shape.js';
	import IntersectionObserver from './IntersectionObserver.svelte'; 
</script>

<IntersectionObserver let:visible>
	{#if visible}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
			<g out:fade="{{duration: 200}}" opacity=0.2>
				<path
					in:expand="{{duration: 400, delay: 1000, easing: quintOut}}"
					style="stroke: #ff3e00; fill: #ff3e00; stroke-width: 50;"
					d={outer}
				/>
				<path
					in:draw="{{duration: 1000}}"
					style="stroke:#ff3e00; stroke-width: 1.5"
					d={inner}
				/>
			</g>
		</svg>

		<div class="centered" out:fly="{{y: -20, duration: 800}}">
			{#each 'SKLBZ' as char, i}
				<span
					in:fade="{{delay: 1000 + i * 150, duration: 800}}"
				>{char}</span>
			{/each}
		</div>
	{/if}
</IntersectionObserver>

<style>
	@import url("https://fonts.googleapis.com/css?family=Overpass:100,400&display=swap");
	svg {
		width: 100vw;
		height: 100vh;
		z-index: 10;
	}

	path {
		fill: white;
		opacity: 1;
		z-index: 10;
	}

	label {
		position: absolute;
		top: 1em;
		right: 1em;
		z-index: 10;
	}

	.centered {
		font-size: 20vw;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-family: 'Overpass';
		letter-spacing: 0.12em;
		color: #676778;
		z-index: 10;
		font-weight: 400;
	}

	.centered span {
		z-index: 10;
		will-change: filter;
	}
</style>