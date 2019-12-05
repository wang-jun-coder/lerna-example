const Add = (a: number, b: number): number => a + b;
const AddAll = (...numbers: number[]): number => numbers.reduce((pre: number, cur: number) => pre + cur);

const Multi = (a: number, b: number): number => a*b;
const MultiAll = (...numbers: number[]): number => numbers.reduce((pre: number, cur: number) => pre * cur);

export  {
  Add,
  AddAll,
  Multi,
  MultiAll
};
