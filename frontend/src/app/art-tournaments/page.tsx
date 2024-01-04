import React from "react";

const page = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((item, idx) => (
        <div className="w-32 aspect-square"></div>
      ))}
    </div>
  );
};

export default page;
