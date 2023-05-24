<script lang="ts">
  let logoText = "SKLBZ";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
</script>

<nav class="navbar">
  <ul class="navbar-nav">
    <li class="logo">
      <a href="/" class="nav-link">
        <span class="link-text logo-text"
				on:mouseover={() => {
          const finalText = logoText;
          let iteration = 0;
          const interval = setInterval(() => {
            logoText = logoText
              .split("")
              .map((letter, index) => {
								letter = finalText[index];

								if (index < iteration) return letter;

								return letters[Math.floor(Math.random() * 26)];
              })
              .join("");

							if (iteration > finalText.length) clearInterval(interval);

            iteration += 1 / 5;
          }, 20);
        }}
        on:focus={() => {}} >{logoText}</span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="angle-double-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
        >
          <g class="fa-group">
            <path
              fill="currentColor"
              d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
              class="fa-secondary"
            />
            <path
              fill="currentColor"
              d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
              class="fa-primary"
            />
          </g>
        </svg>
      </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link">
        <span class="link-text">HELLO</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link">
        <span class="link-text" />
      </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link">
        <span class="link-text" />
      </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link">
        <span class="link-text" />
      </a>
    </li>
  </ul>
</nav>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Mono&display=swap");
  * {
    text-decoration: none;
    list-style-type: none;
    list-style: none;
    padding: 0;
    border: 0;
    outline: 0;
    margin: 0;
    color: currentColor;
    z-index: 100;
  }
  :root {
    font-size: 16px;
    font-family: "Space Mono", monospace;
    --text-primary: rgba(235, 235, 235, 0.64);
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    --transition-speed: 600ms;
  }

  .navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width var(--transition-speed) ease;
    overflow: hidden;
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item:last-child {
    margin-top: auto;
  }

  .nav-link {
    width: calc(100% - 1px);
    height: 100%;
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
    font-weight: bold;
    position: relative;
    left: 0;
  }

  .nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }
  .nav-link:after{
    background: linear-gradient(transparent, mediumslateblue, transparent);
    height: 4rem;
    width: 1rem;
    position: absolute;
    right: -1px;
  }
  
  .link-text {
    display: none;
    margin-left: 1rem;
  }

  .nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }

  .fa-primary {
    color: #ff7eee;
  }

  .fa-secondary {
    color: #df49a6;
  }

  .fa-primary,
  .fa-secondary {
    transition: var(--transition-speed);
  }

  .logo {
    font-family: "Press Start 2P", cursive;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    text-align: center;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    font-size: 1.15rem;
    letter-spacing: 0.3ch;
    width: 100%;
  }

  .logo svg {
    transform: rotate(0deg);
    transition: var(--transition-speed);
  }

  .logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
  }

  .navbar:hover .logo svg {
    transform: rotate(-180deg);
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }

    .logo {
      display: none;
    }

    .navbar-nav {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }

    .navbar:hover {
      width: 16rem;
    }

    .navbar:hover .link-text {
      display: inline;
    }

    .navbar:hover .logo svg {
      margin-left: 11rem;
    }

    .navbar:hover .logo-text {
      left: 0px;
    }
  }
</style>
