<script lang="ts">
  import { format } from "date-fns";

  export let data: any;

  const ARWEAVE_GATEWAY_URL = import.meta.env.VITE_ARWEAVE_GATEWAY_URL;
</script>

<svelte:head>
  <title>Le blog de Vincent Battaglia</title>
  <meta name="description" content="All the articles from Vincent Battaglia" />
  <meta
    property="og:description"
    content="All the articles from Vincent Battaglia"
  />
  <meta
    property="og:image"
    content={`${ARWEAVE_GATEWAY_URL}/EjnAIpt6EUtJfhSavQLOjAQiv0ZCdYSfsEB-c7qHIDM`}
  />
  <meta property="og:title" content="Le blog de Vincent Battaglia" />
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
  <meta name="twitter:title" content="Le blog de Vincent Battaglia" />
</svelte:head>

<h1>Blog</h1>
<ul>
  {#each data.articles as article}
    <li>
      <span>{format(article.publishDate, "PPP")}</span>
      <a href="/article/{article.id}">{article.title}</a>
    </li>
  {/each}
</ul>

<style>
  h1 {
    font-family: Georgia, "Times New Roman", Times, serif;
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
    font-size: 1.25rem;
    line-height: 1.5em;
    display: flex;
    column-gap: 1rem;
    color: #999;
    font-weight: 400;
  }
  span {
    width: 12.5rem;
    text-align: right;
  }
</style>
