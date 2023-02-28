export const ifElse = {
  setState: ({setState, condition, ifTrue, ifFalse}) => {
    return setState(condition ? ifTrue : ifFalse);
  },
  ternary: ({condition, ifTrue, ifFalse}) => {
    return condition ? ifTrue : ifFalse;
  },
};
