import { notFound } from "next/navigation";
import type { Metadata } from "next/types";

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
  ProcessTimeline,
} from "@/app/components";

export const metadata: Metadata = {
  title:
    "Devo UI refactor case study - Jose Andrés Granero - Product Designer - Specialized in UX/UI Architecture & Design Systems",
};

const processSteps = [
  {
    icon: "IoSearchOutline",
    title: "Audit & Discovery",
    description:
      "Understanding the legacy system and identifying pain points. Full interface inventory, usability insights, and feature map.",
  },
  {
    icon: "IoBarChart",
    title: "Research & Benchmarking",
    description:
      "Analyzing user workflows and comparing with market standards. Benchmark grid and summarized design principles.",
  },
  {
    icon: "IoBrushOutline",
    title: "Visual Redesign & Prototyping",
    description:
      "Creating new interface visuals and testing interactive flows. High-fidelity prototypes validated through usability tests.",
  },
  {
    icon: "IoCodeOutline",
    title: "Implementation & Collaboration",
    description:
      "Syncing with development via shared libraries and design tokens. Figma-Storybook pipeline and dev alignment.",
  },
  {
    icon: "IoCheckmarkCircle",
    title: "Validation & Rollout",
    description:
      "Gradual deployment and measurement of impact. A/B test results, NPS increase, and component reuse metrics.",
  },
];

