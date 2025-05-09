import broadLogo from '../assets/BroadInstitute.svg';
import fanduelLogo from '../assets/fanduel.svg';
import ultraLogo from '../assets/ultra_logo_text_below.svg';

export type JobDetailData = {
  name: string;
  logo: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

export const jobs: JobDetailData[] = [
  {
    name: 'FanDuel',
    jobTitle: 'Software Engineer',
    location: 'New York, NY',
    startDate: 'January 2024',
    endDate: 'May 2025',
    logo: fanduelLogo,
    responsibilities: [
      "Enhanced login flow performance by implementing features such as auto-submit, auto-focus, input validation, and Apple Keychain support—reducing average user login time by 4 seconds.",
      "Led front-end development and deployment of a user device service for FanDuel, introducing MFA challenges on unrecognized devices to mitigate account takeover (ATO) risks.",
      "Designed and integrated a performance testing framework using Locust to stress test the user device service; fine-tuned deployment to handle 350.36 requests/sec during Super Bowl LIX.",
      "Spearheaded a Java 21 upgrade for the User Device Service, including updates to Gradle, Buildkite workflows, and internal Docker images, supporting FanDuel’s modernization efforts.",
      "Instrumented both front-end and back-end with Amplitude events, DataDog meters, and alerting mechanisms to improve observability of user behavior and service health."
    ]
  },
  {
    name: 'Broad Institute of MIT and Harvard',
    jobTitle: 'Senior Software Engineer',
    location: 'Cambridge, MA',
    startDate: 'July 2020',
    endDate: 'January 2024',
    logo: broadLogo,
    responsibilities: [
      'Spearheaded the implementation of new REST endpoints within Cromwell and expanded the React component library, significantly enhancing workflow troubleshooting and debugging capabilities in Terra on Azure.',
      'Planned and executed a front-end migration from OAuth to OpenID Connect for Broad-internal Angular apps hosted on GCP.',
      'Designed and implemented authorization and authentication safeguards to enforce data access, identity, and policy restrictions across DUOS.',
      'Built and extended Dropwizard APIs and PostgreSQL queries to significantly improve Data Access Request processing speeds by 65%.',
      'Collaborated with UX and Product Managers to develop a suite of React components integral to the UI redesign of DUOS',
      'Established a robust UI testing workflow for both continuous integration (CI) and local development environments by leveraging Cypress, Jest, and Github Actions.',
      'Provided mentorship and guidance to incoming co-op team members, facilitating their learning of the code base and assisting in the enhancement of existing features.',
      'All services are open-source; feel free to review my contributions for yourself (see pinned repositories on my Github profile)'
    ],
  },
  {
    name: 'Ultra Capital',
    jobTitle: 'Software Engineer',
    location: 'Boston, MA',
    startDate: 'April 2017',
    endDate: 'May 2020',
    logo: ultraLogo,
    responsibilities: [
      'Implemented interface design and usability improvements through collaboration with origination and execution team members',
      'Researched, planned, and began a multi-part migration of Ultra Capital’s 5-year codebase from AngularJS to React',
      'Designed and implemented user interface, API, and database tables for proprietary evaluation tools used for weekly analysis of a total of $3B in potential investments',
      'Created user interface and API for portfolio analysis tool that allows users to run simulations and render data visualizations for $200M+ portfolios',
      'Implemented two-factor authentication, password strength analysis, password reset processes, and rate-limits onto user login/authentication flow as mandated by SEC security policies',
      'Improved page loading and data processing on investment project analysis by 75% through optimized database queries and selective component rendering as a means to limit overhead on the front-end',
      'Architected and developed API, user sign-up flow, AWS SES mailers, component templates, and front-end data processing for an external facing portal that allows Ultra team members to collect information about investment opportunities from industry partners',
      'Built a microservice scaffold to selectively render pages with either AngularJS or React to help facilitate a stable conversion of AngularJS directives/controllers into React components.',
    ],
  },
];
