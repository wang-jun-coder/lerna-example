'use strict';

import Index from '../src/index';

describe('@wangjuncode/lerna-example-module', () => {
    it('should success', function () {
        const index = new Index();
        expect(index.sayName()).toBe('this is a demo module');
    });
});
