import { Event } from "../Events/Events.jsx";
import { Title } from "../Title/Title.jsx";
import { List } from "../List/List.jsx";
import { Wraper } from "./PageBoard.style.js";

export const PageBoard = ({ events }) => {
  return (
    <Wraper>
      <Title title={"24th Core Worlds Coalitions Conference"} />
      <List>
        {events.map((event, index) => (
          <Event
            key={index}
            name={event.name}
            location={event.location}
            speaker={event.speaker}
            type={event.type}
            time={event.time}
          />
        ))}
      </List>
    </Wraper>
  );
};
