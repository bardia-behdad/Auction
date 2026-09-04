declare module "react-pageflip" {
  import * as React from "react";

  export interface FlipBookProps {
    width: number;
    height: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    ref?: React.Ref<any>;
    onFlip?: (e: { data: number }) => void;
    onChangeOrientation?: (e: { data: string }) => void;
    onChangeState?: (e: { data: string }) => void;
  }

  const HTMLFlipBook: React.FC<FlipBookProps>;
  export default HTMLFlipBook;
}
