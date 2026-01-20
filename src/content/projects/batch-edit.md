---
title: BatchEdit
description: >-
  Batch Edit is an Adobe Express add-on that turns hours of manual image editing
  into seconds of automated processing. Built for Adobe Express Add-ons for
  Enterprise Hackathon.
image: '@assets/projects/batch-edit/image.jpeg'
startDate: 2026-01-16
endDate: 2026-01-17
skills:
  - React
  - Spectrum Web Components
  - Typescript
demoLink: >-
  https://adobesparkpost.app.link/TR9Mb7TXFLb?mode=private&claimCode=wi301k277:A0VVA85K
sourceLink: https://github.com/ujjwal-dev23/express-add-on
---
## **Inspiration**

Adobe Express is a powerhouse for creative design, yet we identified a critical friction point: the lack of native batch-processing capabilities. Content creators and social media managers frequently repeat identical manual tasks—such as uploading, fitting, and watermarking assets—across dozens of individual pages. Inspired by the consistent feedback from users seeking high-throughput creative production, we developed **BatchEdit** to transform Adobe Express from a single-asset editor into a automated production engine.

## **What it does**

BatchEdit is a comprehensive automation suite designed to eliminate the manual overhead of high-volume asset management. The tool empowers users to:

- **Batch Import:** Simultaneously upload up to 250 images, which are automatically distributed across new document pages.
- **Intelligent Canvas Fitting:** Apply programmatic "Fill" or "Contain" logic across custom page ranges to ensure visual consistency.
- **Global Watermarking:** Inject branded logos into specified anchor positions (Top-Left, Top-Right, Bottom-Left, Bottom-Right, or Center) with granular opacity and scale controls.
- **Bulk Layout Transformation:** Effortlessly resize entire documents or specific subsets to social media presets like Instagram and Facebook.
- **Smart Export Engine:** Facilitate organized distribution with custom naming patterns (e.g., `{date}_{index}`) and high-speed ZIP-compressed exporting to bypass browser download limits.

## **How we built it**

The project is built on a robust, performance-oriented stack:

- **Frontend:** Developed using **React** and **TypeScript** to ensure a reliable and scalable codebase.
- **UI/UX:** Leveraged **Adobe Spectrum Web Components** to provide a native look and feel that integrates seamlessly into the Adobe Express sidebar.
- **Core Logic:** Utilized the **Adobe Express Add-on SDK** and **Document Sandbox API** for secure, high-speed document manipulation and asset access.
- **API Communication:** Implemented a proxy system to manage communication between the UI runtime and the document sandbox.

## **Challenges we ran into**

- **Experimental API Stability:** The resize functionality within the Adobe Express SDK is currently experimental. Navigating its instabilities required significant troubleshooting to ensure the bulk resizing features remained reliable for user workflows.
- **Mathematical Layout Implementation:** There are currently no standardized SDK methods to programmatically "Fill" or "Contain" an image within document constraints. We had to develop custom manual implementations to calculate and apply these transforms across diverse image aspect ratios consistently.

## **Accomplishments that we're proud of**

- **Bridging the Gap:** We successfully implemented a missing feature set that provides an immediate, tangible efficiency boost for Adobe Express power users.
- **SDK Mitigation:** We are proud of our ability to mitigate current SDK limitations, creating complex functionalities like multi-positional watermarking and batch fitting that extend the platform's current native capabilities.
- **Workflow Acceleration:** Our project significantly reduces the time-to-post, turning hours of manual repetition into seconds of automated processing.

## **What we learned**

- **MVP Execution:** We gained deep experience in prioritizing features to build a high-impact Minimum Viable Product (MVP) under tight hackathon constraints.
- **Sandboxed Architectures:** The team mastered the complexities of designing systems within a sandboxed environment, specifically managing the bridge between an add-on’s UI and the underlying document sandbox.
- **Collaborative Development:** We refined our version control and collaborative workflows to maintain a clean, modular codebase while working across multiple feature branches.

## **What's next for BatchEdit**

- **Community Engagement:** We aim to collaborate with the Adobe developer community to explore further enhancements for the Adobe Express ecosystem.
- **Stable Release:** As experimental SDK APIs migrate to stable releases, we plan to move toward a full, public add-on launch with even deeper document integration.
- **Advanced Features:** We are looking to implement additional planned features, such as batch color correction and AI-driven layout suggestions, as the SDK capabilities evolve.
