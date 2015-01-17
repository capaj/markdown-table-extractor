var marked = require('marked');

module.exports = function(input) {
	var tokens = marked.lexer(input).filter(function(token) {
		return token.type === 'table';
	});

	if (tokens.length === 0) {
		throw new Error('No tables found in the passed markdown: ', input);
	}
	return tokens;
};
