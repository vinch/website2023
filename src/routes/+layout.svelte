<script>
  import "../app.css";
</script>

<div class="container">
  <header>
    <a href="/">
      <img
        src="https://arweave.net/_YZkieSBM8gzkiY-vu3zXE5-RmIuku4CJwNJqCjwjZM"
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
    text-align: right;
  }
  main {
    flex: 1;
    height: 100vh;
    overflow: auto;
    border-left: 1px solid #000;
    padding: 5rem;
  }
</style>
