const Application = require('@waline/vercel');
const validateComment = require('./validation.cjs');

process.env.LOGIN = 'disable';
process.env.SITE_NAME ||= '虚实疆界';
process.env.SITE_URL ||= 'https://swimming07236.github.io';
process.env.DISABLE_USERAGENT = 'true';
process.env.DISABLE_REGION = 'true';
process.env.AKISMET_KEY ||= 'false';
process.env.IPQPS ||= '30';

module.exports = Application({
  preSave: validateComment,
  avatarUrl: () => new URL('/assets/favicon.svg', process.env.SITE_URL).href,
});
