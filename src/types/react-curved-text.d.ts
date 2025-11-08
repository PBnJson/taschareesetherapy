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
      [key: string]: any;
    };
    textPathProps?: {
      [key: string]: any;
    };
    tspanProps?: {
      [key: string]: any;
    };
    ellipseProps?: {
      [key: string]: any;
    };
    svgProps?: {
      style?: CSSProperties;
      [key: string]: any;
    };
  }

  const CurvedText: React.FC<CurvedTextProps>;
  export default CurvedText;
}
