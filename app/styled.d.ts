// import original module declarations
import "styled-components";

type ColorShades = Record<
  100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  string
>;

type Spacing = Record<
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96,
  string
>;

type FontSizes = Record<
  "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl",
  string
>;

export interface Colors {
  primary: ColorShades;
  red: ColorShades;
  green: ColorShades;
  gray: ColorShades;

  white: string;
  black: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: Colors;
    space: Spacing;
    fontSize: FontSizes;

    sizes: {
      maxWidth: string;
    };
  }
}
