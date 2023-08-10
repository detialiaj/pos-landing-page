module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":660,"showCaptions":["title"],"markdownCaptions":true,"withWebp":true,"linkImagesToOriginal":false,"backgroundColor":"transparent","quality":50,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"My Minimal Portfolio","short_name":"Portfolio","start_url":"/","background_color":"#FFFFFF","theme_color":"#000000","display":"minimal-ui","icon":"./content/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"ca979138194b29df5ed309a91f37a17d"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-portfolio-minimal/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://gatsby-starter-portfolio-minimal-theme.netlify.app/","manifestSettings":{"favicon":"./content/images/favicon.png","siteName":"My Minimal Portfolio","shortName":"Portfolio","startUrl":"/","backgroundColor":"#FFFFFF","themeColor":"#000000","display":"minimal-ui"},"contentDirectory":"./content","blogSettings":{"path":"/blog","usePathPrefixForArticles":false}},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-i18next/gatsby-browser.js'),
      options: {"plugins":[],"localeJsonSourceName":"locale","languages":["sq","en"],"defaultLanguage":"sq","siteUrl":"https://example.com","trailingSlash":"always","i18nextOptions":{"interpolation":{"escapeValue":false},"keySeparator":false,"nsSeparator":false},"pages":[{"matchPath":"/:lang?/blog/:uid","getLanguageFromPath":true,"excludeLanguages":["en"]},{"matchPath":"/preview","languages":["en"]}]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
