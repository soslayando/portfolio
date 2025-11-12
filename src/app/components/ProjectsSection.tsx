"use client";

import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../data/projects";
import Link from "next/link";

export const ProjectsSection = () => {
  const renderProjectCards = ({
    category,
    featured = false,
  }: {
    category: string;
    featured: boolean;
  }) =>
    projects
      .filter(
        (p) =>
          p.cat.includes(category) &&
          (featured ? p.cat.includes("featured") : !p.cat.includes("featured"))
      )
      .map((project, idx) => (
        <ProjectsCard
          {...project}
          key={`${project.slug}-${idx}`}
          featured={featured}
          headingHtmlTag={featured ? "h3" : "h4"}
          title={project.shortTitle || project.title}
          description={project.shortDescription || project.description}
        />
      ));
  return (
    <>
      {/* Section index header */}
      <section aria-labelledby="projects-heading" id="projects">
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
      </section>
      {/* -- Genesys design system -------------------------------------------------------------------------- */}
      <section
        aria-labelledby="ds-heading"
        className="bg-[var(--projects-bg-color)] px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10  md:py-25"
      >
        <div className="mb-16 max-w-[var(--max-width-text-lg)]">
          <h2
            id="ds-heading"
            className="text-5xl font-extrabold mb-10 font-heading"
          >
            Genesys design system
          </h2>
          <p className="text-[28px] text-gray-700">
            At{" "}
            <Link
              href="https://devo.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Devo corporative web (new tab)"
              className="text-[var(--primary-color-weaker)] font-bold hover:underline hover:underline-offset-4"
            >
              Devo
            </Link>{" "}
            I co-created the entire design system and its core foundations —
            including the component library, styles, icon set, and design
            tokens. It's a large-scale project that began more than five years
            ago and continues to evolve.
          </p>
        </div>
        <div>
          <div className="mb-10">
            {renderProjectCards({ category: "design-system", featured: true })}
          </div>
          <div>
            <div className="relative flex flex-row items-center mb-12">
              <h3 className="text-lg uppercase tracking-widest font-heading">
                Related Projects
              </h3>
              <div className="w-[calc(100%-220px)] h-[1px] bg-black/15 absolute top-[50%] translate-[0,-50%] ml-[220px]"></div>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 grid-container gap-8 md:gap-16">
              {renderProjectCards({
                category: "design-system",
                featured: false,
              })}
            </div>
          </div>
        </div>
      </section>
      {/* -- Devo UI Refactor -------------------------------------------------------------------------- */}
      <section
        aria-labelledby="refactor-heading"
        className="bg-white px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10  md:py-25"
      >
        <div className="mb-16 max-w-[var(--max-width-text-lg)]">
          <h2
            className="text-5xl font-extrabold mb-10 font-heading"
            id="refactor-heading"
          >
            App UI refactor
          </h2>
          <p className="text-[28px] text-gray-700">
            At{" "}
            <Link
              href="https://devo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color-weaker)] font-bold underline-offset-4"
            >
              Devo
            </Link>{" "}
            I was part of one of the company's largest UI initiatives: a full
            app redesign and refactor grounded in the new design system and
            design patterns.
          </p>
        </div>
        <div>
          <div className="mb-10">
            {renderProjectCards({ category: "ui-refactor", featured: true })}
          </div>
          {projects.filter(
            (project) =>
              project.cat.includes("ui-refactor") &&
              !project.cat.includes("featured")
          ).length > 0 && (
            <div>
              <div className="relative flex flex-row items-center mb-12">
                <h3 className="text-lg uppercase tracking-widest font-heading">
                  Related projects
                </h3>
                <div className="w-[calc(100%-220px)] h-[1px] bg-black/15 absolute top-[50%] translate-[0,-50%] ml-[220px]"></div>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 grid-container gap-8 md:gap-16">
                {renderProjectCards({
                  category: "ui-refactor",
                  featured: false,
                })}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* -- Devo AB Redesign -------------------------------------------------------------------------- */}
      <section
        aria-labelledby="refactor-heading"
        className="bg-[var(--projects-bg-color)] px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10  md:py-25"
      >
        <div className="mb-16 max-w-[var(--max-width-text-lg)]">
          <h2
            className="text-5xl font-extrabold mb-10 font-heading"
            id="refactor-heading"
          >
            Dashboard UI Redesign
          </h2>
          <p className="text-[28px] text-gray-700">
            Also at{" "}
            <Link
              href="https://devo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color-weaker)] font-bold underline underline-offset-4"
            >
              Devo
            </Link>{" "}
            I took part in one of the company’s major UI initiatives — a
            complete redesign of the Dashboard section, aimed at solving
            multiple user issues that had accumulated over time.
          </p>
        </div>
        <div>
          <div className="mb-10">
            {renderProjectCards({
              category: "dashboard-redesign",
              featured: true,
            })}
          </div>
          {projects.filter(
            (project) =>
              project.cat.includes("dashboard-redesign") &&
              !project.cat.includes("featured")
          ).length > 0 && (
            <div>
              <div className="relative flex flex-row items-center mb-12">
                <h3 className="text-lg uppercase tracking-widest font-heading">
                  Related projects
                </h3>
                <div className="w-[calc(100%-220px)] h-[1px] bg-black/15 absolute top-[50%] translate-[0,-50%] ml-[220px]"></div>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 grid-container gap-8 md:gap-16">
                {renderProjectCards({
                  category: "dashboard-redesign",
                  featured: false,
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
