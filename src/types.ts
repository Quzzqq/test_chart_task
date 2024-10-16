export interface IItem {
  name: string;
  mainSkills: string[];
  otherSkills: string[];
}

export interface ISkillcsInCircle {
  index: number;
  skills: string[];
  currentSkill: string;
  setCurrentSkill: React.Dispatch<React.SetStateAction<string>>;
  setCurrentItem: React.Dispatch<React.SetStateAction<IItem>> | null;
  item: string;
}

export interface IItemsInCircle {
  index: number;
  skills: string[];
  setCurrentSkill: React.Dispatch<React.SetStateAction<string>>;
  item: IItem;
  currentItem: IItem;
  setCurrentItem: React.Dispatch<React.SetStateAction<IItem> | null>;
}
