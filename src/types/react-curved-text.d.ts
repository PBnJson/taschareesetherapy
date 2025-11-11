declare module "react-curved-text" {
  import { CSSProperties } from "react";

  interface CurvedTextProps {
    width: number;
    height: number;
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    startOffset?: number;
    reversed?: boolean;
    text: string;
    textProps?: {
      style?: CSSProperties;
      [key: string]: unknown;
    };
    textPathProps?: {
      [key: string]: unknown;
    };
    tspanProps?: {
      [key: string]: unknown;
    };
    ellipseProps?: {
      [key: string]: unknown;
    };
    svgProps?: {
      style?: CSSProperties;
      [key: string]: unknown;
    };
  }

  const CurvedText: React.FC<CurvedTextProps>;
  export default CurvedText;
}
