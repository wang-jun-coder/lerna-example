'use strict';

import {Add, AddAll, Multi, MultiAll,} from '../src';

describe('@wangjuncode/lerna-example-tools', () => {
    it('should be 3', function () {
        expect(Add(1, 2)).toBe(3);
    });

    it('should be 6', function () {
        expect(AddAll(1, 2, 3)).toBe(6);
    });

    it('should be 1', function () {
        expect(Multi(1, 1)).toBe(1);
    });
    it('should be 2', function () {
        expect(MultiAll(1, 2)).toBe(2);
    });
});
