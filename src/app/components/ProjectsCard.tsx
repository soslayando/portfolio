"use client";

import * as React from "react";
import Image from "next/image";
import { IoLinkOutline, IoLogoFigma, IoLogoGithub } from "react-icons/io5";
import type { ArticleCardProps } from "@/types/article";

export const ProjectsCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  featured,
  headingHtmlTag = "h3",
  image,
  imageHeight,
  imageWidth,
  imageAlt,
  slug,
  githubLink,
  storybookLink,
  figmaLink,
}) => {
  const HeadingHtmlTag = headingHtmlTag as React.ElementType;
  return (
    <div className="card card--project flex flex-col">
      <a
        href={`/projects/${slug}`}
        className="max-w-[1078px] overflow-hidden border border-gray-200"
        title={`View project '${title}'`}
      >
        <Image
          width={imageWidth || 800}
          height={imageHeight || 600}
          src={image}
          alt={imageAlt}
          className="object-cover transition-all duration-200 hover:scale-110 hover:saturate-150"
        />
      </a>
      <div className="px-1 py-6 max-w-[var(--max-width-text)]">
        <HeadingHtmlTag
          className={`${
            featured ? "text-3xl font-extrabold" : "text-[24px] font-bold"
          } font-heading mb-5`}
        >
          {title}
        </HeadingHtmlTag>
        <p
          className={`${featured ? "text-2xl text-gray-600" : "text-gray-500"}`}
        >
          {description}
        </p>
        <div className="flex items-center justify-between mt-6">
          <a
            href={`/projects/${slug}`}
            title={`View project '${title}'`}
            className={`${
              featured
                ? "px-8 py-4 min-w-[200px] text-lg text-center"
                : "px-4 py-3 text-sm"
            } bg-[var(--primary-color-weak)] font-medium text-white rounded cursor-pointer hover:bg-[var(--primary-color-weaker)] transition-colors duration-150 ease-in-out`}
          >
            View Project
          </a>
          {(githubLink || storybookLink || figmaLink) && (
            <div className="ml-2 flex items-center flex-0 space-x-3 text-gray-700">
              {figmaLink && (
                <a
                  href={figmaLink}
                  className="text-1xl transform transition-transform duration-100 ease-in hover:scale-120"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to the Figma design (new tab)"
                >
                  <IoLogoFigma />
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  className="text-2xl transform transition-transform duration-100 ease-in hover:scale-120"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Got to the Github repository (new tab)"
                >
                  <IoLogoGithub />
                </a>
              )}
              {storybookLink && (
                <a
                  href={storybookLink}
                  className="text-2xl transform transition-transform duration-100 ease-in hover:scale-120"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to the Storybook docs (new tab)"
                >
                  <IoLinkOutline />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