export default function appRefactor() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "ui-refactor"
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
          The original platform had evolved through years of incremental
          development, resulting in a fragmented experience. Data tables,
          dashboards, and charts were built inconsistently by different teams,
          using separate codebases and styling approaches. This led to{" "}
          <strong>
            visual clutter, reduced usability, and high maintenance costs
          </strong>
          .
        </ArticleParagraph>
        <ArticleParagraph>
          The main challenge was to unify this ecosystem under a single{" "}
          <strong>scalable design system</strong> that would preserve analytical
          power while improving clarity and performance.
        </ArticleParagraph>
        <ArticleParagraph>
          The redesign also needed to support <strong>new use cases</strong>,
          such as more customizable dashboards, new data tables based in
          components library, new navigation architecture and main menu,
          advanced data filtering... etc. without adding cognitive overload.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/ui-refactor/img/old-home.png"
            width={1280}
            height={753}
            className="order-1"
            alt="Before UI refactor example"
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/old-alert-rules.png"
            width={1280}
            height={778}
            className="order-2"
            alt="Before UI refactor example"
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/old-finder.png"
            width={1280}
            height={625}
            className="order-3"
            alt="Before UI refactor example"
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/old-user-management.png"
            width={1280}
            height={753}
            className="order-4"
            alt="Before UI refactor example"
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/old-finder-free-text-query.png"
            width={1280}
            height={753}
            className="order-6 lg:order-5"
            alt="Before UI refactor example"
            title="Before"
            description="A lot of examples of the old interface previous to the UI refactor: brand color saturation, inconsistencies, inefficient use of space, secondary navigation tabs drawing too much attention, unbalanced colors, an overall overuse of icons, confusing hierarchy of actions... etc."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/old-activeboards.png"
            width={1280}
            height={753}
            className="order-5 lg:order-6"
            alt="Before UI refactor example"
          />
        </ArticleGrid>
      </ArticleSection>
      {/* RESEARCH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Research">
        <ArticleParagraph>
          We started with a <strong>full product audit</strong>, mapping all
          pages, widgets, and interactive elements used across different modules
          of the platform. We ran interviews with data analysts, business users,
          and internal developers to identify pain points in the workflow. The
          biggest issues were related to discoverability (hidden features),
          visual overload, and lack of standardization in visualizations.
        </ArticleParagraph>
        <ArticleParagraph>
          In parallel, we <strong>benchmarked leading analytics tools</strong>{" "}
          to understand best practices in handling dense data interfaces. The
          key insight was that consistency and clarity were far more valuable
          than visual novelty. These findings guided our decision to build a
          flexible system around composable, data-first components.
        </ArticleParagraph>
        <ArticleParagraph>
          In addition, we used a{" "}
          <strong>previous comprehensive research</strong> from my own design
          department, about pain points, inconsistencies, navigation problems,
          and unclear user flows or actions.
        </ArticleParagraph>
      </ArticleSection>
      {/* DESIGN SYSTEM CREATION ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Design System">
        <ArticleParagraph>
          The <strong>new design system</strong>, internally named "Genesys",
          was conceived as a modular ecosystem covering UI components, data
          visualizations, and interaction patterns. We defined design tokens for
          color, typography, spacing, and data states, ensuring visual harmony
          across tables, charts, and dashboards.
        </ArticleParagraph>
        <ArticleParagraph>
          To ensure adoption, we created Figma libraries linked to a Storybook
          instance used by developers.{" "}
          <strong>Each component was documented</strong> with accessibility
          notes, responsive behavior rules, and usage examples. This
          dramatically reduced design-developer handoff time and standardized
          visual consistency across teams.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/ui-refactor/img/anatomy-2.png"
            width={1280}
            height={983}
            alt="Example of Figma documentation"
            className="order-1"
            title="Figma documentation"
            description="The design system documentation has been incredibly useful to align the design and the code in this huge UI refactor. This is an example of Figma documentation, specially useful for designers."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/button-hierarchy.png"
            width={1280}
            height={1100}
            alt="Example of Storybook documentation"
            className="order-2"
            title="Storybook documentation"
            description="The design system documentation in Storybook has been also incredibly useful, not only for developers, but also for us, the designers, because we were implementing code too, so it was a single source of truth for everybody on the project."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/button-tokens-table.png"
            width={948}
            height={593}
            alt="Design tokens on SB"
            className="order-3 lg:order-4"
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/design-tokens-component.png"
            width={1280}
            height={983}
            alt="Design tokens example"
            className="order-4 lg:order-3"
            title="Design tokens"
            description="The design tokens were fundamental during all the process, specially when we needed to refactor some parts of the app not based in React, because wether they were third-party libraries or due to technical restrictions. In these cases we couldn't use the new UI components library, so the main way of maintaining consistency was integrating with the design tokens."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* VISUAL & INTERACTION REDESIGN ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Visual & Interaction Redesign">
        <ArticleParagraph>
          We <strong>simplified the interface</strong> by introducing a clean,
          data-first visual language that prioritized readability and focus. The
          new color palette was built around neutral backgrounds and
          high-contrast accent colors for data visualization, improving
          interpretability for complex processes and interfaces.
        </ArticleParagraph>
        <ArticleParagraph>
          Interaction patterns were redesigned to make complex analytical
          actions (filtering, grouping, and exporting) feel effortless.
          Persistent filters, contextual tooltips, and keyboard shortcuts were
          added to streamline repetitive workflows. The overall goal was to make{" "}
          <strong>
            powerful analytics feel approachable without sacrificing depth
          </strong>
          .
        </ArticleParagraph>
        <ArticleParagraph>Key UI improvements include:</ArticleParagraph>
        <ArticleList>
          <li>More purposeful use of brand colors.</li>
          <li>Rationalized color usage by context.</li>
          <li>Improved color hierarchy.</li>
          <li>Reduced icon overuse.</li>
          <li>Structured use of elevation and depth.</li>
          <li>Creation of a dedicated Table component.</li>
          <li>Refined secondary navigation.</li>
          <li>Simplified main menu.</li>
          <li>Standardized messaging system.</li>
          <li>Expanded contextual assistance.</li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/ui-refactor/img/home.png"
            height={500}
            alt="New home"
            title="More purposeful use of brand colors"
            description="The new visual language applies brand colors more consistently 
            and strategically, reinforcing brand recognition without overwhelming the interface."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/mitre.png"
            height={500}
            alt="Mitre app example"
            title="Rationalized color usage by context"
            description="Colors are now assigned based on clear functional meaning: error, warning, 
            active, enabled, ownership, and more; creating a more predictable and accessible experience."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/loxcope.png"
            height={500}
            alt="Data search section"
            title="Reduced icon overuse"
            description="We removed unnecessary icons that previously represented overly complex 
            actions or processes, which had created visual noise. Icons are now reserved for universal, 
            instantly recognizable concepts."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/reports.png"
            height={500}
            alt="Reports section example"
            title="Improved color hierarchy."
            description="The refined palette enhances the distinction between data levels, 
            actionable elements, and system states, clarifying both content and interactions."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/alerts-overview.png"
            height={500}
            alt="Panels example"
            title="Structured use of elevation and depth"
            description="Shadows, borders, and corner radius are now applied systematically
            to establish visual hierarchy and improve spatial understanding across interface layers."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/table-cmp.png"
            height={500}
            alt="Table component"
            title="Creation of a dedicated Table component"
            description="A fully custom, high-performance table component was designed to enhance 
            user workflows involving filtering, sorting, selecting, pagination, column management, 
            and inline editing. It became one of the cornerstones of the new interface, 
            replacing all legacy tables and standardizing multiple complex views under 
            a unified interaction model."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/secondary-nav-detail.png"
            height={500}
            alt="Component design tokens example"
            title="Refined secondary navigation"
            description="We introduced a lighter, more space-efficient tab navigation system, 
            replacing bulky vertical tabs with a cleaner horizontal structure that preserves 
            content area and improves scannability."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/app-menu-detail.png"
            height={500}
            alt="AppMenu component"
            title="Simplified main menu"
            description="The primary navigation was streamlined to include only essential sections. 
            Account settings, query priority levels, domain and time range selectors, and help options 
            were relocated to the right area of the toolbar, reducing cognitive load."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/message-system.png"
            height={500}
            alt="Messaging components example"
            title="Standardized messaging system"
            description="All user feedback components such as tooltips, banners, inline messages, popups, 
            and dialogs were unified under a consistent style and tone, greatly improving clarity and cohesion."
          />
          <ArticleImageBlock
            src="/projects/ui-refactor/img/contextual-help.png"
            height={500}
            alt="Contextual help example"
            title="Expanded contextual assistance"
            description="Help cues and guidance are now embedded directly within complex user flows, 
            not just at the section level, providing support exactly where it's needed."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* IMPLEMENTATION ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Implementation & Collaboration">
        <ArticleParagraph>
          Close collaboration between design and development was crucial. We
          established a{" "}
          <strong>shared naming convention and design token pipeline</strong>{" "}
          that connected Figma styles to code variables. Weekly cross-team
          sessions ensured every component was validated against technical
          feasibility and real user needs.
        </ArticleParagraph>
        <ArticleParagraph>
          Through the new <strong>Storybook-based workflow</strong>, designers
          could preview coded components live, accelerating iteration cycles and
          reducing ambiguity. This continuous collaboration also helped maintain
          a single source of truth between the design library and the production
          UI.
        </ArticleParagraph>
        <ArticleParagraph>
          One of the most important tasks I had to accomplish during the
          refactor was supporting the development teams, as they needed to
          migrate numerous screens (each originally built with different
          technologies and languages) to React, while adopting the new libraries
          for components, design tokens, and icons, among others.
        </ArticleParagraph>
        <ArticleParagraph>
          Anyway, in many cases, the design team (including myself) also had to
          take part in the code refactor, migrating legacy screens to React and
          implementing the new design system libraries. Once this process was
          completed, the developers integrated the frontend with the backend.
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
          <ArticleFeaturedWrapperItem heading="Clarity and consistency">
            The redesigned interface brought a substantial improvement in
            clarity and efficiency across all user workflows. By{" "}
            <strong>
              rethinking visual hierarchy and interaction patterns
            </strong>
            , users could now interpret and act on complex datasets with
            significantly less cognitive effort, reducing unnecessary friction
            and helping analysts focus on insights.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Analytical context">
            Beyond usability, the visual refresh strengthened the product's
            sense of purpose and trustworthiness. The refined color system,
            typography, and spacing created a{" "}
            <strong>calmer, more analytical atmosphere</strong>, aligning the
            interface with the mental model of professional data users.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Reliability">
            Consistent motion cues and microinteractions improved perceived
            responsiveness, making the platform{" "}
            <strong>feel more polished and reliable</strong>. In the same way,
            the improvements for feedback messages and contextual help, have
            improved the user experience.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            inverted
            src="/projects/ui-refactor/img/old-alert-rules-2.png"
            height={426}
            alt="Alert rules before UI refactor"
            className="order-1"
            title="Before"
            description="Before the refactor, the Alert Rules page suffered from
              visual inconsistency: excessive icons, uneven spacing,
              unstructured data layout, and colors that didn't align with the
              brand. Accessibility issues and weak hierarchy made the interface
              hard to read and navigate."
          />
          <ArticleImageBlock
            inverted
            src="/projects/ui-refactor/img/alert-rules.png"
            height={506}
            alt="Delivery methods after UI refactor"
            className="order-2"
            title="After"
            description="This is the same section after the implementation of the refactor.
            The layout was restructured for clarity, with consistent
            spacing, improved space efficiency by reducing the visual footprint of secondary navigation elements, 
            a unified icon set, color palettes that reflect the brand... etc."
          />
          <ArticleImageBlock
            inverted
            src="/projects/ui-refactor/img/home.png"
            height={506}
            alt="Home section"
            className="order-4 lg:order-3"
            title="Consistency based on design tokens"
            description="Shown here are the Home and Marketplace sections. Despite serving very different purposes, 
            they share a cohesive look and feel. The Home section was developed using our UI components library, 
            while the Marketplace relies on our design tokens system, so we can maintain consistency regardless of the technology used."
          />
          <ArticleImageBlock
            inverted
            src="/projects/ui-refactor/img/marketplace-home.png"
            height={506}
            alt="Marketplace section"
            className="order-3 lg:order-4"
          />
          <ArticleImageBlock
            inverted
            src="/projects/ui-refactor/img/app-menu-before-and-after.png"
            height={506}
            alt="AppMenu component before and after UI refactor"
            className="order-5"
            title="Simplified main menu"
            description="This comparison shows the evolution of the main menu 
            before and after the UI refactor. Actions unrelated to navigation 
            were relocated to the top app bar, decluttering the interface..."
          />
          <ArticleImageBlock
            inverted
            src="/projects/ui-refactor/img/toolbar-user-more-options.png"
            height={506}
            alt="Main toolbar after UI refactor"
            className="order-6"
            description="...the result is a cleaner layout where elements like the account settings, 
            time zone, domain selector and other options are positioned more intuitively, 
            improving both clarity and usability."
          />
          <ArticleImageBlock
            inverted
            src="/projects/ui-refactor/img/old-activeboards.png"
            height={426}
            alt="Dashboards section before UI refactor"
            className="order-7"
            title="Activeboards before the refactor"
            description="Before the refactor, the users reported several problems with the 
            Dashboards section: Overlapping panels significantly reduce the available space 
            for the main content. The top dropdown panels lack intuitiveness, access to the 
            query panel isn't immediately clear, and the distinction between 'View' and 'Edit'
             modes is not visually evident, resulting in a confusing user experience, among others."
          />
          <ArticleImageBlock
            inverted
            src="/projects/ui-refactor/img/activeboards.png"
            height={506}
            alt="Dashboards section after UI refactor"
            className="order-8"
            title="Activeboards redesign"
            description="This is the same section after the UI refactor. The layout was restructured
             for greater clarity and consistency, with improved spacing and better-defined areas. 
             It's now more intuitive for users to locate the actions they need. The widgets panel
              has been moved to the left side, pushing the content instead of overlapping it. 
              Additionally, a tab system was introduced, along with dedicated toolbars for each context: 
              global, active boards management, and workspace."
          />
        </ArticleGrid>
      </ArticleFeaturedWrapper>
      <ArticleSection heading="Learnings and Next Steps">
        <ArticleParagraph>
          One major learning was the importance of{" "}
          <strong>designing for flexibility within constraints</strong>. In
          data-heavy environments, small inconsistencies can lead to confusion
          or misinterpretation, so maintaining strict system governance became
          essential. Another takeaway was that early developer involvement
          accelerates adoption and ensures scalability.
        </ArticleParagraph>
        <ArticleParagraph>
          Moving forward, we plan to extend Genesys to support{" "}
          <strong>dark mode, and responsive layouts</strong> for secondary
          devices and scpecific sections which are able to manage in a mobile
          device. The system will also evolve into a shared design
          infrastructure for all internal analytics tools, unifying visual
          language company-wide.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
