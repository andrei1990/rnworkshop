export declare type ToDos = ToDo[];

export default interface ToDo {
  name: string | null;
  id: string;
  completed: boolean;
}
