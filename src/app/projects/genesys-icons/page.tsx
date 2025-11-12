import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { IArticle } from "@/types/article";
import { projects } from "@/app/data";

import {
  Article,
  ArticleFeaturedWrapper,
  ArticleFeaturedWrapperItem,
  ArticleGrid,
  ArticleImageBlock,
  ArticleParagraph,
  ArticleSection,
  Link,
} from "@/app/components";

export const metadata: Metadata = {
  title:
    "Genesys icons case study - Jose Andrés Granero - Product Designer - Specialized in UX/UI Architecture & Design Systems",
};

export default function GenesysIcons() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "genesys-icons"
  );

  if (!project) {
    notFound();
  }

  return (
    <Article
      title={project.title}
      intro={project.description}
      tags={project.tags}
      role={project.role}
      figmaLink={project.figmaLink}
      githubLink={project.githubLink}
      storybookLink={project.storybookLink}
    >
      {/* OVERVIEW ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Overview">
        <ArticleParagraph>
          The library was created to{" "}
          <strong>streamline and standardize iconography</strong>
          across product and engineering teams, providing a unified, reusable
          set of SVG and font-based icons, as well as React components built in
          TypeScript.
        </ArticleParagraph>
        <ArticleParagraph>
          This initiative was part of a broader effort to strengthen the design
          system's foundations, ensuring that visual language, accessibility,
          and implementation were coherent across platforms. The result was a
          <strong>versatile icon library</strong> capable of evolving alongside
          the company's design language and development needs.
        </ArticleParagraph>
      </ArticleSection>
      {/* CHALLENGE ----------------------------------------------------------------------------- */}
      <ArticleSection heading="The Challenge">
        <ArticleParagraph>
          Before this project,{" "}
          <strong>icon usage was fragmented and inconsistent</strong>. Multiple
          teams used different icon sets, naming conventions, and formats,
          causing visual clutter, confusion, and duplication. This also slowed
          development, as engineers often had to import or recreate assets
          manually.
        </ArticleParagraph>
        <ArticleParagraph>
          The main challenge was to design a system that would{" "}
          <strong>centralize all icons while maintaining flexibility</strong>.
          It needed to work across technologies, support accessibility, and
          scale easily while remaining maintainable by designers and developers.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-icons/img/icons-abuse-1.png"
            height={508}
            alt="Example of icon overuse before Genesys Icons"
            title="Before: Excessive icons"
            className="order-2 lg:order-1"
            description="Two examples of sections before the creation of Genesys Icons,
          so there is a excessive use of icons, As a result, the usefulness of the icons
          is lost, because they are representing actions so complex that the icons no longer
          clarify their meaning, so instead, they add visual noise."
          />
          <ArticleImageBlock
            src="/projects/genesys-icons/img/icons-abuse-2.png"
            height={457}
            alt="Example of icon overuse before Genesys Icons"
            className="order-1 lg:order-2"
          />
          <ArticleImageBlock
            src="/projects/genesys-icons/img/icons-better-use-1.png"
            height={500}
            alt="Example of improved icon usage after Genesys Icons"
            title="After: Balanced icon usage"
            className="order-4 lg:order-3"
            description="Two examples of sections after Genesys Icons, 
            showing intentional icon use only when it reinforces the action."
          />
          <ArticleImageBlock
            src="/projects/genesys-icons/img/icons-better-use-2.png"
            height={667}
            alt="Example of improved icon usage after Genesys Icons"
            className="order-3 lg:order-4"
          />
        </ArticleGrid>
      </ArticleSection>
      {/* PROCESS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Process & Collaboration">
        <ArticleParagraph>
          Designers can easily add new icons by{" "}
          <strong>uploading SVG files</strong>, while an automated script
          handles conversion into React components.
        </ArticleParagraph>
        <ArticleParagraph>
          We built a living <strong>documentation site in Storybook</strong>,
          where each icon is organized, previewed, and explained. It includes a
          gallery with advanced search based on SVG attributes like title and
          description.
        </ArticleParagraph>
        <ArticleParagraph>
          This process reduced handoff friction and ensured designers and
          developers remained aligned, always working with{" "}
          <strong>the same up-to-date assets</strong>.
        </ArticleParagraph>
      </ArticleSection>
      {/* DEVELOPMENT APPROACH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Development Approach">
        <ArticleParagraph>
          The library was built entirely in React and TypeScript for type safety
          and scalability. Each icon component is lightweight, reusable, and
          performance-optimized, letting developers import only what is needed.
          This keeps <strong>bundle sizes low</strong> while maintaining
          flexibility.
        </ArticleParagraph>
        <ArticleParagraph>
          This is the main structure of the project:
        </ArticleParagraph>
        <ArticleParagraph htmlTag="div">
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            <code>
              {`
/ (root)
├─ .github/
│   └─ … (workflows, templates)
├─ .storybook/
│   └─ … (Storybook config)
├─ icons/ (the SVG icon set)
├─ scripts/ (to generate components from SVGs)
├─ src/ (React components, utils... etc.)
│   ├── /components
│   │   ├── /IconBase
│   │   │   ├── IconBase.test.tsx
│   │   │   ├── IconBase.tsx
│   │   │   └── index.ts
│   ├── /context
│   └── index.ts
├─ stories/
├─ test/
├─ vendor/
│   └─ original_project/
├─ .gitignore
├─ .prettierrc
├── package.json
├── tsconfig.json
├── README.md
└── … other configuration files (config, oxlintrc, …)
          `}
            </code>
          </pre>
        </ArticleParagraph>
        <ArticleParagraph>
          Anyway, this is just an excerpt of the project structure to give you
          an idea of how it's organized. This is the link to{" "}
          <Link
            href="https://github.com/genesys-ui/icons"
            title="Go to the GitHub repository (new tab)"
          >
            Github repository
          </Link>{" "}
          in case you want to check more details
        </ArticleParagraph>
        <ArticleParagraph>
          We also implemented automated testing and version control through
          GitHub Actions, ensuring safe deployments via npm. This maintained
          visual and technical integrity as the system scaled.
        </ArticleParagraph>
      </ArticleSection>
      {/* IMPACT & OUTCOMES ----------------------------------------------------------------------------- */}
      <ArticleFeaturedWrapper heading="Impact & Outcomes">
        <ArticleGrid columns={3}>
          <ArticleFeaturedWrapperItem heading="Consistency and collaboration">
            The new icon library immediately improved{" "}
            <strong>cross-team collaboration</strong>, and the centralized
            system accelerated onboarding for new contributors.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Reduced developing time">
            Development time for adding or updating icons{" "}
            <strong>dropped over 50%</strong>, while visual inconsistencies
            across products were nearly eliminated.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Improved the design system">
            <strong>The design system became more robust</strong> and reliable,
            contributing to a cohesive user experience and consistent brand
            perception.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            inverted
            src="/projects/genesys-icons/img/icons-gallery.png"
            height={432}
            alt="Storybook gallery for icons"
            title="Storybook documentation for icons"
            description="The Storybook documentation is built around a gallery
            that lets designers and developers search icons by name or related tags.
            It also provides live previews, the option to copy the icon name for font usage,
            download the asset, copy its React component definition, or directly download the SVG."
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-icons/img/icons-gallery-preview.png"
            height={432}
            alt="Storybook gallery for icons"
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-icons/img/icons-react-playground.png"
            height={543}
            alt="Storybook gallery for icons"
            title="React version playground"
            description="The Icon React component playground on Storybook: designers and developers
            can tweak component props, preview changes in real time, and easily copy the resulting code"
          />
        </ArticleGrid>
      </ArticleFeaturedWrapper>
      {/* LEARNINGS & NEXT STEPS  ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Learnings & Next Steps">
        <ArticleParagraph>
          This project highlighted the importance of creating a{" "}
          <strong>
            shared language that empowers designers and developers
          </strong>
          . Automating repetitive tasks, such as component generation and
          documentation, freed time for creative problem-solving and
          higher-level system thinking.
        </ArticleParagraph>
        <ArticleParagraph>
          Looking forward, next steps include expanding the library with new
          icon sets, and especially{" "}
          <strong>
            enhancing the Storybook gallery search through semantic naming
          </strong>{" "}
          and accurate, descriptive tags.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
