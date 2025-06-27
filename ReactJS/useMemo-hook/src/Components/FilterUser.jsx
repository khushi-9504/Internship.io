import { useState, useMemo } from "react";
import users from "../Data/users";

const FilterUser = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]); // Recalculate only when search changes

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Search (Filtered List with useMemo)</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterUser;
