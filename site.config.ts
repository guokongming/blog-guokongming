import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '8ba647580e0f431c892766a035d24036',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,
  //rootNotionSpaceId: '3d3be8d8198648b09504f6e5e55a6183',

  // basic site info (required)
  name: '郭孔明律师Notion博客',
  domain: 'https://guokongming.notion.site/Notion-8ba647580e0f431c892766a035d24036',
  author: '郭孔明',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'guokongming',
  github: 'guokongming',
  linkedin: 'guokongming',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '@guokongming',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
 navigationStyle: 'custom',
 navigationLinks: [
 {
     title: '关于我',
   pageId: '957ed75f380d4f97952b36fcb73cbbce'
   },
  {
  title: '联系我',
      pageId: '372dc64d97a74f0db19506b4a68cc1cc'
    }
   ]
})
