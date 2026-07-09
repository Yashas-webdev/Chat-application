import React from "react";
import Otheruser from "./Otheruser";

function Otherusers({ users }) {
  if (!users) return null;

  return (
    <div className="overflow-auto flex-1">
      {users.map((user) => (
        <Otheruser key={user._id} user={user} />
      ))}
    </div>
  );
}

export default Otherusers;