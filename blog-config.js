// defalt index cache time in seconds
const DEFAULT_INDEX_CACHE_TIME = 5000

// defalt article cache time in seconds
const DEFAULT_ARTICLE_CACHE_TIME = 1 * 60 * 1000

const config = {
  // github api base
  api: '//api.github.com',
  // you should split access_token in to pieces
  // otherwise access_token will expired after you commit to github
  // how to get access_token http://www.fiskercheung.com/#/id/6
  accessTokens: [['5', 'a41e75c8b2', '2c70d70b08ae21', '5cd774758e3b8b0']],
  // cache
  // set false to disable cache
  cache: {
    index: DEFAULT_INDEX_CACHE_TIME,
    // article cache time
    article: DEFAULT_ARTICLE_CACHE_TIME,
  },

  name: "fisker's blog",
  owner: 'fisker',
  repo: 'blog',
  // repoId: '',
  pageSize: 30,
  require: {
    paths: {
      marked: '//cdn.bootcss.com/marked/0.7.0/marked.min.js',
      'highlight-js': '//cdn.bootcss.com/highlight.js/9.15.8/highlight.min.js',
      'es6-promise': '//cdn.bootcss.com/es6-promise/4.1.1/es6-promise.min.js',
      localforage: '//cdn.bootcss.com/localforage/1.7.3/localforage.min.js',
    },
  },
  paths: {
    'require-js': '//cdn.bootcss.com/require.js/2.3.6/require.min.js',
    'primer-markdown': '//unpkg.com/primer-markdown@4.0.0/build/build.css',
    // 'github-markdown-css': '//cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css',
    'highlight-js-css':
      '//cdn.bootcss.com/highlight.js/9.15.8/styles/solarized-light.min.css',
  },
}

module.exports = config
