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
    "Devo Dashboard redesign case study - Jose Andrés Granero - Product Designer — Specialized in UX/UI Architecture & Design Systems",
};

const processSteps = [
  {
    icon: "IoSearchOutline",
    title: "Audit & Discovery",
    description:
      "Gained a deep understanding of the current Dashboard experience and identified user pain points, building on existing departmental research.",
  },
  {
    icon: "IoBrushOutline",
    title: "Visual Redesign & Prototyping",
    description:
      "Created new interface visuals and explored interactive flows using high-fidelity prototypes, which were still awaiting usability testing.",
  },
  {
    icon: "IoBrushOutline",
    title: "Maze testing and adjustments",
    description:
      "We tested the interactive prototype using Maze to uncover key strengths and weaknesses in the redesign. Insights from the report guided the subsequent refinements to the prototype.",
  },
  {
    icon: "IoCodeOutline",
    title: "Implementation",
    description:
      "Collaborated with the development team providing high-fidelity prototypes built in React to ensure design-dev alignment.",
  },
  {
    icon: "IoCheckmarkCircle",
    title: "Validation & Rollout",
    description:
      "Gradual deployment and measurement of impact. A/B test results, NPS increase, and usability metrics.",
  },
];

export default function appRefactor() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "dashboard-redesign"
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
          Users faced{" "}
          <strong>
            inconsistent layouts, overlapping panels, and unclear navigation
            paths and actions
          </strong>
          , which made performing routine tasks slower and more frustrating. Key
          actions and metrics were hidden or difficult to locate, creating
          inefficiencies.
        </ArticleParagraph>
        <ArticleParagraph>
          Each screen had been built using{" "}
          <strong>different UI patterns over time</strong>, leading to confusion
          and a lack of visual consistency. The challenge was to simplify
          workflows while keeping advanced functionalities accessible to power
          users.
        </ArticleParagraph>
        <ArticleParagraph>
          The dashboards suffered from a{" "}
          <strong>severe lack of contextual guidance</strong>, and managing
          available dashboards was confusing and restricted due to the limited
          space in the assigned panel.
        </ArticleParagraph>
        <ArticleParagraph>
          In any case, we will dive deeper into the issues identified over time
          and outline them in the <strong>'Research & Insights'</strong>{" "}
          section.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/dashboard-before.png"
            width={1400}
            height={767}
            className="order-1"
            alt="Before Dashboard redesign example"
            title="Before"
            description="The old dashboard interface previous to the redesign: brand color saturation, not easy to distinguish layers or sections, inconsistencies, inefficient use of space, unbalanced colors, confusing hierarchy of actions and layers... etc."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/dashboard-after.png"
            width={1440}
            height={739}
            className="order-2"
            alt="After Dashboard redesign example"
            title="After"
            description="The new dashboard interface: The different contexts are now clearly distinguished (global, navigation, active dashboard settings, and widgets). The hierarchy is more consistent, and the color palette feels more balanced and aligned with the brand's visual identity, resulting in a more cohesive and professional interface."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* GOALS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Goals & Success Metrics">
        <ArticleParagraph>
          Our main goals were to reduce visual noise, enhance usability, and
          ensure consistency across dashboards. Secondary objectives included
          improving accessibility, creating reusable components, and optimizing
          workflows for different types of users.
        </ArticleParagraph>
        <ArticleList>
          <li>
            <strong>Enhance usability</strong>: especially on Dashbaord manager,
            navigation and settings.
          </li>
          <li>
            <strong>Contextual help/info</strong>: The user should feel guided
            throughout every process (from creation to maintenance and editing)
            while being able to easily access key information at both the
            dashboard and widget levels.
          </li>
          <li>
            <strong>Multitask</strong>: Add a tab system that allows users to
            work on multiple dashboards simultaneously in a fast and efficient
            way.
          </li>
          <li>
            <strong>Hyerarchy and contrast</strong>: Enable users to intuitively
            discover different contexts and actions while avoiding confusing or
            noisy situations, such as an excessive number of overlapping
            floating panels.
          </li>
        </ArticleList>
        <ArticleParagraph>
          Success was measured by reduced task completion time, fewer navigation
          errors, and generally higher user satisfaction. Additional metrics
          included consistency of UI patterns and alignment with design system
          standards.
        </ArticleParagraph>
      </ArticleSection>
      {/* RESEARCH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Research">
        <ArticleParagraph>
          We audited existing dashboards, conducted heuristic evaluations, and
          analyzed usage data. User interviews revealed several issues relative
          to the UI:
        </ArticleParagraph>
        <ArticleList noBullets>
          <li>
            <div>
              <strong>Dashboard manager usability issues</strong>
            </div>
            Half of the users expressed frustration with the Dashboard Manager,
            describing it as difficult to use due to the small panel size and
            the excessive amount of information and options displayed per item.
          </li>
          <li>
            <div>
              <strong>Complexity in creating a dashboard</strong>
            </div>
            50% of users initially found the process of creating a dashboard too
            complex and required assistance to build one from scratch.
            Non-technical users, in particular, struggled not only with the
            interface but also with the need to generate a query, which demands
            technical knowledge.
          </li>
          <li>
            <div>
              <strong>Limited workspace due to panels</strong>
            </div>
            20% of users reported that both the Rolling Panels and the Query
            Panel take up too much screen space, causing loss of focus and
            reducing visibility of other elements and widgets. Users often need
            to open and close these panels repeatedly to view the main content.
          </li>
          <li>
            <div>
              <strong>Users struggle with top panel interactions</strong>
            </div>
            One in four users said the top panels feel unintuitive and occupy
            excessive space, making it hard to stay focused. In dashboard, the
            idea of going to the top to access widgets didn't align with users'
            mental models.
          </li>
          <li>
            <div>
              <strong>
                Difficulty distinguishing between view and edit modes
              </strong>
            </div>
            40% of users reported difficulty identifying whether they were in
            View or Edit mode. Many did not realize when the mode was active or
            inactive, often asking for clarification. Users were unaware that
            switching modes enabled or disabled the dashboards.
          </li>
          <li>
            <div>
              <strong>Low discoverability of the dashboard manager</strong>
            </div>
            45% of users had trouble identifying that clicking the folder icon
            would open the dashboard manager. The icon's meaning was not
            immediately clear, leading to confusion when trying to navigate
            between boards.
          </li>
          <li>
            <div>
              <strong>Difficulty adding new widgets to Activeboards</strong>
            </div>
            40% of users reported having trouble adding new widgets to their
            dashboards. The "add" icon was not immediately recognizable, and the
            current method for adding widgets was not intuitive.
          </li>
          <li>
            <div>
              <strong>Problem to find the period selector</strong>
            </div>
            35% of users reported difficulty locating the period selector in the
            dashboard. Its visibility was not intuitive, making it hard to
            notice or access quickly.
          </li>
          <li>
            <div>
              <strong>Need for additional filter</strong>
            </div>
            25% of users suggested adding a new filter option for "Shared
            dashboards," in addition to the existing "Favorites" and "Created by
            me" filters. They considered it useful for quickly finding boards
            shared by others.
          </li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/old-top.png"
            width={1400}
            height={830}
            alt="Example of old Dashboard"
            title="Toolbar usability problems"
            description="Several examples of the issues detected include: a non-intuitive top panel 
            for adding widgets, a confusing edit/view toggle, among others."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/old-panels.png"
            width={1400}
            height={827}
            alt="Example of old Dashboard"
            title="Overlapping panels"
            description="An example showing how overlapping panels occupy excessive space, 
            forcing users to constantly open and close them in order to access their workspace."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/old-manager.png"
            width={1277}
            height={1028}
            alt="Example of old Dashboard"
            title="Small manager panel"
            description="The panel in the Dashboard manager is too narrow, which limits the space available 
            for displaying all the relevant information and actions for each item. Users often struggle 
            to access certain controls or see key details without excessive scrolling or opening additional menus."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* DESIGN  ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Design & prototyping">
        <ArticleParagraph>
          Wireframes and{" "}
          <strong>
            high-fidelity prototypes were created using the updated design
            system
          </strong>
          . Panels were reorganized to avoid overlap, key actions were moved to
          context-specific toolbars, and a tab system was added for easier
          navigation.
        </ArticleParagraph>
        <ArticleParagraph>
          <strong>Interactive prototypes were tested in Maze</strong> to
          validate workflows and hierarchy. Feedback from these tests informed
          refinements before handing off designs to development, ensuring an
          intuitive experience for all users.
        </ArticleParagraph>
        <ArticleParagraph>
          After completing the Maze tests, several{" "}
          <strong>improvement opportunities</strong>
          were identified based on both user data and feedback. The main
          findings included:
        </ArticleParagraph>
        <ArticleList>
          <li>
            The <strong>folder icon</strong> did not accurately represent the
            Dashboard Manager functionality.
          </li>
          <li>
            "New" and "Available" dashboard{" "}
            <strong>shortcuts lacked visibility</strong> and were not prominent
            enough to catch users' attention.
          </li>
          <li>
            The modal for{" "}
            <strong>"quickly" opening a dashboard was removed</strong>, since
            the same action could be performed just as easily from the manager.
          </li>
          <li>
            The "Most Visited" block was{" "}
            <strong>replaced with "Favorites"</strong>, as it provided little
            real value to users.
          </li>
          <li>
            <strong>Additional information</strong> was added to each shortcut
            on the home screen, such as the creator's name and the last modified
            date.
          </li>
          <li>
            In the <strong>Dashboard Manager</strong>, status icons were added
            to indicate whether an item was shared and/or scheduled. Filters
            were also introduced for both states. Finally, the tags and user
            cells were visually improved for better clarity and hierarchy.
          </li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-cover.png"
            width={1280}
            height={740}
            alt="Example of Maze report"
            className="order-2 lg:order-1"
            title="Maze report"
            description="We launched a Maze test by triggering a Hotjar modal when users accessed the Dashboard section,
            inviting them to participate in a quick usability test. Only frequent dashboard users were shown this modal: 
            specifically, those with over thirty total visits or more than ten visits in the past month."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-heatmap.png"
            width={1400}
            height={868}
            alt="Example of Maze report heatmap"
            className="order-1 lg:order-2"
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-home-initial.png"
            width={1440}
            height={740}
            alt="Example of Dashboard home for Maze test"
            className="order-3"
            title="Maze home initial proposal"
            description="This the version used in the Maze test for the Home page."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-home-modified.png"
            width={1440}
            height={740}
            alt="Example of Dashboard home"
            className="order-4"
            title="Home modified after test"
            description="Y esta es la versión modificada en base a los resultados de los tests: accesos destacados mejorados, más info para cada acceso directo, cambio de icono para el manager, se cambia el bloque de más visitados por el de favoritos... etc."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-manager-icon-modified.png"
            width={1314}
            height={751}
            alt="Detail of Dashboard home"
            className="order-5"
            title="More accurate icon for the manager"
            description="Un icono que representa mejor el acceso al listado completo de dashboards, ya sea para abrir o para administrar props, clonar... etc."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-home-shortcuts-modified.png"
            width={1314}
            height={751}
            alt="Detail of Dashboard home"
            className="order-6"
            title="Acciones principales mas destacadas"
            description="En el test hubo usuarios que reportaron que no era fácil distinguir las acciones principales de 'crear' y 'available' del resto de accesos directos de la home. 
            Por ello, se rediseñaron haciéndolos más destacados visualmente y añadiendo una peuqeña descripcióin a cada una."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-home-favorites.png"
            width={1312}
            height={800}
            alt="Detail of Dashboard home"
            className="order-7"
            title="New favorites block"
            description="Se reemplazó el bloque de 'Mas visitados' por el de 'Favoritos' porque no se 
            percibió valor a tener acceso a los mas visitados, mientras que sí a los favoritos. 
            En esta imagen también podemos ver otra de las mejoras: 
            añadir la información del usuario creador y la fecha de última modificación 
            a cada acceso directo de la home."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-new-tab-modified.png"
            width={1312}
            height={800}
            alt="Detail of Dashboard modal"
            className="order-8"
            title="Modified action"
            description="Como el icono de folder y el verbo 'open' no encajaba perfectamente con
            lo que es el Dashboard manager, también se cambiaron en el modal de 'New tab'. 
            En este modal, el usuario puede o bien, abrir un dashboard ya existente 
            o crea uno nuevo desde cero."
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-manager-initial.png"
            width={1397}
            height={717}
            alt="Detail of Dashboard manager"
            className="order-9"
            description="Manager before testing"
          />
          <ArticleImageBlock
            src="/projects/dashboard-redesign/img/maze-manager-modified.png"
            width={1406}
            height={720}
            alt="Detail of Dashboard manager"
            className="order-10"
            title="Manager after testing"
            description="Status icons were added to indicate
            whether an item was shared and/or scheduled (so 'Shared' column was removed). Filters were also
            introduced for both states. Finally, the tags and user cells were
            visually improved for better clarity and hierarchy."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* IMPLEMENTATION ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Development & Implementation">
        <ArticleParagraph>
          The design team, including myself, worked closely with the frontend
          engineers to migrate existing functionalities into the new interface,
          integrating design tokens, iconography, and reusable components while
          ensuring <strong>full consistency with the design system</strong>.
        </ArticleParagraph>
        <ArticleParagraph>
          We even <strong>developed high-fidelity React prototypes</strong> for
          each redesigned component; including the widgets panel, toolbars,
          dropdown menus, modals, and the new home section; to validate
          interactions, behaviors, and visual consistency before implementation.
        </ArticleParagraph>
        <ArticleParagraph>
          After the front-end was implemented, the development team integrated
          it with the backend, ensuring fully functional dashboards. Close
          collaboration helped maintain consistency between design intent and
          technical execution.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] !mb-0"
      >
        <ProcessTimeline steps={processSteps} />
      </ArticleSection>
      {/* IMPACT ----------------------------------------------------------------------------- */}
      <ArticleFeaturedWrapper heading="Impact & Outcomes">
        <ArticleGrid columns={3}>
          <ArticleFeaturedWrapperItem heading="Usability">
            <ArticleParagraph>
              The redesigned dashboards greatly improved clarity and focus,
              significantly reducing cognitive load. One of the most impactful
              enhancements is the introduction of a <strong>tab system</strong>,
              allowing users to work seamlessly across multiple dashboards at
              once.{" "}
            </ArticleParagraph>
            <ArticleParagraph>
              Additionally, new view options such as Full Screen and Focus Mode
              enable users to{" "}
              <strong>hide unnecessary interface elements</strong>, minimizing
              distractions and creating a cleaner, more efficient workspace.
            </ArticleParagraph>
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Easy access to the useful stuff">
            <ArticleParagraph>
              A new Home section was introduced, offering users quick access to
              key information and essential actions. It{" "}
              <strong>includes shortcuts</strong> to create a new dashboard or
              open the Dashboard Manager, as well as direct links to{" "}
              <strong>favorite and recently opened dashboards</strong>, helping
              users resume their work effortlessly.
            </ArticleParagraph>
            <ArticleParagraph>
              Beyond navigation, the Home also provides contextual resources
              such as{" "}
              <strong>
                version updates, newly released features, tutorial videos, and
                help center links
              </strong>
              , turning it into a practical and informative starting point for
              the entire dashboard experience.
            </ArticleParagraph>
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Better management">
            The redesigned Dashboard Manager represents a major improvement over
            the previous version. The new layout provides{" "}
            <strong>more space and a cleaner visual hierarchy</strong>, adopting
            a <strong>tabular format</strong> that makes data easier to browse
            and interpret. Users can now access key information at a glance (for
            example, whether a dashboard is shared or scheduled) without
            navigating through multiple panels.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            inverted
            src="/projects/dashboard-redesign/img/maze-home-modified.png"
            width={1440}
            height={740}
            alt="New home for Dashboard"
            className="order-1"
            title="New Home"
            description="Before the redesign, the Dashboard section didn't have a dedicated 
            home screen. We introduced a new one that provides quick access to key actions, 
            helpful resources, release information, and the most recent used or favorite dashboards, 
            giving users a clearer and more efficient starting point."
          />
          <ArticleImageBlock
            inverted
            src="/projects/dashboard-redesign/img/maze-manager-modified.png"
            width={1406}
            height={720}
            alt="New manager for Dashboard"
            className="order-2"
            title="New Manager"
            description="Before the redesign, the Dashboard Manager was confined to a 
            small side panel, where too many actions and pieces of information competed 
            for limited space, creating visual clutter and usability issues. 
            The new version is a dedicated, full-page manager featuring a clear tabular layout,
            advanced filtering and sorting options, and editable cells, offering a much cleaner 
            and more efficient experience."
          />
          <ArticleImageBlock
            inverted
            src="/projects/dashboard-redesign/img/new-manager-actions.png"
            width={1045}
            height={611}
            alt="New manager detail"
            className="order-3"
            title="Manager row actions"
            description="This is a detail of the available actions for each dashboard 
            within the Manager. The new design organizes these actions more clearly, 
            making it easier for users to identify and access key functions directly 
            from the list view without unnecessary steps."
          />
          <ArticleImageBlock
            inverted
            src="/projects/dashboard-redesign/img/new-manager-tooltip.png"
            width={1297}
            height={722}
            alt="New manager detail"
            className="order-4"
            title="Manager name-description tooltip"
            description="This is a detail of the dashboard manager row tooltip, 
            which lets users quickly preview the full dashboard name and description 
            by simply hovering over a cell. This enhancement removes the need to open 
            the dashboard or expand the row, streamlining navigation and improving 
            overall usability compared to the previous version."
          />
          <ArticleImageBlock
            inverted
            src="/projects/dashboard-redesign/img/tabs-detail.png"
            width={1291}
            height={801}
            alt="Detail of Dashboard tabs"
            className="order-5"
            title="New tabs system"
            description={
              <>
                <ArticleParagraph>
                  One of the most frequent user requests identified during
                  research was the ability to work on multiple dashboards
                  simultaneously. After benchmarking similar enterprise data
                  platforms, we determined that a tab-based navigation system
                  would provide the most intuitive and scalable solution.
                </ArticleParagraph>
                <ArticleParagraph>
                  A dedicated tab area integrated into the top toolbar, with the
                  Home and Manager sections remaining as fixed tabs to ensure
                  quick access, while each opened dashboard is displayed as an
                  independent, closable tab to the right.
                </ArticleParagraph>
              </>
            }
          />
          <ArticleImageBlock
            inverted
            src="/projects/dashboard-redesign/img/widget-contextual-info.png"
            width={1113}
            height={840}
            alt="Contextual info detail"
            className="order-6"
            title="Contextual help and info"
            description="Contextual information and help were added throughout the Dashboard 
            experience, both at the dashboard level and at the individual widget (chart) level. 
            Users can now quickly access guidance, metadata, and relevant tips without leaving 
            the interface, which reduces friction and prevents confusion."
          />
          <ArticleImageBlock
            inverted
            src="/projects/dashboard-redesign/img/mode-selector.png"
            width={1006}
            height={832}
            alt="Mode selector comparison"
            className="order-8"
            title="Edit/view selector improved"
            description="The Edit/View mode selector was redesigned, replacing the original toggle 
            switch with a clear and descriptive dropdown. This change made the control significantly 
            easier to locate thanks to its new position and visual hierarchy. In addition, 
            the current mode is now much more recognizable, and each option within the 
            dropdown includes a short explanatory description."
          />
          <ArticleImageBlock
            inverted
            src="/projects/dashboard-redesign/img/data-source-detail.png"
            width={1371}
            height={800}
            alt="Data source panel"
            className="order-8"
            title="Improved data source panel usability"
            description="The data source panel was redesigned to address the confusion caused by 
            the previous version. It's now much easier to distinguish between different sources 
            thanks to the addition of contextual icons that represent elements like 
            groupings or aggregations. Moreover, by simply hovering over an item, users can quickly 
            access key information such as the table, creator, last access date, and related query."
          />
        </ArticleGrid>
      </ArticleFeaturedWrapper>
      <ArticleSection heading="Learnings and Next Steps">
        <ArticleParagraph>
          From the beginning, due to the complexity of the Dashboard
          application,{" "}
          <strong>the redesign was planned as a progressive process</strong>.
          The first steps focused on the mode selector, followed by the new
          manager and widgets panel. Later, we introduced the tab system, and
          finally, the toolbars and Home section were redesigned. This approach
          added an <strong>extra layer of complexity</strong> to the project.
          Since our goal was to deliver improvements incrementally and provide
          value as early as possible.
        </ArticleParagraph>
        <ArticleParagraph>
          At that point, the tab navigation system was not yet implemented. As a
          result, we{" "}
          <strong>
            temporarily integrated the manager within a modal interface
          </strong>
          , allowing users to benefit from the new structure, filters, and
          usability enhancements without waiting for the full rollout. This
          decision required careful coordination between design and development
          to ensure a seamless transition once the tab system became available.
        </ArticleParagraph>
        <ArticleParagraph>
          The project highlighted the{" "}
          <strong>
            importance of early user testing during the initial prototyping
            phase
          </strong>
          . The feedback gathered from real users proved to be extremely
          valuable: not only helped us refine the existing design, but also
          guided the definition of new features and improvements for future
          iterations.
        </ArticleParagraph>
        <ArticleParagraph>
          The next steps focus on enhancing contextual guidance, especially to
          support <strong>user onboarding</strong>. We also plan to introduce{" "}
          <strong>containers</strong>, enabling users to group multiple widgets
          under a shared configuration, and to{" "}
          <strong>redesign the data source</strong> creation flow to make it
          more intuitive and efficient.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
