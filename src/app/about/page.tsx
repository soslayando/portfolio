import type { Metadata } from "next/types";
import { Article } from "../components/Article/Article";
import { ArticleParagraph, ArticleSection } from "../components/Article";

export const metadata: Metadata = {
  title:
    "About me - Jose Andrés Granero - Product Designer — Specialized in UX/UI Architecture & Design Systems",
};

export default function About() {
  return (
    <>
      <section className="flex flex-col-reverse items-stretch xl:gap-30 lg:items-center lg:flex-row lg:h-[calc(100vh-var(--header-height))] xl:max-h-[520px]">
        <div className="p-[var(--padding-base)] md:p-[var(--padding-base-md)] xl:py-25 flex-[1_1_85%] xl:flex-1">
          <ArticleSection
            heading="About me"
            headingTag="h1"
            headingSpacing="mb-12"
          >
            <ArticleParagraph>
              I'm a <strong>Product designer</strong> from Salamanca (Spain).
              I've been working on design for over 15 years — beginning with
              editorial and branding work, later transitioning to web projects,
              and the last seven years focusing on product design.
            </ArticleParagraph>
            <ArticleParagraph>
              Beyond design, I enjoy so many things — sports, music, books,
              comics, movies, TV shows, video games, traveling, painting
              watercolors... and spending time with my family (and my monkey,
              obviously &#x1F600;).
            </ArticleParagraph>
          </ArticleSection>
        </div>
        <div className="h-full relative">
          <div className="relative overflow-hidden flex-1 sm:h-[320px] lg:h-full">
            <img
              src="/assets/img/about-me.jpg"
              alt="Profile about image"
              className="min-[540px]:object-[0_-100px] sm:object-[0_-180px] lg:object-cover lg:object-center max-w-[none] lg:h-full w-full"
            />
          </div>
          <div className="text-sm mt-2 pl-8 lg:pl-0">
            I'm the one underneath.
          </div>
        </div>
      </section>
      <Article
        hideBackLink
        htmlTag="section"
        className="bg-[var(--secondary-color-strong)] flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between xl:gap-20"
      >
        <ArticleSection heading="Professional profile">
          <ArticleParagraph>
            Product designer experienced in complex digital products,
            specializing in scalable design systems, accessibility, and reusable
            component development.
          </ArticleParagraph>
          <ArticleParagraph>
            Expert in prototyping with Figma, design systems, HTML5, CSS3/SASS,
            CSS in JS, PostCSS, design tokens, and responsive design. I lead
            projects end-to-end, from UX research to front-end development, with
            a strong focus on visual consistency, performance, and user
            experience. Experienced leading teams and setting design standards
            in Agile environments.
          </ArticleParagraph>
        </ArticleSection>
        <a
          href="/assets/downloads/JAG-CV-comp.pdf"
          target="_blank"
          rel="noreferrer noopener"
          title="Open the PDF in a new tab"
          className="px-10 flex items-center flex-col py-3 rounded-full bg-gray-300/35 font-bold text-lg hover:bg-gray-300/80 transition ease-in-out duration-150 md:min-w-[400px]"
        >
          <span>Get my CV – Resume</span>
          <span className="text-sm text-gray-500 font-normal">
            PDF · Updated 2025
          </span>
        </a>
      </Article>
      <section className="flex flex-col xl:flex-row">
        <Article hideBackLink className="pb-15 xl:pb-20">
          <ArticleSection heading="Work experience">
            <ArticleSection
              heading="Product Designer · UX/UI Architect"
              headingTag="h3"
              headingSize="h4"
              append="Devo"
              lead="From July 2018 to September 2025 / Madrid - remote"
            >
              <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
                <li>
                  Design and development of the main interface for Devo’s data
                  analytics platform.
                </li>
                <li>
                  Co-creator of the Design System: React components library,
                  system documentation using Storybook, style library based on
                  SASS, custom icon library and design tokens system.
                </li>
                <li>
                  Participation in UX processes: wireframing, prototyping, user
                  validation... etc.
                </li>
                <li>
                  Focus on accessibility, responsive design, and scalability.
                </li>
                <li>
                  Tools: Figma, GitLab CI/CD, GitHub, Storybook, Jira and
                  Confluence.
                </li>
              </ul>
            </ArticleSection>
            <ArticleSection
              heading="Design Lead"
              headingTag="h3"
              headingSize="h4"
              append="Saga Soluciones"
              lead="From October 2012 to July 2018 / Seville"
            >
              <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
                <li>
                  Designed and developed 40+ portals with OpenCms, HTML/CSS,
                  Bootstrap, JS.
                </li>
                <li>
                  Delivered training and led accessibility (AA compliance)
                  migrations.
                </li>
                <li>
                  Clients: Acerinox, Aldi, universities, municipalities,
                  provincial councils...
                </li>
              </ul>
            </ArticleSection>
            <ArticleSection
              heading="Creative Director & Co-Founder"
              headingTag="h3"
              headingSize="h4"
              append="Teléfono rojo publicidad"
              lead="From November 2005 to October 2012 / Seville"
            >
              <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
                <li>
                  Directed campaigns, branding, and corporate websites for NGOs
                  and institutions.
                </li>
                <li>
                  Clients included Agencia Progreso y Salud, Solidaridad
                  Internacional, ENRICH, Zemos98... etc.
                </li>
              </ul>
            </ArticleSection>
          </ArticleSection>
        </Article>
        <Article hideBackLink className="pt-0 xl:pt-25 xl:pl-[0]">
          <ArticleSection heading="Education" headingSize="h3">
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                <strong>Design Systems for Digital Products</strong>
                <p className="text-lg text-gray-500 italic mb-4">
                  2019 / Fictizia, Madrid
                </p>
              </li>
              <li>
                <strong>
                  Bachelor's Degree in Market Research and Techniques
                </strong>
                <p className="text-lg text-gray-500 italic mb-4">
                  2007-2011 / University of Seville
                </p>
              </li>
              <li>
                <strong>
                  Bachelor's Degree in Advertising and Public Relations
                </strong>
                <p className="text-lg text-gray-500 italic mb-4">
                  2001-2005 / University of Seville
                </p>
              </li>
            </ul>
          </ArticleSection>
          <ArticleSection heading="Skills" headingSize="h3">
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                <strong>Design:</strong> UX/UI, Design Systems, Responsive
                Design, Accessibility (WCAG).
              </li>
              <li>
                <strong>Frontend:</strong> HTML5, CSS3/SASS, TypeScript, React,
                Tailwind, Bootstrap, jQuery.
              </li>
              <li>
                <strong>Tools:</strong> Figma, Lovable, Storybook,
                GitHub/GitLab, Confluence.
              </li>
              <li>
                <strong>CMS:</strong> OpenCms, WordPress, Magento.
              </li>
              <li>
                <strong>Graphic design:</strong> Photoshop, Illustrator,
                InDesign.
              </li>
            </ul>
          </ArticleSection>
        </Article>
      </section>
    </>
  );
}
