import { getConfig } from '../lib/some_module.js';

import expect from 'expect';

describe('something', function() {
    it('should work', function() {
        expect(getConfig()).toExist();
    });
});
