import React, { useEffect } from "react";

/**
 * https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963
 */
export default function DiscourseComments() {
  useEffect(() => {
    (window as any).DiscourseEmbed = {
      discourseUrl: "https://community.mecsimcalc.com/",
      discourseEmbedUrl: window.location.href,
    };
    var d = document.createElement("script");
    d.type = "text/javascript";
    d.async = true;
    d.src =
      (window as any).DiscourseEmbed.discourseUrl + "javascripts/embed.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(d);
  }, []);

  return <div id="discourse-comments" style={{ marginTop: "50px" }} />;
}
