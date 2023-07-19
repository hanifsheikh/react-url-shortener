import type { ReactNode } from 'react';

export type URLEntry = {
  id: number;
  short_url: string;
  original_url: string;
};

export type FancyInputProps = {
  selectOnClick?: boolean;
  onChange: (value: string) => void;
  value?: string;
};

export type FancyButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export type FancyTableProps = {
  rows: Array<URLEntry>;
  setDeleteID: (id: number) => void;
};

export type ShortenedURLBoxProps = {
  title: string;
  url: string;
};

export type ModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  destroy: () => void;
};
