import { ISkillcsInCircle } from "./types";

export const SkillsInCircle: React.FC<ISkillcsInCircle> = ({
  index,
  skills,
  currentSkill,
  setCurrentSkill,
  setCurrentItem,
  item,
}) => {
  const angle = (index / skills.length) * 360;
  const radius = 250;
  const radiusLabel = radius + 60;
  const x = 250 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 250 + radius * Math.sin((angle * Math.PI) / 180);
  const xLabel = 250 + radiusLabel * Math.cos((angle * Math.PI) / 180);
  const yLabel = 250 + radiusLabel * Math.sin((angle * Math.PI) / 180);

  const changeCurrentSkill = () => {
    setCurrentItem(null);
    setCurrentSkill(item);
  };

  return (
    <div key={item}>
      <span
        className={"skillsLabel"}
        style={
          currentSkill == item
            ? {
                color: "#3A3A3A",
                left: `${xLabel}px`,
                top: `${yLabel}px`,
              }
            : {
                left: `${xLabel}px`,
                top: `${yLabel}px`,
              }
        }
      >
        {item}
      </span>
      <button
        className={"skillsCircle"}
        style={
          currentSkill == item
            ? {
                backgroundColor: "#FF7A00",
                left: `${x + 7}px`,
                top: `${y - 3}px`,
              }
            : {
                left: `${x + 7}px`,
                top: `${y - 3}px`,
              }
        }
        onClick={changeCurrentSkill}
      ></button>
    </div>
  );
};
