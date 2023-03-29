import { useEffect, useState, useMemo } from "react";
import { useSearchContext } from "../context/search";

const Filters = () => {
  const { searchResults } = useSearchContext();
  const [tags, setTags] = useState([]);

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

  return (
    <div className="absolute top-6 w-full h-[400px] p-4 bg-green-300 rounded">
      <h4>Filter tags</h4>
      <div className="flex flex-wrap gap-2 text-justify">
        {tags.map((tag) => {
          return (
            <>
              <label htmlFor="tag" className="text-xs">
                {tag}
              </label>
              <input type="checkbox" name="tag" value={tag} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
