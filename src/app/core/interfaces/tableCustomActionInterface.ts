export interface TableCustomActionInterface<T> {
  type: 'text' | "iconic";
  title: string;
  icon: string;
  action: (customAction: T) => void;
}