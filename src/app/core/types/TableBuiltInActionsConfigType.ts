import { TableBuiltInActionType } from "./TableBuiltInActionType";
import { TableRowActionInterface } from "../interfaces/tableRowActionInterface";
export type TableBuiltInActionsConfigType<T> = Partial<Record<TableBuiltInActionType, TableRowActionInterface<T>>>;
