import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
    const base = "inline bg-yellow-400 uppercase font-semibold text-stone-800 text-sm tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "

    const styles = {
      primary: base + 'px-3 py-2 md:px-6 md:py-4',
      secondary: "inline uppercase font-semibold text-stone-800 text-sm tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:text-stone-800 focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-stone-300 px-4 py-2 md:px-5 md:py-3.5",
      small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
      round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm'
    }

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if(onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
