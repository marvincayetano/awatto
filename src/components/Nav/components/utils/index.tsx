export enum NavType {
  history = "history",
  summer = "summer",
  fall = "fall",
  winter = "winter",
  spring = "spring",
}

// Different season different set of menus
export const NAV_MENU = {
  [NavType.history]: [{ label: "History Resources" }],
  [NavType.summer]: [{ label: "Summer Activities" }],
  [NavType.fall]: [{ label: "Fall Activities" }],
  [NavType.winter]: [{ label: "Winter Activities" }],
  [NavType.spring]: [{ label: "Spring Activities" }],
};

export interface MenuInterface {
  label: string;
  url?: string;
}
