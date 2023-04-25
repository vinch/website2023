<script lang="ts">
  import { onMount } from "svelte";
  import { format } from "date-fns";
  import { browser } from "$app/environment";

  export let data: any;

  const ARWEAVE_GATEWAY_URL = import.meta.env.VITE_ARWEAVE_GATEWAY_URL;

  onMount(() => {
    if (browser) {
      document.getElementsByTagName("main")[0].scrollTo(0, 0);
    }
  });
</script>

<svelte:head>
  <title>Blog of Vincent Battaglia, aka Vinch</title>
  <meta name="description" content="All the articles from Vincent Battaglia" />
  <meta
    property="og:description"
    content="All the articles from Vincent Battaglia"
  />
  <meta
    property="og:image"
    content={`${ARWEAVE_GATEWAY_URL}/EjnAIpt6EUtJfhSavQLOjAQiv0ZCdYSfsEB-c7qHIDM`}
  />
  <meta property="og:title" content="Blog of Vincent Battaglia, aka Vinch" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vinch.be" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content="@vinchbat" />
  <meta
    name="twitter:description"
    content="All the articles from Vincent Battaglia"
  />
  <meta
    name="twitter:image:src"
    content={`${ARWEAVE_GATEWAY_URL}/EjnAIpt6EUtJfhSavQLOjAQiv0ZCdYSfsEB-c7qHIDM`}
  />
  <meta name="twitter:title" content="Blog of Vincent Battaglia, aka Vinch" />
</svelte:head>

<h1>Blog</h1>
<ul>
  {#each data.articles as article}
    <li>
      <span>{format(article.publishDate, "PPP")}</span>
      <strong><a href="/article/{article.id}">{@html article.title}</a></strong>
    </li>
  {/each}
</ul>

<style>
  h1 {
    font-family: "IBM Plex Serif", "Georgia", "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 10rem;
    line-height: 1em;
    margin-bottom: 5rem;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 1.5em;
    display: flex;
    column-gap: 1rem;
    color: #999;
    font-weight: 400;
  }
  span {
    width: 13rem;
    text-align: right;
  }
  strong {
    font-weight: 400;
    flex: 1;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 8rem;
    }
    li {
      flex-direction: column;
      margin-bottom: 1rem;
    }
    span {
      width: auto;
      text-align: left;
      font-size: 1rem;
    }
  }
</style>
