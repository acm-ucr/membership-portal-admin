import React from "react";
import { FaFileAlt, FaYoutube, FaGithub } from "react-icons/fa";

const ResourceTile = ({
  title,
  date,
  documentLink,
  youtubeLink,
  githubLink,
}) => {
  return (
    <div>
      <p className="m-0">{title}</p>
      <p className="m-0">{date}</p>
      <div className="flex items-center justify-center ">
        {documentLink && (
          <a
            href={documentLink}
            target="_blank"
            className="inline p-2"
            rel="noreferrer"
          >
            <FaFileAlt className="text-4xl text-acm-blue hover:text-acm-black" />
          </a>
        )}

        {youtubeLink && (
          <a
            href={youtubeLink}
            target="_blank"
            className="inline p-2"
            rel="noreferrer"
          >
            <FaYoutube className="text-4xl text-acm-white hover:text-acm-blue" />
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className="inline p-2"
            rel="noreferrer"
          >
            <FaGithub className="text-4xl text-acm-white hover:text-acm-blue" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ResourceTile;
