import { PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onVisibilityChange: (isOpen: boolean) => void;
}>