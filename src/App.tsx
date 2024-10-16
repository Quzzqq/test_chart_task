import { useState } from "react";
import "./App.css";
import { items } from "./const/items";
import { IItem } from "./types";
import { skills } from "./const/skills";
import { ItemsInCircle } from "./itemsInCircle";
import { SkillsInCircle } from "./skillsInCircle";

function App() {
  const [currentSkill, setCurrentSkill] = useState<string>("");
  const [listItems, setListItems] = useState<IItem[]>(items);
  const [currentItem, setCurrentItem] = useState<IItem>();

  return (
    <div className={"skillsArea"}>
      {skills.map((item, index) => (
        <SkillsInCircle
          index={index}
          skills={skills}
          currentSkill={currentSkill}
          setCurrentSkill={setCurrentSkill}
          setCurrentItem={setCurrentItem}
          item={item}
        />
      ))}
      <div className={"itemsArea"}>
        {listItems.map((item, index) => (
          <ItemsInCircle
            index={index}
            skills={skills}
            setCurrentSkill={setCurrentSkill}
            item={item}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
