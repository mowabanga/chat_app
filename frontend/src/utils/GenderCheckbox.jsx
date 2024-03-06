import React from "react";

export default function GenderCheckbox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-blue-300">Male</span>
        </label>
        <input type="checkbox" className="checkbox border-slate-400" />
      </div>

      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-blue-300">Female</span>
        </label>
        <input type="checkbox" className="checkbox border-slate-400" />
      </div>
    </div>
  );
}
