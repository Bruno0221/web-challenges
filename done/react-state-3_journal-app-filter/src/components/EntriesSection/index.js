import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({
  onShowFavoriteEntries,
  onShowAllEntries,
  entries,
  onToggleFavorite,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab
          onClick={onShowAllEntries}
          active={filter === "all" ? true : false}
        >
          All Entries{" "}
          <Badge isActive={filter === "all" ? true : false}>
            {allEntriesCount}
          </Badge>
        </Tab>
        <Tab
          onClick={onShowFavoriteEntries}
          active={filter === "favorite" ? true : false}
        >
          Favorites{" "}
          <Badge isActive={filter === "favorite" ? true : false}>
            {favoriteEntriesCount}
          </Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
