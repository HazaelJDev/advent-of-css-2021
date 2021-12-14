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

  rightMoon404: 410,
  topMoon404: -356,
  rightMobileMoon404: 132,
  topMobileMoon404: -159,

  rightMoon: 410,
  topMoon: -356,
  rightMobileMoon: 132,
  topMobileMoon: -159,

  strokeHeroTitle: 0,
  bgCalendarMatrix: app.tertiary500,
  borderCardDay: app.borderTertiary500,

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
  navLinkOut: app.secondary400,

  contactUser: app.secondary400,
  message404: app.secondary400,

  rightMoon404: 0,
  topMoon404: -200,
  rightMobileMoon404: 0,
  topMobileMoon404: -40,

  rightMoon: 0,
  topMoon: 20,
  rightMobileMoon: 0,
  topMobileMoon: 0,

  strokeHeroTitle: 3,
  bgCalendarMatrix: app.tertiary400,
  borderCardDay: app.borderTertiary400,

  ...media
};
