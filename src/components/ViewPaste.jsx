import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";
import React, { useEffect, useState } from "react";

const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);
  console.log("Final Paste: ", paste)

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-md mt-2 w-[66%] place-content-evenly bg-cyan-200 mr-2 "
          type="text"
          placeholder="Enter title here"
          value={paste?.title}
          disabled
          onChange={(e) => settitle(e.target.value)}
        />
        {/* <button onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>
      <div>
        <textarea
          className="p-2 mt-4 bg-amber-100 w-full"
          value={paste?.content}
          placeholder="Enter Content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
