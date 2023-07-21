import React from "react";

const QuantityBox = ({ stock, qty, setQty }) => {
  return (
    <div className="flex gap-0 outline-none">
      <button
        className="bg-violet-900 text-white text-lg px-4 py-3 hover:bg-violet-800 active:bg-violet-950"
        onClick={() => setQty((state) => (state - 1 > 0 ? state - 1 : state))}
      >
        -
      </button>

      <input type="number" className="bg-zinc-50 w-16 p-2" value={qty} />
      <button
        className="bg-violet-900 text-white text-lg px-4 py-3 hover:bg-violet-800 active:bg-violet-950"
        onClick={() =>
          setQty((state) => (state + 1 < stock ? state + 1 : state))
        }
      >
        +
      </button>
    </div>
  );
};

export default QuantityBox;
