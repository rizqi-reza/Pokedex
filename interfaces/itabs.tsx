export interface ITabs extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultActive?: number;
  withBorder?: boolean;
  fixedHeader?: boolean;
  noPadding?: boolean;
  variant?: 'default' | 'badge';
  onChange?: (index: number) => void;
}

export interface ISubTabs {
  Item: React.FC<{
    title: React.ReactNode;
  }>;
}

export interface ITabsStyle {
  selected?: boolean;
  variant?: 'default' | 'badge';
  fixedHeader?: boolean;
  withBorder?: boolean;
  noPadding?: boolean;
}
