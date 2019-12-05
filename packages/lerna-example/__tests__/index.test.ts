'use strict';

import Index from "../src";

describe('@wangjuncode/lerna-example', () => {
    it('should success', function () {
        const index = new Index();
        expect(index.add(1,2,3)).toBe(6);
        expect(typeof index.subModuleName()).toBe('string');
    });
});
