export interface ContextMenuItemInterface {
    label: string;
    action: () => void;
    icon?: string; // Optional icon for the menu item
  }