var extractor = require('../index');
var fs = require('fs');
var chai = require('chai').should();

describe('table extractor', function() {
	it('should give us a table with 3 cells', function() {

		var table = extractor(fs.readFileSync('./test/test.md', 'utf8'));
		table.length.should.equal(1);
		table[0].cells.length.should.equal(3);
	});

	it('should throw an error when no table is found', function() {
		(function() {
			extractor('');
		}).should.throw('No tables found in the passed markdown: ');
	})
});