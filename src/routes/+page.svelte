<script lang="ts">
  import { format } from "date-fns";

  export let data: any;
</script>

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
