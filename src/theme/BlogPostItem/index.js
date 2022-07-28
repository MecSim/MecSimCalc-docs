import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import DiscourseComments from "@site/src/components/DiscourseComments";

/**
 * Swizzling: https://docusaurus.io/docs/swizzling#wrapping
 * npm run swizzle @docusaurus/theme-classic BlogPostItem
 * All components: https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme
 */
export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <DiscourseComments />
    </>
  );
}
