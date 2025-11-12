import { IArticle } from "@/types/article";
import { ArticleParagraph } from "../components";

export const projects: IArticle[] = [
  {
    title: "Genesys Design System",
    cat: ["design-system", "featured"],
    shortTitle: "Design System",
    role: "I led the creation of the design system, collaborating closely with frontend developers and my design team colleagues to ensure a cohesive and efficient design language across the platform.",
    description:
      "Created the Devo design system from the ground up, radically enhancing consistency, scalability, and the overall speed of design and development.",
    shortDescription:
      "The design system definition: design principles, foundations, components and patterns, as well as a detailed documentation in Storybook and Figma.",
    image: "/projects/design-system/img/design-system-thumb.png",
    imageAlt: "Genesys Design System Banner",
    imageWidth: 1263,
    imageHeight: 958,
    slug: "genesys-design-system",
    storybookLink: "https://genesys-ui.github.io/design-system",
    githubLink: "https://github.com/genesys-ui/design-system",
    figmaLink:
      "https://www.figma.com/design/wKTuF8eVSqEJWjsQarKydC/GDS---UI-Kit----v2.0.0",
    tags: ["UX/UI Architecture", "Figma", "Documentation", "Storybook"],
  },
  {
    title: "Genesys UI React components library",
    shortTitle: "UI Components Library",
    cat: ["design-system", "components"],
    role: "I co-created a React-based component library built with TypeScript and Styled Components to unify Devo's design system across products. My goal was to ensure design-code consistency and improve the developer experience.",
    description:
      "React component library that provides accessible, consistent UI elements for enterprise apps, with interactive Storybook documentation for easy use.",
    image: "/projects/genesys-ui/img/genesys-ui-thumb-2.png",
    imageAlt: "Genesys UI Banner",
    imageWidth: 800,
    imageHeight: 568,
    slug: "genesys-ui",
    storybookLink: "https://devoinc.github.io/genesys-ui",
    githubLink: "https://github.com/genesys-ui/react",
    tags: ["React", "Styled components", "TypeScript", "Storybook"],
  },
  {
    title: "Genesys icons library",
    cat: ["design-system", "icons"],
    shortTitle: "Icons library",
    role: "I co-created a React and TypeScript-based icon library that streamlined how teams use and manage icons consistently. Focused on defining the icon set, the architecture, integrating it into the design system, designing and coding the documentation in SB, and establishing the workflow for designers and developers alike.",
    description:
      "A React, font-based and SVG icon library built on top of Ionicons, providing an easy and consistent way to use iconography throughout the product.",
    image: "/projects/genesys-icons/img/icons-thumb.png",
    imageAlt: "Genesys Icons Banner",
    imageWidth: 800,
    imageHeight: 570,
    slug: "genesys-icons",
    storybookLink: "https://genesys-ui.github.io/icons/",
    githubLink: "https://github.com/genesys-ui/icons",
    tags: ["React", "Ionicons", "SVG", "Gallery"],
  },
  {
    title: "Genesys design tokens library",
    cat: ["design-system", "tokens"],
    shortTitle: "Design tokens library",
    role: "Co-creation of a design token system in JSON that synced typography, colors, spacing, and other visual styles across Figma, web, and code. Led the token structure definition, guiding set up automation with Style Dictionary, created comprehensive documentation, and established a smooth workflow for designers and developers to collaborate efficiently.",
    description:
      "Created a design token library based on JSON which generates main formats across CSS, JS, SASS, and Figma — improving radically the consistency.",
    image: "/projects/genesys-design-tokens/img/design-tokens-thumb-2.png",
    imageAlt: "Genesys design tokens Banner",
    imageWidth: 800,
    imageHeight: 568,
    slug: "genesys-design-tokens",
    storybookLink: "https://genesys-ui.github.io/theme-devo",
    githubLink: "https://github.com/genesys-ui/theme-devo",
    tags: ["Theme", "Style Dictionary", "CSS", "SASS", "JS", "JSON"],
  },
  {
    title: "Devo app UI refactor",
    cat: ["ui-refactor", "featured"],
    shortTitle: "UI Refactor",
    role: (
      <>
        <ArticleParagraph>
          I was involved not only in project{" "}
          <strong>
            planning and prototyping all application screens, but also in
            implementing the required changes directly in code
          </strong>
          . This has been a huge project, so many times we needed to do the
          changes from the design department.
        </ArticleParagraph>
        <ArticleParagraph>
          My responsibilities also included defining the new design system
          architecture, and{" "}
          <strong>ensuring visual and functional consistency</strong> across a
          vast library of data visualization components.
        </ArticleParagraph>
        <ArticleParagraph>
          In addition,I collaborated closely with data engineers, product
          managers, and front-end developers, providing{" "}
          <strong>ongoing guidance and support</strong> throughout the process.
        </ArticleParagraph>
      </>
    ),
    description:
      "Refactor and adaptation of Devo's data analysis application to the new design system — implementing the new component library, design tokens, icons, and design patterns.",
    image: "/projects/ui-refactor/img/ui-refactor-thumb.png",
    imageAlt: "Devo app refactor detail",
    imageWidth: 1024,
    imageHeight: 682,
    slug: "ui-refactor",
    tags: ["Devo", "Refactor", "Data-analysis", "App", "Design system"],
  },
  {
    title: "Devo Dashboard UI redesign",
    cat: ["dashboard-redesign", "featured"],
    shortTitle: "Dashboard redesign",
    role: (
      <>
        I led the redesign process from{" "}
        <strong>research to high-fidelity prototypes</strong> (sometimes, even
        directly coded on React), implementing reusable components and
        collaborating closely with developers to implement the UI improvements.
        The result is a more intuitive, scalable, and cohesive dashboard
        experience.
      </>
    ),
    description:
      "Redesign of Devo's dashboard section to address user flow, consistency, hierarchy, and navigation issues, informed by prior research and validated through post-prototyping Maze tests.",
    image: "/projects/dashboard-redesign/img/activeboards-redesign-thumb.png",
    imageAlt: "Devo dashboard redesign detail",
    imageWidth: 1300,
    imageHeight: 790,
    slug: "dashboard-redesign",
    tags: ["Devo", "Redesign", "Dashboard", "Design system"],
  },
];
