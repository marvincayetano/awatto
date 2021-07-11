export enum NavType {
  history = "history",
  summer = "summer",
  fall = "fall",
  winter = "winter",
  spring = "spring",
}

// Different season different set of menus
export const NAV_MENU = {
  [NavType.history]: [
    { label: "History Resources", menuArr: [{ label: "Lorem Ipsum" }] },
  ],
  [NavType.summer]: [
    { label: "Summer Activities", menuArr: [{ label: "Lorem Ipsum" }] },
  ],
  [NavType.fall]: [
    { label: "Fall Activities", menuArr: [{ label: "Lorem Ipsum" }] },
  ],
  [NavType.winter]: [
    { label: "Winter Activities", menuArr: [{ label: "Lorem Ipsum" }] },
  ],
  [NavType.spring]: [
    { label: "Spring Activities", menuArr: [{ label: "Lorem Ipsum" }] },
  ],
};

export interface MenuInterface {
  label: string;
  url?: string;
  menuArr?: MenuInterface[];
}
