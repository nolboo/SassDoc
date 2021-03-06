'use strict';

var types = '(?:null|\\*|number|color|string|list|map|bool|arglist|spritemap)';
var multipleTypes = '\\{\\s*(' + types + '(?:\\s*\\|\\s*' + types + ')*)\\s*\\}';

exports = module.exports = {

  /**
   * Checks whether the line is a comment
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isComment: function (line) {
    return line.match(/^\/{2,}/i) || line.match(/^\s*\/?\*+\/?/i);
  },

  /**
   * Checks whether the line is a parameter
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isParameters: function (line) {
    var re = new RegExp('^@(?:param|arg|argument)\\s+' + multipleTypes + '\\s+\\$([\\w-]+)(?:\\s+\\((.+)\\))?(?:\\s+-?\\s*(.+))?', 'i');
    return line.match(re);
  },

  /**
   * Checks whether the line is a return
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isReturns: function (line) {
    var re = new RegExp('^@returns?(?:\\s+' + multipleTypes + ')(?:\\s+(.+))?', 'i');
    return line.match(re);
  },

  /**
   * Checks whether the line is a var doc
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isVar: function (line) {
    var re = new RegExp('^@var(?:\\s+' + multipleTypes + ')(?:\\s+-?\\s*(.+))?', 'i');
    return line.match(re);
  },

  /**
   * Checks whether the line is an access
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isAccess: function (line) {
    return line.match(/^@(private|public|protected)/i) || line.match(/^@access\s+(private|public|protected)/i);
  },

  /**
   * Checks whether the line is a separator
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isSeparator: function (line) {
    return line.match(/^---/i);
  },

  /**
   * Checks whether the line is a function or a mixin
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isFunctionOrMixin: function (line) {
    return line.match(/@(function|mixin)\s+([\w-]+)/i);
  },

  /**
   * Checks whether the line is an empty line
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isEmpty: function (line) {
    return line.match(/^\s*$/i);
  },

  /**
   * Checks whether the line is a deprecation
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isDeprecated: function (line) {
    return line.match(/^@deprecated(?:\s+(.+))?/i);
  },

  /**
   * Checks whether the line is an author
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isAuthor: function (line) {
    return line.match(/^@author\s+(.+)/i);
  },

  /**
   * Checks whether the line is a todo
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isTodo: function (line) {
    return line.match(/^@todo\s+(.+)/i);
  },

  /**
   * Checks whether the line is an ignore
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isIgnore: function (line) {
    return line.match(/^@ignore\s+(.+)/i);
  },

  /**
   * Checks whether the line is a throw
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isThrows: function (line) {
    return line.match(/^@(?:throws|exception)\s+(.+)/i);
  },

  /**
   * Checks whether the line is an alias
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isAlias: function (line) {
    return line.match(/^@alias\s+(.+)/i);
  },

  /**
   * Checks whether the line is a since
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isSince: function (line) {
    return line.match(/^@since\s+(.+)/i);
  },

  /**
   * Checks whether the line is a link
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isLink: function (line) {
    return line.match(/^@link\s+(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&//=]*))(?:\s+(.+))?/i);
  },

  /**
   * Checks whether the line is a require
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isRequires: function (line) {
    return line.match(/^@requires\s+(?:{(function|mixin|var)})?\s*([\w-]+)/i);
  },

  /**
   * Checks whether the line is a variable
   * @param  {string}  line - line to check
   * @return {Boolean}
   */
  isVariable: function (line) {
    return line.match(/^\$([\w-]*)\s*\:\s*(.+?)(?:\s+(!global))?\;/i);
  }

};
