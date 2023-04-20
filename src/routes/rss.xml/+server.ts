import { js2xml } from "xml-js";
import { marked } from "marked";
import { format } from "date-fns";

const ITEMS_NUMBER = 20;
const ARWEAVE_GATEWAY_URL = import.meta.env.VITE_ARWEAVE_GATEWAY_URL;

export const prerender = true;

export async function GET({ fetch }: { fetch: any }) {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk`
  );
  const articles = await response.json();

  const feed: any = {
    _declaration: {
      _attributes: {
        version: "1.0",
        encoding: "UTF-8",
      },
    },
    rss: {
      _attributes: {
        "xmlns:dc": "http://purl.org/dc/elements/1.1/",
        "xmlns:content": "http://purl.org/rss/1.0/modules/content/",
        "xmlns:atom": "http://www.w3.org/2005/Atom",
        "xmlns:media": "http://search.yahoo.com/mrss/",
        version: "2.0",
      },
      channel: {
        title: { _cdata: "Vinch" },
        description: { _cdata: "Blog of Vincent Battaglia, aka Vinch" },
        link: "https://vinch.be",
        item: [],
      },
    },
  };

  for (const article of articles.slice(0, ITEMS_NUMBER)) {
    const response = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk/${article.id}`
    );
    const articleWithContent = await response.json();

    feed.rss.channel.item.push({
      title: { _cdata: article.title },
      description: {
        _cdata: marked.parse(
          articleWithContent.content.replaceAll(
            "ar://",
            `${ARWEAVE_GATEWAY_URL}/`
          )
        ),
      },
      link: `https://vinch.be/article/${article.id}`,
      guid: {
        _attributes: {
          isPermalink: false,
        },
        _text: article.txId,
      },
      "dc:creator": {
        _cdata: "Vincent Battaglia",
      },
      pubDate: format(article.publishDate, "EEE, dd MMM yyyy 00:00:00 'GMT'"),
      "media:content": {
        _attributes: {
          url: article.featureImage.replace("ar://", `${ARWEAVE_GATEWAY_URL}/`),
          medium: "image",
        },
      },
    });
  }

  return new Response(js2xml(feed, { compact: true, ignoreComment: true }), {
    headers: {
      "Cache-Control": "max-age=3600",
      "Content-Type": "application/xml",
    },
  });
}
