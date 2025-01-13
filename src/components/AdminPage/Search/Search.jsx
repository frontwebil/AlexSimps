import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Search({ setData, data = [], defaultData, current = "All" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation().pathname;

  const searchKeys =
    data.length > 0 && typeof data[0] === "object" ? Object.keys(data[0]) : [];
  const SearchInData = (searchText, list) => {
    if (!searchText) return list;
    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
    return list.filter((item) => {
      return searchKeys.some((key) => {
        const value = String(item[key]).toLowerCase();
        return value.includes(cleanSearchText);
      });
    });
  };

  useEffect(() => {
    if (!defaultData || defaultData.length === 0) return;

    const debounce = setTimeout(() => {
      let filteredData = defaultData;
      if (searchTerm) {
        filteredData = SearchInData(searchTerm, filteredData);
      }
      setData(filteredData);
    }, 100);

    return () => clearTimeout(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, defaultData, setData]);

  if (!defaultData || defaultData.length === 0) {
    return (
      <div className="bg">
        <div className="content">
          <div className="content-input">
            <input
              type="text"
              placeholder="Search"
              className="content-input-inner"
              disabled
            />
          </div>
          <div className="content-info">
            <div className="content-info-container">
              <div className="content-info-text">
                <p className="currentPage">
                  {location.slice(1).split("/")[0]} -&nbsp;
                </p>
                <p className="curent-section">{current}</p>
              </div>
              <div className="" style={{ width: "175px" }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg">
      <div className="content">
        <div className="content-input">
          <input
            type="text"
            placeholder="Search"
            className="content-input-inner"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <div className="content-info">
          <div className="content-info-container">
            <div className="content-info-text">
              <p className="currentPage">
                {location === "/"
                  ? "Business"
                  : location
                      .match(/\/([^/]+)/)[1]
                      .charAt(0)
                      .toUpperCase() +
                    location.match(/\/([^/]+)/)[1].slice(1)}{" "}
                -&nbsp;
              </p>
              <p className="curent-section">{current}</p>
            </div>
            <div className="" style={{ width: "175px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
