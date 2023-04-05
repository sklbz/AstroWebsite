<script>
	import { onMount } from 'svelte';
  let mouseX = 0;
  let mouseY = 0;
  let blob;

  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
		mouse = true;
  }

  function animateBlob() {
    if (blob) {
      blob.animate(
        {
          left: `${mouseX}px`,
          top: `${mouseY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    }
    requestAnimationFrame(animateBlob);
  }

  onMount(() => {
    requestAnimationFrame(animateBlob);
  });
	let mouse = false;
</script>

<svelte:body on:pointermove={handleMouseMove}/>
<div id="blur"></div>
{#if mouse}
<div id="blob" bind:this={blob}></div>
{/if}

<style>
  @keyframes rotate {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.25;
    }

    to {
      rotate: 360deg;
    }
  }

  #blob {
    height: 25vmax;
    aspect-ratio: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    background: linear-gradient(to right, aquamarine, mediumpurple);
    animation: rotate 20s infinite;
    z-index: -100;
  }

  #blur {
    height: 100%;
		width:100%;
    position:fixed;
		top:0;
		left:0;
		bottom: 0;
		right: 0;
    backdrop-filter: blur(20vmax);
		z-index: -50;
  }
</style>
