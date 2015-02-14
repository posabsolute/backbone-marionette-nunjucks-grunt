'use strict';

var assert = require('assert');

describe('sidebar', function () {
    it('Look if contain first element', function(done) {
        browser
            .url('http://localhost:8555/index.html')
            .getText('#test1', function(err, text) {
                assert(text === 'Test1');
                // outputs the following:
                // "Lorem ipsum dolor sit amet,consetetur sadipscing elitr"
            })
            .call(done);

    });

});