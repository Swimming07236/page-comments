module.exports = function validateComment(comment) {
  if (!/^\/works\/[a-z0-9-]+$/.test(comment.url || '')) return { errmsg: '没有找到这篇作品。' };
  if (typeof comment.nick !== 'string' || !comment.nick.trim() || comment.nick.trim().length > 40) return { errmsg: '请输入 1–40 字的名称。' };
  if (typeof comment.comment !== 'string' || !comment.comment.trim() || comment.comment.trim().length > 2000) return { errmsg: '留言内容最多 2000 字，且不能为空。' };
  comment.nick = comment.nick.trim();
  comment.comment = comment.comment.trim();
};
