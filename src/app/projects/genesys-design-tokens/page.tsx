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
  ArticleList,
  ArticleParagraph,
  ArticleSection,
  Link,
} from "@/app/components";

export const metadata: Metadata = {
  title:
    "Genesys design tokens case study - Jose Andrés Granero - Product Designer - Specialized in UX/UI Architecture & Design Systems",
};

export default function GenesysDesignTokens() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "genesys-design-tokens"
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
          Once the design system was launched, one thing became immediately
          clear: our designs looked great in Figma, but translating them into
          code was messy. Colors, typography, and spacing were implemented
          differently across platforms, which slowed development and caused
          frequent mismatches.
        </ArticleParagraph>
        <ArticleParagraph>
          To solve this, I decided to{" "}
          <strong>build a design token library</strong> with the invaluable help
          of a highly enthusiastic frontend developer. Using a structured JSON
          as the foundation, the idea was simple: define all visual styles once
          and let automation handle the rest. With Style Dictionary, we
          generated CSS, SASS, JS, and even Figma variables directly from a
          single source, ensuring our brand looked consistent everywhere.
        </ArticleParagraph>
      </ArticleSection>
      {/* CHALLENGE ----------------------------------------------------------------------------- */}
      <ArticleSection heading="The Challenge">
        <ArticleParagraph>
          Before the tokens library, any design outside the UI components
          library (which was already integrated with tokens) required developers
          to manually copy values and translate them into code. Naturally, this
          introduced small inconsistencies along the way. It was{" "}
          <strong>time-consuming, error-prone, and frustrating</strong> for
          everyone involved.
        </ArticleParagraph>
        <ArticleParagraph>
          I realized we needed a <strong>single source of truth</strong>, not
          just a document, but a living system where any change would ripple
          across every platform automatically. The challenge was balancing
          flexibility for designers with reliability for developers, creating a
          system that worked seamlessly across design tools and codebases.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/loxcope.png"
            height={500}
            alt="A complete app powered by design tokens"
            title="A complete app powered by design tokens"
            description="In the 'Data Search' section, every color, font, and spacing value is driven by the design token system, so no manual styling required."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* PROCESS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Process & Collaboration">
        <ArticleParagraph>
          We built a living <strong>documentation site in Storybook</strong>,
          where every design token was neatly organized, previewed, and
          explained. It included an advanced searchable table allowing
          developers to filter by format, tier, category, or scheme, and
          whenever possible, each token previewed its actual appearance.
        </ArticleParagraph>
      </ArticleSection>
      {/* DEVELOPMENT APPROACH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Development Approach">
        <ArticleParagraph>
          The first step was{" "}
          <strong>defining the structure of our tokens</strong> in JSON. I
          grouped them into categories like color, typography, spacing, and
          elevation, thinking about both global and component-level scopes. The
          goal was clarity: anyone on the team should understand and use the
          tokens without confusion.
        </ArticleParagraph>
        <ArticleParagraph>
          Semantics and naming conventions were crucial for usability. We
          defined three token tiers: <strong>global</strong>,{" "}
          <strong>alias</strong>, and <strong>component</strong>:
        </ArticleParagraph>
        <ArticleList>
          <li>
            <strong>Global</strong>: the raw value without semantic meaning:{" "}
            <code className="text-lg">global-color-palette-ui-error-03</code>.
          </li>
          <li>
            <strong>Alias</strong>: global values reused with semantic naming,
            not tied to a specific component:{" "}
            <code className="text-lg">
              alias-color-background-feedback-error-strong
            </code>
            .
          </li>
          <li>
            <strong>Component</strong>: alias values reused and renamed for a
            specific component context:{" "}
            <code className="text-lg">
              cmp-button-color-background-error-disabled
            </code>
            .
          </li>
        </ArticleList>
        <ArticleParagraph>
          Then came <strong>automation</strong>. Using Style Dictionary, we
          transformed the JSON source into multiple formats: CSS custom
          properties, SASS variables, JS constants, and Figma variables. Updates
          became effortless: changing a single value automatically propagated
          across platforms, saving time for both designers and developers.
        </ArticleParagraph>
        <ArticleParagraph>
          The project was split into two separate libraries:
        </ArticleParagraph>
        <ArticleList>
          <li>
            <Link
              href="https://github.com/genesys-ui/theme-generator"
              title="Go to the GitHub repository (new tab)"
            >
              theme-generator
            </Link>
            : the core JSON definitions and scripts for creating a CLI used to
            generate themes.
          </li>
          <li>
            <Link
              href="https://github.com/genesys-ui/theme-devo"
              title="Go to the GitHub repository (new tab)"
            >
              theme-devo
            </Link>
            : the generated theme implementation for Devo.
          </li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] !mb-0"
      >
        <ArticleGrid columns={1}>
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-namespace.png"
            width={1400}
            height={240}
            alt="Main naming conventions for tokens"
            title="Main naming conventions"
            description="There is a clear and logical naming for defining tokens:
            always the same structure and order of each piece of the whole name: namespace - object - base - modifier."
          />
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-category-properties.png"
            width={1400}
            height={339}
            alt="Main naming conventions for tokens"
            title="Category values"
            description="This is an scheme with the available properties defined for each category:
            color - background, text, border, fill... etc. as instance."
          />
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-name-examples.png"
            width={1400}
            height={339}
            alt="Main naming conventions for tokens"
            title="Different types naming"
            description="These are clear examples fo how the name of the tokens 
            are structured: namespace (alias and cmp type) - object (group, component and element)
             - base (category, concept and property) - modifier (variant and scale)."
          />
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-naming-order.png"
            width={1024}
            height={746}
            alt="Naming order for tokens"
            title="Naming order"
            description="The order of these blocks is always the same. What changes is which blocks are 
            used together within each token. Some naming blocks are mutually exclusive. For instance, 
            if a token includes a group or component block (with or without an element), it can't include 
            a concept block at the same time. This rule keeps naming consistent, avoids conflicts,
            and makes tokens easier to maintain as the system grows."
          />
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-format-1.png"
            width={1024}
            height={746}
            alt="Naming depending on format for tokens"
            title="Naming by format"
            description="The tokens are defined in JSON using camelCase for multi-word names. 
            They are then exported to SASS (lowercase, prefixed with '$', and separated by hyphens), CSS (same format but prefixed with '--'), and JS (as object values accessed with dot notation)."
          />
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-format-2.png"
            width={1024}
            height={746}
            alt="Naming depending on format for tokens"
          />
        </ArticleGrid>
      </ArticleSection>
      {/* IMPACT & OUTCOMES ----------------------------------------------------------------------------- */}
      <ArticleFeaturedWrapper heading="Impact & Outcomes">
        <ArticleGrid columns={3}>
          <ArticleFeaturedWrapperItem heading="Single source of truth">
            The impact was immediate: design and development finally spoke the
            same language. A single change in the token file updated{" "}
            <strong>
              web styles, React components, and Figma variables simultaneously
            </strong>
            .
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Cohesion">
            Beyond efficiency, the library created a stronger sense of cohesion
            across products. <strong>The interface now feels unified</strong>.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Scalability">
            <strong>Scaling the design system</strong>
            became easier than ever as new features and platforms were added.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            inverted
            src="/projects/genesys-design-tokens/img/tokens-sb-doc-search.png"
            height={432}
            alt="Storybook documentation for tokens"
            title="Storybook documentation for tokens"
            description="The Storybook documentation is built around a searchable table that allows
            designers and developers to filter tokens by tier, schema, format, and more.
            Whenever possible, it also provides live previews, making it easy for teams to quickly 
            find and understand the tokens they need."
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-design-tokens/img/token-outputs.png"
            height={432}
            alt="Tokens output example"
            title="Different outputs for tokens"
            description="These are four different output format examples: CSS, JS, JSON and SASS. 
            The original source is in JSON, but Style Dictionay also generates a JSON output with a info set of every token."
          />
        </ArticleGrid>
      </ArticleFeaturedWrapper>
      {/* LEARNINGS & NEXT STEPS  ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Learnings & Next Steps">
        <ArticleParagraph>
          Working on this project showed me how powerful it is to{" "}
          <strong>treat design as data</strong>. By structuring our styles as
          tokens, we bridged the gap between creative decisions and technical
          implementation, saving time and reducing errors. I also learned that
          clear naming and documentation are essential, because a system is only
          as good as it is understandable.
        </ArticleParagraph>
        <ArticleParagraph>
          Next, we're developing an interface where designers can simply input a
          few values (brand colors, typography, and spacing scales) and{" "}
          <strong>automatically generate a new theme</strong>. This will make
          customization faster, more consistent, and scalable, especially for
          client-specific adaptations.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
