export interface Person {
    _id: string;
    name: string;
  }

  export interface QueryPersonArgs {
    _id: string;
    name: string;
  }

  export interface MutationUpdatePersonNameArgs {
    _id: string;
    newName: string;
  }