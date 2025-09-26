import React from "react";

const Resolved = ({ complete }) => {
  return (
    <div className=" p-3 rounded-xl space-y-2">
      {complete.length === 0 ? (
        <h1 className="text-gray-500">No resolved task yet</h1>
      ) : (
        complete.map((com) => (
          <div className="p-3 bg-blue-100 rounded-lg shadow-sm">
            <h1 className="font-semibold text-[18px] ">{com.title}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default Resolved;
