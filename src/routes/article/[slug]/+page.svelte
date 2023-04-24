<script lang="ts">
  import { format } from "date-fns";
  import { marked } from "marked";

  export let data: any;

  const article = data.article;

  const ARWEAVE_GATEWAY_URL = import.meta.env.VITE_ARWEAVE_GATEWAY_URL;
</script>

<svelte:head>
  <title>{article.title}</title>
  <meta name="description" content={article.excerpt} />
  <meta property="og:description" content={article.excerpt} />
  <meta
    property="og:image"
    content={article.featureImage.replace("ar://", `${ARWEAVE_GATEWAY_URL}/`)}
  />
  <meta property="og:title" content={article.title} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://vinch.be/article/{article.id}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content="@vinchbat" />
  <meta name="twitter:description" content={article.excerpt} />
  <meta
    name="twitter:image:src"
    content={article.featureImage.replace("ar://", `${ARWEAVE_GATEWAY_URL}/`)}
  />
  <meta name="twitter:title" content={article.title} />
</svelte:head>

<article>
  <h1>{article.title}</h1>
  <div class="date">{format(article.publishDate, "PPP")}</div>
  {#if article.excerpt}
    <div class="excerpt">{article.excerpt}</div>
  {/if}
  <div class="content">
    {@html marked.parse(
      article.content
        .replaceAll("ar://", `${ARWEAVE_GATEWAY_URL}/`)
        .replace(
          /\nhttps\:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_]+)\n/g,
          '<div class="youtube"><iframe src="//www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe></div>'
        )
    )}
  </div>
  <div class="arweave">
    <a href="{ARWEAVE_GATEWAY_URL}/{article.txId}" target="_blank"
      >View on Arweave →</a
    >
  </div>
</article>

<style>
  article {
    max-width: 800px;
  }
  h1 {
    font-family: "IBM Plex Serif", "Georgia", "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 4rem;
    line-height: 1em;
    margin-bottom: 0.5rem;
  }
  .date {
    margin-bottom: 3rem;
    color: #999;
  }
  .excerpt {
    font-size: 1.4rem;
    line-height: 1.5em;
    font-weight: 400;
    margin-bottom: 3rem;
  }
  .content {
    font-size: 1.2rem;
    line-height: 1.5em;
    font-weight: 400;
    margin-bottom: 5rem;
  }
  .content :global(p) {
    margin-bottom: 1rem;
  }
  .content :global(p:has(> img)) {
    margin: 2rem 0;
  }
  .content :global(ul),
  .content :global(ol) {
    padding-left: 4rem;
    margin-bottom: 1rem;
  }
  .content :global(li) {
    margin-bottom: 0.25rem;
  }
  .content :global(img) {
    display: block;
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 35px 0px,
      rgba(0, 0, 0, 0.05) 0px 5px 9px 0px;
    margin: 0 auto;
  }
  .content :global(img) + :global(em) {
    display: block;
    padding-top: 0.75rem;
    color: #999;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
    font-family: "IBM Plex Serif", "Georgia", "Times New Roman", Times, serif;
  }

  .content :global(h2) {
    font-size: 2rem;
    line-height: 1.25em;
    margin: 2rem 0px 1rem;
    font-weight: 400;
    font-family: "IBM Plex Serif", "Georgia", "Times New Roman", Times, serif;
  }

  .content :global(code) {
    background: #eee;
  }

  .content :global(blockquote) {
    margin: 2rem 0px;
    padding: 1rem 0px 1rem 3rem;
    border-left-width: 0.625rem;
    border-left-style: solid;
    border-left-color: #ddd;
    font-style: italic;
  }
  .content :global(blockquote) > :global(p:last-child) {
    margin: 0;
  }

  .content :global(div.youtube) {
    margin: 2rem auto;
    aspect-ratio: 16/9;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 35px 0px,
      rgba(0, 0, 0, 0.05) 0px 5px 9px 0px;
  }

  .content :global(div.youtube) > :global(iframe) {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
