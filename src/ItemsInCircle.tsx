import { IItemsInCircle } from "./types";

export const ItemsInCircle: React.FC<IItemsInCircle> = ({
  index,
  skills,
  setCurrentSkill,
  item,
  currentItem,
  setCurrentItem,
}) => {
  const angle = (index / 10) * 360;
  const radius = 90;
  const radiusLabel = radius + 70;
  const x = 250 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 250 + radius * Math.sin((angle * Math.PI) / 180);
  const xLabel = 250 + radiusLabel * Math.cos((angle * Math.PI) / 180);
  const yLabel = 250 + radiusLabel * Math.sin((angle * Math.PI) / 180);
  const changeCurrentItem = () => {
    setCurrentItem(item);
    setCurrentSkill("");
  };

  return (
    <div key={item.name}>
      <span
        className={"skillsLabel"}
        style={{
          color: "#3A3A3A",
          left: `${xLabel}px`,
          top: `${yLabel}px`,
        }}
      >
        {item.name}
      </span>
      <button
        className={"skillsCircle"}
        style={
          item.name == currentItem?.name
            ? {
                backgroundColor: "#00A372",
                left: `${x + 7}px`,
                top: `${y - 3}px`,
              }
            : {
                backgroundColor: "#ADADAD",
                left: `${x + 7}px`,
                top: `${y - 3}px`,
              }
        }
        onClick={changeCurrentItem}
      ></button>
    </div>
  );
};
