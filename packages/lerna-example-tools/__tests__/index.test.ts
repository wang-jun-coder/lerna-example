'use strict';

import { Add, AddAll } from '../src/index';

describe('@wangjuncode/lerna-example-tools', () => {
    it('should be 3', function () {
        expect(Add(1, 2)).toBe(3);
    });

    it('should be 6', function () {
        expect(AddAll(1, 2, 3)).toBe(6);
    });
});
