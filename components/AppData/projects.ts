const PROJECTS_DATA = [
  {
    title: 'Citi Bank Command Center Dashboard',
    description: 'Next generation Omni-channel Dashboard for command center',
    about:
      'Developed a comprehensive dashboard solution for Citi Bank\'s command center to display real-time, interval, and historical data for executives, analysts, and operations teams. The system provides critical financial data visualization and monitoring capabilities.',
    link: '#',
    imageUrl: 'https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif',
    github: '#',
    type: ['project', 'enterprise'],
    technologies: ['React', 'D3.js', 'JavaScript', 'Redux'],
  },
  {
    title: 'Quantela IoT Smart City Framework',
    about: 'IoT monitoring framework for smart city data management',
    description:
      'Built an IoT framework for CISCO to monitor smart city data through a comprehensive dashboard with dynamic panels and widgets. The system enables real-time monitoring of various workspace types on a single screen.',
    link: '#',
    github: '#',
    imageUrl: 'https://i.ibb.co/txPxtCP/Frame-21-1.png',
    type: ['project', 'enterprise', 'iot'],
    technologies: ['React', 'JavaScript', 'D3.js', 'IoT'],
  },
  {
    title: 'TUMI E-commerce Platform',
    description: 'Online E-commerce Platform for Luggage Products',
    github: '#',
    about:
      'Developed a comprehensive e-commerce platform for TUMI luggage products. The platform includes category-based product browsing, shopping cart functionality, and secure payment processing for travel, backpacks, bags, and accessories.',
    link: '#',
    imageUrl: 'https://i.ibb.co/T0XwFsQ/Screen-Recording-2020-05-06-at-3.gif',
    type: ['project', 'ecommerce'],
    technologies: ['React', 'Redux', 'JavaScript', 'E-commerce'],
  },
    {
    title: 'CamelQ Bike Taxi Application',
    description: 'Cross-platform ride-hailing application',
    about:
      'Developed a cross-platform ride-hailing application using React Native with Wind styling for responsive UI. Implemented real-time communication via Socket.IO, Google Maps integration, and Clerk authentication with JWT tokens.',
    link: '#',
    imageUrl: 'https://i.ibb.co/GHssNFz/ezgif-4-03232fcf9b.gif',
    type: ['project', 'mobile'],
    technologies: ['React Native', 'Socket.IO', 'Google Maps', 'Clerk Auth'],
  },
  {
    title: 'Esurance Auto Insurance Platform',
    description: 'Online auto insurance platform with quote comparisons',
    about:
      'Developed an auto insurance platform for Esurance, integrating React.js and D3.js components with backend APIs. Implemented authentication, authorization mechanisms, and collaborated with UI/UX designers for insurance industry stakeholders.',
    link: '#',
    imageUrl: 'https://i.ibb.co/6gZckMz/Screenshot-2020-05-04-at-4-34-31-AM.png',
    type: ['project', 'enterprise'],
    technologies: ['React', 'D3.js', 'JavaScript', 'Insurance APIs'],
  },
  {
    title: 'Real-time Number Matching Game',
    description: 'Multiplayer real-time number matching game',
    about:
      'Independently developed a real-time multiplayer game using React.js, Tailwind CSS, and Socket.io. Applied AI-assisted tools and Cursor for efficient development and deployed on Netlify.',
    link: '#',
    github: '#',
    imageUrl: 'https://i.ibb.co/Pxm6yzy/Screenshot-2020-07-28-at-02-48-43.png',
    type: ['project', 'game'],
    technologies: ['React', 'Socket.io', 'Tailwind CSS', 'Netlify'],
  },
  {
    title: 'One-Day Hire Platform',
    description: 'Service provider and receiver marketplace',
    about:
      'Designed and built a part-time work marketplace platform connecting service providers with service seekers. Utilized Supabase backend, Docker Desktop containerization, and Netlify deployment.',
    link: '#',
    imageUrl: 'https://i.ibb.co/1Q3331D/Screenshot-2023-08-02-at-8-21-59-PM.png',
    type: ['project', 'marketplace'],
    technologies: ['React', 'Supabase', 'Docker', 'Netlify'],
  },
  {
    title: 'Enterprise Virtual Assistant',
    description: 'Building Virtual Assistant at enterprise level',
    about:
      'Developed enterprise-level virtual assistant solutions with advanced AI capabilities. Focused on improving customer service and operational efficiency through intelligent automation.',
    link: '#',
    imageUrl: 'https://i.ibb.co/KsnZhLP/Screenshot-2020-06-11-at-15-10-06.png',
    type: ['project', 'enterprise', 'ai'],
    technologies: ['React', 'AI/ML', 'JavaScript', 'Enterprise APIs'],
  },
  {
    title: 'Legacy System Modernization',
    description: 'Upgrading legacy systems to cutting-edge technologies',
    about:
      'Led the modernization of legacy systems by migrating them to modern React.js architecture. Improved performance, maintainability, and user experience while preserving business logic.',
    link: '#',
    imageUrl: 'https://i.ibb.co/bXTCNhY/Screen-Shot-2019-11-23-at-2-15-47-PM.png',
    type: ['project', 'migration'],
    technologies: ['React', 'JavaScript', 'Legacy Migration', 'Modernization'],
  },
  {
    title: 'React Component Library',
    description: 'Custom reusable React components and utilities',
    about:
      'Developed a comprehensive library of reusable React components including custom hooks, context providers, and utility functions. Focused on accessibility, performance, and developer experience.',
    link: '#',
    github: '#',
    imageUrl: 'https://i.ibb.co/5K2pY54/Screen-Shot-2019-11-23-at-2-16-30-PM.png',
    type: ['project', 'open-source', 'tools'],
    technologies: ['React', 'TypeScript', 'Custom Hooks', 'Context API'],
  },
  {
    title: 'Performance Optimization Tools',
    description: 'Tools for monitoring and improving frontend performance',
    about:
      'Created tools and utilities for monitoring and improving frontend performance. Implemented lazy loading, code splitting, and optimization strategies for better user experience.',
    link: '#',
    imageUrl: 'https://i.ibb.co/ZhmzLdv/Screenshot-2020-05-04-at-4-26-10-AM.png',
    type: ['project', 'tools'],
    technologies: ['React', 'Performance', 'Webpack', 'Optimization'],
  },
  {
    title: 'API Integration Framework',
    description: 'Centralized API management and integration system',
    about:
      'Developed a centralized framework for managing API integrations, authentication, and data flow. Streamlined backend communication and improved development efficiency.',
    link: '#',
    imageUrl: 'https://i.ibb.co/s5ppyjx/Screen-Shot-2019-11-23-at-2-17-57-PM.png',
    type: ['project', 'backend'],
    technologies: ['React', 'API Management', 'Authentication', 'Data Flow'],
  },
  {
    title: 'Responsive Design System',
    description: 'Comprehensive design system for consistent UI/UX',
    about:
      'Created a comprehensive design system ensuring consistent UI/UX across all applications. Included component library, style guides, and responsive design patterns.',
    link: '#',
    imageUrl: 'https://i.ibb.co/zFT3HQR/Screen-Recording-2020-05-06-at-1.gif',
    type: ['project', 'design'],
    technologies: ['React', 'CSS3', 'Responsive Design', 'Design System'],
  },
  {
    title: 'State Management Solutions',
    description: 'Custom state management implementations',
    about:
      'Developed custom state management solutions using React Context, Redux, and custom hooks. Focused on scalability, performance, and developer experience.',
    link: '#',
    github: '#',
    imageUrl: 'https://i.ibb.co/ykQmbVw/Screen-Shot-2019-11-23-at-2-20-17-PM.png',
    type: ['project', 'state-management'],
    technologies: ['React', 'Redux', 'Context API', 'Custom Hooks'],
  },
  {
    title: 'Testing Framework',
    description: 'Comprehensive testing strategy and implementation',
    about:
      'Implemented comprehensive testing strategies including unit tests, integration tests, and end-to-end testing. Ensured code quality and reliability across all projects.',
    link: '#',
    imageUrl: 'https://i.ibb.co/LnCz8Vx/Screen-Shot-2019-11-23-at-2-24-07-PM.png',
    type: ['project', 'testing'],
    technologies: ['Jest', 'React Testing Library', 'Cypress', 'Testing'],
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Automated deployment and continuous integration',
    about:
      'Set up automated CI/CD pipelines for efficient code deployment and continuous integration. Improved development workflow and reduced deployment time.',
    link: '#',
    imageUrl: 'https://i.ibb.co/Q9fYs4c/ezgif-2-0b55cd56fe.gif',
    type: ['project', 'devops'],
    technologies: ['GitHub Actions', 'Docker', 'Netlify', 'CI/CD'],
  },
];

export default PROJECTS_DATA;
