import media from "./media";
import { shades, app, semantic } from "./colors";

export const lightTheme = {
  type: "light",
  bodyBackground: shades.white,
  bodyText: shades.black,

  title: app.primary500,
  titleSpan: app.tertiary500,

  trackScrollBar: shades.white,
  ThumbScrollBar: app.primary500,
  ThumbHoverScrollBar: app.secondary500,
  buttonsScrollBar: app.primary500,

  iconMode: shades.black,
  navLinkOut: app.secondary500,

  contactUser: app.secondary500,
  message404: app.secondary500,

  ...media
};

export const darkTheme = {
  type: "dark",
  bodyBackground: shades.black,
  bodyText: shades.white,

  title: app.primary400,
  titleSpan: app.tertiary400,

  trackScrollBar: shades.black,
  ThumbScrollBar: app.primary400,
  ThumbHoverScrollBar: app.secondary400,
  buttonsScrollBar: app.primary400,

  iconMode: shades.black,
  navLinkOut: app.primary400,

  contactUser: app.secondary400,
  message404: app.secondary400,

  ...media
};
