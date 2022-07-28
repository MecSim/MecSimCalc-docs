import Head from "@docusaurus/Head";
import React from "react";

export default function DiscourseComments() {
  if (typeof window == "undefined") return null;

  (window as any).DiscourseEmbed = {
    discourseUrl: "https://community.mecsimcalc.com/",
    discourseEmbedUrl: window.location.href,
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
