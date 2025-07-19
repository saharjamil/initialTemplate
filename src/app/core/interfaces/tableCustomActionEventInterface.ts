export interface TableCustomActionEventInterFace<T> {
  data: T;                     // data
  action: (data: T) => void;   // the function to be called
}