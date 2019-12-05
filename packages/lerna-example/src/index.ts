import { AddAll } from '@wangjuncode/lerna-example-tools'
import SubModule from '@wangjuncode/lerna-example-module'

class Index {
    add(...numbers: number[]):number {
        return AddAll(...numbers)
    }
    subModuleName():string {
        return (new SubModule).sayName();
    }
}

export default Index;
