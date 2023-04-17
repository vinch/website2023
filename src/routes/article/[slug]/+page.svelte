<script lang="ts">
  import { format } from "date-fns";
  import { marked } from "marked";

  export let data: any;

  const article = data.article;
</script>

<article>
  <h1>{article.title}</h1>
  <div class="date">{format(article.publishDate, "PPP")}</div>
  <div class="excerpt">{article.excerpt}</div>
  <div class="content">
    {@html marked.parse(
      article.content.replace("ar://", "https://arweave.net/")
    )}
  </div>
</article>

<style>
  article {
    max-width: 800px;
  }
  h1 {
    font-family: Georgia, "Times New Roman", Times, serif;
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
    font-size: 1.5rem;
    line-height: 1.5em;
    font-weight: 400;
    margin-bottom: 3rem;
  }
  .content {
    font-size: 1.25rem;
    line-height: 1.5em;
    font-weight: 400;
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
  }
  .content :global(img) + :global(em) {
    display: block;
    padding-top: 0.5rem;
    color: #999;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
  }
</style>
