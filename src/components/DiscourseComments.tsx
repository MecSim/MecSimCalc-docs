import Head from "@docusaurus/Head";
import React from "react";

/**
 * https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963
 */
export default function DiscourseComments() {
  if (typeof window == "undefined") return null;

  (window as any).DiscourseEmbed = {
    discourseUrl: "https://community.mecsimcalc.com/",
    discourseEmbedUrl: `${window.location.origin}<%= current_page.url %>`,
  };
  return (
    <div id="discourse-comments" style={{ marginTop: "50px" }}>
      <Head>
        <script
          type="text/javascript"
          src={`${
            (window as any).DiscourseEmbed.discourseUrl
          }javascripts/embed.js`}
          async
        />
      </Head>
    </div>
  );
}
