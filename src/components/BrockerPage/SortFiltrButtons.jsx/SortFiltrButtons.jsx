import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function SortFiltrButtons({
  data,
  setData,
  sortByButtons,
  defaultData,
  addCustomers,
}) {
  const [isSorted, setIsSorted] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFiltr, setIsOpenFiltr] = useState(false);

  const [sortBy, setSortBy] = useState({ sort: sortByButtons[0], asc: true });

  const [filters, setFilters] = useState({});

  const [checkboxFilters, setCheckboxFilters] = useState({
    status: new Set(),
    country: new Set(),
    role: new Set(),
    city: new Set(),
    polica: new Set(),
  });

  const [filterOptions, setFilterOptions] = useState({
    status: new Set(),
    country: new Set(),
    role: new Set(),
    city: new Set(),
    polica: new Set(),
  });
  console.log(filters);

  useEffect(() => {
    const options = {
      status: new Set(defaultData.map((item) => item.status)),
      country: new Set(defaultData.map((item) => item.country)),
      role: new Set(defaultData.map((item) => item.role)),
      city: new Set(defaultData.map((item) => item.city)),
      polica: new Set(defaultData.map((item) => item.polica)),
    };
    setFilterOptions(options);

    const initialFilters = Object.fromEntries(
      sortByButtons.map((button) => [
        button,
        ["status", "country", "role", "city", "polica"].includes(button)
          ? []
          : { from: "", to: "" },
      ])
    );
    setFilters(initialFilters);
  }, [defaultData, sortByButtons]);

  const handleCheckboxChange = (field, value) => {
    setCheckboxFilters((prev) => {
      const updated = new Set(prev[field]);
      if (updated.has(value)) {
        updated.delete(value);
      } else {
        updated.add(value);
      }
      return { ...prev, [field]: updated };
    });
  };

  const handleFilterChange = (field, type, value) => {
    if (!["status", "country", "role", "city", "polica"].includes(field)) {
      setFilters((prev) => ({
        ...prev,
        [field]: { ...prev[field], [type]: value },
      }));
    }
  };

  const handleFilterAction = () => {
    const filteredData = [...defaultData].filter((item) => {
      for (const field of ["status", "country", "role", "city", "polica"]) {
        // Add a null check to prevent undefined errors
        if (
          checkboxFilters[field] &&
          checkboxFilters[field].size > 0 &&
          !checkboxFilters[field].has(item[field])
        ) {
          return false;
        }
      }

      return Object.entries(filters).every(([field, range]) => {
        if (["status", "country", "role", "city", "polica"].includes(field))
          return true;

        let value = item[field];
        let from = range.from;
        let to = range.to;

        const isDate = (val) => /^\d{2}-\d{2}-\d{4}$/.test(val);

        if (isDate(value)) {
          value = new Date(
            value.split("-")[2],
            value.split("-")[1] - 1,
            value.split("-")[0]
          );
          if (from)
            from = new Date(
              from.split("-")[2],
              from.split("-")[1] - 1,
              from.split("-")[0]
            );
          if (to)
            to = new Date(
              to.split("-")[2],
              to.split("-")[1] - 1,
              to.split("-")[0]
            );
        } else if (!isNaN(value)) {
          value = Number(value);
          from = from ? Number(from) : "";
          to = to ? Number(to) : "";
        }

        const matchesFrom = !from || value >= from;
        const matchesTo = !to || value <= to;

        return matchesFrom && matchesTo;
      });
    });
    console.log(filteredData);
    setData(filteredData);
    setIsFiltered(true);
    setIsOpenFiltr(false);
  };

  const handleSortChange = (e) => {
    setSortBy((prev) => ({ ...prev, sort: e.target.value }));
  };

  const handleOrderChange = (e) => {
    setSortBy((prev) => ({ ...prev, asc: e.target.value === "asc" }));
  };

  const handleSortAction = () => {
    const newData = [...data].sort((a, b) => {
      const field = sortBy.sort;
      const isAscending = sortBy.asc;
      let valueA = a[field];
      let valueB = b[field];
      let result;

      const isDate = (val) => /^\d{2}-\d{2}-\d{4}$/.test(val);

      if (isDate(valueA) && isDate(valueB)) {
        valueA = new Date(valueA.split("-").reverse().join("-"));
        valueB = new Date(valueB.split("-").reverse().join("-"));
      } else if (!isNaN(valueA) && !isNaN(valueB)) {
        valueA = +valueA;
        valueB = +valueB;
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        result = valueA.localeCompare(valueB);
      } else {
        result = (valueA || 0) - (valueB || 0);
      }

      return isAscending ? result : -result;
    });

    setIsSorted(true);
    setIsOpenSort(false);
    setData(newData);
  };

  const resetFilters = () => {
    setFilters(
      Object.fromEntries(
        sortByButtons.map((button) => [
          button,
          ["status", "country", "role", "city", "polica"].includes(button)
            ? []
            : { from: "", to: "" },
        ])
      )
    );
    setCheckboxFilters({
      status: new Set(),
      country: new Set(),
      role: new Set(),
      city: new Set(),
      polica: new Set(), // Add this back
    });
    setIsFiltered(false);
    setData(defaultData);
    setIsSorted(false);
  };

  return (
    <section className="sortFiltrButtons">
      <div className="sortFiltrButtons-container">
        <div className="sortFiltrButtons-flexButtons">
          <button
            className={`sortFiltrButtons-button ${isSorted && "active"}`}
            onClick={() => setIsOpenSort(!isOpenSort)}
          >
            Sort
          </button>
          <button
            className={`sortFiltrButtons-button ${isFiltered && "active"}`}
            onClick={() => setIsOpenFiltr(!isOpenFiltr)}
          >
            Filter
          </button>
          {isFiltered && (
            <button className="sortFiltrButtons-button" onClick={resetFilters}>
              Reset Filters
            </button>
          )}
        </div>
        {isOpenSort && (
          <div className="sortFiltrButtonsMenu">
            <div className="sortFiltrButtonsMenu-container">
              <div className="select-group">
                <label htmlFor="sortBy">Sort by:</label>
                <select
                  name="sortBy"
                  id="sortBy"
                  onChange={handleSortChange}
                  value={sortBy.sort}
                >
                  {sortByButtons.map((el, index) => (
                    <option value={el} key={index}>
                      {el.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select-group">
                <label htmlFor="orderBy">Order:</label>
                <select
                  name="orderBy"
                  id="orderBy"
                  onChange={handleOrderChange}
                  value={sortBy.asc ? "asc" : "desc"}
                >
                  <option value="asc">By increasing</option>
                  <option value="desc">In descending order</option>
                </select>
              </div>
            </div>
            <button className="Sort-button" onClick={handleSortAction}>
              Sort
            </button>
            <button
              className="Close-button"
              onClick={() => setIsOpenSort(false)}
            >
              Close
            </button>
          </div>
        )}
        {isOpenFiltr && (
          <div className="sortFiltrButtonsMenu">
            <div className="sortFiltrButtonsMenu-container">
              <div className="sortFiltrButtonsMenu-container-column">
                {sortByButtons.map((field, i) => (
                  <div className="filter-group" key={i}>
                    <p
                      style={{
                        textTransform: "capitalize",
                        display: `${
                          ["lastUpdate", "annualTill"].includes(field)
                            ? "none"
                            : "text"
                        }`,
                      }}
                    >
                      {field.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </p>
                    {["status", "country", "role", "city", "polica"].includes(
                      field
                    ) ? (
                      <div className="checkbox-group">
                        {Array.from(filterOptions[field]).map((option, j) => (
                          <label key={j} className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={
                                checkboxFilters &&
                                checkboxFilters[field].has(option)
                              }
                              onChange={() =>
                                handleCheckboxChange(field, option)
                              }
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div
                        className="inputFlex"
                        style={{
                          display: `${
                            ["lastUpdate", "annualTill"].includes(field)
                              ? "none"
                              : "text"
                          }`,
                        }}
                      >
                        <input
                          type={
                            ["lastUpdate", "annualTill"].includes(field)
                              ? "date"
                              : "text"
                          }
                          className="sortFiltrInputs"
                          placeholder="From"
                          value={filters[field]?.from || ""}
                          onChange={(e) =>
                            handleFilterChange(field, "from", e.target.value)
                          }
                        />
                        <input
                          type={
                            ["lastUpdate", "annualTill"].includes(field)
                              ? "date"
                              : "text"
                          }
                          className="sortFiltrInputs"
                          placeholder="To"
                          value={filters[field]?.to || ""}
                          onChange={(e) =>
                            handleFilterChange(field, "to", e.target.value)
                          }
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button className="Sort-button" onClick={handleFilterAction}>
              Filter
            </button>
            <button
              className="Close-button"
              onClick={() => setIsOpenFiltr(false)}
            >
              Close
            </button>
          </div>
        )}
        {addCustomers && (
          <div className="sortFiltrButtons-flexButtons">
            <Link
              to="/addCustomer"
              className={`sortFiltrButtons-button active`}
            >
              Add Customer
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
