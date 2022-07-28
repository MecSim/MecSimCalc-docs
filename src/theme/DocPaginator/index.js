import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import DiscourseComments from "@site/src/components/DiscourseComments";

/**
 * Swizzling: https://docusaurus.io/docs/swizzling#wrapping
 * npm run swizzle @docusaurus/theme-classic DocPaginator
 * All components: https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme
 */
export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DiscourseComments />
      <DocPaginator {...props} />
    </>
  );
}
