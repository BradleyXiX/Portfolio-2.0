import React from "react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  source,
  image,
  tags,
  setPreview,
}) => {
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:underline text-white hover:text-sand transition-colors"
            >
              {title}
            </a>
          ) : (
            <p className="text-2xl">{title}</p>
          )}
          <p className="text-sm text-neutral-400 mt-2 max-w-xl">
            {description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sand flex-wrap">
            {tags?.map((tag) => (
              tag.path ? (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="w-10 h-10 p-2 bg-neutral-800 border border-neutral-700 rounded-full object-contain"
                />
              ) : (
                <span key={tag.id} className="text-xs border border-neutral-700 text-neutral-300 rounded px-2 py-1 bg-neutral-800">
                  {tag.name}
                </span>
              )
            ))}
          </div>
        </div>
        {source && source !== "#" && (
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 cursor-pointer hover-animation text-sand mt-4 sm:mt-0 border border-neutral-700 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <img src="/assets/logos/github.svg" alt="GitHub" className="w-5 h-5" />
            <span className="text-sm">Source Code</span>
          </a>
        )}
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </>
  );
};

export default Project;
