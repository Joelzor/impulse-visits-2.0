import { useEffect, useState, useMemo } from "react";
import { useSearchContext } from "../context/search";

const Filters = () => {
  const { searchResults, setSearchResults } = useSearchContext();
  const [tags, setTags] = useState([]);
  const [filterActivities, setFilterActivities] = useState([]);

  useEffect(() => {
    const tagsList = [];

    // creating an array of tags to loop through and add checkboxes
    searchResults.forEach((result) => {
      const tagStrings = result.kinds.split(",");
      const tagsFixed = tagStrings.map((tag) => {
        return tag.replaceAll("_", " ");
      });
      tagsFixed.forEach((tag) => {
        tagsList.push(tag);
      });
    });

    const tagsListUnique = [...new Set(tagsList)];
    setTags(tagsListUnique);
  }, [searchResults]);

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const currentResults = searchResults;

    if (checked) {
      setFilterActivities([...filterActivities, value]);
    } else {
      setFilterActivities((oldFilters) => {
        return oldFilters.filter((activity) => activity !== value);
      });
    }
  };

  return (
    <div className="absolute top-6 w-full h-[400px] p-4 bg-white border-4 border-green-300 rounded">
      <h4 className="mb-2 pb-2 border-b">Filter by tags</h4>
      <div className="flex flex-wrap gap-2 text-justify">
        {tags.map((tag) => {
          return (
            <>
              <label htmlFor="tag" className="text-xs">
                {tag}
              </label>
              <input
                type="checkbox"
                name="tag"
                value={tag}
                onChange={handleChange}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
