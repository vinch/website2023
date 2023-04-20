<script>
  import "../app.css";

  const ARWEAVE_GATEWAY_URL = import.meta.env.VITE_ARWEAVE_GATEWAY_URL;
</script>

<div class="container">
  <header>
    <a href="/">
      <img
        src="{ARWEAVE_GATEWAY_URL}/_YZkieSBM8gzkiY-vu3zXE5-RmIuku4CJwNJqCjwjZM"
        alt="vinch.be logo"
      />
    </a>
  </header>
  <main>
    <slot />
  </main>
</div>

<style>
  .container {
    display: flex;
  }
  header {
    padding-top: 3.125rem;
    width: 9.375rem;
  }
  header img {
    display: block;
    width: 6.25rem;
    height: 6.25rem;
    float: right;
  }
  main {
    flex: 1;
    height: 100vh;
    overflow: auto;
    border-left: 1px solid #000;
    padding: 5rem;
  }

  @media (max-width: 800px) {
    .container {
      flex-direction: column;
    }
    header {
      width: 100%;
      padding: 0;
      position: fixed;
      top: 0;
      background: #fff;
      border-bottom: 1px solid #000;
    }
    header img {
      float: none;
    }
    main {
      padding: 5rem 3rem;
      border-left: 0;
      margin-top: 6.25rem;
    }
  }

  @media (max-width: 600px) {
    main {
      padding: 5rem 2rem;
    }
  }
</style>
