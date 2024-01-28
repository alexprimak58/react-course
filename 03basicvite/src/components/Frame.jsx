import React from "react";

function Frame({ username = "changeAn", dumptext = "Tailwind" }) {
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">{dumptext}</p>
          </blockquote>
          <figcaption cl>
            <div>{username}</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Frame;
