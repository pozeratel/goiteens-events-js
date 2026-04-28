import { Item } from "./Events.style";
import { IoPersonOutline, IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { format, formatDistance } from "date-fns";

export const Event = ({ name, location, speaker, type, time }) => {
  const start = time.start;
  const end = time.end;
  const result = formatDistance(start, end);
  return (
    <Item>
      <h3>{name}</h3>
      <div>
        <p>
          {" "}
          <IoLocationSharp />
          {location}
        </p>
        <p>
          <IoPersonOutline />
          {" " + speaker}
        </p>
        <p>
          {" "}
          <FaCalendarAlt /> {format(new Date(start), "dd MMMM yyyy")}
        </p>
        <p>
          {" "}
          <FaClock /> {result}
        </p>
      </div>
    </Item>
  );
};
