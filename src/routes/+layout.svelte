<script>
  import "../app.css";

  const ARWEAVE_GATEWAY_URL = import.meta.env.VITE_ARWEAVE_GATEWAY_URL;

  let isMenuOpen = false;
  const toggleMenu = () => (isMenuOpen = !isMenuOpen);
</script>

<div class="container">
  <header>
    <a href="/">
      <img
        src="{ARWEAVE_GATEWAY_URL}/_YZkieSBM8gzkiY-vu3zXE5-RmIuku4CJwNJqCjwjZM"
        alt="vinch.be logo"
      />
    </a>

    <button class="hamburger" on:click={toggleMenu} aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="menu-container" class:open={isMenuOpen}>
      <nav>
        <a href="/blog">Blog</a>
        <a href="/books">Livres</a>
        <a href="/now">Now</a>
      </nav>
      <div class="social-links">
        <a href="https://x.com/vinchbat" target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            /></svg
          >
        </a>
        <a href="https://instagram.com/vinchbat" target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            /></svg
          >
        </a>
        <a href="https://youtube.com/@vinchbat" target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            /></svg
          >
        </a>
      </div>
    </div>
  </header>
  <main>
    <slot />
  </main>
</div>

<style>
  .container {
    display: flex;
    height: 100%;
  }
  header {
    padding-top: 3.125rem;
    width: 12.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
  }
  header img {
    display: block;
    width: 6.25rem;
    height: 6.25rem;
    float: right;
    margin-bottom: 2rem;
  }
  main {
    flex: 1;
    height: 100%;
    overflow: auto;
    border-left: 1px solid #000;
    padding: 5rem;
    margin-left: 12.5rem;
  }

  nav {
    text-align: right;
  }

  nav a {
    display: block;
    margin-bottom: 1rem;
    text-decoration: none;
    color: inherit;
    padding-right: 1.5rem;
    transition: opacity 0.2s;
  }

  nav a:hover {
    opacity: 0.7;
  }

  @media (max-width: 800px) {
    .container {
      flex-direction: column;
    }
    header {
      position: fixed;
      width: 100%;
      padding: 0;
      top: 0;
      background: #fff;
      border-bottom: 1px solid #000;
      height: auto;
      display: block;
    }
    header img {
      float: none;
      margin-bottom: 0;
    }
    main {
      margin-left: 0;
      padding: 5rem 3rem;
      border-left: 0;
      margin-top: 6.25rem;
    }

    nav {
      text-align: center;
    }

    nav a {
      display: inline-block;
      margin: 0 1rem;
    }
  }

  @media (max-width: 600px) {
    main {
      padding: 5rem 2rem;
    }
  }

  .social-links {
    text-align: right;
    margin-top: auto;
    padding-bottom: 2rem;
    padding-right: 1.5rem;
  }

  .social-links a {
    display: inline-block;
    margin-left: 1rem;
    color: inherit;
    transition: opacity 0.2s;
  }

  .social-links a:hover {
    opacity: 0.7;
  }

  .social-links svg {
    display: block;
  }

  @media (max-width: 800px) {
    .social-links {
      text-align: center;
      margin-top: 1rem;
      padding-bottom: 1rem;
    }

    .social-links a {
      margin: 0 0.5rem;
    }
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 1rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background: #000;
    margin: 5px 0;
    transition: 0.3s;
  }

  .menu-container {
    display: flex;
    flex-direction: column;
    clear: both;
    justify-content: space-between;
    flex: 1;
  }

  @media (max-width: 800px) {
    .hamburger {
      display: block;
    }

    .menu-container {
      display: none;
      position: fixed;
      top: 6.25rem;
      left: 0;
      right: 0;
      background: #fff;
      border-bottom: 1px solid #000;
      padding: 1rem 0;
    }

    .menu-container.open {
      display: block;
    }

    nav {
      text-align: center;
    }

    nav a {
      display: block;
      margin: 1rem 0;
    }

    .social-links {
      text-align: center;
      margin-top: 1rem;
      padding: 1rem 0;
    }
  }
</style>
