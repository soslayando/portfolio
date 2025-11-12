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
  ArticleVideoBlock,
  ProcessTimeline,
} from "@/app/components";

export const metadata: Metadata = {
  title:
    "Genesys Design System case study - Jose Andrés Granero - Product Designer - Specialized in UX/UI Architecture & Design Systems",
};

const processSteps = [
  {
    icon: "IoColorPaletteOutline",
    title: "Design",
    description:
      "Defined foundations, tokens, base components, and usability patterns.",
  },
  {
    icon: "IoBookOutline",
    title: "Documentation",
    description:
      "Created Storybook and Figma docs for shared use of design system.",
  },
  {
    icon: "IoCodeOutline",
    title: "Development",
    description:
      "Built all the system libraries: components, design tokens, icons, and styles, using React, TypeScript, Sass and Style dictionary.",
  },
  {
    icon: "IoRocketOutline",
    title: "Rollout",
    description: "Onboarded teams through demos, feedback loops, and training.",
  },
  {
    icon: "IoBarChartOutline",
    title: "Impact",
    description:
      "40% faster implementation, 100+ unified screens and 100% of usage of frontend engineering teams.",
  },
];

export default function GenesysDesignSystem() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "genesys-design-system"
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
      {/* PROBLEM ----------------------------------------------------------------------------- */}
      <ArticleSection heading="The Challenge">
        <ArticleParagraph>
          Before the design system existed, the product ecosystem faced{" "}
          <strong>major inconsistencies</strong>, not only visual, but also in
          how users interacted with the platform. Users could perform the same
          action in different ways depending on the section, leading to
          confusion and usability issues.
        </ArticleParagraph>
        <ArticleParagraph>
          Meanwhile, developers were building their own components and layouts
          for every new feature or enhancement, which significantly increased
          both development time and <strong>maintenance costs</strong>.
        </ArticleParagraph>
        <ArticleParagraph>
          Additionally, the Professional Services team was constantly building
          custom vertical apps for clients, further fragmenting the visual and
          technical ecosystem.
        </ArticleParagraph>
        <ArticleParagraph>
          As a result, maintaining visual consistency, accessibility standards,
          and scalability across products had become almost impossible.
        </ArticleParagraph>
        <ArticleParagraph>
          This challenge led us to create a unified Design System, not just as a
          visual framework but as a <strong>strategic foundation</strong> to
          transform how Devo designed and built its products.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/design-system/img/alerts-creation-old.png"
            width={800}
            height={411}
            alt="Alerts creation section before the Design System"
            title="Before"
            description="Example of the alerts creation section before the Design System: inconsistent components and layout."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/alert-rules.png"
            width={1200}
            height={625}
            alt="Alerts creation section after the Design System"
            title="After"
            description="The same section after the Design System implementation: unified layout, consistent hierarchy, and improved readability."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* GOAL AND METRICS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Goals & Success Metrics">
        <ArticleList noBullets>
          <li>
            <strong>Radically improve consistency</strong>
            <p>
              Establish a unified visual and interaction language to ensure
              coherence across all Devo products and touchpoints.
            </p>
          </li>
          <li>
            <strong>Accelerate design and development workflows</strong>
            <p>
              Reduce repetitive work by providing reusable, ready-to-implement
              components and design tokens.
            </p>
          </li>
          <li>
            <strong>Enable scalability</strong>
            <p>
              Build a flexible foundation that supports product growth and new
              feature development without visual or technical fragmentation.
            </p>
          </li>
          <li>
            <strong>
              Enhance collaboration between design and engineering
            </strong>
            <p>
              Create a shared source of truth where both teams can align quickly
              on decisions and implementation.
            </p>
          </li>
          <li>
            <strong>Ensure accessibility and usability standards</strong>
            <p>
              Integrate WCAG AA accessibility principles directly into
              components and documentation.
            </p>
          </li>
          <li>
            <strong>Strengthen Devo's brand identity</strong>
            <p>
              Translate the brand's visual language and values into a
              consistent, systematized digital experience.
            </p>
          </li>
        </ArticleList>
        <ArticleParagraph>
          We defined some metrics, but due to the limited size of our design
          team, we weren't able to conduct extensive testing or research to
          audit them. These were our success metrics:
        </ArticleParagraph>
        <ArticleList>
          <li>
            40% reduction in design & implementation <strong>time</strong>.
          </li>
          <li>
            90% of <strong>engineering teams</strong> actively using the design
            system.
          </li>
          <li>
            80% reduction in one-off or <strong>inconsistent</strong> UI
            components (excluding vertical applications).
          </li>
          <li>
            100% compliance with <strong>WCAG AA</strong> (excluding vertical
            applications).
          </li>
          <li>
            Designer-developer alignment <strong>satisfaction</strong>: {">"}
            8/10 (survey).
          </li>
          <li>
            90% component <strong>documentation</strong> completeness.
          </li>
        </ArticleList>
      </ArticleSection>
      {/* RESEARCH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Research & Audit">
        <ArticleParagraph>
          Once we started the creation process, we reviewed what other companies
          and established design systems were doing: Carbon, Material,
          Spectrum... etc.
        </ArticleParagraph>
        <ArticleParagraph>
          This <strong>benchmarking</strong> helped us refine the structure of
          our Storybook documentation and Figma system, prioritize components,
          organize them efficiently, and set best practices for accessibility
          and scalability.
        </ArticleParagraph>
        <ArticleParagraph>
          We also kept <strong>close communication with developers</strong> to
          understand their needs and technical constraints, and within the
          design team to align on workflows and daily challenges. This ensured
          the system truly served both teams, with a special focus on developers
          as the primary users.
        </ArticleParagraph>
        <ArticleParagraph>
          Finally,{" "}
          <strong>I conducted a thorough audit of the existing UI</strong> to
          identify visual and interaction inconsistencies. We inventoried
          existing components, removed duplicates, and spotted gaps, which
          helped us prioritize and establish a clear baseline for the design
          system.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/design-system/img/secondary-tabs-old.png"
            height={621}
            alt="Before design system vertical tabs UI example"
            title="Before"
            description="We inventoried the secondary vertical tabs, but found that their
              layout took up too much space, so we maintained the component but
              changing its structure."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/secondary-tabs.png"
            height={522}
            alt="After design system UI horizontal tabs example"
            title="After"
            description="We didn't just inventory the components, we also adapted and
              refined them, removing those that were no longer needed. In this
              case, changing to an horizontal layout helped us to save space and
              improve usability."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/design-system-home.png"
            height={522}
            alt="Design system Storybook docs home"
            title="Documentation"
            description="The design system documentation was built in Storybook, following
              a structure inspired by other established systems, including
              principles, foundations, components, and patterns."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/marketplace-home.png"
            height={522}
            alt="Marketplace home"
            title="Company oriented components"
            description="Our design system needed to be flexible enough to meet the needs
              of our teams, but not as open-ended as others like Material or
              Carbon, for instance."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* FOUNDATIONS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Foundations">
        <ArticleParagraph>
          Every design system starts with a solid foundation.{" "}
          <strong>At its core are the design tokens</strong>: colors,
          typography, spacing, grids, shadows, and borders. These tokens act as
          a single source of truth, giving every component a consistent look and
          feel. By defining them first, we make sure the system is visually
          cohesive and easy to scale across products.
        </ArticleParagraph>
        <ArticleParagraph>
          Equally important are the principles and rules that guide how the
          system is used. We focus on accessibility, scalability, and
          maintaining the brand's visual identity. We established clear
          guidelines about:
        </ArticleParagraph>
        <ArticleList>
          <li>Color.</li>
          <li>Typography.</li>
          <li>Layout.</li>
          <li>Spatial system.</li>
          <li>Iconography.</li>
          <li>Elevation hierarchy.</li>
          <li>Shape and Radius.</li>
          <li>Content, voice, and tone.</li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/design-system/img/design-tokens.png"
            height={441}
            alt="Example of design tokens"
            title="Design tokens"
            description="Integrated directly into Figma through variables, allowing designers
            to apply them seamlessly within the design environment.
            Additionally, the tokens are exported in multiple formats:
            CSS, SASS, JavaScript, and JSON, making them easily
            accessible for developers."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/palette-detail.png"
            height={441}
            alt="Example of color palette"
            title="Color palettes"
            description="I built a comprehensive color palette that balances brand identity
            with accessibility. Each color was tested to ensure WCAG AA
            compliance, providing sufficient contrast for readability and
            usability. Additionally, the darkest colors in the palette meet AA
            standards when used on the lighter half of the palette, and vice
            versa."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/use-of-color.png"
            height={441}
            alt="Color usage by context table"
            title="Color usage by context"
            description="I defined a table to guide the selection of color palettes based on
            context. Thoughtful color choices help users quickly recognize
            statuses, actions, and interactions"
          />
          <ArticleImageBlock
            src="/projects/design-system/img/typography-intro.png"
            height={453}
            alt="Design system Storybook docs home"
            title="Typography"
            description="It helps us to correctly establish the visual hierarchy of a page,
            in addition to organizing information and serving as a guide for
            users while browsing the platform. Its correct use also generates a
            more powerful brand presence."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/variant-example.png"
            width={800}
            height={453}
            alt="Typographic variants example"
            title="Typographic variants"
            description="We use typo design tokens and themes to manage our typography. We
            have specific groups of typo tokens (font-size, font-weight,
            line-height, letter-spacing... etc.) to define our different
            typographic styles: headings, heros, caps, body... etc."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/layout.png"
            height={542}
            alt="Layout example"
            title="Layout"
            description="The layout is composed of distinct regions that define our
            information architecture. Each region serves a specific purpose and
            contains key interactions: navigation, quick access to
            settings, datasets, or content."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/layout-variants.png"
            height={542}
            alt="Layout variants"
            title="Main region layouts"
            description="The main region hosts each section's primary content. Built with the
            “Fluid” component and a twelve-column grid, it's the most dynamic
            area of the layout, while other regions remain consistent throughout
            the user journey."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/spatial-scales.png"
            height={633}
            alt="Spatial system scales"
            title="Spatial system scales"
            description="I created a unified spatial system keeps our designs consistent and
            our communication clear. It simplifies decision-making and creates a
            predictable visual rhythm that feels balanced and intentional."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/sizing-typo.png"
            height={633}
            alt="Typography sizing scale"
            title="Typography sizing scale"
            description="I defined a based on a 4pt baseline grid, line heights scale in 4pt
            increments. This system aligns component and layout scales with
            typography, creating a cohesive vertical rhythm."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/sizing-components.png"
            height={633}
            alt="Component sizing scale"
            title="Component sizing scale"
            description="Based on multiples of 4pt, our component sizing scale ensures consistent spacing rhythm and alignment across the UI."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/icons-example.png"
            height={600}
            alt="Icons example"
            title="Iconography"
            description="We built our icon set on top of Ionicons. Whenever we couldn't find
            a suitable icon, we designed a new one derived from the library to
            keep proportions and visual harmony consistent."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/elevation-hierarchy.png"
            height={500}
            alt="Elevation hierarchy"
            title="Elevation hierarchy"
            description="Elevation marks the distance of elements from the background and
            arranges them along the z-axis. To do this, each elevation level is
            defined by a specific shadow that simulates the way in which natural
            light is projected on objects depending on the distance to them."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/elevation-levels.png"
            height={600}
            alt="Elevation levels example"
            title="Elevation levels"
            description="The different elevation levels available correspond to the different
            levels of importance with which we want to organize the components
            throughout the UI."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/radius.png"
            height={500}
            alt="Shape and radius"
            title="Shape and radius"
            description="Rounded corners are used throughout the platform to differentiate
            the different families of UI components based on their anatomy,
            level of interaction... etc."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/voice-and-tone.png"
            height={500}
            alt="Voice and tone"
            title="Voice and tone"
            description="Our voice defines how we communicate with users. While our voice
            stays consistent across all content, its tone adapts to each context
            and audience. Our voice is clear, informative, and relaxed. We use
            an informal style to write content that is both simple and
            instructive."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* COMPONENTS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Components">
        <ArticleParagraph>
          We started by identifying the most common patterns in our product, and
          the building blocks users interact with every day. I had to{" "}
          <strong>inventory every way of doing things, every component</strong>{" "}
          created in the app. I also deleted or transformed not consistent or
          ineffective components and patterns. We defined a consistent set of
          components that could be reused and scaled across the platform.
        </ArticleParagraph>
        <ArticleParagraph>
          Each component went through <strong>several design iterations</strong>{" "}
          and feedback rounds with designers and developers. We refined
          behaviors, variants, and states to make them more intuitive and
          accessible. This process helped us simplify the system and make it
          feel cohesive at every level.
        </ArticleParagraph>
        <ArticleParagraph>
          To ensure consistency, we aligned Figma components with their coded
          counterparts.{" "}
          <strong>
            I took charge of bringing our Figma components to life in React
          </strong>{" "}
          for our components library, ensuring consistency between design and
          code across the library. Shared naming conventions and structure
          allowed both teams to work in sync, reducing friction and guaranteeing
          that what we designed matched exactly what users experienced.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/design-system/img/components-overview.png"
            height={500}
            alt="UI components overview"
            title="Figma and Storybook library"
            description="Overview of the component library showing buttons, badges, banners,
            progress bars... etc. Each component is implemented in React and
            TypeScript, with detailed documentation available in Storybook and
            Figma for designers and developers."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/anatomy.png"
            height={500}
            alt="Component anatomy example"
            title="Component anatomy"
            description="Breakdown of a single component, highlighting its structure,
            spacing, and interactive elements. This ensures clarity and
            consistency when components are implemented across the system."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/states-and-variants.png"
            height={500}
            alt="States and variants example"
            title="States and variants"
            description="Illustration of the different states and variants of a component,
            showing how it should behave in different contexts. This helps
            maintain visual consistency and predictable user interactions."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/code-alignment.png"
            height={500}
            alt="Code alignment example"
            title="Figma - Code Alignment"
            description="Highlights the connection between design and development. I
            translated Figma components into code, making sure the final product
            reflects the designers' intent and delivers a seamless experience to
            users."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/design-tokens-component.png"
            height={500}
            alt="Component design tokens example"
            title="Design tokens in action"
            description="Example of how design tokens are applied to a button component, with
            different types: color background, color text, shape, spacing,
            sizing... etc."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* IMPLEMENTATION ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Implementation & Collaboration">
        <ArticleParagraph>
          We focused on bringing design and code together seamlessly, ensuring
          that the components created in Figma were faithfully implemented in
          the product. Our stack included React and TypeScript for component
          development, while{" "}
          <strong>Storybook served as the central documentation hub</strong>. By
          integrating Storybook into our workflow, both designers and developers
          could visualize components, explore interaction states, and understand
          usage guidelines in a single, shared environment.
        </ArticleParagraph>
        <ArticleParagraph>
          To maintain consistency and alignment between design and development,
          we relied on{" "}
          <strong>
            design tokens, standardized naming conventions, and a structured
            review workflow
          </strong>
          . Every component went through pull requests, code reviews, and
          cross-checks with Figma designs, which helped catch inconsistencies
          early.
        </ArticleParagraph>
        <ArticleParagraph>
          Collaboration was central to the success of our design system.
          Designers and developers worked closely throughout the process,
          sharing feedback at every stage. I facilitated collaboration between
          design and development, making sure both teams understood each other's
          requirements. With the support of a frontend developer,{" "}
          <strong>I implemented the components</strong>, producing a library
          perfectly aligned with the design system.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleVideoBlock
            ariaLabel="Design system component Overview video"
            source="/projects/design-system/video/sb-ds-button-detail.webm"
            title="Design system component Overview"
            description="A Storybook example of Button component page, showing some general
            use information, different states and variants. This documentation
            helps designers and developers quickly understand how the component
            behaves, and how each variant fits within the design system."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/button-props-table.png"
            height={500}
            alt="Component Props Table"
            title="Props Table"
            description="A clear and structured list of the component's properties, such as
            size, variant, or onClick. Each prop is documented with its type,
            default value, and description, allowing developers to implement the
            component correctly without guesswork."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/button-hierarchy.png"
            height={605}
            alt="Button usage guidelines"
            title="Usage guidelines"
            description="Notes describing when and how to use the component within the
            interface. These guidelines cover spacing, alignment, accessibility,
            and tone of interaction, ensuring a consistent user experience
            across the product."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/anatomy-2.png"
            height={500}
            alt="Figma docs example"
            title="Figma documentation"
            description="A visual reference from Figma that complements the coded
            documentation. It shows the component's anatomy, tokens applied, and
            interaction patterns, helping bridge the gap between design intent
            and technical implementation."
          />
          <ArticleImageBlock
            src="/projects/design-system/img/button-tokens-table.png"
            height={500}
            alt="Component design tokens documentation example"
            title="Design tokens in docs"
            description="Every component documents the design tokens applied to it, making it
            easy for both designers and developers to understand how the visual
            style is constructed and how to maintain consistency when using or
            modifying the component."
          />
        </ArticleGrid>
      </ArticleSection>
      <ArticleSection heading="Adoption & Rollout">
        <ArticleParagraph>
          I led the rollout of the design system across teams through{" "}
          <strong>
            internal demos, documentation updates, and onboarding sessions
          </strong>
          . I collaborated closely with product and engineering leads to ensure
          a smooth integration into existing workflows.
        </ArticleParagraph>
        <ArticleParagraph>
          Continuous <strong>feedback from designers and developers</strong>{" "}
          guided each iteration, helping us refine the system based on real
          product needs. It was not easy, but one year after the design system
          was launched, we successfully onboarded all the main frontend teams on
          the company.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] !mb-0"
      >
        <ProcessTimeline steps={processSteps} />
      </ArticleSection>
      <ArticleFeaturedWrapper heading="Impact & Outcomes">
        <ArticleGrid columns={3}>
          <ArticleFeaturedWrapperItem heading="Consistency">
            The design system delivered measurable improvements across design
            and development workflows. By standardizing components, tokens, and
            interaction patterns, we significantly{" "}
            <strong>reduced inconsistencies</strong> and visual bugs across
            products.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Less implementation time">
            Designers and developers spent less time aligning details during
            handoffs, which streamlined collaboration and{" "}
            <strong>accelerated delivery</strong>. Implementation time per
            component decreased by nearly 40%, allowing teams to focus on
            solving real product challenges instead of re-creating UI elements.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Scalability">
            Beyond efficiency, the system brought coherence and clarity to the
            product experience. Over <strong>100 screens were unified</strong>{" "}
            under a single design language, and team satisfaction increased as
            the process became more predictable and scalable.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            inverted
            src="/projects/design-system/img/alerts-delivery-methods-old.png"
            height={426}
            alt="Delivery methods before design system"
            className="order-1"
            title="Before"
            description="Before the design system, the Delivery Methods page suffered from
              visual inconsistency: excessive icons, uneven spacing,
              unstructured data layout, and colors that didn't align with the
              brand. Accessibility issues and weak hierarchy made the interface
              hard to read and navigate."
          />
          <ArticleImageBlock
            inverted
            src="/projects/design-system/img/alerts-delivery-methods.png"
            height={506}
            alt="Delivery methods after design system"
            className="order-2"
            title="After"
            description="This is the same section after the implementation of the design
            system. The layout was restructured for clarity, with consistent
            spacing, a unified icon set, and a color palette that reflects the
            brand. Accessibility improvements and a clear hierarchy enhance
            readability and user navigation."
          />
          <ArticleImageBlock
            inverted
            src="/projects/design-system/img/home-old.png"
            alt="Home before design system"
            className="order-3"
            title="Before"
            description="This is the Home page before the design system was applied."
          />
          <ArticleImageBlock
            inverted
            src="/projects/design-system/img/home.png"
            height={459}
            alt="Home after design system"
            className="order-4"
            title="After"
            description="This is the Home page after the design system was applied: better
            space rhythm, better color contrast, usage of brand, more
            comfortable palettes... etc."
          />
          <ArticleImageBlock
            inverted
            src="/projects/design-system/img/loxcope-old.png"
            height={519}
            alt="Data search before the design system"
            className="order-5"
            title="Before"
            description="This is the 'Data search' page before the design system was applied."
          />
          <ArticleImageBlock
            inverted
            src="/projects/design-system/img/loxcope.png"
            height={569}
            alt="Data search after the design system"
            className="order-6"
            title="After"
            description="This is the 'Data search' page after the design system was applied:
            better use of typography, cleaner renderization of the table data,
            improved hierarchy... etc."
          />
          <ArticleImageBlock
            inverted
            src="/projects/design-system/img/dark-theme-loxcope.png"
            height={569}
            alt="Dark theme after the design system"
            className="order-8 lg:order-7"
            title="Dark theme"
            description="One of the most impactful changes enabled by the design system and
            design tokens was the introduction of a dark theme. It enhances
            usability in low-light environments and reduces eye strain for users
            who prefer darker interfaces."
          />
          <ArticleImageBlock
            inverted
            src="/projects/design-system/img/dark-theme-delivery.png"
            height={569}
            alt="Dark theme after the design system"
            className="order-7 lg:order-8"
          />
        </ArticleGrid>
      </ArticleFeaturedWrapper>
      <ArticleSection heading="Learnings and Next Steps">
        <ArticleParagraph>
          Building the Genesys Design System was a transformative experience
          that reinforced the importance of collaboration between design and
          development. One key learning was the value of{" "}
          <strong>early and continuous feedback</strong> from both teams, which
          helped us refine components and ensure they met real-world needs.
        </ArticleParagraph>
        <ArticleParagraph>
          This is an <strong>ongoing journey</strong>. The next steps involve
          covering more components documentation, edge cases, and patterns, and
          the Storybook{" "}
          <strong>documentation needs to be more complete and detailed</strong>,
          because I estimate we only covers the 40% of the components at this
          point. We also need a more atractive home and overview pages, to make
          it easier for users to navigate and find the information they need.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
