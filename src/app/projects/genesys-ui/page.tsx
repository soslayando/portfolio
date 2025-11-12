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
    "Genesys UI component library case study - Jose Andrés Granero - Product Designer - Specialized in UX/UI Architecture & Design Systems",
};

export default function GenesysUIComponents() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "genesys-ui"
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
          The component library was conceived as a bridge between design and
          development at Devo. Built with React, TypeScript, and Styled
          Components, it formed the foundation of our design system, enabling
          consistency and scalability across products.My role combined{" "}
          <strong>design leadership with front-end implementation</strong>,
          ensuring visual fidelity and usability were preserved from Figma to
          code.
        </ArticleParagraph>
        <ArticleParagraph>
          The initiative wasn't just about components, it was about{" "}
          <strong>building a shared language between teams</strong>. By aligning
          design tokens, interaction patterns, and documentation, we created a
          unified toolkit that accelerated delivery and simplified
          collaboration.
        </ArticleParagraph>
      </ArticleSection>
      {/* CHALLENGE ----------------------------------------------------------------------------- */}
      <ArticleSection heading="The Challenge">
        <ArticleParagraph>
          Before the library existed,{" "}
          <strong>each team developed its own UI elements</strong>, resulting in
          fragmented user experiences and inconsistent visual quality. Design
          handoffs were time-consuming, and developers often had to rebuild
          components from scratch without a clear source of truth. Maintaining
          cohesion across multiple products became increasingly difficult.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-ui/img/alerts-creation-old.png"
            width={1122}
            height={682}
            alt="Before Genesys UI example showing inconsistent components"
            className="order-2 lg:order-1"
            title="Before"
            description="Two examples of sections before Genesys UI. 
            Components were defined inconsistently: varying font sizes, help blocks, filters, etc."
          />
          <ArticleImageBlock
            src="/projects/genesys-ui/img/user-manage.png"
            width={1238}
            height={700}
            alt="Before Genesys UI example showing inconsistent components"
            className="order-1 lg:order-2"
          />
          <ArticleImageBlock
            src="/projects/genesys-ui/img/retention-time-manager.png"
            width={1280}
            height={808}
            alt="After Genesys UI example showing consistent components"
            className="order-4 lg:order-3"
            title="After"
            description="Two examples of sections after Genesys UI. 
            We now use the same components across the product, greatly improving consistency."
          />
          <ArticleImageBlock
            src="/projects/genesys-ui/img/alerts-sending-policies.png"
            width={1280}
            height={810}
            alt="After Genesys UI example showing consistent components"
            className="order-3 lg:order-4"
          />
        </ArticleGrid>
      </ArticleSection>
      {/* PROCESS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Process & Collaboration">
        <ArticleParagraph>
          <strong>I worked directly on the codebase</strong> with frontend
          engineers, creating components, writing documentation, and setting up
          Storybook as the central hub for the design system. This hands-on
          approach bridged gaps, addressed challenges in real-time, and ensured
          the library met both design and technical standards.
        </ArticleParagraph>
        <ArticleParagraph>
          In addition, there was{" "}
          <strong>close collaboration between designers and engineers</strong>.
          We mapped existing inconsistencies, defined shared goals, and
          translated the visual language into reusable patterns. Regular
          design-dev syncs, version reviews, and feedback loops validated every
          decision.
        </ArticleParagraph>
      </ArticleSection>
      {/* DESIGN ALIGNMENT ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Design & Code Alignment">
        <ArticleParagraph>
          Colors, typography, spacing, sizing, transitions, shape, and elevation
          were{" "}
          <strong>
            defined as tokens to ensure consistency and flexibility
          </strong>
          . Tokens were integrated in both Figma and code, allowing designers
          and developers to work with the same visual language.
        </ArticleParagraph>
        <ArticleParagraph>
          The design tokens library output was integrated with Figma using
          variables. This ensures the{" "}
          <strong>same theme in React components and Figma</strong>, maintaining
          100% design-to-code fidelity.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-ui/img/design-tokens-docs.png"
            width={800}
            height={419}
            alt="Design tokens documentation in Storybook"
            title="Design tokens documentation"
            description={
              <>
                <Link
                  href="https://genesys-ui.github.io/theme-devo"
                  title="Sotorybook documentation for Genesys design tokens (new tab)"
                >
                  Design tokens documentation
                </Link>{" "}
                created in Storybook, so both designers and developers can check
                the available tokens for colors, typography, spacing, sizing,
                etc. We have an advanced search system to find tokens easily;
                for example, filtering by text, regex, schema (dark/light),
                format (JS, JSON, CSS...) and by the naming category."
              </>
            }
          />
          <ArticleImageBlock
            src="/projects/genesys-ui/img/figma-aligned-tokens.png"
            width={1279}
            height={881}
            alt="Design tokens in Figma"
            title="Single source of truth for Design tokens"
            description="This a detail of the Figma library showing the design tokens
          integrated as Figma variables. This way, designers can use the same tokens
          defined in code, ensuring 100% consistency between design and development."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* DEVELOPMENT APPROACH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Development Approach">
        <ArticleParagraph>
          The library was built in <strong>React with TypeScript</strong> using
          Styled Components for modular, themeable styling. Each component
          resides in its own folder (logic, styles, and stories combined) making
          the codebase predictable and maintainable.
        </ArticleParagraph>
        <ArticleParagraph>
          <strong>I helped shape a monorepo architecture</strong> designed for
          scalability and collaboration. Each package has a clear purpose: core
          components, utilities, tables, uploaders; all aligned under a single
          design language.
        </ArticleParagraph>
        <ArticleParagraph>
          This is the main structure of the project:
        </ArticleParagraph>
        <ArticleParagraph>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            <code>
              {`
  / (root)
  ├─ .github/
  │   └─ … (workflows, templates)
  ├─ .storybook/
  │   └─ … (Storybook config)
  ├─ packages/
  │   ├─ core/
  │   ├─ color/
  │   ├─ upload/
  │   ├─ datetime/
  │   ├─ code/
  │   └─ table/
  ├─ stories/
  │   └─ getting-started/
  ├─ test/
  │   └─ … (several tests)
  ├─ CHANGELOG.md
  ├─ README.md
  ├─ package.json
  ├─ tsconfig.json
  └─ … other configuration files (prettierrc, npmrc,…)
          `}
            </code>
          </pre>
        </ArticleParagraph>
        <ArticleParagraph>
          And this is the main structure of the core package:
        </ArticleParagraph>
        <ArticleParagraph>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            <code>
              {`
/packages/core
├── /src
│   ├── /components
│   │   ├── /Button
│   │   │   ├── /components
│   │   │   │   ├── /ButtonAddon
│   │   │   │       ├── ButtonAddon.tsx
│   │   │   │       ├── StyledButtonAddon.ts
│   │   │   │       ├── declarations.ts
│   │   │   │       └── index.ts
│   │   │   │   ├── /ButtonAddon
│   │   │   │   ├── /ButtonBadge
│   │   │   │   ├── /ButtonContainer
│   │   │   │   ├── /ButtonDropdownIcon
│   │   │   │   ├── /ButtonIcon
│   │   │   │   ├── /ButtonLabel
│   │   │   │   ├── /ButtonLoader
│   │   │   │   ├── /ButtonSelection
│   │   │   │   └── index.ts
│   │   │   ├── Button.mdx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── constants.ts
│   │   │   ├── declarations.ts
│   │   │   ├── helpers.tsx
│   │   │   └── index.ts
│   │   ├── /Input
│   │   ├── /Modal
│   │   ├── ...
│   │   └── index.ts
│   ├── /constants
│   ├── /declarations
│   ├── /helpers
│   ├── /hooks
│   ├── /styled
│   ├── /typeFunctions
│   └── /utils
│   ├── /stories
│   │   ├── /components
│   │   │   ├── /StoryWrapper
│   │   │   └── /styled
│   │   ├── /partials
│   │   └── /utils
├── package.json
├── tsconfig.json
├── README.md
└── … other configuration files (prettierrc, npmrc,…)
          `}
            </code>
          </pre>
        </ArticleParagraph>
        <ArticleParagraph>
          Anyway, this is just an excerpt of the project structure to give you
          an idea of how it's organized. This is the link to{" "}
          <Link
            href="https://github.com/genesys-ui/react"
            title="Go to the Github repository (new tab)"
          >
            Github repository
          </Link>{" "}
          in case you want to check more details
        </ArticleParagraph>
        <ArticleParagraph>
          Storybook served as both a{" "}
          <strong>documentation hub and a testing environment</strong>, allowing
          teams to preview props, states, and variants interactively. Components
          were versioned and published via npm, ensuring smooth updates and
          CI/CD integration across multiple applications.
        </ArticleParagraph>
      </ArticleSection>
      {/* IMPACT & OUTCOMES ----------------------------------------------------------------------------- */}
      <ArticleFeaturedWrapper heading="Impact & Outcomes">
        <ArticleGrid columns={3}>
          <ArticleFeaturedWrapperItem heading="Consistency and accessibility">
            The new system reduced handoff time and{" "}
            <strong>unified over 100 screens</strong> under a single visual
            language using the same UI components. In addition, all components
            meet <strong>AA accessibility standards</strong>.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Ready-to-use">
            Beyond metrics, the system strengthened collaboration. Engineers
            benefit from <strong>reliable, flexible components</strong> ;while
            designers are confident in implementation. Specially, due to I was
            implementing and creating the documentation of the library. It also
            improved onboarding for new team members, who could now build with
            clarity and consistency from day one.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Consistency and accessibility">
            Components and documentation facilitate{" "}
            <strong>long-term maintenance</strong> and easy scaling across
            applications.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            inverted
            src="/projects/genesys-ui/img/button-component-page-1.png"
            height={432}
            alt="Storybook documentation for components"
            className="order-2 lg:order-1"
            title="Storybook documentation for components"
            description="Two examples of the Storybook documentation for one of the system components (Button), 
          showing the different properties and states the component can have, as well as usage examples.
          The component page is usually structured in these sections: how to import, basic usage, variants
          and states, usage tips, internal and related components as well as its props table."
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-ui/img/button-component-page-2.png"
            height={443}
            alt="Storybook documentation for components"
            className="order-1 lg:order-2"
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-ui/img/button-component-playground.png"
            width={800}
            height={526}
            alt="Playground for components in Storybook"
            className="order-4 lg:order-3"
            title="Playground for components in Storybook"
            description="This is a detailed view of the props playground in Storybook, in this case, the Button component.
          It represents one of the core sections of every component in the library, where designers and developers
          can interactively test different properties and instantly see the results. They can also copy the
          corresponding code snippet for any selected configuration."
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-ui/img/datetime-component.png"
            className="order-3 lg:order-4"
            width={800}
            height={526}
            alt="Complex components"
            title="Complex components"
            description="The library doesn't just include foundational components (Button,
            Badge, Tag, or Input), it also supports complex, composite ones. The example above 
            shows a date-time range floating picker, a good demonstration of how these advanced 
            components are built from smaller, foundational pieces within the same atomic ecosystem."
          />
        </ArticleGrid>
      </ArticleFeaturedWrapper>
      {/* LEARNINGS & NEXT STEPS  ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Learnings & Next Steps">
        <ArticleParagraph>
          Building the component library showed that the challenge extends
          beyond the code. <strong>Documenting everything</strong>: use cases,
          naming conventions, feedback loops ensures alignment and long-term
          success.
        </ArticleParagraph>
        <ArticleParagraph>
          Next steps focus on <strong>improving consistency</strong> across
          components: prop naming, interfaces, hook usage, and internal
          structure. We also plan to phase out Styled Components in favor of a
          class-based approach powered by a{" "}
          <strong>custom PostCSS library</strong>.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
