import Vue from 'vue'
import 'highlight.js/styles/mono-blue.css'
import './common'
import { initKatex, initHighlight } from 'scripts/article'
import ArticleVote from './layouts/article_vote'
import ArticleComments from './layouts/article_comments'

initKatex()
initHighlight()

window.articleVote = new Vue({
  el: '#article-vote',
  render: h => h(ArticleVote)
})

window.articleComments = new Vue({
  el: '#article-comments',
  render: h => h(ArticleComments)
})
