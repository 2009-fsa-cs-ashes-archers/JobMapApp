const javaScriptJobsByState = {
  Alabama: {count: 260, averageSalary: undefined},
  Alaska: {count: 45, averageSalary: undefined},
  Arizona: {count: 807, averageSalary: 130555.56},
  Arkansas: {count: 210, averageSalary: 100000},
  California: {count: 4342, averageSalary: 142900.88},
  Colorado: {count: 1279, averageSalary: 127890},
  Connecticut: {count: 506, averageSalary: 101691.75},
  Delaware: {count: 168, averageSalary: 67500},
  Florida: {count: 1882, averageSalary: 97514.75},
  Georgia: {count: 1370, averageSalary: 101183.2},
  Hawaii: {count: 60, averageSalary: undefined},
  Idaho: {count: 182, averageSalary: 145000},
  Illinois: {count: 1707, averageSalary: 119933.33},
  Indiana: {count: 357, averageSalary: 107140},
  Iowa: {count: 249, averageSalary: undefined},
  Kansas: {count: 266, averageSalary: 100500},
  Kentucky: {count: 271, averageSalary: 180833.33},
  Louisiana: {count: 151, averageSalary: undefined},
  Maine: {count: 114, averageSalary: undefined},
  Maryland: {count: 1577, averageSalary: 116500},
  Massachusetts: {count: 1419, averageSalary: 139595.83},
  Michigan: {count: 745, averageSalary: 108214.29},
  Minnesota: {count: 934, averageSalary: 115000},
  Mississippi: {count: 117, averageSalary: undefined},
  Missouri: {count: 808, averageSalary: 121487.5},
  Montana: {count: 116, averageSalary: undefined},
  Nebraska: {count: 237, averageSalary: undefined},
  Nevada: {count: 196, averageSalary: 119892.86},
  'New Hampshire': {count: 208, averageSalary: 107487.5},
  'New Jersey': {count: 1473, averageSalary: 120000},
  'New Mexico': {count: 167, averageSalary: 145000},
  'New York': {count: 2365, averageSalary: 141215.79},
  'North Carolina': {count: 1493, averageSalary: 124772.73},
  'North Dakota': {count: 62, averageSalary: undefined},
  Ohio: {count: 1180, averageSalary: 95403.33},
  Oklahoma: {count: 132, averageSalary: undefined},
  Oregon: {count: 655, averageSalary: 142390},
  Pennsylvania: {count: 1410, averageSalary: 75000},
  'Rhode Island': {count: 215, averageSalary: undefined},
  'South Carolina': {count: 225, averageSalary: 107776.25},
  'South Dakota': {count: 78, averageSalary: undefined},
  Tennessee: {count: 465, averageSalary: 118333.33},
  Texas: {count: 2864, averageSalary: 116310},
  Utah: {count: 638, averageSalary: 130357.14},
  Vermont: {count: 136, averageSalary: undefined},
  Virginia: {count: 3335, averageSalary: 124974.83},
  Washington: {count: 1672, averageSalary: 131514.29},
  'West Virginia': {count: 114, averageSalary: 50000},
  Wisconsin: {count: 411, averageSalary: 115000},
  Wyoming: {count: 52, averageSalary: undefined}
}

const californiaJavascriptData = {
  count: 4445,
  averageSalary: 142949.9,
  histogramByPercent: {
    '20000': 1,
    '40000': 1,
    '60000': 2,
    '80000': 5,
    '100000': 8,
    '120000': 22,
    '140000': 62
  }
}

const californiaJavascriptJobs = [
  {
    title: 'Full Stack JavaScript Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1856769238?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=F40A8B2228E55D2E2524EEE6C4DEC82721B4B6F5',
    description:
      '...  The Full Stack JavaScript Engineer must have at least 5 years of experience and be familiar with: - Solid grasp of JavaScript development on front and back end features - Understanding ... Are you a Full Stack JavaScript Engineer who dreams of working for a fun and energetic environment? If so, please read on We are the fa…',
    created: '2020-12-02T02:30:47Z'
  },
  {
    title: 'Javascript Developer',
    company: 'Foundation Recruiting and Consulting',
    maxSalary: null,
    minSalary: null,
    locationName: 'Vista, San Diego County',
    area: ['US', 'California', 'San Diego County', 'Vista'],
    longitude: -117.238216,
    latitude: 33.160642,
    url:
      'https://www.adzuna.com/land/ad/1801304192?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A8B9811A33B6882EB1AF52BD5C705C736006C450',
    description:
      '...  and Javascript Frameworks Libraries (Vue, React, Angular, Knockout) Front End UIUX, HTML5, CSS3 Full Stack some backend such as Node, etc. Agile Scrum Desired SkillsExperience VueJS Node ...  images Experience developing user-facing software Bachelorrsquos Degree in Computer Science Responsibilities Work closely with key partners to build exciting and reliable web ...',
    created: '2020-11-03T18:13:16Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack JavaScript Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1855378379?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=D2CAB46CA721E66053A9825D2408E4631F0427C8',
    description:
      'Minimum Required Skills Node.js, API, AWS Are you a Full Stack JavaScript Engineer who dreams of working for a fun and energetic environment? If so, please read on We ...  quality app features What You Need for this Position The Full Stack JavaScript Engineer must have at least 5 years of experience and be familiar with - Solid grasp of JavaScript</stro…',
    created: '2020-12-01T14:02:03Z',
    contract: 'full_time'
  },
  {
    title: 'Full stack engineer',
    company: 'Confidential Company',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.8875518,
    latitude: 37.3661525,
    url:
      'https://www.adzuna.com/land/ad/1855891833?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A9CD7816426F6A9760B4D598CCB81B17A6E794A2',
    description:
      'Direct Hire Responsibilities & Duties: Lead design and development of full stack applications with an emphasis on content experience Build rich UX client-side apps with React ... : Agile, Scrum etc. At least 7 years’ experience in developing consumer-facing modern web applications using React or Angular, Javascript, HTML5 & CSS, NodeJs, etc. Strong knowledge ...',
    created: '2020-12-01T18:15:02Z',
    contract: 'full_time'
  },
  {
    title: 'Javascript Software Engineer',
    company: 'The Search Solutions, LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Beverly Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Beverly Hills'],
    longitude: -118.4857302,
    latitude: 34.0010797,
    url:
      'https://www.adzuna.com/land/ad/1858903611?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=8EFC9B134EB48FA2A8BBF1F2FC1597469AFD2988',
    description:
      'Software Engineer, Applications Description Building desktop and progressive mobile web applications as well as Platform tooling application. Tooling application is an Angular ...  based front end that works with microservices back end. Requirements 3-5 Years recent software engineering experience in a team environment Strong Javascript, HTML, CSS and ability ...',
    created: '2020-12-03T02:08:10Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Full-Stack Software Developer - JavaScript | C#',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1861080176?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=56EEBB0B4BA90C238AD737E2CFF4428F7411152D',
    description:
      'If you are a Full-Stack Software Developer with C# experience, please read on Based in beautiful Orange County, CA, we are a highly innovative software start-up making great ...  with PHP - Experience with AWS - Experience with iOS / XamarinSo, if you are a Sr. Full-Stack Software Developer with experience, please apply today ...',
    created: '2020-12-04T02:36:05Z'
  },
  {
    title: 'Full-stack Developer - C# / ASP.NET / React / Javascript',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Aliso Viejo, Orange County',
    area: ['US', 'California', 'Orange County', 'Aliso Viejo'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1856768663?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=9E6F91046DF7DCAF5ADEEC24FBED31BBCBE0FBDE',
    description:
      'C# ASP.NET MVC Developer - Full-stack C# / .NET and ReactJS Developer - Senior Software Engineer - High Traffic Public Facing Software Applications If you are a Senior C# ASP.NET ...  ASP.NET Developer / Senior Software Engineer with deep interest in .NET development and exposure to MVC and high-traffic modern …',
    created: '2020-12-02T02:30:27Z'
  },
  {
    title: 'Full-Stack Developer (Python & JavaScript)',
    company: 'Skan',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.9637525,
    latitude: 37.4204832,
    url:
      'https://www.adzuna.com/land/ad/1837095232?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=D519ED6BEEB3086D613AF975C1972CEE146D3EE3',
    description:
      '...  hands-on experience delivering enterprise-class web applications  5 years of experience as a Python and Angular developer in all stages of the application development lifecycle  Strong ... .  Write effective unit tests and integration tests to ensure high-quality software delivery.  Promote consistent architecture patterns for design and development within and across ...',
    created: '2020-11-21T08:59:50Z'
  },
  {
    title: 'Sr. Full-Stack Software Developer - JavaScript | C#',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1820843050?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=5EE56AB234A8F2D504FE7E19F67794C4D5C8EED8',
    description:
      'Costa Mesa, CA Compensation UnspecifiedPosted 10/22/2020If you are a Full-Stack Software Developer with C# experience, please read on Based in beautiful Orange County, CA, we ...  such as MySQL or PostgreSQL Bonus points: - Experience with PHP - Experience with AWS - Experience with iOS / XamarinSo, if you are a Sr. Full-Stack Software Developer with experience…',
    created: '2020-11-13T12:33:34Z'
  },
  {
    title: 'Senior Full Stack Engineer (Ruby/JavaScript)',
    company: 'TekPartners Solutions, LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -80.1384829,
    latitude: 26.2057475,
    url:
      'https://www.adzuna.com/land/ad/1834984200?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=3FF76646E35689DD37AE2CA5C501AC5663372C63',
    description:
      'Title: Senior Full Stack Engineer (Ruby/JavaScript) Location: 100% REMOTE (employer based in San Francisco, CA) Duration: Direct Hire Compensation: $140,000 - $175,000 Base Salary ...  career. We currently have an opportunity for a Senior Full Stack Engineer that could be right for you. Must-Haves 1. Top 3 languages/frameworks with length of experience 2. Complex ...',
    created: '2020-11-20T04:09:44Z'
  },
  {
    title: 'Senior Full Stack Engineer - REACT, JavaScript, TypeScript',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1858934440?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=303F97ADB56D8DD1B1943C40360DFC6F15D20BB4',
    description:
      'Based out of Santa Monica, CA, this role is fully remote We are looking for a skilled Senior Full Stack Engineer with React, Node, and TypeScript experience, if this sounds like ...  - Unlimited PTO - WFH office setup stipend - 100% RemoteSo, if you are a Senior Full Stack Engineer with experience, please apply today CyberCoders will consider for Employment in the City ...',
    created: '2020-12-03T02:26:33Z'
  },
  {
    title: 'Software Engineer - Java, Python, JavaScript',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030726?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BAD44F1985C92EA95572E179A1C3401E9BDFE916',
    description:
      '...  will go through coding exercises as part of the interviewing process). - Demonstrable experience developing full-stack applications - Experience of implementing Java best practices ...  - Experience developing web user interfaces (JavaScript etc.) Significant and demonstrable development experience in several programming languages, incl. Java,Python, JavaScript</st…',
    created: '2020-12-01T02:25:10Z'
  },
  {
    title: 'JavaScript Developer',
    company: 'Johnson Service Group, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7424499,
    latitude: 33.66266239999999,
    url:
      'https://www.adzuna.com/land/ad/1860394921?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=568DC2965D8846FE53299CD112818565F5433771',
    description:
      'Our client in Irvine, CA or Plano, TX is seeking a JavaScript Developer with strong problem solving abilities, leadership, and application architecture skills. The development ...  work will primarily focus on mobile and web application development. Aside from hands-on development, this position will work collaboratively with the technical team on technical ...',
    created: '2020-12-03T19:17:52Z',
    contract: 'full_time'
  },
  {
    title: 'Javascript Developer',
    company: 'Error Free',
    maxSalary: null,
    minSalary: null,
    locationName: 'Solana Beach, San Diego County',
    area: ['US', 'California', 'San Diego County', 'Solana Beach'],
    longitude: -117.2610758,
    latitude: 32.9916729,
    url:
      'https://www.adzuna.com/land/ad/1846849183?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=B85B44D8D7746E548066686E06F059C793C11D36',
    description:
      'SunIRef:it We are seeking an autonomous and dynamic JavaScript, HTML, CSS developer to participate in the development of its worldwide cloud-based software system. The Project ... : JavaScript, HTML, CSS developer with a passion for developing advanced web applications using the latest frameworks, platforms and tools in an agile development tea…',
    created: '2020-11-26T19:19:27Z'
  },
  {
    title: 'Senior Software Engineer - C# | JavaScript',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853839476?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=61DD769D461B077A4ACC25BE0773E6AC9008737A',
    description:
      'If you are a Senior Software Engineer with full-stack experience, please read on Based in beautiful Orange County, CA, we are a highly innovative software start-up making great ...  and demand for our platform, we are in need of a talented Sr. Full-Stack Engineer to join our diverse team Due to Covid-19, we are flexible with remote work, but we would prefer if …',
    created: '2020-12-01T01:12:20Z'
  },
  {
    title: 'Full Stack Web Developer',
    company: 'The Atlantic Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.1611158,
    latitude: 37.4440259,
    url:
      'https://www.adzuna.com/land/ad/1858208767?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=CFE946E2946F56FBB84D1D8A09E96935022E10D8',
    description:
      'Our client, an award-winning data-driven marketing and communications firm, is looking to hire a Full Stack Web Developer in San Francisco, CA (fully remote until COVID-19 ...  of object oriented programming Strong background with LAMP Stack development environment 4 years working with the following HTML, CSS3, JavaScript 4 years of PHP development experience 3…',
    created: '2020-12-02T18:20:30Z',
    contract: 'full_time'
  },
  {
    title: 'Javascript Engineer',
    company: 'Workbridge Associates',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.8401221,
    latitude: 33.6820247,
    url:
      'https://www.adzuna.com/land/ad/1820838474?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=3F779BED816E365EC71F32587E49FF050E211761',
    description:
      'An successful startup located in Costa Mesa is looking for an experienced Javascript Engineer to join their team. This company specializes in developing open source tools ...  their data-visualization systems. The front end team consists of 10 developers that work beneath the CTO and alongside a QA Engineer and 2 Project Managers.Required Skills & Experience5 ...',
    created: '2020-11-13T12:32:48Z'
  },
  {
    title: 'Software Engineering Manager - JavaScript, React, AWS',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1861080208?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=3C6D0F8CBF1F59668ADF59916517D588BC8E031F',
    description:
      '...  in this roleWhat You Need for this Position Must Haves: - 5 years of hands-on full-stack technical development experience (more emphasis towards the front-end) - 2 years of engineering management ... If you are a Software Engineering Manager with experience, please read onTop Reasons to Work with Us 1. Based in San Francisco, we are an exciting startup in the Food industry. 2 ...',
    created: '2020-12-04T02:36:06Z'
  },
  {
    title: 'Full Stack Developer/Engineer',
    company: 'Prutech Solutions',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -74.3051469,
    latitude: 40.5593528,
    url:
      'https://www.adzuna.com/land/ad/1860222759?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=E48F44726F1CB5737874B35391F5E3552514D783',
    description:
      ', JavaScript, CSS3, AJAX, Responsive Design, and general Web 2.0 techniques in the context of interactive Web Applications Full-stack software development experience using popular frameworks ...  required. Qualified Full Stack Engineer with strong emphasis on Front End Experience with proven experience with React JS or equivale…',
    created: '2020-12-03T16:50:05Z'
  },
  {
    title: 'JavaScript Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Blossom Valley, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Blossom Valley'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1751114115?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BFBCF596515351A0F08E0FCA67C8B89C6619B471',
    description:
      'Senior JavaScript Engineer with React / NodeJS with QtThis Jobot Job is hosted by: Thuan LeeAre you a fit? Easy Apply now by clicking the "Apply on company site" button ...  safety and access. We are building out a new team to support a new project/initiative via long-term contracts.If you are a Senior JavaScript Engineer with React / NodeJS with Qt ...',
    created: '2020-10-08T22:13:11Z'
  },
  {
    title: 'Senior JavaScript Developer',
    company: 'EPAM Systems',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -121.9253112,
    latitude: 37.371644,
    url:
      'https://www.adzuna.com/land/ad/1820830676?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=6304391210C851B3BD61D0C581089909574E1897',
    description:
      '...  JavaScript Developer. Scroll down to learn more about the position’s responsibilities and requirements. LI-DNILI-DNPWhat You’ll DoDevelopment, testing, and Production launchFull-cycle web ...  HaveA degree in an associated field and/or other advanced certification along with significant experience5 years of JavaScript development experienceDeep knowledge and experience ...',
    created: '2020-11-13T12:31:00Z'
  },
  {
    title: 'Staff Full-Stack JavaScript Engineer (node.js/React)',
    company: 'Freedom Financial Network',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Mateo County, California',
    area: ['US', 'California', 'San Mateo County'],
    longitude: -122.300502,
    latitude: 37.553403,
    url:
      'https://www.adzuna.com/land/ad/1820826751?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=4E378DD995AD03028967C5DEED939C653A115A09',
    description:
      "...  we work with, and get better at what we do every day.THE OPPORTUNITY:We are looking for a Staff Full-Stack JavaScript Engineer (node.js/React) to join our Engineering team in our ... 's degree in Computer Science or related engineering field.Proficient in building full-stack applications on node.js, React, AWS/Google CloudExperienced in web</strong…",
    created: '2020-11-13T12:29:59Z'
  },
  {
    title: 'Senior JavaScript Developer',
    company: 'EPAM Systems',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4035067,
    latitude: 37.7902131,
    url:
      'https://www.adzuna.com/land/ad/1820834642?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A83FF20B9C9081F64BB387DF78D98BDF8A6D7C9F',
    description:
      '...  JavaScript Developer. Scroll down to learn more about the position’s responsibilities and requirements. Candidate can be in any US location but should be able to work in PST time ...  development using Agile approachIdea generation and high-level vision creationSolution design and documenting, proposalRun customers demo and education sessionsWork with other engineers ...',
    created: '2020-11-13T12:32:10Z'
  },
  {
    title: 'Senior Javascript Engineer',
    company: 'Vonage',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.9784407,
    latitude: 37.553354,
    url:
      'https://www.adzuna.com/land/ad/1820837555?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=35D76842A40B668F8A7E83B7082951F1E7F0ECE3',
    description:
      "...  and component design, developing solutions that serve millions of users and businesses all over the world. You can join our team as a JavaScript Engineer, growing your own career and helping ... Vonage Engineering MissionWe embody the notion of what's next now We envision, develop and manage technology to connect the world. Our team brings excellence, passion, creativity ...",
    created: '2020-11-13T12:32:39Z'
  },
  {
    title: 'Senior JavaScript Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Textile Finance, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Textile Finance'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1843068046?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=6C957A2D3DBF7F7EF4B983CCA980C34CC0306F3C',
    description:
      ", and assisting other co-workers What we're looking for: Seasoned Software Developer working with an expert knowledge of JavaScript Experience with single page web app development Client side ... Seeking Senior Software Engineer with superb Vanilla JavaScript experience to join a funded start-up This Jobot Job is hosted by: Daniel Peng Are you a fit? Easy Apply…",
    created: '2020-11-24T22:11:42Z'
  },
  {
    title: 'JavaScript Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Altos, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Los Altos'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1853635434?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=433AB474BA750675C3F48A2912D8306276F7B447',
    description:
      'Senior JavaScript Engineer with React NodeJS with Qt This Jobot Job is hosted by Thuan Lee Are you a fit? Easy Apply now by clicking the "Apply Now" button and sending us your ... . We are building out a new team to support a new projectinitiative via long-term contracts. If you are a Senior JavaScript Engineer with React NodeJS with Qt experience, then please ...',
    created: '2020-12-01T00:01:44Z'
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Kforce Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Westchester, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Westchester'],
    longitude: -118.3828082,
    latitude: 33.9878043,
    url:
      'https://www.adzuna.com/land/ad/1786489602?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=46BA8F5BA0FE5D7FC19F841749EBA13454DF7168',
    description:
      'RESPONSIBILITIES: Kforce has a client that is seeking a Full Stack Software Engineer in Los Angeles, CA. Responsibilities: Implement the User Interface for web applications using ...  in Computer Science or related discipline, and minimum of 5 years of experience in commercial software development Experience developing with Web technologies: Re…',
    created: '2020-10-27T15:12:48Z'
  },
  {
    title: 'Full Stack Web Developer',
    company: 'First Republic Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4515672,
    latitude: 37.7985484,
    url:
      'https://www.adzuna.com/land/ad/1820833240?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=6748E703CC24F058ABD02F814BC0C9F471378FBD',
    description:
      '...  service.Digital Technologies - Marketing Technology team is looking for a Full Stack Web Developer. In this role, you will work with IT teams and other internal organizations to deliver ... , a strong and demonstrated strength in communication and in relationship building will ensure success in this role.The Full Stack Web Developer reports to the VP of Di…',
    created: '2020-11-13T12:31:44Z'
  },
  {
    title: 'Full Stack Web Developer',
    company: 'Apple',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9463428,
    latitude: 37.3256681,
    url:
      'https://www.adzuna.com/land/ad/1820832804?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=4C4C1F602E355F87BC0F0A4DAE17F5781236F731',
    description:
      '...  for a Full-Stack Web Developer / UI Engineer who is an authority in creating and building user interfaces. You will bring passion and strive to stay up-to-date on current methodologies ...  efforts. Join Apple, and help us leave the world better than we found itAre you passionate about staying ahead of the curve on front end web technology and development trends ...',
    created: '2020-11-13T12:31:37Z'
  },
  {
    title: 'Senior Full Stack Software Engineer Java/Javascript',
    company: 'New Relic Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3929712,
    latitude: 37.7913249,
    url:
      'https://www.adzuna.com/land/ad/1835584257?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=2CAAD5214869432CA9EE9734488466DE3AA94226',
    description:
      "...  customers Your Qualifications Must-have: 4 years of Full Stack Software Development experience Experience building and maintaining systems in one or more object-oriented programming ...  for the reliability and security of the team's software Prototype and drive new feature development and partner with internal users and engineering teams at New Relic for market validation…",
    created: '2020-11-20T12:59:34Z'
  },
  {
    title: 'Senior JavaScript Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Textile Finance, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Textile Finance'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1843806902?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=1E476E1EBB385B1CE9D3D89AEACB4EBCC84B425C',
    description:
      ", and assisting other co-workersWhat we're looking for: Seasoned Software Developer working with an expert knowledge of JavaScript Experience with single page web app development Client side ... Seeking Senior Software Engineer with superb Vanilla JavaScript experience to join a funded start-upThis Jobot Job is hosted by: Daniel PengAre you a fit? Easy Apply no…",
    created: '2020-11-25T07:29:14Z'
  },
  {
    title: 'Senior JavaScript Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1776548179?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=815031CF233C728BF7129BB101FBC4C5E88E42AE',
    description:
      ", and assisting other co-workersWhat we're looking for: Seasoned Software Developer working with an expert knowledge of JavaScript Experience with single page web app development Client side ... Seeking Senior Software Engineer with superb Vanilla JavaScript experience to join a funded start-upThis Jobot Job is hosted by: Daniel PengAre you a fit? Easy Apply no…",
    created: '2020-10-21T20:36:51Z'
  },
  {
    title: 'JavaScript Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1848052348?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A89D3565C410B626B8B10831BE3DAA2C1C2B9782',
    description:
      'Minimum Required Skills Ruby or Python, PostgreSQL, AWS, ElasticSearch, Redis, Data Modeling REMOTE - JavaScript Engineer - REMOTE High growth early stage startup set to disrupt ... , and the organization. This role is urgent and mission critical.If you are a JavaScript Engineer, please apply today. If you would rather simply send in your resume, please do so to Applicants must ...',
    created: '2020-11-27T15:31:33Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Software Engineer (React, JavaScript, Java, AWS)',
    company: 'Sayva Solutions',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.22791,
    latitude: 32.869228,
    url:
      'https://www.adzuna.com/land/ad/1749106567?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=DA20875F8E8C9C6604B48BA7B7835E8B8372D0D0',
    description:
      'Full Stack Software Engineer (React, JavaScript, Java, AWS) Category IT- Development Posted 10262020 San Diego, California Contract Description Title Full Stack Software Engineer ...  (Java, JavaScript, React, AWS) W2 contract About the opportunity Sayva Technology is partnering with a leading company in San Di…',
    created: '2020-10-07T23:25:04Z'
  },
  {
    title: 'FS JavaScript Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853156507?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A44BE546EE601002CB7EB4185EE8E39E6E0EEBC4',
    description:
      '...  - Dental - Vision - 401kSo, if you are a Full Stack JavaScript Engineer with experience, please apply today Applicants must be authorized to work in the U.S.Please apply directly ... Minimum Required Skills JavaScript, Angular, API, NODE, Scale, Java, REACT If you are a FS JavaScript Engineer with 5 years of PROFESSIONAL experience, please read on Situated ...',
    created: '2020-11-30T18:35:31Z',
    contract: 'full_time'
  },
  {
    title: 'Backend JavaScript Engineer',
    company: 'STAND 8',
    maxSalary: null,
    minSalary: null,
    locationName: 'Calabasas, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Calabasas'],
    longitude: -118.1926704,
    latitude: 33.7689343,
    url:
      'https://www.adzuna.com/land/ad/1792304618?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=30F0F542C56B7FFF13F9DD360966634F55AA686E',
    description:
      'If you are a Senior Software Developer ready to make an impact in a collaborative, fast-paced, cross-functional team, this could be a great opportunity for you We have a direct ...  the United States and have offices in LA, Atlanta, New York, Raleigh, Phoenix and Morro Bay. This position offers full time benefits and longevity for talented associates who can work ...',
    created: '2020-10-30T06:41:22Z'
  },
  {
    title: 'REMOTE Lead JavaScript Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Walnut Creek, Contra Costa County',
    area: ['US', 'California', 'Contra Costa County', 'Walnut Creek'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1861080143?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=D90E47A3B31E3B7BF9A5E7A2690C7A9F7C128741',
    description:
      '...  applications while developing frameworks over existing stack of frameworks we already own. - The areas in which we currently execute projects include business re-engineering, enterprise ... If you are a Lead JavaScript Developer, looking to work remotely, please read on Based in Walnut Creek, California - We are a small E-Commerce PaaS (Platform as a Service ...',
    created: '2020-12-04T02:36:02Z'
  },
  {
    title: 'Software Engineer in Test - JavaScript',
    company: 'Synergis IT',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -122.3827431,
    latitude: 37.6652573,
    url:
      'https://www.adzuna.com/land/ad/1793993795?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=832518BA9F70E1FED12D1E7DEF92EC522AC25B3F',
    description:
      '...  Engineer in Test in the Automation group to develop & build the hardware and software test automation structure.As an Software Engineer in Test you will do more than just write automated ... , electrical engineering or similar technical field 1 years of experience as a Software Development, specifically with Java Experience in software tes…',
    created: '2020-10-31T02:45:14Z'
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Viant',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.8488388,
    latitude: 33.672676,
    url:
      'https://www.adzuna.com/land/ad/1794545868?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=9E7F2F8F522B6178B2BFDC7909A717AC901DA39D',
    description:
      '...  / frameworks like HTML, JavaScript, AJAX, jQuery, Angular, React, etc. Experience with web services or RESTful services or micro-services. Experience with databases like MySQL or SQL Server ... Designing, developing, testing, debugging and deploying applications and reports using various technologies in a hybrid cloud environment in AWS and GCE. Writing complex SQL ...',
    created: '2020-10-31T15:02:54Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'Wilson Sonsini Goodrich & Rosati',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.394594,
    latitude: 37.7932824,
    url:
      'https://www.adzuna.com/land/ad/1820837444?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=445D4F86183DD7B6F89768610B7D3443703C1C56',
    description:
      '...  exceptional opportunities for professional achievement and career growth.The firm currently has an excellent opportunity for an experienced full stack developer. This role will help build ...  a new platform that transforms productivity for our attorneys. The full stack developer will take design concepts to code from UI/UX to final implementation and release, while building ...',
    created: '2020-11-13T12:32:38Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'Wilson Sonsini Goodrich & Rosati',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.238937,
    latitude: 32.9380513,
    url:
      'https://www.adzuna.com/land/ad/1820828608?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=7EBF72EDC9D2233AC0BAFE41A777091768F3C4C7',
    description:
      '...  exceptional opportunities for professional achievement and career growth.The firm currently has an excellent opportunity for an experienced full stack developer. This role will help build ...  a new platform that transforms productivity for our attorneys. The full stack developer will take design concepts to code from UI/UX to final implementation and release, while building ...',
    created: '2020-11-13T12:30:28Z'
  },
  {
    title: 'Software Engineer - NODE, JavaScript, Postgres',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Gabriel, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'San Gabriel'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1853840083?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=9CF0C3D0A3EC202EE8CD9C3AF448B0E49D859797',
    description:
      "If you are a Software Engineer with experience, please read onTop Reasons to Work with Us - Work with a talented team and have an opportunity to grow as an engineer ...  the features you build - Contributing to the development of best practices within the teamWhat You Need for this Position - NODE - JavaScript - Postgres - REACT - PHPWhat's In It for You ...",
    created: '2020-12-01T01:12:25Z'
  },
  {
    title:
      'Sr. Full Stack JavaScript Engineer - Goal-Oriented Social Butterflies Wanted',
    company: 'Camden Kelly Corporation',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -96.72262599999999,
    latitude: 32.967153,
    url:
      'https://www.adzuna.com/land/ad/1837894748?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=9EF97CE2FCC557396301D5512E6DEBFD6F91C557',
    description:
      "...  in this Sr. Full Stack JavaScript Engineer position. End users are always on your mind as you design, develop, troubleshoot, and maintain software and web applications which is why you're ...  shy this won't be the right job for you. Calling all outspoken, idea-filled, challenge-embracing Full Stack Software Engine…",
    created: '2020-11-21T20:31:56Z'
  },
  {
    title: 'Web Developer',
    company: 'APN Software Services Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Anaheim, Orange County',
    area: ['US', 'California', 'Orange County', 'Anaheim'],
    longitude: -121.9939188,
    latitude: 37.5214359,
    url:
      'https://www.adzuna.com/land/ad/1809491841?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=251C64D52089EA40B7FA3AB97A4FC88F3C902201',
    description:
      'Job Description Title: Full-Stack Web Developer Location: Anaheim, CA Duration: Full Time For front end languages, HTML and JavaScript are must haves. Nice to have Skills: Razor ...  in full stack web application development utilizing ASP.Net, C#, JavaScript, jQuery, HTML 4/5, CSS 2/3 and Visual Studio IDE. 3 y…',
    created: '2020-11-07T20:31:50Z'
  },
  {
    title: 'Software Engineer - Full Stack Developer',
    company: 'Bendix Commercial Vehicle Systems LLC,',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.846196,
    latitude: 33.7116705,
    url:
      'https://www.adzuna.com/land/ad/1825679543?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=D33BB3355EA06518A7AB1B6449CC52D5D07EEADC',
    description:
      '. Innovation is part of our DNA. Achievement drives our culture. Learn more today www.bendix.com/careers Position Title: Engineer 3-4, Web Developer (SafetyDirect) Reports To: Manager, Web ...  with database development 5-7 years’ experience with web development 5-7 years’ experience with IIS administration and configuration Experience with modern Javascript fr…',
    created: '2020-11-15T22:02:41Z'
  },
  {
    title: 'Senior Full Stack Software Developer',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.2071636,
    latitude: 32.8755435,
    url:
      'https://www.adzuna.com/land/ad/1822409958?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=C78325A6976B51E5E5E7403A96498DFBBB23E836',
    description:
      "...  automationoptimization. Design, develop and deploy enterprise web applications using the latest Microsoft .NET Core technologies. Experience Five years' experience in software engineering and database ...  understanding of Software Design Patterns, Principles and Best Practices. Deep understanding of web application development technologies Full understand…",
    created: '2020-11-14T04:16:14Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Software Engineer - Full Stack',
    company: 'Moorecroft Systems Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Glendale, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Glendale'],
    longitude: -84.3440856,
    latitude: 34.0426346,
    url:
      'https://www.adzuna.com/land/ad/1749589264?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=C618C6D6CBAC7024F1584942F3D37A5582B83F8E',
    description:
      'Senior Software Engineer - Full Stack The Senior Software Engineer will be expected to be up to date, passionate and knowledgeable about JavaScript and opensource communities You ... . Experience Needed JavaScript NodeJS Web Services Koa Express Mocha Chai Jest Material-UI React Agile environment experience About Moorecroft Systems Moorecroft S…',
    created: '2020-10-08T05:10:44Z'
  },
  {
    title: 'Full-Stack Software Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Long Beach, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Long Beach'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1848038243?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=1BFB8B640346AF133ED7A971F4EDDF06FE073DCE',
    description:
      'Minimum Required Skills MySQL, JavaScript, HIPAA, SaaS, C, AWS, PHP, SQL, Python, Java Full-Stack Developer needed for a growing pharma company helping the treatment of chronic ... . As a Full-Stack Software Developer, you will build, maintain and use code stacks to deliver custom software solutions for our clients and teams, a…',
    created: '2020-11-27T15:27:44Z',
    contract: 'full_time'
  },
  {
    title: 'Software Engineer - Full Stack Developer',
    company: 'Bendix Commercial Vehicle Systems LLC,',
    maxSalary: null,
    minSalary: null,
    locationName: 'Corona Del Mar, Orange County',
    area: ['US', 'California', 'Orange County', 'Corona Del Mar'],
    longitude: -117.846196,
    latitude: 33.7116705,
    url:
      'https://www.adzuna.com/land/ad/1826868459?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=817D48C0EC290B0F59CEBCFA8ED6167DE99E0E05',
    description:
      '. Innovation is part of our DNA. Achievement drives our culture. Learn more today www.bendix.com/careers Position Title:Engineer 3-4, Web Developer (SafetyDirect) Reports To:Manager, Web ...  development 5-7 years experience with web development 5-7 years experience with IIS administration and configuration Experience with modern Javascript frameworks (Angular,…',
    created: '2020-11-16T13:48:17Z'
  },
  {
    title: 'Sr. Full Stack Software Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853141771?se=gpvpUFI26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=1300C55A65393990B0C86BF9BF0BCC1611A84E90',
    description:
      'Minimum Required Skills SalesForce, Java, C, JavaScript, HTML, CSS, Apex, AWS, SFA, Restful Services If you are a Sr. Full Stack Software Engineer with experience, please read ...  on Job Title Sr. Full Stack Developer Salary 100k - 130k Requirements 3 years experience with - Node - Apex or Java - JavaScript - HTMLCSS - Complex queries in SQL -…',
    created: '2020-11-30T18:34:05Z'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'JanRain',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -122.6836475,
    latitude: 45.5320652,
    url:
      'https://www.adzuna.com/land/ad/1813538507?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=3DBB2D1D674329985A11E845CF3CF24EE051D4E0',
    description:
      'As a Full Stack Senior Software Engineer you will be developing using Javascript (React, Redux) and python’s backend Flask involving complex threat detection algorithms ...  monitoring processes and developing tools. As a Senior Full Stack Engineer, you will be responsible for: Developing front end web<…',
    created: '2020-11-10T03:28:13Z'
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Ike robotics',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.390202,
    latitude: 37.751796,
    url:
      'https://www.adzuna.com/land/ad/1820827957?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=640B7A3145A22603FD3D4E2E0A6B3182330A8DA3',
    description:
      '...  Your RoleYou will be a key contributor on a small, collaborative team focused on one of the most exciting robotics applications today. As a full stack software engineer, you ...  will specifically play a major role in designing, developing, deploying and supporting Ike’s web development technologies. You will lead Ike’s information representation, UI design and ful…',
    created: '2020-11-13T12:30:16Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'SVB Financial Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.982235,
    latitude: 37.4042585,
    url:
      'https://www.adzuna.com/land/ad/1820833313?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=08664DFBEC1F5C77A4875272409CCD77FCFD348C',
    description:
      '...  Bachelor’s degree in Computer Science, MIS, or Engineering, or equivalent experience5 years of experience developing full stack web solutions2 years of experience working in marketing ...  attention to detail with big picture perspectiveDemonstrates excellent oral and written communication skillsStrong Agile development expertise Deep knowledge in developing full</…',
    created: '2020-11-13T12:31:45Z'
  },
  {
    title: 'Remote Full Stack Web Developer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Juan Capistrano, Orange County',
    area: ['US', 'California', 'Orange County', 'San Juan Capistrano'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1786456464?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=6FEEE045669254AE7425F4013A515E056D5A42B6',
    description:
      '...  and sending us your resume. Salary: $90,000 - $130,000 per year A bit about us: Our team is looking for a motivated and talented full stack web developer capable of working both ...  development, including JavaScript, web-standards, web-performance, and modern frameworks  Experience with one or more front-end frameworks such as React or Svelte  Experience …',
    created: '2020-10-27T15:09:20Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Cruz County, California',
    area: ['US', 'California', 'Santa Cruz County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030634?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=701AED3B6CC32A0A21737D9E33BFA51AD023E911',
    description:
      'If you are a Full Stack Developer with experience, please read on This role can be Remote within the U.S. Data can influence the narrative, which can bring new ideas of change ...  and creation This is something we believe in, and our data has proved this point We are a fast paced growing start-up who is looking for a Full Stack Developer to join our growing company ...',
    created: '2020-12-01T02:25:05Z'
  },
  {
    title: 'Sr. Full Stack Engineer - Security (Python,Go,JavaScript,React)',
    company: 'Splunk',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.391842,
    latitude: 37.7829249,
    url:
      'https://www.adzuna.com/land/ad/1820829748?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=52CB06732335B9FDB7E6A6B204294BFE11E3FFEE',
    description:
      "...  their application development skillsRequirements8 years of software engineering experience focused on application development4 years in security product development, preferably a SIEM ...  a difference? Do you enjoy collaboration with a team of fun and smart creative people? Do you value an environment where you're empowered to make key technical decisions across a full stack ...",
    created: '2020-11-13T12:30:47Z'
  },
  {
    title: 'Full-stack Software Engineer',
    company: 'Mammoth Biosciences',
    maxSalary: null,
    minSalary: null,
    locationName: 'South San Francisco, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'South San Francisco'],
    longitude: -122.3941616,
    latitude: 37.653695,
    url:
      'https://www.adzuna.com/land/ad/1820831871?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C44443FB62A6F74B8DCA92F5512455C5BA28993C',
    description:
      '...  a Full Stack Software Engineer to join its growing Discovery team. The Discovery team is responsible for developing novel CRISPR-associated (Cas) nucleases for genome editing ... , the company is enabling the full potential of its platform to read and write the code of life. By leveraging its internal research and development and exclusive licensing to patents related ...',
    created: '2020-11-13T12:31:20Z'
  },
  {
    title: 'REMOTE Lead JavaScript Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Walnut Creek, Contra Costa County',
    area: ['US', 'California', 'Contra Costa County', 'Walnut Creek'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1859954460?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=8E7F4FC06A9BE994A4E272006E93C1BEDB01D435',
    description:
      'Minimum Required Skills REACT, JavaScript, Redux, Node.js, Bootstrap, Knockout If you are a Lead JavaScript Developer, looking to work remotely, please read on Based in Walnut ...  and Financial domains What You Will Be Doing - You work on building applications while developing frameworks over existing stack of frameworks we already own. - The areas in which we currently ...',
    created: '2020-12-03T12:09:57Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Developer (Sr.Net)',
    company: 'Artemis Search Partners',
    maxSalary: null,
    minSalary: null,
    locationName: 'Orange County, California',
    area: ['US', 'California', 'Orange County'],
    longitude: -117.716081,
    latitude: 33.64051,
    url:
      'https://www.adzuna.com/land/ad/1749106030?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=7D54CA63CA67240E0C11A2E1346A857D89977A08',
    description:
      '...  in a professional environment. Senior-level full stack engineer with 6 years of experience. Experience building consumer-facing single-page applications in JavaScript. Experience developing rich ... My Client has an immediate need for a Sr. Full Stack Developer that is local to OC. Mandatory Competencies You must have at least 6 yearsrsquo experience <stro…',
    created: '2020-10-07T23:24:55Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Engineer',
    company: 'AgreeYa Solutions',
    maxSalary: null,
    minSalary: null,
    locationName: 'Fremont, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Fremont'],
    longitude: -121.8992168,
    latitude: 37.6849377,
    url:
      'https://www.adzuna.com/land/ad/1820840836?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2E7F3233417011E4C7BF60E3811BEA6E168DBD2B',
    description:
      '...  MVC platformDesign and architect SQL database schemasContribute to the full software lifecycle including design, development, documentation, testing and deploymentEvaluate ... Job DescriptionResponsibilitiesDesign and develop cutting edge web applications that sustain our continued growthDevelop both front end and back end components using the ASP.NET ...',
    created: '2020-11-13T12:33:12Z'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Group A LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.4477447,
    latitude: 37.7966822,
    url:
      'https://www.adzuna.com/land/ad/1855933748?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E0EDE8CB772F42A6432F21A889673962AC74C412',
    description:
      'GroupA is currently seeking a Senior Full-Stack Developer to join our team in Palo Alto, CA. We are looking for a Senior Full Stack Developer who is proficient in implementing Web ...  throughout our product suite. The ideal candidate will be an expert level user of JavaScript, Java, Spring Boot, Spring, SQL, and full-stack <st…',
    created: '2020-12-01T18:25:59Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1849678725?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=6D9344A304FB27FD7FE2AD56ABEB8DF1113CE040',
    description:
      'Minimum Required Skills Apex, SalesForce, JavaScript, CSS, lightning, HTML, Full Stack, Software Development, NODE, Node.js If you are a Full Stack Developer with experience ... , please read on Job Title Sr. Full Stack Developer Salary 100k - 130k Requirements 3 years experience with - Node - Apex or Java - <s…',
    created: '2020-11-28T15:24:35Z',
    contract: 'full_time'
  },
  {
    title: 'REMOTE Fullstack Engineer (JavaScript/Localization)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1854030698?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C7D8532EDC298199FDF79BFDC975DC50E0124611',
    description:
      "If you are a Fullstack Software Engineer with experience, please read onTop Reasons to Work with Us Do you enjoy working with Fullstack development using the latest JavaScript ... , etc.What's In It for You - Competitive salary - Full benefits - 100% remote - Work with an awesome group of peopleSo, if you are a Fullstack Software Engineer with experience, please ...",
    created: '2020-12-01T02:25:09Z'
  },
  {
    title: 'Sr. Full Stack Software Engineer',
    company: 'iSpace Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'El Segundo, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'El Segundo'],
    longitude: -118.3800976,
    latitude: 33.9023339,
    url:
      'https://www.adzuna.com/land/ad/1838438610?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C909F1DC35CEEE89063968EB6FF50CF39E08D48B',
    description:
      '...  The full stack engineer must be a highly skilled web developer to build and maintain our client facing web applications. This person will combine the art of design with the science ... Title: Sr. Full Stack Software Engineer Location: El Segundo, CA Duration: Full time Looking for an experienced fu…',
    created: '2020-11-22T04:16:12Z'
  },
  {
    title: 'Full Stack Software Developer',
    company: 'TEG Staffing, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3994262,
    latitude: 37.7897173,
    url:
      'https://www.adzuna.com/land/ad/1749103324?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=633F317AAE4BEF038F5762AC8945A18B4C46755B',
    description:
      'Full Stack Developer Full Stack or Backend Developer needed to join the growing team. The mission is to make space simple for our customers. We operate satellites and we fly ...  systems, scientific experiments, national security missions, in-orbit demonstrations, and weather and climate sensors. We are hiring a Full stack developer to help us …',
    created: '2020-10-07T23:22:54Z',
    contract: 'full_time'
  },
  {
    title: 'Software engineer (Node.Js & Javascript)',
    company: 'CDK Global',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.9484665,
    latitude: 37.4183302,
    url:
      'https://www.adzuna.com/land/ad/1857943146?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=573691C35558A28AE57C1B6FDD908B61F087D505',
    description:
      '...  bigger. Were expanding our workforce engineers, architects, developers and more onboarding early adopters who can optimize, pivot and keep pace with ever-evolving development roadmaps ...  building the next generation of dealership software. We are at the forefront of innovation in the automotive industry, from creating new capabilities for connected vehicles to developing ...',
    created: '2020-12-02T14:54:18Z'
  },
  {
    title: 'Sr. Software Engineer, Full-Stack',
    company: 'C3 IoT',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.2014776,
    latitude: 37.5137211,
    url:
      'https://www.adzuna.com/land/ad/1845284683?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C922D63380009D84518F21EE1F4AA6B3D2BD1A5C',
    description:
      ', Full-Stack. While this role requires 5 years of professional software development experience, C3.ai is also hiring Full-Stack Software Engineers with 2 to 4 years of experience ... , Computer Engineering, or related fields. 5 years of professional software development experience with JavaScript</stron…',
    created: '2020-11-26T02:28:18Z'
  },
  {
    title: 'Principal Software Engineer, Full-stack',
    company: 'Udemy',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.3959203,
    latitude: 37.7842574,
    url:
      'https://www.adzuna.com/land/ad/1795745963?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=DE10D54D3DA7D18E0F8F516950E4BB6775D8CCBA',
    description:
      'Collaborating with other engineering, product management, and design, teams to define initiatives and features Developing, testing, documenting, and releasing full-stack, end ...  excited about you because you have 7 years of professional software development experience Experience with web application technologies including HTTP, HTML, CSS, and JavaScript ...',
    created: '2020-11-01T03:05:59Z'
  },
  {
    title: 'Principal Software Engineer, Full-stack',
    company: 'Udemy',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3959203,
    latitude: 37.7842574,
    url:
      'https://www.adzuna.com/land/ad/1795746007?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=3E86BF10CBE3E9ACE9819F609C0CE59A0F6FDC8F',
    description:
      'Collaborating with other engineering, product management, and design, teams to define initiatives and features Developing, testing, documenting, and releasing full-stack, end ...  excited about you because you have 7 years of professional software development experience Experience with web application technologies including HTTP, HTML, CSS, and JavaScript ...',
    created: '2020-11-01T03:05:59Z'
  },
  {
    title: 'Remote Full Stack Web Developer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Juan Capistrano, Orange County',
    area: ['US', 'California', 'Orange County', 'San Juan Capistrano'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1813784799?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5591AF90D053F543BB173BB8C4289B2856B27F11',
    description:
      '...  and sending us your resume.Salary: $90,000 - $130,000 per yearA bit about us:Our team is looking for a motivated and talented full stack web developer capable of working both independently ...  and collaboratively with a small team of engineers. The ideal candidate will make impactful decisions and be able to quickly develop the frontend and backend of scalable serverless websites.Why join…',
    created: '2020-11-10T07:03:04Z'
  },
  {
    title: 'Jr. Full Stack Software Engineer(s)',
    company: 'The Judge Group, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3990342,
    latitude: 37.7986895,
    url:
      'https://www.adzuna.com/land/ad/1763636998?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=49066BFAC8646133C01A2F60B4F6F511037186A1',
    description:
      'Location San Francisco, CA Description Top FinServices partner of THE JUDGE GROUP, currently seeking to add up and coming software engineering professionals in the bay area ... , development, implementation and maintenance. Strong Experience designing and implementing REST based Web Service API(s) in a transaction processing environment. Strong Experience providing ...',
    created: '2020-10-15T00:35:36Z',
    contract: 'full_time'
  },
  {
    title: 'Remote JavaScript Application Engineer',
    company: 'VirtualVocations',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sacramento County, California',
    area: ['US', 'California', 'Sacramento County'],
    longitude: -123.0919241,
    latitude: 44.0277698,
    url:
      'https://www.adzuna.com/land/ad/1858171589?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E4165BD05AE0BA084D9E35F4DBE3B48AFEA9B484',
    description:
      'A software development company has a current position open for a Remote JavaScript Application Engineer. Must be able to: Improve existing functionality Build out our SaaS ...  You are comfortable navigating a large existing codebase and learning new technologies and techniques along the way You are passionate about listening to users & building elegant web ...',
    created: '2020-12-02T18:03:04Z'
  },
  {
    title: 'REMOTE Fullstack Engineer (JavaScript/Localization)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1823087980?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C7BDE67A0EEA6713B1E36288F9CB557E1547CC0E',
    description:
      'Los Angeles, CATelecommuting Available Full-time $120k - $150kPosted 11/04/2020If you are a Fullstack Software Engineer with experience, please read onTop Reasons to Work ...  with UsDo you enjoy working with Fullstack development using the latest JavaScript frameworks? Are you looking to be challenged with new technology and development principles daily? Does ...',
    created: '2020-11-14T12:24:16Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Cruz County, California',
    area: ['US', 'California', 'Santa Cruz County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853154364?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C2060F124E1B0A16BA553727BB1FC91DE434CB9C',
    description:
      'Minimum Required Skills Java, JavaScript, Python, RUBY, AWS, Google Cloud Platform If you are a Full Stack Developer with experience, please read on This role can be Remote within ...  growing start-up who is looking for a Full Stack Developer to join our growing company and team. If data and telling a story through data intrigues you, apply now What You Will Be Doing ...',
    created: '2020-11-30T18:35:13Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Web Developer',
    company: 'Amdocs',
    maxSalary: null,
    minSalary: null,
    locationName: 'Ontario, San Bernardino County',
    area: ['US', 'California', 'San Bernardino County', 'Ontario'],
    longitude: -121.055278,
    latitude: 38.6188162,
    url:
      'https://www.adzuna.com/land/ad/1844368991?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=053F3DE6862C466904A4FD58B0C00CC06467B851',
    description:
      '...  operations. All you need is. Must_Have  7 years of full-stack web developer experience  7 years of strong Javaprogramming skills demonstrated through previous projects  4 years ... -stack software engineers who are comfortable with working across front end and back end. If you are passionate about UI application and data visualizations or enjoys the challenges ...',
    created: '2020-11-25T12:56:34Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'Heitmeyer Consulting',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -82.943714,
    latitude: 40.1100613,
    url:
      'https://www.adzuna.com/land/ad/1807080020?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=B2F597DF93EF3379AB129A816BA65C42229E1D2D',
    description:
      "...  not offer sponsorship. Job Description As a Digital Technology Full Stack Developer, you'll be responsible for developing responsive web application mobile app leveraging JavaScript ... Job Title Full Stack Developer Location San Francisco (Remote during Covid - Will be required to be in office when there is a Return to Office) Duration Co…",
    created: '2020-11-06T18:12:46Z'
  },
  {
    title: 'Web Developer',
    company: 'iTech US, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sacramento County, California',
    area: ['US', 'California', 'Sacramento County'],
    longitude: -73.153694,
    latitude: 44.460159,
    url:
      'https://www.adzuna.com/land/ad/1812431823?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=3FF76EF951224A5C1DD7F2DA7C290FE131DEAFE3',
    description:
      'Job Title Web Developer Location Sacramento, CA Job Description - React, Redux, HTML, CSS, JavaScript (ES 2015) - Browsers (HTTP, APIs, event loop, render cycle, etc.) - Build ... , etc.) - WAI-ARIA, WCAG and Assistive technology - Progressive Web App (PWA) technologies - 5 or more years of experience with JavaScript and web development - 3 years of experience ...',
    created: '2020-11-09T16:01:03Z'
  },
  {
    title: 'Senior Full Stack Web Developer',
    company: 'LendingTree',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sacramento County, California',
    area: ['US', 'California', 'Sacramento County'],
    longitude: -122.3172453,
    latitude: 37.5547137,
    url:
      'https://www.adzuna.com/land/ad/1856349563?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=4270C884870296ABFA09472A3C4954ECCE65BD6B',
    description:
      "Job Description THE POSITION To meet business demands we have been growing and our Tech team. We have a new position for a Sr. Full Stack Web Software Developer to own some of our ...  QUALIFICATIONS Bachelor's or advanced degree in computer science, engineering, or mathematics. 3 years developing web applications with C#, ASP.NET MVC, JavaScript</stron…",
    created: '2020-12-01T20:50:30Z'
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Cool Minds LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -77.4285287,
    latitude: 38.9367374,
    url:
      'https://www.adzuna.com/land/ad/1853820289?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=472CB0A9407CAF0F1C48D60B4B7723D8DAA6EE88',
    description:
      "Job Description The development team is looking for a self-motivated, Fullstack Engineer to join one of our global online Payment leader's team and help build low-latency, high ...  in CS 5 yrs experience or MS 2 yrs experience Experience in object-oriented programming and concepts Full stack experience designing and building scalable applications from end-to-end ...",
    created: '2020-12-01T01:09:00Z'
  },
  {
    title: 'Full Stack .Net Developer',
    company: 'Workbridge Associates',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1820832820?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=D56CACC1FB812F13855984F73080BED3EC50CAFC',
    description:
      'Our client based out of Silicon Beach has a job open for a Software Engineer / Developer to work on their Azure hosted high profile platform. The company is in growth mode ...  innovative tech product. In this role you would be working on a team of engineers participating in full life cycle decision making. The best thing about this company is there are smart ...',
    created: '2020-11-13T12:31:37Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'BridgeNexus Technologies Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.9766854,
    latitude: 37.5135489,
    url:
      'https://www.adzuna.com/land/ad/1813199722?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=7A7F7F040ACACD8EC017BCC350ECAD65776CCC92',
    description:
      '. Please find below JD for Full Stack Developer requirement Title Full Stack DeveloperLocation Sunnyvale, CA Job description Must have strong skills in JavaScript, React.js and its core ...  FULL STACK DEVELOPER. It is an excellent opportunity with one of our Clients in Bay Area,CA. So, if you are interested please forward your updated resume w…',
    created: '2020-11-09T22:03:39Z'
  },
  {
    title: 'Front End Developer - JavaScript/Jquery',
    company: 'Through6',
    maxSalary: null,
    minSalary: null,
    locationName: 'Garden Grove, Orange County',
    area: ['US', 'California', 'Orange County', 'Garden Grove'],
    longitude: -118.0084481,
    latitude: 33.7943128,
    url:
      'https://www.adzuna.com/land/ad/1853465472?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=F7456C5B910E43125ACDBBCB580CC5080DDEA3A9',
    description:
      ', and consumer goods. Job Description We are seeking a seasoned Front End Developer to support our proprietary manufacturing system that powers our operations using Javascript, Razor Pages, C# ... , ASP.NET MVC, and MS SQL Server. Your primary responsibility will be to design, develop and improve the user experience throughout our internal applications, in coordination ...',
    created: '2020-11-30T20:39:24Z'
  },
  {
    title: 'Sr. Software Engineer - Full Stack',
    company: 'LeapYear',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.2589311,
    latitude: 37.8591968,
    url:
      'https://www.adzuna.com/land/ad/1820829488?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=95178F50689D749BF2D079AFCC70D5CAFE8C8845',
    description:
      '...  learning and cryptography in an intuitive wayLearn new technologies, best design practices and usability patternsRequirements Several years of experience developing full-stack web ...  are looking for senior software engineers who have a track record of developing enterprise-ready features for technical end users, including data analytics workflows, enterprise ...',
    created: '2020-11-13T12:30:43Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1861080329?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=634239B7A7C6C738B22C24D65B05C2F32B8F8421',
    description:
      'Title: Full Stack Engineer Location: Remote Compensation : $130-165K Desired skills: Elixir/Phoenix and/or Node.js We are an exciting tech company working on the new ways to view ...  SPORTS and we are currently looking for an experience FULL STACK ENGINEER to join our REMOTE FRIENDLY team. The ideal candidate should have node.js and/or elixir experience but must ...',
    created: '2020-12-04T02:36:11Z'
  },
  {
    title: 'Senior UI JavaScript Engineer',
    company: 'C3 IoT',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.2014776,
    latitude: 37.5137211,
    url:
      'https://www.adzuna.com/land/ad/1845284691?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=580F3DB747357B469FA2BB386B14E8BB408D8732',
    description:
      ', and Gulp, you will engineer elegant, modular JavaScript components to be used in a wide variety of applications. Work with the team to develop clean, intuitive tools that abstract away ...  to enable organizations to develop, deploy, and operate enterprise scale AI applications 40x to 100x faster than alternative approaches. C3.ai is looking for a Senior UI JavaScript ...',
    created: '2020-11-26T02:28:18Z'
  },
  {
    title: 'Sr. Full Stack Developer',
    company: 'NetSource, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -117.6039768,
    latitude: 33.4525544,
    url:
      'https://www.adzuna.com/land/ad/1746595500?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=BF5126316124043D0D8CFABA076520B6FC74CB6C',
    description:
      '...  of software development experience in Web development and Web technologies. bull Exhibit a good understanding of modern JavaScript SPA frameworks like Angular 7 (ideally) or Angular best ... Please note that this is a 4 months contract position. Require local candidate that can work remotely. JOB SUMMARY bull Develop APIrsquos using Java which are consumed for Web<…',
    created: '2020-10-06T19:49:00Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'Apposite Technologies LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Encino, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Encino'],
    longitude: -118.521367,
    latitude: 34.163657,
    url:
      'https://www.adzuna.com/land/ad/1856275380?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=BB59905B6E7B19A259B55755C39201DEE2A0F0C8',
    description:
      '...  and optimize usability Support product release process Qualifications: Bachelor of Science degree in Engineering or Computer Science Javascript/Nodejs developer Experience with NPM Experience ... Job Description As a Lead Developer at Apposite Technologies, you will work on our world leading network emulation product line. IT managers and engineers rely on our network ...',
    created: '2020-12-01T20:35:36Z'
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Randstad Corporate Services',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.1275158,
    latitude: 32.8966042,
    url:
      'https://www.adzuna.com/land/ad/1834509490?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=49129E09AA1C655DEB59687123F9EC664EBA7D04',
    description:
      'job summary Job Posting Randstad Technologies is looking for Software Engineer for our client in San Diego. Must Haves 4 years of experience as a software engineer Full Stack ...  Diego. Must Haves 4 years of experience as a software engineer CC++ experience Python experience GitGitHub experience? Linux OS experience JavaScript experience Bache…',
    created: '2020-11-20T00:55:48Z',
    contract: 'full_time'
  },
  {
    title: 'Web Developer',
    company: 'Innovative Metrics',
    maxSalary: null,
    minSalary: null,
    locationName: 'Beverly Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Beverly Hills'],
    longitude: -118.4039968,
    latitude: 33.9172269,
    url:
      'https://www.adzuna.com/land/ad/1844900171?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=9A0679059EF73595C2B4FF73A4F62D542698BB6E',
    description:
      '...  well designed, testable, efficient code by using best software development practices Create responsive website layout/user interface using Javascript framework like ReactJS/Redux ... Job Description We are looking for a passionate front end web developer that will be responsible for coding of main website pages and landing pages for marketing campaigns. Web ...',
    created: '2020-11-25T20:43:22Z'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Akamai',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9825689,
    latitude: 37.3809109,
    url:
      'https://www.adzuna.com/land/ad/1820825329?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=15D298B3C74832F43B76FF32F635EC9AB8A01972',
    description:
      '...  milestones contributing to our successAs a Full Stack Senior Software Engineer you will be developing using Javascript (React, Redux) and python’s backend Flask involving complex threat ...  stability by improving monitoring processes and developing tools.As a Senior Full Stack Engineer, you will be responsible for:<strong…',
    created: '2020-11-13T12:29:37Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'TekReliance',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.94505,
    latitude: 37.483442,
    url:
      'https://www.adzuna.com/land/ad/1828182868?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=A4B3B4620C5AF9B890E4630C6129F6B47B76AB1E',
    description:
      'JAVA (Full Stack) Developer Angular JS, React,Node.js HTML CSS, JavaScript, XML, jQuery, JAVA Familiarity with databases (e.g. Oracle, Snowflake), web servers (e.g. Apache ...',
    created: '2020-11-17T02:48:24Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Engineers',
    company: 'Nextphase Recruiting',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3030892,
    latitude: 37.5581363,
    url:
      'https://www.adzuna.com/land/ad/1819408900?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=11CCEF0AFC264AE8D86B5ACD5561B134ACD6E2C4',
    description:
      'Exciting company in the augmented realty space that recently received a large chunk of funding is looking to build their engineering team. We need full stack developers Please ...  with product management, designers, and frontend engineers in developing easy to use web applications Experience in a range of front end web technologies including Javascript…',
    created: '2020-11-12T20:42:01Z'
  },
  {
    title: 'Frontend Full Stack Engineer',
    company: 'SBS Corp.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -95.5858258,
    latitude: 29.95440169999999,
    url:
      'https://www.adzuna.com/land/ad/1860394233?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2432FB33117351C5F22AE328B27B87F430C24B86',
    description:
      ', JavaScript, CSS3, AJAX, Responsive Design, and general Web 2.0 techniques in the context of interactive Web Applications Full-stack software development experience using popular frameworks ...  required. Qualified Full Stack Engineer with strong emphasis on Front End Experience with proven experience with React JS or equivale…',
    created: '2020-12-03T19:16:59Z'
  },
  {
    title: 'Full Stack Java Developer',
    company: 'Cool Minds LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -77.4285287,
    latitude: 38.9367374,
    url:
      'https://www.adzuna.com/land/ad/1853823245?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=00669BB94F3E1373F9C4103C53413C6A3F1DAD98',
    description:
      "Full Stack Java Engineer Can do w2 or c2c Must have experience with NodeJS, ReactJS and Java Any visa will work (Opt and Cpt are also eligible to apply) Non-Locals can apply ...  for a self-motivated, Full-stack Engineer to join one of our global online Payment leader's team and help build low-latency, high-throughput mid-tier applications to grow our new platform ...",
    created: '2020-12-01T01:09:29Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'EMPIRE Distribution',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4003129,
    latitude: 37.7919329,
    url:
      'https://www.adzuna.com/land/ad/1856346935?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=D5842777C254D11623D2D7E7849EAC44C6C51DA0',
    description:
      '...  services from original content and marketing, to distributions and recordings. We are looking for a full stack developer to help bolster our engineering team. Responsibilities Create high ...  Professional experience as a developer/engineer working with the LAMP stack and front end technologies (Linux, PHP, MySQL, JavaScript, HTML, and CSS) Ability to anal…',
    created: '2020-12-01T20:50:08Z'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'GlobalLogic, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.920191,
    latitude: 37.3678542,
    url:
      'https://www.adzuna.com/land/ad/1749102792?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=50388C4CF9ACAC776776645101EE652B9FBE7D10',
    description:
      'Job Responsibilities Own the front-end development for one or more of our products and collaborate with visualinteraction designers, other engineers, and product managers ...  to launch new products, iterate on existing features, and build a world-class user experience. Make the UI delightful, secure, performant, and accessible to all our members. Develop web ...',
    created: '2020-10-07T23:22:46Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Software Engineer',
    company: 'Sayva Solutions',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.22791,
    latitude: 32.869228,
    url:
      'https://www.adzuna.com/land/ad/1791639970?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=72868F16F06C43C733162E4F92A0D186EA5FAAE2',
    description:
      "Senior Full Stack Software Engineer Category IT- Development Posted 10282020 San Diego, California Direct Hire Description Senior Front End Developer About the Opportunity ...  Design, develop and deploy features for the company's core web applications Ensure the performance, quality, and responsiveness of applications Identify and correct browser ...",
    created: '2020-10-29T22:41:26Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. QA Automation Engineer (Javascript)',
    company: 'Diamond',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.2592133,
    latitude: 34.1466992,
    url:
      'https://www.adzuna.com/land/ad/1856284571?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=273BB365A33F8D68FAB1FBE258820AB3838B3DFE',
    description:
      '...  tools with testing results • Remain up-do-date with current trends in development and automation technologies Required Skills • 5 years of experience in a QA automation engineering ...  can organize test suites to ensure maximum coverage • Strong understanding of QA processes & methodologies in a software development environment • Knowledge of containerization ...',
    created: '2020-12-01T20:36:39Z'
  },
  {
    title: 'Software Engineer Full Stack',
    company: 'ServiceNow',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.2059404,
    latitude: 32.8819256,
    url:
      'https://www.adzuna.com/land/ad/1835586111?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=A0F8F9A57273A3FB4374F356234EA64938EC64C8',
    description:
      "...  and developing new features for a high growth product. Develop across the full stack of Web technologies - JavaScript, AngularJS, React, HTML, CSS, and SQL You will collaborate with product ... SunIRef:it Job Title: Software Engineer - Full Stack Company Work matters. It's where we spend a third of our lives. And the workp…",
    created: '2020-11-20T12:59:45Z'
  },
  {
    title: '.NET / Web API / SQL SRV, JavaScript App Developer',
    company: 'Kforce Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Moorpark, Ventura County',
    area: ['US', 'California', 'Ventura County', 'Moorpark'],
    longitude: -118.3828082,
    latitude: 33.9878043,
    url:
      'https://www.adzuna.com/land/ad/1852208643?se=iMXwUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=F945BC4F185BCA05AA9859A19776F5270E9275F2',
    description:
      'RESPONSIBILITIES: Kforce has a client in search of a .NET/Web API/SQL SRV, JavaScript App Developer in Moorpark, CA. The Application Developer will be responsible for the overall ...  the latest tools and techniques (.NET, C#, Agile Methodologies, Web Services) Test software during development Prepare software for deployment to production environments Respond .…',
    created: '2020-11-30T06:38:09Z'
  },
  {
    title: 'JavaScript React, HTML5 Frontend Software Engineer (Remote)',
    company: 'OSI Engineering, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.9342899,
    latitude: 37.2909715,
    url:
      'https://www.adzuna.com/land/ad/1780978374?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=A6748C8C643067B34FFDB236E02290ECF636CAF9',
    description:
      '...  defining GIT-based development. Experience with web-sockets. JavaScript typecasting libraries like TypeScript or FlowType. Type Direct Hire Location San Francisco, CA Charlotte, NC ... Senior Software Frontend Engineer (React, Redux HTML5) at ON24 in San Francisco, CA, Charlotte, NC, or Work From Home. As a Senior Software Frontend React Redux Engineer at ON24 ...',
    created: '2020-10-23T22:28:07Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Software Engineer - Full Stack',
    company: 'DataBricks',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.393741,
    latitude: 37.791365,
    url:
      'https://www.adzuna.com/land/ad/1820835428?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=8EEE8DC386850D3550060EE7F3B5C3F5BC84D679',
    description:
      '...  of the stakeholders: decision makers, admins, and end users.As a Senior Full Stack software engineer, you will work closely with your team and product management to bring that delight through great ... , security and scale that is critical to making customers successful on our platform.We develop and operate one of the largest scale software platforms. The fleet consists of millions ...',
    created: '2020-11-13T12:32:20Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'Open Systems, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Lake Forest, Orange County',
    area: ['US', 'California', 'Orange County', 'Lake Forest'],
    longitude: -117.5619164,
    latitude: 33.8871623,
    url:
      'https://www.adzuna.com/land/ad/1774712736?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=7FA0D9F22FFA4F57773A8F71149D129CF475918E',
    description:
      'Full Stack Developer OSI-6042 Lake Forest CA 92630 (5 years of experience) Responsibilities Develop and maintain a full stack environment ( AngularNodeMySql ) Develop and maintain ...  Apps using the React framework Required to prepare documentation and write functional proposals Shall program well-designed, Robust testable, efficient code. Shall develop <stron…',
    created: '2020-10-20T22:03:02Z'
  },
  {
    title: 'Sr. Full Stack Developer or Architect',
    company: 'Artemis Search Partners',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.716081,
    latitude: 33.64051,
    url:
      'https://www.adzuna.com/land/ad/1814534525?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=BB8EC2356910C4BB9D44F3C1765A7B7AB69E23A5',
    description:
      '...  ator reply to the posting. Full Stack (CSS, HTML, Javascript, JQuery, Angular, .NET, C, and SQL) You must have at least 10 yearsrsquo experience developing .Net software ...  in a professional environment. Senior-level full stack engineer with 10 years of experience. Experience building consumer-facing single-page applications in JavaScript</strong…',
    created: '2020-11-10T16:16:54Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'TEKsystems, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -121.9269558,
    latitude: 37.3962721,
    url:
      'https://www.adzuna.com/land/ad/1852341959?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=92773E5D05873C4063B9C41846F5359AF6DC48ED',
    description:
      '...  of development in JavaScript, including DOM manipulation and the JavaScript object model ● 2 years of experience of developing against the full web stack (e.g, HTTP, headers, caching, etc ... As a Web Developer, you will be combining the art of design with the art of programming. Your responsibilities will include translation of UI/UX desi…',
    created: '2020-11-30T08:25:50Z'
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Outpatient, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.9948067,
    latitude: 37.8232569,
    url:
      'https://www.adzuna.com/land/ad/1856307973?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=36FA18EFEC02B231ED0DBA088759F9A6480DF800',
    description:
      '...  problem. We’re looking for full stack engineers who are thoughtful, responsible and passionate individuals who appreciate user experience, efficient technical architecture, microservices ... Job Description Company Overview - Outpatient, Inc Outpatient is a simple and modern software application that helps Healthcare teams, patients, and families collaborate ...',
    created: '2020-12-01T20:42:05Z'
  },
  {
    title: 'Sr. Full Stack Software Engineer',
    company: 'TTi Global',
    maxSalary: null,
    minSalary: null,
    locationName: 'East Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'East Irvine'],
    longitude: -83.209747,
    latitude: 42.605958,
    url:
      'https://www.adzuna.com/land/ad/1861645368?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=1612D6693CE92477DB4AF65ECF8D10E5C4C37563',
    description:
      '...  Sr. Software Engineer(s) who will be developing large scale client-side applications using the latest javascript features, frameworks and tooling. She/He will be building from ... We are developing a world-class commerce platform that will make learning about and purchasing electric adventure vehicles intuitive, seamless and fun. We are seeking Full Stack ...',
    created: '2020-12-04T08:21:48Z'
  },
  {
    title: 'Senior Full Stack Software Engineer - Python  React',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030657?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=9192364555F7823565CCE9CAC2491F2D75CCDB68',
    description:
      '" of engineers to build out our new products and help lead us to a short IPO in the next 2-3 years. We are looking for a senior full stack engineer who is strong at writing applications ...  applications at Scale - Concurrent Requests - Platform Development So if you are a Senior Software Engineer with scaling / API / enterprise product development experience a…',
    created: '2020-12-01T02:25:06Z'
  },
  {
    title: 'Java full stack developer',
    company: 'Cognizant',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pleasanton, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Pleasanton'],
    longitude: -121.9668148,
    latitude: 37.7689131,
    url:
      'https://www.adzuna.com/land/ad/1853839145?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=1E406383BA4E5EC79F684C0040D136C0159515D4',
    description:
      'Java full stack developer Qualification: Bachelors degree & relevant experience Description: Good experience in Core java and JEE Good experience in MQ or messaging Technologies ...  Experience in Web Sphere application and web servers Good in REST and micro services Good in Oracle SQL Good in Jenkin, bit bucket and pipeline Few year experience in HTML, JavaScript ...',
    created: '2020-12-01T01:12:16Z'
  },
  {
    title: 'Full STACK Developer',
    company: 'KRG technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -118.572136,
    latitude: 34.438193,
    url:
      'https://www.adzuna.com/land/ad/1820824795?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=FC6134101FF9FC8760C18813B687D88574B1C62D',
    description:
      'Job DescriptionMinimum 6 Years of experience in web application design and development.Self-motivated and pro-active with demonstrated problem solving and critical thinking ...  skills.Expertise in enterprise Java technology eco-system including Spring Boot, JPA/Spring Data, maven, JUnit.Expertise on core JavaScript and front-end frameworks such as AngularJS.Experience ...',
    created: '2020-11-13T12:29:30Z'
  },
  {
    title: 'Software Engineer Full Stack Developer',
    company: 'Bendix Commercial Vehicle Systems LLC,',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.846196,
    latitude: 33.7116705,
    url:
      'https://www.adzuna.com/land/ad/1835585174?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=602B8AA594A6AB87C52F47C489CE2BF1E92CCF4B',
    description:
      "...  and integrity. Innovation is part of our DNA. Achievement drives our culture. Learn more today Position Title: Engineer 3-4, Web Developer (SafetyDirect) Reports To: Manager, Web & Data ... ' experience with database development - 5-7 years' experience with web development - 5-7 years' experience with IIS administration and configuration - Experience with modern Ja…",
    created: '2020-11-20T12:59:40Z'
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'The First American Corporation',
    maxSalary: null,
    minSalary: null,
    locationName: 'Folsom, Sacramento County',
    area: ['US', 'California', 'Sacramento County', 'Folsom'],
    longitude: -121.1442235,
    latitude: 38.6685005,
    url:
      'https://www.adzuna.com/land/ad/1827943521?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=B681988B5C1DACA0A640EBCE0929366F34D84846',
    description:
      '...  to understand problems and develop software solutions to resolve them. We are hiring a full stack engineer, who is dynamic, able to work with cross functional teams, and interested in being ...  stack. You will participate in the design, development, coding, testing, debugging, and maintenance of software code. You will work with both technical and non-tec…',
    created: '2020-11-17T00:56:01Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'ThermovisionUSA',
    maxSalary: null,
    minSalary: null,
    locationName: 'Torrance, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Torrance'],
    longitude: -118.3237983,
    latitude: 33.844707,
    url:
      'https://www.adzuna.com/land/ad/1833960494?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=EFE2738A192E388C4517A48C73EE68BFF60EE8F6',
    description:
      'SunIRef:it Responsibilities: Thermovisionusa is developing a medical device and IoT devices with the cutting edge technology. We are looking for a full-stack developer to create ...  and maintain a full stack solution for our IoT mobile App deployment. What we are looking for: Expertise in Javascript, HTML, CSS; Node.js, React.js, Redux.js, GraphQl.js, MongoDB. Experience ...',
    created: '2020-11-19T17:27:49Z'
  },
  {
    title: 'Veterans Preferred - Lead, Software Development Engineer',
    company: 'MasterCard',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3944357,
    latitude: 37.7917844,
    url:
      'https://www.adzuna.com/land/ad/1854406329?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=633DD410DF802B404B5074CD9C54F36E77F2B043',
    description:
      '...  Development Engineer, you are a key player on the Development team. You will apply your broad knowledge of modern web software technologies to build leading edge easy-to-use web interfaces ... , drives innovation and delivers better business results. Job Title Lead, Software Development Engineer Job Title: Lead Software <s…',
    created: '2020-12-01T09:15:08Z',
    contract: 'full_time'
  },
  {
    title: 'Software Engineer II (Node.js & JavaScript)',
    company: 'CDK Global',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.9484665,
    latitude: 37.4183302,
    url:
      'https://www.adzuna.com/land/ad/1857942907?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=5AFBCF59ADB70E6B699993672D5D3D0A3FF9070A',
    description:
      '...  bigger. Were expanding our workforce engineers, architects, developers and more onboarding early adopters who can optimize, pivot and keep pace with ever-evolving development roadmaps ...  building the next generation of dealership software. We are at the forefront of innovation in the automotive industry, from creating new capabilities for connected vehicles to developing ...',
    created: '2020-12-02T14:54:16Z'
  },
  {
    title: 'Cloud Software Engineer (Full Stack)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853836101?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=DA54F38683CFF0221F0DB7735ECFCFEFDDF8DD08',
    description:
      '...  in Computer Science/Electrical Engineering or related major - Over 3 years of experience developing software - Solid knowledge of go, Java, or JavaScript - Solid knowledge of data structures ... Job Title: Cloud Software Engineer Job Location: Silicon Valley, CA Salary: Base  Stock Option, Full Benefits Requirements: 3 Years Exp If you are a Cloud Software…',
    created: '2020-12-01T01:11:43Z'
  },
  {
    title: 'applications software engineer - web',
    company: 'APN Software Services Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Anaheim, Orange County',
    area: ['US', 'California', 'Orange County', 'Anaheim'],
    longitude: -121.9939188,
    latitude: 37.5214359,
    url:
      'https://www.adzuna.com/land/ad/1832088078?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=AD8B20CA479465AD775520C80B890BD94818AEC0',
    description:
      'Job Description Title:- Applications software engineer - web (3 Opening) Anaheim, CA Full time Client is Looking for a Entry, Mid, and Senior level candidate Entry Level: Must ... , HTTP, TCP/IP, or Web Sockets Test Framework experience is a plus, Angular 2.0, Javascript and Sql are a plus. 3-5 years’ experience is a must Senior Level: Must have C#, .Net, SQL ...',
    created: '2020-11-18T20:40:56Z'
  },
  {
    title: 'Jr. Full Stack Software Engineer(s)',
    company: 'The Judge Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3990342,
    latitude: 37.7986895,
    url:
      'https://www.adzuna.com/land/ad/1786521477?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=58C8E866DBD471D674D016F37183BCF13958D6ED',
    description:
      'Location: San Francisco, CA Description: Top FinServices partner of THE JUDGE GROUP, currently seeking to add up and coming software engineering professionals in the bay area ... , design patterns, development, implementation and maintenance. Strong Experience designing and implementing REST based Web Service API(s) in a transaction processing environment. Strong ...',
    created: '2020-10-27T15:15:56Z'
  },
  {
    title: 'Full-Stack Developer',
    company: 'Populus',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.402568,
    latitude: 37.798518,
    url:
      'https://www.adzuna.com/land/ad/1820831610?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=800D888A8A774DC14D5E32125193843BE37F9F13',
    description:
      "The role:As a Full-Stack Developer at Populus, you'll be joining a world-class team that is transforming the future of transportation in cities. We're building a revolutionary ...  data ingestion and processing pipelines”-Uphold best practices in engineering, security, and design-Expertise in Javascript and a frontend framework - React preferred - Ability ...",
    created: '2020-11-13T12:31:16Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'IGNW',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -122.6730422,
    latitude: 45.4839625,
    url:
      'https://www.adzuna.com/land/ad/1765653659?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=6455A1465BE0FC568E414D026EE08291134EDB05',
    description:
      'Title Full Stack Developer Location San Diego, CA Type Contract Job JP9171291015 Note This job is not open to C2C or 3rd party candidates. IGNW is an engineering-based resourcing ... , and CSS. 5 years of experience with Java and Spring. 3 years of experience with Git or similar version control Experience in the full software development stack. Strong fundament…',
    created: '2020-10-16T01:34:52Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'Heitmeyer Consulting',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -82.943714,
    latitude: 40.1100613,
    url:
      'https://www.adzuna.com/land/ad/1791006713?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=C888CF636F469C502009CDE10C135507CD7410EC',
    description:
      "Job Title: Full Stack Developer Location: San Francisco (Remote) Duration: Contract to hire Job Summary Heitmeyer is seeking a Full Stack Developer for its west coast banking ...  financial service experience incorporating banking, brokerage, wealth management and trust. Job Description As a Digital Technology Full Stack Developer, you'll be re…",
    created: '2020-10-29T16:01:42Z'
  },
  {
    title: 'Jr. Full Stack',
    company: 'Apex Systems',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4007583,
    latitude: 37.7928729,
    url:
      'https://www.adzuna.com/land/ad/1841832903?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=FD1819F73DA188FF7EE38D5BF38D963F1554E8FA',
    description:
      ", jQuery, Angular, JavaScript and JavaScript libraries is required. Knowledge of AgileScrum development, experience with a software development IDE such as Visual Studio is preferred ...  Science or related discipline or relevant work experience. bull 1-4 years' experience and demonstrate proficiency in web based development languages, specifically HTML5CSS3, JavaScript…",
    created: '2020-11-24T07:11:12Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Full-Stack Software Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1859954635?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=3F78EE05842888EA63A5B058386CC4AA14D29EF5',
    description:
      'Minimum Required Skills REACT, .NET, C, MS Windows, IOS, Xamarin, JavaScript, PHP, SQL, TCP If you are a Full-Stack Software Developer with C experience, please read on Based ...  and we are looking to expand our development team as quickly as possible Due to growth and demand for our platform, we are in need of a talented Sr. Full-Stack Developer</stro…',
    created: '2020-12-03T12:10:18Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Software Engineer (MERN)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1856769078?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=6954FF48CB82BFF419BB4E2ABD7CC81CB6E21083',
    description:
      "If you are a Full Stack Developer with experience, please read onTop Reasons to Work with Us If you are looking to make a positive impact on the world while doing what you love ...  for world's largest solar software platform - Develop and maintain code for large code base for connecting and analyzing clean energy projects - Work on applications of code to energy ...",
    created: '2020-12-02T02:30:39Z'
  },
  {
    title: 'Sr. QA Engineer (SDET) (Javascript)',
    company: 'Prosum',
    maxSalary: null,
    minSalary: null,
    locationName: 'Long Beach, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Long Beach'],
    longitude: -118.3845977,
    latitude: 33.9056243,
    url:
      'https://www.adzuna.com/land/ad/1749098057?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=3C7DEE9FA0CA8791822DC3945CE3E4457B2BEBB2',
    description:
      '...  in this organization and keep company values and vision in mind for success. Responsibilities Design, develop, manage, and execute automated and manual test cases for API, web, and mobile Work ...  and monitor software quality standard Need-to-have 5 years of professional Software QA testing experience in test planning, test design, test strategy, and test execution Strong programming ...',
    created: '2020-10-07T23:14:31Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Mateo County, California',
    area: ['US', 'California', 'San Mateo County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853156583?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=F2023B71E9AFB5453F2EE94D73C9ABF78A688F8F',
    description:
      'Minimum Required Skills AWS, REACT, Node.js, Python, JavaScript, TypeScript, Google Cloud Platform, graphql, Kubernetes, Mongo If you are a Remote Senior Full Stack Developer ...  JavascriptTypescriptCSS skills- Developing new software applications, features, and distributed services that support a high-scale web application - Stay current with the latest front-end and back-end…',
    created: '2020-11-30T18:35:33Z',
    contract: 'full_time'
  },
  {
    title: 'Sr Full Stack Software Engineer (React Preferred)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1858934258?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=7E4863DB12B96E5C7649CBDF88F8BEBD2894F80F',
    description:
      'If you are a Senior Full-Stack Engineer with production JavaScript experience, please read on Situated in the heart of SOMO San Francisco, we are a well-funded (Post-Series C ...  Stocked Kitchen - Catered Lunch (Mondays and Wednesdays) - Commuter Stipend - Parental Leave (Paternity and Maternity) - Dog-Friendly OfficeSo, if you are a Sr Full Stack Engineer with 3 ...',
    created: '2020-12-03T02:26:25Z'
  },
  {
    title: 'Senior Full-Stack Software Engineer',
    company: 'Roche',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9589697,
    latitude: 37.372066,
    url:
      'https://www.adzuna.com/land/ad/1820827818?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=6D676E96A0F8A8AFBF501093CE150259400BC962',
    description:
      '...  industry while enabling high-velocity product development. The Senior Full-Stack Software Engineer will be an integral member of this team providing leadership for and hands ... -on implementation and testing of platform components. As a Senior Full-Stack Software Engineer, you willWrite high-quality cloud-based software t…',
    created: '2020-11-13T12:30:14Z'
  },
  {
    title: 'Full Stack Developer / Software Application Developer',
    company: 'CGS Business Solutions',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.6646145,
    latitude: 33.5229658,
    url:
      'https://www.adzuna.com/land/ad/1746598502?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=AF2712799995C801FE6B666B9751A80FC087ED24',
    description:
      '...  with a strong command in .Net Framework, C, MSSQL 2012 or higher and proficient with ASP.Net, MVC, JavaScript, JQuery Demonstrated experience with the Software Development Lifecycle concepts ...  opportunity CGS is currently hiring for self-starting, hands PERMANENT Software Application Developer (C .NET) reporting directly to the Sr Solutions Architect at a Financial Services client ...',
    created: '2020-10-06T19:49:25Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Software Engineer',
    company: 'Chorus Innovations Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Manhattan Beach, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Manhattan Beach'],
    longitude: -118.4451811,
    latitude: 34.068921,
    url:
      'https://www.adzuna.com/land/ad/1856333860?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=58AB55C360C6E9F695EDC3AE7CA00785FF868FF9',
    description:
      '...  applications. You are highly proficient with full-stack web development, ideally including CSS, HTML, JavaScript or TypeScript, a newer frontend framework (e.g React), Ruby on Rails ... , biomedical research and community improvement projects across dozens of institutions and public health agencies worldwide. We are hiring a Senior Full Stack Software <str…',
    created: '2020-12-01T20:48:30Z'
  },
  {
    title: 'UI/Full Stack Engineer',
    company: 'DPP Tech, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.419428,
    latitude: 37.777901,
    url:
      'https://www.adzuna.com/land/ad/1749096160?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=F08FD54E0EE5CB09B4E3160D51CC2BEBEB53D9D5',
    description:
      '...  insurance direct deposits via Paychex. We are looking for a Software Engineer for our client in Palo Alto. Client is in banking payments industry. SKILLS Mastery of JavaScript and least ...  of object-oriented design and programming concepts, core JavaScript concepts like scopeclosures, the event loop and asynchronous callbacks, promises. Significant experience developing ...',
    created: '2020-10-07T23:14:12Z'
  },
  {
    title: 'Senior Software Engineer - Full Stack',
    company: 'FiveStars',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.395666,
    latitude: 37.780816,
    url:
      'https://www.adzuna.com/land/ad/1820834716?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=18E660BB1E59597C17AB48B823A48337FAD87390',
    description:
      '...  developed and maintained multiple full stack web applications throughout the entirety of their lifecycle. You have a strong eye for software design. You want to tackle tough technical ...  in and out of store experiences.Who you are:You’re an experienced, full stack developer who demonstrates a high level of curiosity and keeps up with the latest technolog…',
    created: '2020-11-13T17:32:11Z'
  },
  {
    title: 'REMOTE - JavaScript Engineer - REMOTE',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1820841178?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=33473134FA4EDA438FC6B7CB45ECBD1D31340388',
    description:
      'San Francisco, CATelecommuting Available Full-time $140k - $180kPosted 10/18/2020REMOTE - JavaScript Engineer - REMOTE High growth early stage startup set to disrupt the consumer ...  and mission critical.If you are a JavaScript Engineer, please apply today. If you would rather simply send in your resume, please do so to remycybercoders.com.This job is open to telecommute ...',
    created: '2020-11-13T12:33:17Z'
  },
  {
    title: 'Senior Full Stack Software Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1856769130?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=91032CF3B17CBD3D2B390366E7A19AA3BE9C39D0',
    description:
      'If you are a Senior Full Stack Software Engineer with MERN stack experience, please read on We are located near the Marina Del Ray area and we are one of the fastest-growing ...  for growth -One of the fastest-growing companies in USWhat You Will Be Doing -Full-stack software development building scalable software applications …',
    created: '2020-12-02T02:30:41Z'
  },
  {
    title: 'Full-Stack Developer',
    company: 'Apidel Technologies',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -88.0017029,
    latitude: 42.0536567,
    url:
      'https://www.adzuna.com/land/ad/1801036395?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=7A46C6B7FAB5E6DCB15D1B997A84F2ECD61B79CC',
    description:
      '...  and can work on their own W2. To apply, please call Atul at 303-317-2350 or email him on mailto Job Title Full-Stack Developer Longevity 6 months Location Kirkland, WA 98034 San ...  Francisco, CA 94103 Position Summary The main responsibility of the Full-Stack Developer is to provide advanced operational data processing and packaging solutions using programming ...',
    created: '2020-11-03T15:55:05Z'
  },
  {
    title: 'Full-Stack Engineer',
    company: 'Nuro',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.0811272,
    latitude: 37.4102334,
    url:
      'https://www.adzuna.com/land/ad/1820837892?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=CC208F08E1AF2B530BA7CB62C51597C5E7EB6A55',
    description:
      '...  in our mission.About the RoleAs a Full-Stack engineer, you will be responsible for designing and implementing user-visible features in our simulation and tele-operation platforms ...  engineers and operators. The tools you will be building play a critical role for the operation of our service and on-going R&D work.About the WorkBuild and maintain web and desktop UI ...',
    created: '2020-11-13T12:32:43Z'
  },
  {
    title: 'Senior Software Engineer - Full Stack',
    company: 'Hired Recruiters',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3988969,
    latitude: 37.7867103,
    url:
      'https://www.adzuna.com/land/ad/1856346718?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=944921A8039F99957DCCDFFA5DB0B8E51CB03F34',
    description:
      "Job Description JOB DESCRIPTION We're looking for strong, experienced full-stack software engineers to join our small, but growing team. You will have an opportunity to work ...  great products Must-Have BS/MS in CS/CE or STEM or experienced in writing good software for shipped web products Knowledge in at least one of the following Ruby, Python, Javascript ...",
    created: '2020-12-01T20:50:06Z'
  },
  {
    title: 'REMOTE - JavaScript Engineer - REMOTE',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853838596?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=6EEC077074FD614E0EBEE2D1381406112EDAC242',
    description:
      'REMOTE - JavaScript Engineer - REMOTE High growth early stage startup set to disrupt the consumer experience. With an already functioning product on the market, this 20 person AI ...  team of engineers  high growth  product is leading in its vertical  terrific leadershipWhat You Need for this Position - JavaScript - ES2015 - React - Redux - AWS  Ruby or Python ...',
    created: '2020-12-01T01:12:10Z'
  },
  {
    title: 'Sr. Software Engineer (Full Stack)',
    company: 'Tech Holding',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -117.9940812,
    latitude: 34.1319551,
    url:
      'https://www.adzuna.com/land/ad/1860597447?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4472A5D3D61ADD67899C8AF04418E5781DC04A73',
    description:
      '...  design patterns Must be comfortable working with source control and unit testing Fluent in either SQL scripting Fluent in JavaScript, CSS, HTML, JQuery and AJAX technologies Expertise ...  working with AWS Cloud (EC2, ECS, Lambda functions etc) A deep appreciation for Open Source technologies and a passion for the web. Is a team player and is able to work well ...',
    created: '2020-12-03T21:14:06Z'
  },
  {
    title: 'Senior Full Stack Software Engineer - Python  React',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853156597?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=ECCB58323E3CA439790588235528B013C983509F',
    description:
      'Minimum Required Skills Python, Django, REACT, JavaScript, RESTful API, web sockets, AWS, AWS RDS, Applications at Scale, Concurrent Requests We are a MDM Security Software ...  and help lead us to a short IPO in the next 2-3 years. We are looking for a senior full stack engineer who is strong at writing applications that can scale to meet critical demand levels ...',
    created: '2020-11-30T18:35:33Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Software Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1855377989?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=F406C5BE0C961B2095F10E014390045FF0049A09',
    description:
      'Minimum Required Skills Node.js, JavaScript, Shopify, Vue.js, REST APIs, React.JS, Angular, AWS, Devops, CICD If you are a Senior Full Stack Software Engineer with MERN stack ...  framework (React.jsVue.jsAngular) -RESTful API development -Nice to haves -AWS - Shopify - DevOps experience - CICDSo, if you are a Senior Full Stack Software…',
    created: '2020-12-01T14:00:54Z',
    contract: 'full_time'
  },
  {
    title: 'Jr. Full Stack Software Engineer(s)',
    company: 'The Judge Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3990342,
    latitude: 37.7986895,
    url:
      'https://www.adzuna.com/land/ad/1814039587?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=8FE036D6299D2503A79FEDBCBEB0EED53784C5EB',
    description:
      'Location: San Francisco, CA Description: Top FinServices partner of THE JUDGE GROUP, currently seeking to add up and coming software engineering professionals in the bay area ... , development, implementation and maintenance.Strong Experience designing and implementing REST based Web Service API(s) in a transaction processing environment.Strong Experience providing ...',
    created: '2020-11-10T12:23:34Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sacramento County, California',
    area: ['US', 'California', 'Sacramento County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853156117?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=31AFA3A4F6594C1AFA154D49F2E814D401BC91E4',
    description:
      'Minimum Required Skills Software Development, Unity, Unity 3D If you are a Full Stack Developer with 7 years of Unity experience please read on What You Will Be Doing Be a part ...  of an engineering team that will play a strategic role in developing cutting edge applications Utilize and follow agile methodologies and principles Work in all layers of software <…',
    created: '2020-11-30T18:35:24Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clarita, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Clarita'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1854030268?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=18B2F37D7EE9A8C17903CE38D4C517431E89A82F',
    description:
      '...  are looking for a senior full-stack developer who excels with multi-tasking and can help build scalable new software applications and be an integral member in improving our SaaS platform. We ...  -HUGE room for growth -Work with a stable, growing companyWhat You Will Be Doing -Full-stack software development building scalable software appl…',
    created: '2020-12-01T02:24:50Z'
  },
  {
    title: 'Full-stack Engineer',
    company: 'Experis',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.400452,
    latitude: 37.7927864,
    url:
      'https://www.adzuna.com/land/ad/1852341014?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=F358F34696F1D295522B52D2E1ADAE95B3D6C82A',
    description:
      'Title: Full Stack Engineer Full-Time/Direct-Hire Opportunity Location: Remote Start Date: ASAP No C2C/Corp-to-Corp Authorized to work in US Responsibilities:  Create clean ...  visualization JavaScript library  Experience with Node, Ruby, and other full-stack technologies is also important  Strong knowledge in OOD, domain-driven design, and microservices  Experience ...',
    created: '2020-11-30T08:25:27Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'Ubertal',
    maxSalary: null,
    minSalary: null,
    locationName: 'Financial District, San Francisco',
    area: ['US', 'California', 'San Francisco', 'Financial District'],
    longitude: -122.3023678,
    latitude: 37.5573635,
    url:
      'https://www.adzuna.com/land/ad/1818772489?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=AE3618EA1C297DFFA4AA0D99A53C2A9126336633',
    description:
      'Title: Full Stack Engineer Location: San francisco, CA Duration: Fulltime Mandatory skills: Full Stack Developer: Core java J2EE JavaScript (JQuery, AngularJS) HTML, CSS Good ...  Their stack: Angular, Restful Service API in Java & Oracle backendJob Requirements: Developing front end website architecture. Designing user interactions on …',
    created: '2020-11-12T14:35:33Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'Ubertal',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3023678,
    latitude: 37.5573635,
    url:
      'https://www.adzuna.com/land/ad/1861497545?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=D369F413CBC4B075E112F928538D003B3B76524F',
    description:
      'Title: Full Stack Engineer Location: S an francisco, CA Duration: Fulltime Mandatory skills: · Full Stack Developer: Core java · J2EE JavaScript (JQuery, AngularJS) HTML, CSS ... , XML Their stack: Angular, Restful Service API in Java & Oracle backend Job Requirements: Developing front end website architecture. Designing user interactions on <s…',
    created: '2020-12-04T06:09:39Z'
  },
  {
    title: 'Full-Stack Developer',
    company: 'DirectedLINK',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.2549921,
    latitude: 34.051561,
    url:
      'https://www.adzuna.com/land/ad/1856352817?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=50F7A57FAA29A67719619C2F1EFDD3007F063465',
    description:
      "...  philosophy verbally and in writing Qualifications 6 years of work experience in software design and development, and hands-on experience in building large-scale UI/web applications Gaming ...  or P5.js Adobe XD for web design Experience in Node.JS, Mongodb (or other NOSQL db's), REST, Web Sockets, JavaScript, Ajax Knowledge in GraphQL desirable Extensive experience in web …",
    created: '2020-12-01T20:51:01Z'
  },
  {
    title: 'Java Full Stack Engineer',
    company: 'Zoom',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.8949083,
    latitude: 37.3328541,
    url:
      'https://www.adzuna.com/land/ad/1820830737?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=576DCA794785EA3DB1D406775B3FB6AB71994292',
    description:
      '...  to transparency, and the tangible benefits we provide our employees and our customers.Java Full Stack DeveloperResponsibilities:Design, development, and testing of features/functions delivered ... . (3 years work experience)Have successfully built, deployed, and supported an enterprise-scale web application in the cloud.Ideally have full-stack experience, with expertise ...',
    created: '2020-11-13T12:31:01Z'
  },
  {
    title: 'Senior Full-stack Software Engineer (Remote)',
    company: 'Collage.com',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1820831790?se=-EDnUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4A026198ABD131489AC05787110E2A8C80CC0E55',
    description:
      '...  are seeking an ambitious and nice senior full-stack engineer who shares our passion for building a great software company. This is a unique opportunity to have a major impact on our ...  more about working and developing software at Collage.com.ResponsibilitiesWrite and maintain front-end JavaScript code as part of a mobile-first web application, including…',
    created: '2020-11-13T17:31:19Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'ERPMark Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Thousand Oaks, Ventura County',
    area: ['US', 'California', 'Ventura County', 'Thousand Oaks'],
    longitude: -74.6433184,
    latitude: 40.3232071,
    url:
      'https://www.adzuna.com/land/ad/1842703681?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=7AA314DC13E2C69DCED5234C54CC84724C85FBEB',
    description:
      'Hi, ERPMARK Inc is looking for candidates for Long-term projects with our customers. Title Full Stack Developer Location Thousand Oaks,CA Woodland Hills CAAtlanta GA Hiring Mode ...  HTMLHTML5, XML, DHTML CSSCSS3, SASS, LESS, JavaScript, React Js, Redux , ES6, Web pack, Flex, JQuery, JSON, Node.js, Ajax, JQUERY Bootstrap. bull Experience in all phase of SDLC like ...',
    created: '2020-11-24T17:26:02Z'
  },
  {
    title: '.Net Full Stack Software Engineer',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'East Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'East Irvine'],
    longitude: -117.8964759,
    latitude: 33.6891655,
    url:
      'https://www.adzuna.com/land/ad/1852262889?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=1E6C36E6B198BDC7E1E7F0603A59C70CBA69B3BA',
    description:
      "...  will work on challenging cloud software development projects that support the company's eCommerce, marketing, and business operations strategies. The candidate should have a strong ...  understanding and hands-on experience with comprehensive software development and SaaS principles along with SOLID principles, object-oriented design and programming skills using C#.NET, .NET ...",
    created: '2020-11-30T07:37:19Z'
  },
  {
    title: 'Full Stack Developer - Technology Development Group (TDG)',
    company: 'Apple',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9463428,
    latitude: 37.3256681,
    url:
      'https://www.adzuna.com/land/ad/1841587975?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=AF7A4F047A5E80AB210C21F5F5A42AD7826994C1',
    description:
      '...  revolutionary future Apple devices. The Full Stack Developer role will be helping with rapid prototyping and helping build the tool and platforms for the data/visualization needs ...  APIsExpertise in Web development using Django (or other MVC frameworks), JavaScript/jQuery, CSS ,front-end JS Frameworks and HTMLComfortable in working with document stores (MongoDB, CouchDB ...',
    created: '2020-11-24T04:14:44Z'
  },
  {
    title: 'Sr Full Stack Software Engineer Telepresence Web Application',
    company: 'Intuitive',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Barbara County, California',
    area: ['US', 'California', 'Santa Barbara County'],
    longitude: -119.8875312,
    latitude: 34.4310128,
    url:
      'https://www.adzuna.com/land/ad/1833959516?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=8C8A2455DC9D6F503DF76D0FFBCF3F36CDD08004',
    description:
      '...  safety as our highest priority. Position_Overview We are hiring a Senior Full Stack Software Engineer in sunny and beautiful Santa Barbara or Sunnyvale, CA. This is an ideal opportunity ...  code on web and mobile apps  Use code reviews, test-driven development to deliver high quality software  Work closely with other team members, incorporate their feedback  Research ...',
    created: '2020-11-19T17:27:44Z'
  },
  {
    title: 'Senior Backend Engineer / JavaScript / NodeJS',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1834515521?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=9CBDEAAA9C4ABB1589F7789B1CC6AB6898F33569',
    description:
      "...  of professional software development experience JavaScript or TypeScript NodeJS Microservices REST RDBMS or NoSQL knowledge Excellent communication skills Team Players Ability to work in a fast ... A company that specializes in the development of a remote work collaboration tool that's revolutionizing the way that teams work and communicate virtually is looking for a Senior ...",
    created: '2020-11-20T00:58:21Z',
    contract: 'full_time'
  },
  {
    title: '.NET / Web API / SQL SRV, JavaScript App Developer',
    company: 'Kforce Technology Staffing',
    maxSalary: null,
    minSalary: null,
    locationName: 'Moorpark, Ventura County',
    area: ['US', 'California', 'Ventura County', 'Moorpark'],
    longitude: -118.3828082,
    latitude: 33.9878043,
    url:
      'https://www.adzuna.com/land/ad/1844937607?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=24840A404991F14108EFF62C998999F18C676B37',
    description:
      '...  the latest tools and techniques (.NET, C, Agile Methodologies, Web Services) Test software during development Prepare software for deployment to production environments Respond to questions ... RESPONSIBILITIES Kforce has a client in search of a .NETWeb APISQL SRV, JavaScript App Developer in Moorpark, CA. The Application Developer will be responsible for the overall ...',
    created: '2020-11-25T21:21:47Z'
  },
  {
    title:
      'Developer - .NET, JavaScript, API, Docker, Automated Testing, Azure',
    company: 'Software Management Consultants, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.254711,
    latitude: 34.153186,
    url:
      'https://www.adzuna.com/land/ad/1786792578?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=D8EB3624E40E783BDD6974B23E309429D4D02C48',
    description:
      '...  years in full stack development for cloud solutions (Azure or AWS) - Azure preferred 6 years of experience in JavaScript development frameworks and tooling Angular, React, VueJS, Gulp ...  applications. Design and develop API s for Omni-channel clients. Skills Minimum of 6 years of software development experience Minimum of 6 years of experience Java, .NET…',
    created: '2020-10-27T18:28:57Z'
  },
  {
    title: 'Full Stack Developer (10y  experience)',
    company: 'New Digital IT Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Fremont, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Fremont'],
    longitude: -118.1327948,
    latitude: 34.1484824,
    url:
      'https://www.adzuna.com/land/ad/1749096320?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=37A2707450682CC3D5C7DAE4CBFA0539E69CDFF9',
    description:
      'MUST HAVE 12 years experience in Java Full Stack Development with REST API DEVELOPMENT Would like a strong a full stack MICROSERVICES engineer (12y experience) with good knowledge ... , distributed, scaleable code a MUST. Coding standards and best practices a must Full stack Microservices development ndash Strong Camel, Java, N…',
    created: '2020-10-07T23:14:13Z'
  },
  {
    title: 'Full-stack Engineer',
    company: 'Experis',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.400452,
    latitude: 37.7927864,
    url:
      'https://www.adzuna.com/land/ad/1854802963?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=CFC5E0BBE1584FC3E5F1961D7F5222E99E8E9775',
    description:
      'Title: Full Stack EngineerFull-Time/Direct-Hire OpportunityLocation: Remote Start Date: ASAPNo C2C/Corp-to-CorpAuthorized to work in USResponsibilities: Create clean, maintainable ...  Experience with Node, Ruby, and other full-stack technologies is also important Strong knowledge in OOD, domain-driven design, and microservices Experience working in an agile environment ...',
    created: '2020-12-01T08:43:50Z'
  },
  {
    title: 'Staff Software Engineer, Full stack (Order Squad)',
    company: 'Rivian Automotive',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1381326,
    latitude: 37.4194985,
    url:
      'https://www.adzuna.com/land/ad/1820827989?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=B875B0279ABBD409033638F7454829F649795CF3',
    description:
      '...  electric adventure vehicles intuitive, seamless and fun. We are seeking Full Stack Staff Engineers who will be developing large scale client-side applications using the latest JavaScript ...  of these characteristics. Rivian encourages applicants of all ages.Palo Alto, CA /Software Engineering – Software Development /Full …',
    created: '2020-11-13T12:30:16Z'
  },
  {
    title: 'Back End Developer/Architect - Python, Docker, JavaScript',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1856768892?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2F268FF0C5AF37A0CAC80567BC653C2BB1B62F01',
    description:
      '...  with Typescript; - Knowledge of map visualization libraries (OpenLayers, CesiumJS, etc.); - Experience designing UI assets (using Sketch, Photoshop, Illustrator, etc.); General Full Stack Skills ... If you are a Back End Developer/Architect with experience, please read onWhat You Will Be Doing We are hiring a back end architect to help us build our autonomous satellite ...',
    created: '2020-12-02T02:30:32Z'
  },
  {
    title: '.NET MVC Web Developer',
    company: 'DCS Corp',
    maxSalary: null,
    minSalary: null,
    locationName: 'Ridgecrest, Kern County',
    area: ['US', 'California', 'Kern County', 'Ridgecrest'],
    longitude: -117.6718832,
    latitude: 35.63676410000001,
    url:
      'https://www.adzuna.com/land/ad/1853823076?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=F3FCA8C66270F8D117DBAC9D7119308D16052259',
    description:
      'DCS is seeking a Mid to Senior Level full-stack web application developer to support the F/A-18 & EA-18G Advanced Weapons Laboratory Integrated Project Team. The F/A-18 AWL has ... . The successful candidate will have experience with web application development in .NET MVC and a demonstrable understanding and experience applying software principles, theories, and concepts ...',
    created: '2020-12-01T01:09:27Z'
  },
  {
    title: 'Software Engineer - Full Stack, Disaster Recovery',
    company: 'Rubrik',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1454049,
    latitude: 37.4184494,
    url:
      'https://www.adzuna.com/land/ad/1845466609?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=21C61FA9FED450B6935D81A4154CDC5A4234B39A',
    description:
      '...  platformsDelivering features in a full-stack fashion, including but not limited to front end, backend, testing, and supportabilityNurturing team culture, which sets high standards and achieves them ...  through collaborationABOUT YOURubrik Software Engineers are self-starters, driven, and can manage themselves. We believe in giving engineers responsibility, not tasks. Our goal ...',
    created: '2020-11-26T04:13:46Z'
  },
  {
    title: '.Net Full Stack Software Engineer',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'East Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'East Irvine'],
    longitude: -117.8964759,
    latitude: 33.6891655,
    url:
      'https://www.adzuna.com/land/ad/1814046033?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E365CA1C963AAC33C7A681D973B35AD1B8ECF398',
    description:
      "...  on challenging cloud software development projects that support the company's eCommerce, marketing, and business operations strategies. The candidate should have a strong understanding ...  and hands-on experience with comprehensive software development and SaaS principles along with SOLID principles, object-oriented design and programming skills using C#.NET, .NET/ASP.NET ...",
    created: '2020-11-10T12:24:40Z'
  },
  {
    title: 'Full Stack Java Developer',
    company: 'Cool Minds LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -77.4285287,
    latitude: 38.9367374,
    url:
      'https://www.adzuna.com/land/ad/1842703570?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=62DB386DE2670CF8E9DA8E6B5BA41DCF5A1CEF9B',
    description:
      "Full Stack Java Engineer Can do w2 or c2c Must have experience with NodeJS, ReactJS and Java Any visa will work (Opt and Cpt are also eligible to apply) Non-Locals can apply ...  for a self-motivated, Full-stack Engineer to join one of our global online Payment leader's team and help build low-latency, high-throughput mid-tier applications to grow our new platform ...",
    created: '2020-11-24T17:25:56Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1855380947?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2A23E8F9A6B2BB4780195EB86653591B5E9245BE',
    description:
      'Minimum Required Skills MERN, Apollo, REACT, JavaScript, graphql, Node.js, AWS, jest, eXpress, Cypress If you are a Full Stack Developer with experience, please read on Top ...  to help environment - Help create "green" jobs - Competitive compensation  stock optionsSo, if you are a Full Stack Developer with experience, please apply today Applicants must ...',
    created: '2020-12-01T14:03:12Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Software Developer II',
    company: 'Kforce Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Rancho Bernardo, San Diego County',
    area: ['US', 'California', 'San Diego County', 'Rancho Bernardo'],
    longitude: -117.214994,
    latitude: 32.873542,
    url:
      'https://www.adzuna.com/land/ad/1861605208?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=50F76D69228CBFE3706EFE7FBCD9A0243B35FD4F',
    description:
      'RESPONSIBILITIES: Kforce has a client in search of a Full Stack Developer II in San Diego, CA. Duties: Work closely with product and development teams to create amazing ...  experiences and platform capabilities Work in agile development environment with short sprints and standups Implement proof of concept, prototypes and production-grade software Maintain ...',
    created: '2020-12-04T08:09:08Z'
  },
  {
    title:
      'Lead Software Engineer / JavaScript / ReactJS / Redux / Digital Logistics',
    company: 'Workbridge Associates',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1820829583?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=4FFE89B2CDB3D427C982205D01CC606CB77034B0',
    description:
      "...  of high Software Engineering experienceAt least 5 years of JavaScript with the most recent versioning2 years of React and ReduxPrior experience with teams of at least 3 - 5 other ... A software company in Playa Vista is opening up a brand new team for an eCommerce company aiming to ramp up for the holiday season. Right now, they're looking a Lead Frontend ...",
    created: '2020-11-13T12:30:45Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'City National Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.3379534,
    latitude: 34.15254400000001,
    url:
      'https://www.adzuna.com/land/ad/1813538594?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=21FFC0970C12BC8948A4DE5054F58118D9BF61BA',
    description:
      '...  problem solving skills and C#/.Net, Java, Python and full stack coding capability. This role will need to effectively communicate, collaborate, and influence engineering and business ...  Build APIs and UIs to help make use of large data sets, infrastructure and user experience. Work on fulllifecycle for web software development, from ideas to production. Provides ...',
    created: '2020-11-10T03:28:14Z'
  },
  {
    title: 'Sr. Full Stack UI Developer',
    company: 'Netskope',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.9693394,
    latitude: 37.3825772,
    url:
      'https://www.adzuna.com/land/ad/1820840738?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5C9335C777C28BD198C6B82C7DD12F960D2BAA19',
    description:
      '...  at Netskope Careers and follow us on Twitter Netskope and Facebook.Sr. Full Stack UI DeveloperPlease note, this team is hiring across Staff Engineer, Sr. Staff Engineer and Principal ...  interface.Work in the backend to develop web applications.Develop reusable UI components.Ensure that the Netskope web interface works seamlessly in all browsers.Keep abre…',
    created: '2020-11-13T17:33:11Z'
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Health at Scale Corporation',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.8409139,
    latitude: 37.3400694,
    url:
      'https://www.adzuna.com/land/ad/1852894225?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=F1E6B3A0143329CFF9C026B5E53DC95A1660A9EC',
    description:
      "...  field  2 years of experience developing web applications and complex UIs  Strong proficiency in Python and web technologies (JavaScript, HTML, CSS)  Strong understanding ...  organizations manage tens of millions of individuals in live production use. The company's software solutions service a broad range of use cases for managed care, accountable care and self ...",
    created: '2020-11-30T13:00:49Z'
  },
  {
    title: 'Sr Full Stack Software Engineer',
    company: 'TechStyle Fashion Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -118.3862384,
    latitude: 33.904129,
    url:
      'https://www.adzuna.com/land/ad/1844367073?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=B460CB8BF662D74D8D3B3A3828AC2D3E7C221EFF',
    description:
      'Job_Description TechStyle Fashion Group is currently looking for a Remote Senior Full Stack Software Engineer. How Do You Fit In? As the Senior Full Stack Software Engineer, you ... . Responsibilities  Analyze, Design, Develop, Deploy and Maintain components written in ColdFusion and Java with multiple web servers on AWS <stron…',
    created: '2020-11-25T12:56:22Z'
  },
  {
    title: 'Senior Software Engineer, Web Development (Front End)',
    company: 'Sonos, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Barbara County, California',
    area: ['US', 'California', 'Santa Barbara County'],
    longitude: -119.68999,
    latitude: 34.413917,
    url:
      'https://www.adzuna.com/land/ad/1784126305?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2A9A6E80884C09BF302398501D606E512A1E44F8',
    description:
      '...  on the current state of web technology. Communicating your solutions to both technical and non-technical stakeholders in a clear and concise manner. Develop and mentor junior engineers, paying ... Design, build, and scale web experiences built with proven JavaScript frameworks. Turn your in-depth knowledge of responsive and adaptive design into fluid web-based experiences ...',
    created: '2020-10-26T06:29:26Z'
  },
  {
    title: 'Full Stack .Net Developer',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1834508979?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=0A970FEE66EB50E3695399FBD3D4BAB22F783379',
    description:
      'Our client based out of Silicon Beach has a job open for a Software Engineer Developer to work on their Azure hosted high profile platform. The company is in growth mode ...  innovative tech product. In this role you would be working on a team of engineers participating in full life cycle decision making. The best thing about this company is there are smart ...',
    created: '2020-11-20T00:54:51Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1858062737?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=6E95BE3C03056A0C9DCD9A984DA1ADFC4DD2D0CB',
    description:
      "...  of experience in a software engineering role - Advanced knowledge in React, JavaScript, TypeScript, and Node.js - Experience with Relational Databases (MySQL, PostgreSQL) What's In It for You ...  - Competitive Salary - Full Health, dental, vision, and more - Unlimited PTO - WFH office setup stipend - 100 RemoteSo, if you are a Senior Full Stack Engineer with experience, p…",
    created: '2020-12-02T16:29:38Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Engineer',
    company: 'Noble.AI',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3967923,
    latitude: 37.79379110000001,
    url:
      'https://www.adzuna.com/land/ad/1860597559?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=7FAA8933041D4A1D30AF2A3E2EED0FFFBDB62CA7',
    description:
      'Job Description Noble.AI is a software company building a new way to do R&D at 10X lower cost. We are looking to hire Full Stack Engineers to help build out our core technology ... , collaborating closely with other Full Stack Engineers as well as Machine Learning Engineers, AI Research Scientists, and Product Designers. You will embody the Founders vision of a…',
    created: '2020-12-03T21:14:09Z'
  },
  {
    title: 'Sr. Full Stack Software Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Textile Finance, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Textile Finance'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1843825823?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=502B07476B119C6E062C048517CA5F403F60AC36',
    description:
      '...  and looking for a Sr. Software engineer to join our teamWhy join us?Great Pay $115k - $150k DOEFull Benefits401(k) planGreat cultureJob DetailsExpert with Javascript, HTML, CSS, and React ... Sr. Full Stack DeveloperThis Jobot Job is hosted by: Tyler HarmonAre you a fit? Easy Apply now by clicking the "Apply on company site" button and sending us your resume.Salary ...',
    created: '2020-11-25T07:33:41Z'
  },
  {
    title: 'Web Application Software Developer',
    company: 'Linquest Corporation',
    maxSalary: null,
    minSalary: null,
    locationName: 'El Segundo, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'El Segundo'],
    longitude: -118.3958908,
    latitude: 33.9199366,
    url:
      'https://www.adzuna.com/land/ad/1820830580?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2FAD8B5EC14DB350EBDF3AFEEC7FAA8D4A2DD35A',
    description:
      'LinQuest is seeking a Web Application Software Developer to join our team in El Segundo, CA.As a member of an Agile Scrum team, develop and deploy web applications to support ...  and languages through personal research, sharing knowledge with the team, asking for help from team membersRequired Skills:Delivering successful web application solutions using JavaScript ...',
    created: '2020-11-13T12:30:59Z'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clarita, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Clarita'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1853141318?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=4CF01F008421EA7C4128A320BDC9C52B570CDE04',
    description:
      '...  with a stable, growing company What You Will Be Doing -Full-stack software development building scalable software applications -Working with Node.js and JavaScript -Development of distributed ... Minimum Required Skills Full Stack Development, Node.js, SaaS, Angular, JavaScript, AWS, Agile, Microservices a…',
    created: '2020-11-30T18:34:03Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Developer - .Net',
    company: 'Ultimate',
    maxSalary: null,
    minSalary: null,
    locationName: 'Moorpark, Ventura County',
    area: ['US', 'California', 'Ventura County', 'Moorpark'],
    longitude: -118.7882209,
    latitude: 34.1849034,
    url:
      'https://www.adzuna.com/land/ad/1817989516?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=D03FBB0A8C9E989F4682D2050FA7253401584FAD',
    description:
      '...  Job Responsibilities and Qualifications: Full Stack development in .net c# , but working knowledge of JavaScript & node.js is highly beneficial Agile Methodologies Web Services Test software during ... We are currently seeking a Full Stack Developer - .Net for our client in the mortgage industry. This person will Create complex enterprise-…',
    created: '2020-11-12T07:09:09Z'
  },
  {
    title: 'Sr. Full Stack Developer (2)',
    company: 'The Judge Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3990342,
    latitude: 37.7986895,
    url:
      'https://www.adzuna.com/land/ad/1818787320?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=641378537205AF8B908D67F9434FE4ECF2601C7F',
    description:
      'Location: San Francisco, CA Description: Our client is currently seeking a Sr. Full stack (front end heavy) Developer - JavaScript / C# .Net12 month contract with potential ...  technologies such as Angular/React, HTML, CSS, JavaScript, Typescript, jQuery, Backbone, Bootstrap, Node or similar Good understanding of latest Architecture and Development Standards ...',
    created: '2020-11-12T14:37:07Z'
  },
  {
    title: 'Full-Stack WordPress Web Designer Needed',
    company: 'Profound Logic Software',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.8642357,
    latitude: 33.6874684,
    url:
      'https://www.adzuna.com/land/ad/1856313023?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=B174A86E107F0963EE4E8AD22D70E483214E956F',
    description:
      '...  and mobile-ready designs using the latest UX/UI best practices Full-Stack Development: You will have an excellent understanding of technologies that include Front-end: HTML5, CSS3 ... , blog, and landing pages. To qualify for this position, you must have the following skills: 3-5 Years’ Experience with corporate web development for web and mobile browsers WordPress ...',
    created: '2020-12-01T20:43:42Z'
  },
  {
    title: 'Full stack developer',
    company: 'Talfind LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.495155,
    latitude: 34.012638,
    url:
      'https://www.adzuna.com/land/ad/1833686266?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E50CCDCD24170F42898DE8D9A1F54C59B7C96062',
    description:
      'We are looking for a Full Stack Developer to produce scalable software solutions. Yoursquoll be part of a cross-functional team thatrsquos responsible for the full software ...  development life cycle, from conception to deployment. As a Full Stack Developer, you should be comfortable around both front-end and back-end coding l…',
    created: '2020-11-19T14:59:06Z',
    contract: 'full_time'
  },
  {
    title: '.Net Full Stack Developer',
    company: 'Confidential',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sun, Riverside County',
    area: ['US', 'California', 'Riverside County', 'Sun'],
    longitude: -81.581808,
    latitude: 30.361373,
    url:
      'https://www.adzuna.com/land/ad/1818788765?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=D1854193A90822558E232649EB619DF3A28567D7',
    description:
      '.Net Full Stack Developer $80K - $100K Full Time/Perm Jacksonville, FL The .Net Full Stack Developer is responsible for maintaining and developing new functionality of Digital ...  to automate or improve existing digital assets Support and develop database driven web interfaces for high-traffic websites Work with and manage var…',
    created: '2020-11-12T14:37:17Z'
  },
  {
    title: 'Lead Full Stack Developer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Cruz, Santa Cruz County',
    area: ['US', 'California', 'Santa Cruz County', 'Santa Cruz'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1751053339?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=B12B197E6438A9BE9A23934B5F1C4122DBA65579',
    description:
      'Lead Full Stack Developer - Ruby on Rails, React.jsThis Jobot Job is hosted by: Gene ChoiAre you a fit? Easy Apply now by clicking the "Apply on company site" button and sending ...  this real time data to provide an "it just works" experience for both the retail operators and end consumers.If you are a Lead Full Stack Developer with great technical skills, then please ...',
    created: '2020-10-08T22:06:37Z'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'AuditBoard',
    maxSalary: null,
    minSalary: null,
    locationName: 'El Segundo, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'El Segundo'],
    longitude: -118.0569839,
    latitude: 33.8674373,
    url:
      'https://www.adzuna.com/land/ad/1820834760?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=ECA013EC66DC5CC23927526FC5F27A11450C18AB',
    description:
      '...  with JavaScript, Node.JS, Ember, Python, Docker, PostgreSQL, Kubernetes, etc.Contribute to open-source projectsQualifications5 years of experience developing web-based applicationsExperience ... ., Intel, and Snap, among many others.Who We Are Looking ForWe are looking for highly motivated Senior Software Engineer who not only worries about technical correctness, but also thinks ...',
    created: '2020-11-13T12:32:12Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'City National Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.3379534,
    latitude: 34.15254400000001,
    url:
      'https://www.adzuna.com/land/ad/1832670083?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=DCAEB7D5393021D03400C1B743A3E7A2F3BB0373',
    description:
      ', the Software Engineer is responsible for designing, developing and maintaining legacy and "Cloud First" applications written primarily in C# and focused on .Net Core and Azure cloud platform ...  and UIs to help make use of large data sets, infrastructure and user experience.Work on fulllifecycle for web software development, from ideas to production.Provides programming ...',
    created: '2020-11-19T04:11:02Z'
  },
  {
    title: 'Lead Full Stack Developer',
    company: 'DatamanUSA, LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -104.834411,
    latitude: 39.59141899999999,
    url:
      'https://www.adzuna.com/land/ad/1805099927?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=0B52925AB25423C31BAEDE63F89E978B83982A12',
    description:
      'DatamanUSA has an exciting opportunity for a Lead Full Stack Developer to work on-site with one of our direct clients in Los Angeles, California. We love referrals Please refer us ...  Stack Developer Location Los Angeles, California Duration 6 Months (with possible extension) Primary Responsibilities Programming Technical Research, design and implement technical ...',
    created: '2020-11-05T18:15:42Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Developer',
    company: 'TEKsystems, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -121.9269558,
    latitude: 37.3962721,
    url:
      'https://www.adzuna.com/land/ad/1854802692?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C7E4985EFE22AF36B1810F1E8BE9423B7224D346',
    description:
      '...  in JavaScript, including DOM manipulation and the JavaScriptobject model 2 years of experience of developing against the full web stack (e.g, HTTP, headers,caching, etc.) and with web markup ... As a Web Developer, you will be combining the art of design with the art ofprogramming. Your responsibilities will include translation of UI/UX design wireframes t…',
    created: '2020-12-01T08:43:49Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1859956751?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=98688CB9DD4C30E0F1B0577D57A45BBCCB8015CB',
    description:
      'Minimum Required Skills Full Stack Engineer, React.JS, Java, Node.js, JavaScript, Redux, Linux, AWS, MySQL, RUBY Job Title Full Stack Engineer - React.JS, Java Job Location Santa ...  preparation looks like Our team is small but mighty and we are looking for a Full Stack Software Engineer to join us and help th…',
    created: '2020-12-03T12:10:57Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Software Engineer Full Stack',
    company: 'Autodesk',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3947812,
    latitude: 37.7937444,
    url:
      'https://www.adzuna.com/land/ad/1826360798?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=0168369C6963FE4B32BA48ACA4E16336AE1C94E7',
    description:
      'Job Requisition ID  20WD42197 Position Overview Autodesk is looking for a highly motivated, experienced senior full stack engineer to join the Autodesk Forge Engineering team ...  in San Francisco, CA. The Senior Engineer will help Autodesk build a seamless web viewing experience for its customers. As a senior software engineer you will be working in a team ...',
    created: '2020-11-16T08:53:28Z'
  },
  {
    title: 'Full Stack Java Developer / Hollywood',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Hollywood, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Hollywood'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1827893376?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2DD5EC19D0F9A6D8B5AD6C8F7BC9BC105EDB8331',
    description:
      '. Looking for an engineer who is excited about building new things and has a background doing full stack development. Great opportunity to build a large scale web application with a modern ...  Java tech stack. Required Skills Experience 2 years writing production, web based code using JavaSpring Production experience writing Javascript code Familiarity <strong…',
    created: '2020-11-17T00:47:47Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Software Engineer - Python, React',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1861080595?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=93476E15BBAD09E9EFEEBD240300AE212D05ECDB',
    description:
      '...  and 11 company holidaysWhat You Will Be Doing - Help build/test/release/launch new code on weekly basis - Build scalable software for high-volume use - Optimize client code on web ...  platformsWhat You Need for this Position BS/MS in Comp Sci or related 5 years of production level experience Python React JavaScript Microservice architecture So, if you are a Senior Full ...',
    created: '2020-12-04T02:36:23Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'Odoo, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.391407,
    latitude: 37.7109501,
    url:
      'https://www.adzuna.com/land/ad/1861209256?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=F03C6DBC1BC4A8A6B7378AF7B12C6B51E43CC83F',
    description:
      'Full Stack Engineer The role will be 100% remote for now socialdistancing. Eventually, it will convert into an onsite role in San Francisco CA. Odoo is seeking to significantly ...  expand its vibrant and innovative Full Stack Engineering team. Apply to work within an organization that values independence, flexibility, and personal growth. The Full Stack ...',
    created: '2020-12-04T04:20:25Z'
  },
  {
    title: 'Sr. Full Stack Engineer - Java, Apex, Salesforce',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030755?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=720A984444DF59A0A48A9CA58E94865D00AA09EB',
    description:
      'If you are a Sr. Full Stack Software Engineer with experience, please read on Job Title: Sr. Full Stack Developer Salary: $100k - $130k Requirements: 3 years experience ...  - Optimizing performance - Enhancing the UX - Managing Software Development from start to deployment - Collaborating with your team on design and architecture - Dev…',
    created: '2020-12-01T02:25:12Z'
  },
  {
    title: 'Full Stack Developer',
    company: 'Odesus',
    maxSalary: null,
    minSalary: null,
    locationName: 'Burbank, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Burbank'],
    longitude: -118.4620097,
    latitude: 34.04793770000001,
    url:
      'https://www.adzuna.com/land/ad/1858062870?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C382F19EAEEC28F16768CF1A338F4755FA6EFC60',
    description:
      'Fullstack Developer - NodeJS, Python, AWS Lambda, REST, API development (specifically serverless), JavaScript We have developed an ID verification Product (created webpages ...  that verify the identity of the person when they are making privacy requests). Role is to both support the product, and help develop enhancements ...',
    created: '2020-12-02T16:29:58Z'
  },
  {
    title: 'Software Engineer (Full Stack/ Developer Tools)',
    company: 'SpaceX',
    maxSalary: null,
    minSalary: null,
    locationName: 'Hawthorne, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Hawthorne'],
    longitude: -118.3282793,
    latitude: 33.9206811,
    url:
      'https://www.adzuna.com/land/ad/1846850597?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=8F4BFE9A5340C0E2013DED755D0DF762797C56ED',
    description:
      ', math, or scientific discipline, OR 2 years in software engineering without a degree - Experience developing across a full stack: web server, relational database, and client-side/front ...  developing the technologies to make this possible, with the ultimate goal of enabling human life on Mars. Software Engineer (Full …',
    created: '2020-11-26T19:19:38Z'
  },
  {
    title: 'Sr. Ruby Developer (Ruby, JavaScript)',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'East Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'East Irvine'],
    longitude: -117.8964759,
    latitude: 33.6891655,
    url:
      'https://www.adzuna.com/land/ad/1788522636?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=ADBF65FC31E57A228558DD20638599F5FFAF7AED',
    description:
      'Urgent needs for 2 Sr. Ruby Developer for a leading software company here in Irvine, CA. Direct Hire with highly desired work culture and competitive compensation package.Required ...  candidates with 5 years of production development experience with Ruby (Ruby Grape or Ruby on Rails) and JavaScript. You will be responsible for building applications and platforms ...',
    created: '2020-10-28T14:57:03Z'
  },
  {
    title: 'Remote Senior Full Stack Developer (Angular)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1856768539?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=B41A23242712FE7C42F3D35F3BE1763D8D9C015A',
    description:
      '...  years Software development - 70-80% Javascript (Angular) / Java We are an innovative, and rapidly growing healthcare technology company We are pushing the boundaries of technology ...  a successful exit from a previous product based company in the same domainWhat You Will Be Doing - Full stack development with a focus on the frontend - Develop new products and features ...',
    created: '2020-12-02T02:30:21Z'
  },
  {
    title: 'Sr. Full Stack Software Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Van Nuys, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Van Nuys'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1853637069?se=sKDtUFI26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=44C9B434ADE719F78274286DFD9C557C299E0575',
    description:
      '. Software engineer to join our team Why join us? Great Pay 115k - 150k DOE Full Benefits 401(k) plan Great culture Job Details Expert with Javascript, HTML, CSS, and React or Angular ... Sr. Full Stack Developer This Jobot Job is hosted by Tyler Harmon Are you a fit? Easy Apply now by clicking the "Apply Now" button and sending us your resume. Salary 115,000 ...',
    created: '2020-12-01T00:04:02Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Developer - .Net',
    company: 'Ultimate',
    maxSalary: null,
    minSalary: null,
    locationName: 'Moorpark, Ventura County',
    area: ['US', 'California', 'Ventura County', 'Moorpark'],
    longitude: -118.7882209,
    latitude: 34.1849034,
    url:
      'https://www.adzuna.com/land/ad/1824386616?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=B4B5E1390D603875D8B26CB4AC901CDB32228716',
    description:
      '...  Responsibilities and Qualifications:Full Stack development in .net c# , but working knowledge of JavaScript & node.js is highly beneficialAgile Methodologies Web ServicesTest software during ... We are currently seeking a Full Stack Developer - .Netfor our client in the mortgage industry. This person will Create complex enterprise-transfor…',
    created: '2020-11-15T02:13:21Z'
  },
  {
    title: 'Entry Level Full Stack Developer',
    company: 'TVB ',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.0591274,
    latitude: 33.8915503,
    url:
      'https://www.adzuna.com/land/ad/1830971431?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=E5A4F599DB0B074E61810AA412572ECCB882C1F7',
    description:
      ". in Computer Science / Engineering or related majors Experience with HTML, CSS, JavaScript, and server-side web technologies such as PHP. Knowledge and experience with RESTful API Familiar ... Education - Bachelor's degree Skills - PHP - APIs - AWS - REST - JavaScript - Health insurance - Dental insurance - 401(k) Language - Chinese - English Responsibilities Develop ...",
    created: '2020-11-18T10:51:24Z'
  },
  {
    title: 'Staff Software Engineer  Full-stack',
    company: 'Equinix',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -121.9977283,
    latitude: 37.3799437,
    url:
      'https://www.adzuna.com/land/ad/1820829999?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=3DA9A8B565298CF6CFC5379D05FEDB746DBB7910',
    description:
      "...  experience as Full stack engineer working on Frontend and Backend development.Bachelor’s degree in Computer Science and Engineering or equivalent Proficient in Java,Java Script with a good ... Staff Software Engineer  Full-stackEquinix is one of the fastest growing data center companies, growing connectivity between clients worldwide. That’s why we're alwa…",
    created: '2020-11-13T12:30:50Z'
  },
  {
    title: 'REMOTE Senior Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1859954634?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=55541F37396B6ADF74F18F6E348BAD6A8E6CE503',
    description:
      "Minimum Required Skills Python, JavaScript, Web Applications, Django, REACT, Node.js, NoSQL, AWS, RabbitMQ, Kafka Are you a Senior Full Stack Engineer who wants to work fully ...  have plans to double next year, so there's a ton of room for architectural growth and leadership What You Will Be Doing - Organize and help lead full lifecycle software development ...",
    created: '2020-12-03T12:10:18Z',
    contract: 'full_time'
  },
  {
    title: 'React/Full-stack Software Developer for UAS Traffic Management',
    company: 'KBR',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -104.7280977,
    latitude: 38.8166249,
    url:
      'https://www.adzuna.com/land/ad/1818694957?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=2050BEC1F42A4FF4635AE8C05D358109C4BA0FE8',
    description:
      '...  to integrate UTM into their operations. The Software Engineer will be tasked with supporting the development of a Federal UTM system to serve multiple agencies with a wide variety ... This position is located at NASA Ames Research Center on Moffett Field.KBR is seeking a Software Engineer to join the UAS (drone) Traffic Management team. Over the past five years ...',
    created: '2020-11-12T14:26:30Z'
  },
  {
    title: 'Web Developer',
    company: 'Zephyr UAS, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Orange County, California',
    area: ['US', 'California', 'Orange County'],
    longitude: -117.8601998,
    latitude: 33.7771394,
    url:
      'https://www.adzuna.com/land/ad/1807374042?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=749AB34B8D8B8308D71A591DB79748B21D63D45B',
    description:
      '...  in web development or other related fields Familiarity with with HTML, JavaScript, or other related languages Strong problem solving and critical thinking skills Strong attention ... Job Description We are seeking a Web Developer to join our team You will develop and implement unique web-based applications. Responsibilities: Design, create, and modify company ...',
    created: '2020-11-06T20:38:01Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1858062150?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=40E9CD7C82D268E055D1171996A9C945545B9250',
    description:
      'Minimum Required Skills Coldfusion, JavaScript, JQuery, Java, Angular Job Title Remote Full Stack Engineer Job Location Remote Hourly 55-65hr (6 month contract) Requirements ... . What You Will Be Doing As a Full Stack developer you will own the technical implementation and launch of client specific requirements. You will collaborate closely with internal ...',
    created: '2020-12-02T16:27:33Z'
  },
  {
    title: 'Senior React/Node Full stack Engineer',
    company: 'Kforce Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego, San Diego County',
    area: ['US', 'California', 'San Diego County', 'San Diego'],
    longitude: -117.214994,
    latitude: 32.873542,
    url:
      'https://www.adzuna.com/land/ad/1843033468?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=57F2AAD67D7AE7B0DE79677E3C1547550D704E8F',
    description:
      '...  stack software development Advanced knowledge of front-end web technologies (HTML, CSS, JavaScript) Experience with React and data-driven Single Page web Applications (SPA) Advanced ...  development sprints and stay on schedule Job Requirements: REQUIREMENTS: B.S. in an engineering field (Computer, Software, Math, Physics, Electrical, etc.…',
    created: '2020-11-24T22:02:35Z'
  },
  {
    title: 'Lead Full Stack Developer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Cruz County, California',
    area: ['US', 'California', 'Santa Cruz County'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1853637075?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=477D4901E280B953DE3AB9307F402F3714F0AFE9',
    description:
      'Lead Full Stack Developer - Ruby on Rails, React.js This Jobot Job is hosted by Gene Choi Are you a fit? Easy Apply now by clicking the "Apply Now" button and sending us your ...  data to provide an "it just works" experience for both the retail operators and end consumers. If you are a Lead Full Stack Developer with great technical skills, then please read ...',
    created: '2020-12-01T00:04:02Z',
    contract: 'full_time'
  },
  {
    title: 'Principal Engineer, Web',
    company: 'Legal Zoom',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Mateo County, California',
    area: ['US', 'California', 'San Mateo County'],
    longitude: -122.079822,
    latitude: 37.39434079999999,
    url:
      'https://www.adzuna.com/land/ad/1813538685?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=0D0B3ABD0471F63446AD56149FDEEB311C2E427A',
    description:
      '...  closely with other engineering teams to gain bottom-up consensus in delivering technology solutions Full-stack hands on development Design and communicate solutions that help software ...  experience in the areas of web development and application integration 3 years working in the role of principal or staff engineer in a high transaction, fast paced and d…',
    created: '2020-11-10T03:28:14Z'
  },
  {
    title: 'Principal Engineer, Web',
    company: 'Legal Zoom',
    maxSalary: null,
    minSalary: null,
    locationName: 'Glendale, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Glendale'],
    longitude: -118.2554682,
    latitude: 34.1467882,
    url:
      'https://www.adzuna.com/land/ad/1813539645?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=CB541FC849A43C109A839EB852E0743B6A79E321',
    description:
      '...  closely with other engineering teams to gain bottom-up consensus in delivering technology solutions Full-stack hands on development Design and communicate solutions that help software ...  experience in the areas of web development and application integration 3 years working in the role of principal or staff engineer in a high transaction, fast paced and d…',
    created: '2020-11-10T03:28:23Z'
  },
  {
    title: 'Senior .NET MVC Web Developer',
    company: 'DCS Corp',
    maxSalary: null,
    minSalary: null,
    locationName: 'Ridgecrest, Kern County',
    area: ['US', 'California', 'Kern County', 'Ridgecrest'],
    longitude: -117.6718832,
    latitude: 35.63676410000001,
    url:
      'https://www.adzuna.com/land/ad/1853820189?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=8F024429F029EBF7BA31D9AF994E7452B7783524',
    description:
      'DCS is seeking a Mid to Senior Level full-stack web application developer to support the F/A-18 & EA-18G Advanced Weapons Laboratory Integrated Project Team. The F/A-18 AWL has ... . The successful candidate will have experience with web application development in .NET MVC and a demonstrable understanding and experience applying software principles, theories, and concepts ...',
    created: '2020-12-01T01:08:59Z'
  },
  {
    title: 'Principal Full Stack Engineer',
    company: 'Key Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.1075854,
    latitude: 32.9523317,
    url:
      'https://www.adzuna.com/land/ad/1805962681?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=D42DF6356D97E1093BB5A400CB56394784C80A2B',
    description:
      '...  of Module and Product Owners. Required Qualifications 7 years of software engineering experience Deep knowledge of Java, databases, and web-related servers. Knowledge of JavaScript ...  and other Business Decision Servers, OutSystems REST and SOAP Knowledge of the Agile process and Test Driven Development Integration and Unit Testing Frameworks Experience in startup ...',
    created: '2020-11-06T02:49:20Z'
  },
  {
    title: 'Senior Javascript/Typescript Engineer - Data Science Platform',
    company: 'Bloomberg',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.40049,
    latitude: 37.7923252,
    url:
      'https://www.adzuna.com/land/ad/1835424934?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=40F3455322CF675CA494D88AA2FAD837DDD59E7E',
    description:
      '...  Develop and deploy robust software requiring minimal maintenance You need to have 6 years of production experience in JavaScriptTypeScript, Python, C++ or other programming languages 3 ...  systems An understanding that software should be kept as simple as possible BA, BS, MS, or PhD in Computer Science, Engineering or related technology field Weaposd love to see Experience ...',
    created: '2020-11-20T10:53:51Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Javascript/Typescript Engineer - Data Science Platform',
    company: 'Bloomberg L.P.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3957037,
    latitude: 37.7974963,
    url:
      'https://www.adzuna.com/land/ad/1827942929?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=A7C5D65C7783CCF408A744C7588BB0C1DA2A1FC8',
    description:
      "...  BA, BS, MS, or PhD in Computer Science, Engineering or related technology field We'd love to see Experience building full-stack applications, including service APIs and database ...  Jupyter linting tools and collaborative code editing capabilities Build search capabilities for resource navigation Develop and deploy robust software requiring minimal maintenance You ...",
    created: '2020-11-17T00:55:07Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Full Stack Developer (2)',
    company: 'The Judge Group, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3990342,
    latitude: 37.7986895,
    url:
      'https://www.adzuna.com/land/ad/1813328124?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=B2BEB9563E7B2CA290970BB2CD4199D4B401B500',
    description:
      'Location San Francisco, CA Description Our client is currently seeking a Sr. Full stack (front end heavy) Developer - JavaScript C .Net 12 month contract with potential extension ...  such as AngularReact, HTML, CSS, JavaScript, Typescript, jQuery, Backbone, Bootstrap, Node or similar Good understanding of latest Architecture and Development Standards, Guidelines and SOLID ...',
    created: '2020-11-10T00:18:20Z',
    contract: 'full_time'
  },
  {
    title: 'REMOTE Senior Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1861080427?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=FECE31ED4F9979DF1EB039178CDDE7091704FF39',
    description:
      'Are you a Senior Full Stack Engineer who wants to work fully REMOTE, grow with a new team, and contribute meaningfully? If so, read on: We are a successful startup that is making ...  - Organize and help lead full lifecycle software development - Write efficient code that is well designed and tested throughout the development cycle - Use your expertise to think up ...',
    created: '2020-12-04T02:36:15Z'
  },
  {
    title: 'Front End Software Engineer - JavaScript, React Native, GCP',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1820825841?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=F5BFCA6C465EF53EAE2BE61691969A97A3DD7685',
    description:
      'Palo Alto, CA Full-time $110k - $140kPosted 10/28/2020If you are a Front End Software Engineer with experience, please read onWhat You Will Be Doing- Architecting and developing ...  in software engineering - 2 years React or React Native - Familiarity with NoSQL databases - Familiarity with Linux / Unix / macOS - Familiarity with common developer tools and practices ...',
    created: '2020-11-13T12:29:45Z'
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Prospance Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.9458225,
    latitude: 37.4806909,
    url:
      'https://www.adzuna.com/land/ad/1749089725?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=235DC8EE1A3E1D83BE017DE8F3536E62A4781C11',
    description:
      'Title Java Full Stack Developer Location San Jose, CA Type Contract Job Description 6 years of Java full stack development and JavaScript application design, development ... , and testing experience. Hands on Java Programming Expertise (Core Java, J2EE) Hands on Building Restful Services Good experience with web application development<…',
    created: '2020-10-07T23:08:43Z',
    contract: 'full_time'
  },
  {
    title: 'Info Systems Security Engineer - Software Developer',
    company: 'Lockheed Martin',
    maxSalary: null,
    minSalary: null,
    locationName: 'Goleta, Santa Barbara County',
    area: ['US', 'California', 'Santa Barbara County', 'Goleta'],
    longitude: -118.5791598,
    latitude: 34.4523058,
    url:
      'https://www.adzuna.com/land/ad/1824271266?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=E5EA2CA2C374DF2AF3B19DA35025F68AC1271737',
    description:
      '...  required during upgrade or migration. •Experience with web development using CSS, jQuery, Bootstrap, AJAX, HTML, Javascript. •Experience working with diverse customers to scope ...  equipment. •Our database team builds modern web-based tools to make data meaningful and help our colleagues excel at their jobs. •Candidate will build and maintain applications to support ...',
    created: '2020-11-15T06:27:33Z'
  },
  {
    title: 'Front End Software Engineer - JavaScript, React Native, GCP',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1856768817?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=42F1B08C4AB01E7E766ABC036C26A2B9E07676F5',
    description:
      'If you are a Front End Software Engineer with experience, please read onWhat You Will Be Doing - Architecting and developing new product features as well as supporting current ...  ones in our React Native mobile application - Ensuring high code quality and low technical debt among the engineering team - Code primarily in Javascript - Work with technologies ...',
    created: '2020-12-02T02:30:31Z'
  },
  {
    title: 'Web Developer',
    company: 'ATAC Corp.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9427762,
    latitude: 37.37066069999999,
    url:
      'https://www.adzuna.com/land/ad/1853817577?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=143EEA7759D0DBE2CEC774BEB94D0995ABE83745',
    description:
      'WEB DEVELOPER The Position ATAC has an opening for a full-time Web Developer/Designer at its Headquarters in Santa Clara, California or one of our remote offices in San Diego ... , California or Washington, DC. The successful candidate will participate in projects to develop and maintain web applications for different divisions of ATAC and provide corporate marketing ...',
    created: '2020-12-01T01:08:32Z'
  },
  {
    title: 'Web Developer',
    company: 'ATAC Corp.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -121.9427762,
    latitude: 37.37066069999999,
    url:
      'https://www.adzuna.com/land/ad/1853821809?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=042040AEDAD988E73DDF65150C4C18A9D8CB2740',
    description:
      'WEB DEVELOPER The Position ATAC has an opening for a full-time Web Developer/Designer at its Headquarters in Santa Clara, California or in one of our remote offices in San Diego ... , California or Washington, DC. The successful candidate will participate in projects to develop and maintain web applications for different divisions of ATAC and provide corporate marketing ...',
    created: '2020-12-01T01:09:15Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'Capital Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.2536673,
    latitude: 34.0533722,
    url:
      'https://www.adzuna.com/land/ad/1820833579?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=56DBB6688A9C7FDF06DE0F44864CD0D85107099F',
    description:
      ', and Governance factors. ESG is a core tenet of our thematic investing. We are looking for Software Development Engineers to build products that streamline Investment Research and Portfolio ...  decisions. With an emphasis on Full Stack Engineering, you will collaborate with Product Managers on feature definition and ultimately, execute on launching data intensive features ...',
    created: '2020-11-13T17:31:50Z'
  },
  {
    title: 'Java Full Stack Lead',
    company: 'itswarmllc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1836138473?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=81E5BBD229985F383FDDC0FDD23B7B6D97D02DB8',
    description:
      'Job Description Java Full Stack Leads with 10-12 years Location: SFO, California ? ? Responsibilities Provide architectural solutions/designs to project execution teams ... , and subject matter experts to understand current and future operational data analysis goals. Recommend modern technology stacks to meet those goals and help engineering teams migrate towards ...',
    created: '2020-11-20T21:14:41Z'
  },
  {
    title: 'Sr Full Stack Software Engineer(Remote)',
    company: 'TechStyle Fashion Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -118.3862384,
    latitude: 33.904129,
    url:
      'https://www.adzuna.com/land/ad/1838867746?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=9862906FB2620E4B3AC484048F33A39397340E4F',
    description:
      'Job_Description TechStyle Fashion Group is currently looking for a Remote Senior Full Stack Software Engineer. How Do You Fit In? As the Senior Full Stack Software Engineer, you ... . Responsibilities  Analyze, Design, Develop, Deploy and Maintain components written in ColdFusion and Java with multiple web servers on AWS <stron…',
    created: '2020-11-22T14:59:17Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'Intelliswift Software Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -121.9965417,
    latitude: 37.5237481,
    url:
      'https://www.adzuna.com/land/ad/1841084109?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=73B75E5B431B8CE0D87BD826F92198041308C215',
    description:
      '...  Architecture Web technologies like HTML, CSS, JavaScript, and jQuery, Angular Markup languages like XML and JSON Relational databases, SQL, ORM(Object relational mapper) Intelliswift Software ...',
    created: '2020-11-23T21:09:54Z'
  },
  {
    title: 'Sr. Full Stack Developer - Angular 7',
    company: 'Careerbuilder US',
    maxSalary: null,
    minSalary: null,
    locationName: 'Woodland Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Woodland Hills'],
    longitude: -118.466431,
    latitude: 34.0530027,
    url:
      'https://www.adzuna.com/land/ad/1801698408?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=70AAC72989A45E7D9EE6982844101A8B265441A3',
    description:
      'Sr. Full Stack Developer - Angular 7 Pay:$72.85 - Max Rate on W2 only 4 months Woodland Hills, CA JOB SUMMARY: • Develop API’s using Java which are consumed for Web and Mobile ...  experience in Web development and Web technologies. • Exhibit a good understanding of modern JavaScript SPA frameworks like Angular 7 (ideally) or Angular best pract…',
    created: '2020-11-03T21:57:29Z'
  },
  {
    title: 'Full Stack Principal Engineer',
    company: 'City National Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.3379534,
    latitude: 34.15254400000001,
    url:
      'https://www.adzuna.com/land/ad/1813538789?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=CDBC959910F6FBA7827735E7AB0240956E813507',
    description:
      '. WHAT DO YOU NEED TO SUCCEED Must-Have Bachelors Degree Computer Science, MIS / CIS, STEM related major preferred orequivalent experience Minimum of 12 years of software development ...  coordinating team efforts in a project or operations environment Skills and Knowledge 8 years of experience in JavaScript development frameworks and tooling: Angular, React, VueJS, & Gulp ...',
    created: '2020-11-10T03:28:15Z'
  },
  {
    title: 'Sr. Full Stack Software Engineer, DevSecOps',
    company: 'Odesus',
    maxSalary: null,
    minSalary: null,
    locationName: 'Rancho Park, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Rancho Park'],
    longitude: -118.4620097,
    latitude: 34.04793770000001,
    url:
      'https://www.adzuna.com/land/ad/1842998059?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=06E3F09EBFB78B9199FD7B4DFD6A468AE0FE7BBA',
    description:
      '...  engineers in the company Mentor software engineers by providing coaching and educational opportunities WHAT YOU WILL NEED 7-10 years of experience Highly proficient developer in Python ... , JavaScript and GO as well as in multiple scripting languages (e.g. bash, PowerShell, etc.) with experience on API development and integration Strong experience using Amazon Web Service…',
    created: '2020-11-24T20:59:21Z',
    contract: 'full_time'
  },
  {
    title: 'Software Engineer Intern, Full Stack (Summer 2021)',
    company: 'Poshmark',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.2545332,
    latitude: 37.52115149999999,
    url:
      'https://www.adzuna.com/land/ad/1854703362?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4598378012B9F19912461649E52D34C0FB06D5D4',
    description:
      'Pursuing a CS degree (or related field) Aptitude for full-stack development - JavaScript, CSS, C++, HTML, Python, Ruby, Rails, Java, Django, jQuery, MongoDB – we use a variety ...  with development in a high traffic, highly scaled environment is a plus Exposure to ElasticSearch, RabbitMQ, Linux Experience with NoSQL data solutions is a plus User-oriented focus and passion ...',
    created: '2020-12-01T07:49:40Z'
  },
  {
    title: 'Full Stack Developer, Confluence',
    company: 'Atlassian',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.0616833,
    latitude: 37.3878267,
    url:
      'https://www.adzuna.com/land/ad/1820839387?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=5DCDA9E66E1742769A4F84A45A6F0542D3DBCC84',
    description:
      "...  Principal Front End Software Engineer to join the Confluence team in Mountain View. You'll be directly impacting the customer experience through the design and implementation of new ...  in consultingExperience with large scale distributed systems and event-driven architecturesPractical knowledge of agile software development methodologies (e.g., XP, scrum)More about our benefitsWhether ...",
    created: '2020-11-13T17:32:58Z'
  },
  {
    title: 'Sr. Full Stack Engineer (Remote)',
    company: 'Genzeon',
    maxSalary: null,
    minSalary: null,
    locationName: 'California, US',
    area: ['US', 'California'],
    longitude: -75.6615209,
    latitude: 40.0516015,
    url:
      'https://www.adzuna.com/land/ad/1791049738?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=D88F631213EDB0EFA0A961FBD0065C934105367F',
    description:
      'Job Title Sr. Full Stack Engineer Location Remote California Duration Permanent Full Time Responsibilities Create clean, maintainable, and scalable, and well-tested code Create ...  experience building Enterprise level applications in Ruby on Rails Experience with D3.js or another data visualization JavaScript library Experience with Node, Ruby, and other full-stack ...',
    created: '2020-10-29T16:44:14Z',
    contract: 'full_time'
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Zensar Technologies',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.9200426,
    latitude: 37.3747119,
    url:
      'https://www.adzuna.com/land/ad/1820829944?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=2E3EE7403852C3DBDB835E5B6D2F9501CE7F09B5',
    description:
      'DescriptionNeed strong Java Full Stack Developer with 6-8 years of hands onexperience on below:Struts, Spring, Hibernate WebServices - SOAP WebServices - Restful Backbone ...  / Marionette / Angular / React JavaScript / AJAX Jquery Oracle PL/SQLAwareness of TIBCO Microservices Kafka Rabbit MQ ...',
    created: '2020-11-13T12:30:50Z'
  },
  {
    title: 'Sr. Full Stack Engineer (Remote)',
    company: 'Everest Consultants, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.9564889,
    latitude: 37.5604222,
    url:
      'https://www.adzuna.com/land/ad/1814027801?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=8F428C672EF64B546A4A66A3B3785257DCE2BAF4',
    description:
      'Title Sr. Full stack engineer Location Remote Duration FTE No visa sponsorship available at this timeno C2C or third-parties Responsibilities " Create clean, maintainable ...  applications in Ruby on Rails " Experience with D3.js or another data visualization JavaScript library " Experience with Node, Ruby, and other full-stack technologies is also important ...',
    created: '2020-11-10T12:19:50Z',
    contract: 'full_time'
  },
  {
    title: 'Staff Software Engineer, Full Stack - Charging',
    company: 'Rivian Automotive',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1381326,
    latitude: 37.4194985,
    url:
      'https://www.adzuna.com/land/ad/1820834447?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=0D060601939F71D76548BED6A8BB975117ACD87D',
    description:
      ', CA /Software Engineering, Digital Commerce – Digital Commerce /Full Time ...  Charging infrastructure that will allow our customers and owners to acquire charging resources for their vehicles. We are seeking highly passionate and customer focused Full Stack Staff ...',
    created: '2020-11-13T12:32:08Z'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.1415651,
    latitude: 37.4213128,
    url:
      'https://www.adzuna.com/land/ad/1861634415?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=3F0FF934250A33591ADA80E137B9C6D9FF9E1A79',
    description:
      '...  complex business tasks working closely with fellow engineers, marketing and CRM team members, designers, and product managers. Preferred Qualifications: ● Developed web design skills ...  and user experience fundamentals knowledge. ● Familiarity with the full web stack, including protocols and web server optimization techniques. Robert Half Technology matches IT ...',
    created: '2020-12-04T08:18:06Z'
  },
  {
    title: 'Full Stack Engineer - 100% REMOTE',
    company: 'APC',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4022228,
    latitude: 37.7963509,
    url:
      'https://www.adzuna.com/land/ad/1853811707?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=8AB2FA386D9E04A8F215DCF206528F8A1E1D3A18',
    description:
      'Looking for best in class Full Stack Engineers We are helping to build a world class development team to enrich the lives of many thousands of people Our client is actively ...  seeking a talented 100% REMOTE Full Stack Engineer. This is a full-time permanent opportunity with our client. Perks Package: Can live/sit anywhere in the U.S. (there is no physical ...',
    created: '2020-12-01T01:07:12Z'
  },
  {
    title: 'Web Developer, Open Source',
    company: 'Cloudtrend',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.885434,
    latitude: 37.390494,
    url:
      'https://www.adzuna.com/land/ad/1820833901?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=D026B4DEBCD27F7FA4E6065F784D530F5512B736',
    description:
      '...  / equivalent or higher-1 year of front end development at a high traffic consumer web site and 4 years of software development experience-Strong understanding of the MVC design pattern ...  and minimum 1 year of experience using open source tech stack (e.g. Ruby on Rails, Python) in a commercial application and web site development-Experience with client-side web</…',
    created: '2020-11-13T12:31:57Z'
  },
  {
    title: 'Sr. Full-Stack Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1751054065?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=D34A6D5D31F74C1D467199A585BAD6925CB9AAD4',
    description:
      '...  resume.Salary: $110,000 - $140,000A bit about us:Based in Denver, CO, we are actively looking to hire a Senior Full-Stack Software Engineer. This position will play an integral part ...  on the team to design, develop, test, debug and maintain software code for our high performance business applications. Our platform is built using JavaScript, Node.js, Go, AngularJS, React…',
    created: '2020-10-08T22:06:42Z'
  },
  {
    title: 'Senior Full Stack Java Engineer (Remote)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1856769231?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=08E016288B0912D14D43E83190A7535E84F64F5C',
    description:
      '...  software - Writing services  APIs using core Java libraries, components and APIs - Participating in our dev team sprints as a full-stack developer - Building out features that also ...  integrate w/ our Javascript front-end (Angular / VUE / React)What You Need for this Position - 8 years software development - Java (Spring) - JavaScript - REACT is preferre…',
    created: '2020-12-02T02:30:46Z'
  },
  {
    title: 'Software Developer',
    company: 'Kforce',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.959576,
    latitude: 37.772804,
    url:
      'https://www.adzuna.com/land/ad/1823086203?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=8C17BA51C71DAFA775490449A7A530D3BBDB59C6',
    description:
      '...  Experience influencing software engineering best practices within your team Hands on experience with JavaScript frameworks Knowledge of Accessibility and Web Standards Experience with both ... DescriptionKforce has a client in search of a Software Developer in San Francisco, CA.Summary:Front-end web development, also known as client-side developmen…',
    created: '2020-11-14T12:20:46Z'
  },
  {
    title: 'Full stack Engineer with React',
    company: 'Avanciers LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Menlo Park, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Menlo Park'],
    longitude: -79.60343000000002,
    latitude: 43.6574069,
    url:
      'https://www.adzuna.com/land/ad/1792942817?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=6E7686412FC8ECB4080249F42EB644AFA1A41747',
    description:
      '...  members. Collaborates with other teams REQUIRED EDUCATION AND EXPERIENCE Must have 5 years of commercial Web Full Stack development experience Strong Javascript skills 3 years ... Location Menlo Park, CA Minimum 10 Years exp required Job Tittle- Full Stack ndash Senior Engineer Job Location Menlo Park, CA Responsibilities Obtains tasks from the project lea…',
    created: '2020-10-30T16:42:13Z'
  },
  {
    title: 'Remote Senior Full Stack Developer (Angular)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1855378320?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=30D1B358BD6FDF0D6CF3C2BC2F1B69655E7B1710',
    description:
      'Minimum Required Skills Angular, JavaScript, Java, Spring, REACT, TypeScript URGENTLY HIRING 100 Remote Job Title Senior Software Engineer Job Location 100 Remote - Must be in CA ... , TX, or AZ Salary 130k- 160k DOE, Benefits, etc. Requirements 5-10 years Software development - 70-80 Javascript (Angular) Java We are an innovative, and rapidly growing healthcare ...',
    created: '2020-12-01T14:01:45Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Java Full Stack Engineer',
    company: 'CLIECON SOLUTIONS',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pleasanton, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Pleasanton'],
    longitude: -74.468688,
    latitude: 40.342862,
    url:
      'https://www.adzuna.com/land/ad/1860227124?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=75D988946CD3B4FA8CF137BDD4805487133E231A',
    description:
      '-commerce clients is looking for a Senior Java Full Stack Engineer will be part of a Team which develops, maintains, and supports the web-based and mobile tools that allow customers ... , Databases, Infrastructure, Cloud, Mobile and ERP based solutions projects.Position Senior Java Full Stack Engineer Location Pleasanton CA Duration 6 Months Job Description Lar…',
    created: '2020-12-03T16:54:10Z'
  },
  {
    title: 'Senior JavaScript Engineer (React Preferred)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Hillsborough, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Hillsborough'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1859954197?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=EBCC6682455D90D9B6E62DE3609F3B564A7AF9C9',
    description:
      'Minimum Required Skills JavaScript, REACT, Angular, Microservice architecture, APIs, Small Team, Scale, HTML, CSS, Middleware If you are a Senior JavaScript Engineer (React ...  - Vision - Relocation - 401kSo, if you are a Senior JavaScript Engineer (React Preferred) with experience, please apply today Applicants must be authorized to work in the U.S.Please apply ...',
    created: '2020-12-03T12:09:48Z',
    contract: 'full_time'
  },
  {
    title: 'Sr Full Stack Engineer (React preferred)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1858062381?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=AE2E30D862FA10CD0E4717D088920F8E1280872F',
    description:
      'Minimum Required Skills RESTful API Development, Python, RUBY, AWS, Scalability, JavaScript, REACT If you are a Senior Full-Stack Engineer with production JavaScript experience ...  (Paternity and Maternity) - Dog-Friendly OfficeSo, if you are a Sr Full Stack Engineer with 3 years of production experience, please apply today Applicants must be …',
    created: '2020-12-02T16:28:19Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pasadena, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Pasadena'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1858063002?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=BA2EB0C82C226E020374FC5961C8FD9D4F068E25',
    description:
      '...  solutions, which were set by our leaderships visionary and industry disrupting goals for robotics, and their impact on everyday life. Now we need a distinguished Sr. Full Stack Engineer ...  " Define, design, develop, and implement high quality software solutions in all layers of the application stack, from infrastructure to front-end " Collaborate with agile cross-functional ...',
    created: '2020-12-02T16:30:30Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Web Application Developer',
    company: 'CGS',
    maxSalary: null,
    minSalary: null,
    locationName: 'Newport Beach, Orange County',
    area: ['US', 'California', 'Orange County', 'Newport Beach'],
    longitude: -117.6646145,
    latitude: 33.5229658,
    url:
      'https://www.adzuna.com/land/ad/1853816905?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=75EBA272F93D2F71FA8184CDEA302B188035A659',
    description:
      '...  opportunity: Our Financial client is looking for a permanent Sr Full Stack Web Application Developer. You will be responsible for the design, development and delivery of new internally ...  Experience with HTML, CSS, and JavaScript and AJAX Experience with design patterns and OWASP security Experience with web service development Demonstrated experience wi…',
    created: '2020-12-01T01:08:26Z'
  },
  {
    title:
      'FrontEnd / JavaScript Software Engineer Artificial Intelligence Start-Up',
    company: 'MoTek Technologies',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -118.4686038,
    latitude: 34.4153818,
    url:
      'https://www.adzuna.com/land/ad/1820836265?se=IK7PUFI26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=99200BE87100A408E45F5B2B08CAAB3EBCDCF93F',
    description:
      'FrontEnd / JavaScript Software EngineerJob Description Stealth mode AI / ML start-up is looking for talented JavaScript Engineers for our Front-End team. In this position you’ll ...  in JavaScript for future use. ● Ensure the technical feasibility of UI/UX designs. ● Perform Code reviews and help the team write better software. Requirements Must be excellent ...',
    created: '2020-11-13T12:32:26Z'
  },
  {
    title: 'Full Stack Developer, Confluence',
    company: 'Atlassian',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.0616833,
    latitude: 37.3878267,
    url:
      'https://www.adzuna.com/land/ad/1820839387?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=5DCDA9E66E1742769A4F84A45A6F0542D3DBCC84',
    description:
      "...  Principal Front End Software Engineer to join the Confluence team in Mountain View. You'll be directly impacting the customer experience through the design and implementation of new ...  in consultingExperience with large scale distributed systems and event-driven architecturesPractical knowledge of agile software development methodologies (e.g., XP, scrum)More about our benefitsWhether ...",
    created: '2020-11-13T17:32:58Z'
  },
  {
    title: 'Sr. Full Stack Engineer (Remote)',
    company: 'Genzeon',
    maxSalary: null,
    minSalary: null,
    locationName: 'California, US',
    area: ['US', 'California'],
    longitude: -75.6615209,
    latitude: 40.0516015,
    url:
      'https://www.adzuna.com/land/ad/1791049738?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=D88F631213EDB0EFA0A961FBD0065C934105367F',
    description:
      'Job Title Sr. Full Stack Engineer Location Remote California Duration Permanent Full Time Responsibilities Create clean, maintainable, and scalable, and well-tested code Create ...  experience building Enterprise level applications in Ruby on Rails Experience with D3.js or another data visualization JavaScript library Experience with Node, Ruby, and other full-stack ...',
    created: '2020-10-29T16:44:14Z',
    contract: 'full_time'
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Zensar Technologies',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.9200426,
    latitude: 37.3747119,
    url:
      'https://www.adzuna.com/land/ad/1820829944?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=2E3EE7403852C3DBDB835E5B6D2F9501CE7F09B5',
    description:
      'DescriptionNeed strong Java Full Stack Developer with 6-8 years of hands onexperience on below:Struts, Spring, Hibernate WebServices - SOAP WebServices - Restful Backbone ...  / Marionette / Angular / React JavaScript / AJAX Jquery Oracle PL/SQLAwareness of TIBCO Microservices Kafka Rabbit MQ ...',
    created: '2020-11-13T12:30:50Z'
  },
  {
    title: 'Sr. Full Stack Engineer (Remote)',
    company: 'Everest Consultants, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.9564889,
    latitude: 37.5604222,
    url:
      'https://www.adzuna.com/land/ad/1814027801?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=8F428C672EF64B546A4A66A3B3785257DCE2BAF4',
    description:
      'Title Sr. Full stack engineer Location Remote Duration FTE No visa sponsorship available at this timeno C2C or third-parties Responsibilities " Create clean, maintainable ...  applications in Ruby on Rails " Experience with D3.js or another data visualization JavaScript library " Experience with Node, Ruby, and other full-stack technologies is also important ...',
    created: '2020-11-10T12:19:50Z',
    contract: 'full_time'
  },
  {
    title: 'Software Engineer Intern, Full Stack (Summer 2021)',
    company: 'Poshmark',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.2545332,
    latitude: 37.52115149999999,
    url:
      'https://www.adzuna.com/land/ad/1854703362?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=4598378012B9F19912461649E52D34C0FB06D5D4',
    description:
      'Pursuing a CS degree (or related field) Aptitude for full-stack development - JavaScript, CSS, C++, HTML, Python, Ruby, Rails, Java, Django, jQuery, MongoDB – we use a variety ...  with development in a high traffic, highly scaled environment is a plus Exposure to ElasticSearch, RabbitMQ, Linux Experience with NoSQL data solutions is a plus User-oriented focus and passion ...',
    created: '2020-12-01T07:49:40Z'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.1415651,
    latitude: 37.4213128,
    url:
      'https://www.adzuna.com/land/ad/1861634415?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=3F0FF934250A33591ADA80E137B9C6D9FF9E1A79',
    description:
      '...  complex business tasks working closely with fellow engineers, marketing and CRM team members, designers, and product managers. Preferred Qualifications: ● Developed web design skills ...  and user experience fundamentals knowledge. ● Familiarity with the full web stack, including protocols and web server optimization techniques. Robert Half Technology matches IT ...',
    created: '2020-12-04T08:18:06Z'
  },
  {
    title: 'Full Stack Engineer - 100% REMOTE',
    company: 'APC',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4022228,
    latitude: 37.7963509,
    url:
      'https://www.adzuna.com/land/ad/1853811707?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=8AB2FA386D9E04A8F215DCF206528F8A1E1D3A18',
    description:
      'Looking for best in class Full Stack Engineers We are helping to build a world class development team to enrich the lives of many thousands of people Our client is actively ...  seeking a talented 100% REMOTE Full Stack Engineer. This is a full-time permanent opportunity with our client. Perks Package: Can live/sit anywhere in the U.S. (there is no physical ...',
    created: '2020-12-01T01:07:12Z'
  },
  {
    title: 'Staff Software Engineer, Full Stack - Charging',
    company: 'Rivian Automotive',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1381326,
    latitude: 37.4194985,
    url:
      'https://www.adzuna.com/land/ad/1820834447?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=0D060601939F71D76548BED6A8BB975117ACD87D',
    description:
      ', CA /Software Engineering, Digital Commerce – Digital Commerce /Full Time ...  Charging infrastructure that will allow our customers and owners to acquire charging resources for their vehicles. We are seeking highly passionate and customer focused Full Stack Staff ...',
    created: '2020-11-13T12:32:08Z'
  },
  {
    title: 'Sr. Full-Stack Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.908791,
    latitude: 33.679521,
    url:
      'https://www.adzuna.com/land/ad/1751054065?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=D34A6D5D31F74C1D467199A585BAD6925CB9AAD4',
    description:
      '...  resume.Salary: $110,000 - $140,000A bit about us:Based in Denver, CO, we are actively looking to hire a Senior Full-Stack Software Engineer. This position will play an integral part ...  on the team to design, develop, test, debug and maintain software code for our high performance business applications. Our platform is built using JavaScript, Node.js, Go, AngularJS, React…',
    created: '2020-10-08T22:06:42Z'
  },
  {
    title: 'Senior Full Stack Java Engineer (Remote)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.75493,
    latitude: 33.751486,
    url:
      'https://www.adzuna.com/land/ad/1856769231?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=08E016288B0912D14D43E83190A7535E84F64F5C',
    description:
      '...  software - Writing services  APIs using core Java libraries, components and APIs - Participating in our dev team sprints as a full-stack developer - Building out features that also ...  integrate w/ our Javascript front-end (Angular / VUE / React)What You Need for this Position - 8 years software development - Java (Spring) - JavaScript - REACT is preferre…',
    created: '2020-12-02T02:30:46Z'
  },
  {
    title: 'Full stack Engineer with React',
    company: 'Avanciers LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Menlo Park, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Menlo Park'],
    longitude: -79.60343000000002,
    latitude: 43.6574069,
    url:
      'https://www.adzuna.com/land/ad/1792942817?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=6E7686412FC8ECB4080249F42EB644AFA1A41747',
    description:
      '...  members. Collaborates with other teams REQUIRED EDUCATION AND EXPERIENCE Must have 5 years of commercial Web Full Stack development experience Strong Javascript skills 3 years ... Location Menlo Park, CA Minimum 10 Years exp required Job Tittle- Full Stack ndash Senior Engineer Job Location Menlo Park, CA Responsibilities Obtains tasks from the project lea…',
    created: '2020-10-30T16:42:13Z'
  },
  {
    title: 'Web Developer, Open Source',
    company: 'Cloudtrend',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.885434,
    latitude: 37.390494,
    url:
      'https://www.adzuna.com/land/ad/1820833901?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=D026B4DEBCD27F7FA4E6065F784D530F5512B736',
    description:
      '...  / equivalent or higher-1 year of front end development at a high traffic consumer web site and 4 years of software development experience-Strong understanding of the MVC design pattern ...  and minimum 1 year of experience using open source tech stack (e.g. Ruby on Rails, Python) in a commercial application and web site development-Experience with client-side web</…',
    created: '2020-11-13T12:31:57Z'
  },
  {
    title: 'Senior Java Full Stack Engineer',
    company: 'CLIECON SOLUTIONS',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pleasanton, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Pleasanton'],
    longitude: -121.867646,
    latitude: 37.64362,
    url:
      'https://www.adzuna.com/land/ad/1860227124?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=75D988946CD3B4FA8CF137BDD4805487133E231A',
    description:
      '-commerce clients is looking for a Senior Java Full Stack Engineer will be part of a Team which develops, maintains, and supports the web-based and mobile tools that allow customers ... , Databases, Infrastructure, Cloud, Mobile and ERP based solutions projects.Position Senior Java Full Stack Engineer Location Pleasanton CA Duration 6 Months Job Description Lar…',
    created: '2020-12-03T16:54:10Z'
  },
  {
    title: 'Remote Senior Full Stack Developer (Angular)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1855378320?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=30D1B358BD6FDF0D6CF3C2BC2F1B69655E7B1710',
    description:
      'Minimum Required Skills Angular, JavaScript, Java, Spring, REACT, TypeScript URGENTLY HIRING 100 Remote Job Title Senior Software Engineer Job Location 100 Remote - Must be in CA ... , TX, or AZ Salary 130k- 160k DOE, Benefits, etc. Requirements 5-10 years Software development - 70-80 Javascript (Angular) Java We are an innovative, and rapidly growing healthcare ...',
    created: '2020-12-01T14:01:45Z',
    contract: 'full_time'
  },
  {
    title: 'Software Developer',
    company: 'Kforce',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -121.959576,
    latitude: 37.772804,
    url:
      'https://www.adzuna.com/land/ad/1823086203?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=8C17BA51C71DAFA775490449A7A530D3BBDB59C6',
    description:
      '...  Experience influencing software engineering best practices within your team Hands on experience with JavaScript frameworks Knowledge of Accessibility and Web Standards Experience with both ... DescriptionKforce has a client in search of a Software Developer in San Francisco, CA.Summary:Front-end web development, also known as client-side developmen…',
    created: '2020-11-14T12:20:46Z'
  },
  {
    title: 'Senior JavaScript Engineer (React Preferred)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Hillsborough, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Hillsborough'],
    longitude: -122.379416,
    latitude: 37.574103,
    url:
      'https://www.adzuna.com/land/ad/1859954197?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=EBCC6682455D90D9B6E62DE3609F3B564A7AF9C9',
    description:
      'Minimum Required Skills JavaScript, REACT, Angular, Microservice architecture, APIs, Small Team, Scale, HTML, CSS, Middleware If you are a Senior JavaScript Engineer (React ...  - Vision - Relocation - 401kSo, if you are a Senior JavaScript Engineer (React Preferred) with experience, please apply today Applicants must be authorized to work in the U.S.Please apply ...',
    created: '2020-12-03T12:09:48Z',
    contract: 'full_time'
  },
  {
    title: 'Sr Full Stack Engineer (React preferred)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1858062381?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=AE2E30D862FA10CD0E4717D088920F8E1280872F',
    description:
      'Minimum Required Skills RESTful API Development, Python, RUBY, AWS, Scalability, JavaScript, REACT If you are a Senior Full-Stack Engineer with production JavaScript experience ...  (Paternity and Maternity) - Dog-Friendly OfficeSo, if you are a Sr Full Stack Engineer with 3 years of production experience, please apply today Applicants must be …',
    created: '2020-12-02T16:28:19Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pasadena, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Pasadena'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1858063002?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BA2EB0C82C226E020374FC5961C8FD9D4F068E25',
    description:
      '...  solutions, which were set by our leaderships visionary and industry disrupting goals for robotics, and their impact on everyday life. Now we need a distinguished Sr. Full Stack Engineer ...  " Define, design, develop, and implement high quality software solutions in all layers of the application stack, from infrastructure to front-end " Collaborate with agile cross-functional ...',
    created: '2020-12-02T16:30:30Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Web Application Developer',
    company: 'CGS',
    maxSalary: null,
    minSalary: null,
    locationName: 'Newport Beach, Orange County',
    area: ['US', 'California', 'Orange County', 'Newport Beach'],
    longitude: -117.6646145,
    latitude: 33.5229658,
    url:
      'https://www.adzuna.com/land/ad/1853816905?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=75EBA272F93D2F71FA8184CDEA302B188035A659',
    description:
      '...  opportunity: Our Financial client is looking for a permanent Sr Full Stack Web Application Developer. You will be responsible for the design, development and delivery of new internally ...  Experience with HTML, CSS, and JavaScript and AJAX Experience with design patterns and OWASP security Experience with web service development Demonstrated experience wi…',
    created: '2020-12-01T01:08:26Z'
  },
  {
    title: '100%remote_JavaScript Technical Writer',
    company: 'TekLeaders, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -96.79425549999999,
    latitude: 33.02377,
    url:
      'https://www.adzuna.com/land/ad/1853575087?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=EFBED536A56DCA6E4ABEF59B4A3DBF35A92E9DF5',
    description:
      '...  with web development, plus if experience with development in React.js. Responsibilities Explore and play with JavaScript libraries and tools to understand them Connect with other ...  Sunnyvale, CA 100 remote Required skills JavaScript Technical Writing GITHub Description Heavily technical JavaScript developer with a focus on technical documentation and developer</…',
    created: '2020-11-30T22:01:36Z'
  },
  {
    title: 'Web / Front End Engineer',
    company: 'HELIX RE, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Berkeley, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Berkeley'],
    longitude: -122.2999,
    latitude: 37.8683671,
    url:
      'https://www.adzuna.com/land/ad/1836216878?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=37067C75DF1C552424701AD0455939506E8668A7',
    description:
      '...  technology to relentlessly reduce the time and cost to generate digital building models and to organize and unlock building data. The Role As a HELIX Web Front-End Engineer you will develop ...  standards of software development practices and security protections. If you are ready to own what you build, we would like to invite you to join an elite global team of engineers ...',
    created: '2020-11-20T22:22:07Z'
  },
  {
    title: 'Staff Full-Stack Software Engineer/Architect',
    company: 'Grail',
    maxSalary: null,
    minSalary: null,
    locationName: 'Menlo Park, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Menlo Park'],
    longitude: -122.14089,
    latitude: 37.477101,
    url:
      'https://www.adzuna.com/land/ad/1820831766?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=30FE28ED1F6D7847D6F0ED8F4B8503EE75313EEB',
    description:
      ', or similar technical field.8 years of relevant work experience designing, developing, testing, and maintaining full-stack applications and microservice ecosystems.Excellent knowledge of one ... , refactoring code, test-driven development, build infrastructure, optimizing software, debugging, building tools, and testing frameworks.Passion for software engineering, as well as <…',
    created: '2020-11-13T12:31:19Z'
  },
  {
    title: 'Full Stack Engineer (SaaS / React / Python)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030802?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=9143DF693CD455C3721F375047515C93CF7EC843',
    description:
      '-tenant app development (web-based)So if you are a Full Stack/Front End Engineer with Python  React experience, please apply today ... Pressing Need for a Senior Front End / Full Stack Engineer with expertise in SaaS applications Our renowned intercontinental company provides unmatched simulation software ...',
    created: '2020-12-01T02:25:15Z'
  },
  {
    title:
      'FrontEnd / JavaScript Software Engineer Artificial Intelligence Start-Up',
    company: 'MoTek Technologies',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -118.4686038,
    latitude: 34.4153818,
    url:
      'https://www.adzuna.com/land/ad/1820836265?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=99200BE87100A408E45F5B2B08CAAB3EBCDCF93F',
    description:
      'FrontEnd / JavaScript Software EngineerJob Description Stealth mode AI / ML start-up is looking for talented JavaScript Engineers for our Front-End team. In this position you’ll ...  in JavaScript for future use. ● Ensure the technical feasibility of UI/UX designs. ● Perform Code reviews and help the team write better software. Requirements Must be excellent ...',
    created: '2020-11-13T12:32:26Z'
  },
  {
    title: 'Technical Project Coordinator - Software - JIRA, JavaScript',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Gabriel, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'San Gabriel'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1861080470?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=1B5EAA109CB21C94A8FFC7964B21AEC88F065A72',
    description:
      '...  Need for this Position - JIRA - JavaScript - SDLC - Confluence - HTMLSo, if you are a Technical Project Coordinator - Software with experience, please apply today CyberCoders ... If you are a Technical Project Coordinator - Software with experience, please read onTop Reasons to Work with Us 1. Great Base 2. Flexibility 3. Growth for all employeesWhat You ...',
    created: '2020-12-04T02:36:17Z'
  },
  {
    title: 'Full Stack Engineer - Remote Position',
    company: 'Seasoned Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -122.405734,
    latitude: 37.788424,
    url:
      'https://www.adzuna.com/land/ad/1860601971?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BD98C9BF27A59E656E1654E52A2FAAF5DE4394E5',
    description:
      'Job Description We are currently seeking a Senior Full Stack Engineer to help elevate our mobile communications platform which is being used by the largest companies in the world ...  or another data visualization JavaScript library Experience with Node, Ruby, and other full-stack technologies is also important Strong knowledge in OOD, domain-driven design ...',
    created: '2020-12-03T21:15:04Z'
  },
  {
    title: 'Full Stack C# .NET',
    company: 'Apex Systems',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1841834835?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=FED9EE8B4F0B467194BB9C227A53920A74225D43',
    description:
      '...  with minimal direction. You should possess a keen knowledge, desire, and passion to produce usable and scalable web software using advanced development technologies. Coursework andor ...  experience with in web based development languages, specifically HTML, CSS, JavaScript, Typescript, jQuery, .NETC JavaScript Knowledge of design patterns Minimum of 11 years of solid ...',
    created: '2020-11-24T07:13:18Z',
    contract: 'full_time'
  },
  {
    title: 'Full-Stack Developer/Architect',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1858059664?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=418031A10A6193A6DA19B34E96B969D284EFEB1C',
    description:
      '.) - Experience designing UI assets (using Sketch, Photoshop, Illustrator, etc.) General Full Stack Skills - Must Haves - Mastery of Docker - Used to working in fast-paced, agile environments ...  read on What You Will Be Doing We are hiring a back end architect to help us build our autonomous satellite control software. We are building this to operate a diverse constellation ...',
    created: '2020-12-02T16:26:06Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Engineer-frontend focus',
    company: 'VortexLink',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.086585,
    latitude: 37.378535,
    url:
      'https://www.adzuna.com/land/ad/1749095709?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=E123C28D774B9A0A20F01F560AE2828749EDA9BD',
    description:
      'Job Title Full Stack Engineer Full-Time opportunity in Mountain View, CA Responsibilities Design and develop enterprise-facing UI and consumer-facing UI as well as REST ...  in Computer Science or a related field Experience developing UI and REST API backends for consumer-facing or other high-scale applications Experience with a Javascript UI framework like Vue ...',
    created: '2020-10-07T23:14:07Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack JavaScript Engineer',
    company: 'CyberCoders',
    maxSalary: 175000,
    minSalary: 130000,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.495155,
    latitude: 34.012638,
    url:
      'https://www.adzuna.com/land/ad/1860313195?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=CAB7E6FBF764F6881EEB7E9737C68DA3CCBC8984',
    description:
      '...  features What You Need for this Position The Full Stack JavaScript Engineer must have at least 5 years of experience and be familiar with: - Solid grasp of JavaScript development on front ... Full Stack JavaScript Engineer Are you a Full Stack JavaScript Engineer</…',
    created: '2020-12-03T17:49:09Z'
  },
  {
    title: 'Senior React/Node Full stack Engineer',
    company: 'Kforce Technology Staffing',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.214994,
    latitude: 32.873542,
    url:
      'https://www.adzuna.com/land/ad/1832400412?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=2E75908F77867645266D8D2A092C25C1BE895F98',
    description:
      '...  sprints and stay on schedule REQUIREMENTS B.S. in an engineering field (Computer, Software, Math, Physics, Electrical, etc.) 2-8 years of experience in full stack software development ... RESPONSIBILITIES Kforce has a client that is seeking a Senior ReactNode Full stack Engineer in San Diego, CA. Summary This role will join our clients ene…',
    created: '2020-11-19T00:40:04Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Software Engineer - .NET Full Stack',
    company: 'QTC Management',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Dimas, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'San Dimas'],
    longitude: -117.8245735,
    latitude: 34.1090729,
    url:
      'https://www.adzuna.com/land/ad/1804654702?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=AFF0C991E753D4AD07B99259B65A771286703BB9',
    description:
      ', programming techniques, and controls. Ensures software standards are met. Essential Duties and Responsibilities Design and develop web based and desktop applications through collaboration ... THIS IS A CONTRACT TO HIRE (3 MONTHS) OPPORTUNITYDescription Job Summary Plans, conducts, and coordinates software development activities. Designs, develops, documents, tests ...',
    created: '2020-11-05T13:54:17Z',
    contract: 'full_time'
  },
  {
    title: 'Mid Level Front End Developer/Software Engineer',
    company: 'Upward.net',
    maxSalary: null,
    minSalary: null,
    locationName: 'Newark, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Newark'],
    longitude: -122.04024,
    latitude: 37.529659,
    url:
      'https://www.adzuna.com/land/ad/1812998922?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=4BF6CFCA378356DE98C8E45B83C83E7A805CE73F',
    description:
      '...  practices & patterns for large scale applications in Javascript. Experience with version control systems. Nice to have : basic knowledge of full stack development. Bonus: experience ...  and with minimal guidance to complete development tasks Develop across the entire stack, including front-end, business-tier, and database-tier Develop increasing understan…',
    created: '2020-11-09T20:27:43Z'
  },
  {
    title: '100% REMOTE Full Stack Web Developer (Golang/React)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030806?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=80267904141AA87F320EE1B8343ED3BF07320B12',
    description:
      'Job Title: Senior Full Stack Web Developer Location: 100% REMOTE Salary Range: $150k - $175k Requirements: React.js, Golang, Typescript, Node.js, Docker, GCP Based in the DC area ... , we are one of the premier CyberSecurity Automation companies in the US. Due to growth, we are actively seeking to hire a Senior Full Stack Web Developer to join our team remotely…',
    created: '2020-12-01T02:25:16Z'
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Advantage Resourcing',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Lorenzo, Alameda County',
    area: ['US', 'California', 'Alameda County', 'San Lorenzo'],
    longitude: -122.150578,
    latitude: 37.688724,
    url:
      'https://www.adzuna.com/land/ad/1861631806?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=65CD3FFDCB18A790C5FE3C6A49C745BAE6836901',
    description:
      ', please. Job Title: Java Full Stack Developer Location: San Leandro, CA (remote initially) Key skills: Full Stack developer with experience on Java, JavaScript, Spring Boot, Test-driven ... Our Fortune 100 client seeks a Java Full Stack Developer to work remote initially (then onsite in San Leandro, CA once work from home is l…',
    created: '2020-12-04T08:17:25Z'
  },
  {
    title: 'Senior Full Stack Engineer (NodeJS and React)',
    company: 'Enexus Global',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pleasanton, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Pleasanton'],
    longitude: -121.9740343,
    latitude: 37.5505191,
    url:
      'https://www.adzuna.com/land/ad/1746592619?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=F508F2EA521102B29A4CA9EC9B6EFB329160B902',
    description:
      "...  stack. Knowledge of highly interactive web apps (HTML, JavaScript, Angular JS) Knowledge on how to integrate web applications with Restful API's Ownership of technical designs, code ...  on extensive work experience creating self-contained, reusable and testable modules and components. A deep understanding of web technology stack including extensive experience in Node JS ...",
    created: '2020-10-06T19:48:31Z'
  },
  {
    title: 'Senior Software Engineer (Full Stack/ Developer Tools)',
    company: 'SpaceX',
    maxSalary: null,
    minSalary: null,
    locationName: 'Hawthorne, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Hawthorne'],
    longitude: -118.3282793,
    latitude: 33.9206811,
    url:
      'https://www.adzuna.com/land/ad/1846850646?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=4C0006E349EE213248831904DBF1D5798F4AC0DC',
    description:
      ', math, or scientific discipline and 4 years in software engineering, OR 6 years in software engineering without a degree - 2 years of experience developing across a full stack: web ...  developing the technologies to make this possible, with the ultimate goal of enabling human life on Mars. Senior Software Engineer</st…',
    created: '2020-11-26T19:19:38Z'
  },
  {
    title: 'Senior Full Stack Software Engineer - Python, React, JS',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1859954226?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=2ABB9201BCBC0A728901C0736C2E3CDC88A3E2C1',
    description:
      '...  Microservice architecture So, if you are a Senior Full Stack Engineer with PythonReact experience, please apply today and email with the best timenumber to reach you Applicants must ... Minimum Required Skills Python, REACT, JavaScript, NPM Yarn, Writing packages (package.json), Transpiling code (Babel), Bundlers (one of Webpack Rollup Parcel), Software Design ...',
    created: '2020-12-03T12:09:51Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pasadena, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Pasadena'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1858934444?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=F9633749C6B3BB1E68D13B2EFED564AD7A37D817',
    description:
      '...  disrupting goals for robotics, and their impact on everyday life. Now we need a distinguished Sr. Full Stack Engineer to join our diverse and talented team of engineers that are at the fore ...  to deliver well-designed high-quality code on time " Strong knowledge/experience with full stack application development with particular emphasis on clean UX/UI " Demonstrable expe…',
    created: '2020-12-03T02:26:33Z'
  },
  {
    title: 'Sr. Full-Stack Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1853636525?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=16BF2FDAEE7C0347155C0D0983B44BB806D8D7E4',
    description:
      '...  110,000 - 140,000 A bit about us Based in Denver, CO, we are actively looking to hire a Senior Full-Stack Software Engineer. This position will play an integral part on the team ...  to design, develop, test, debug and maintain software code for our high performance business applications. Our platform is built using JavaScript, Node.js, Go, AngularJS, React ...',
    created: '2020-12-01T00:03:25Z',
    contract: 'full_time'
  },
  {
    title: 'Staff Software Engineer  Full-stack',
    company: 'Equinix',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -122.018391,
    latitude: 37.38953,
    url:
      'https://www.adzuna.com/land/ad/1762549820?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=47F4A8014068E46C2965A0E6B37FB2D451225E1B',
    description:
      "...  experience as Full stack engineer working on Frontend and Backend development.Bachelors degree in Computer Science and Engineering or equivalentProficient in Java,Java Script with a good ... Staff Software Engineer  Full-stackEquinix is one of the fastest growing data center companies, growing connectivity between clients worldwide. Thats why we're always …",
    created: '2020-10-14T13:19:49Z'
  },
  {
    title: 'Web Developer',
    company: 'Fortinet',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -122.0107919,
    latitude: 37.3750188,
    url:
      'https://www.adzuna.com/land/ad/1820833528?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=D006E8E248ADBE66634008DC43D120C52FF798EB',
    description:
      'Job Responsibilities:Design and develop user-facing features and build SinglePage Responsive Web Applications for Fortinet products;Collaborate with UI designers and backend ...  development teams to construct and implement the front-end interfaces with Angular;Familiar with Fortinet GUI framework Monet and Neutrino and use them to implement Fortinet products.Debug ...',
    created: '2020-11-13T12:31:49Z'
  },
  {
    title: 'Senior Full Stack Engineer (remote work)',
    company: 'Kofi Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -95.47364429999999,
    latitude: 29.7389963,
    url:
      'https://www.adzuna.com/land/ad/1858170241?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=8E3ECC4EEB8E8D0BAA7EF679079CF12FF0DCC4E7',
    description:
      'Senior Fullstack Engineer Cloud Computing - VC backed startup - 100% REMOTE This exciting full-time opportunity is for a Senior Fullstack Engineer, who is experienced ...  grade consumer facing web applications Strong expertise with Javascript frameworks such as ReactJS as well as coding custom Javascript solutions Experience in building backend services ...',
    created: '2020-12-02T18:02:57Z'
  },
  {
    title: '100% Remote Full Stack Developer - Apex, SalesForce, Node',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.240826,
    latitude: 37.463334,
    url:
      'https://www.adzuna.com/land/ad/1853835612?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BB9081781280499E14F1A31F7E36766284658ED3',
    description:
      'If you are a Full Stack Developer with experience, please read on Job Title: Sr. Full Stack Developer Salary: $100k - $130k Requirements: 3 years experience with: - Node - Apex ... ) - Health BenefitsSo, if you are a Full Stack Developer with experience, please apply today ...',
    created: '2020-12-01T01:11:39Z'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'East Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'East Irvine'],
    longitude: -117.8512757,
    latitude: 33.6776527,
    url:
      'https://www.adzuna.com/land/ad/1861643210?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=7F6E9FC0AF34FEEEEEB20A0119750597DAC4F32A',
    description:
      'Ref ID: 04810-9502777701 Classification: Software Developer Compensation: DOE Robert Half Technology is looking for a Backend Web Developer in Orange County, CA. The ideal ...  Experience with Javascript, Node.js, GraphQL APIs, REST APIs, Vue.js, ReactJS, JQuery Experience with relational databases and object oriented databases. Knowledge of the full stack: AWS ...',
    created: '2020-12-04T08:21:20Z'
  },
  {
    title: '(0675) Senior Full Stack Engineer',
    company: 'Roblox',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Mateo County, California',
    area: ['US', 'California', 'San Mateo County'],
    longitude: -122.355854,
    latitude: 37.511096,
    url:
      'https://www.adzuna.com/land/ad/1820828015?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=026AC5B7DE6BEB90AF5BF42EB00390651610E591',
    description:
      '...  about developing both UI and APIs that support them, the Account Security team might be the perfect place for you.You Are:A full stack engineer with 4 years of working experience ...  and the possibilities are endless.Senior Full Stack Engineer - Account IntegrityAs a Senior Full Stack Engineer on the Accounts Security tea…',
    created: '2020-11-13T12:30:17Z'
  },
  {
    title: 'Full Stack Engineer (Java or Golang) - AdTech',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1853137334?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=55CD37279FC4F8D7673282DFFE3F6D3FC84F9465',
    description:
      'Minimum Required Skills Full Stack Engineering, Java, Gogolang, Adtech experience, Software Testing, Javascript Frameworks Job Title Full Stack Engineer Job Location Santa Monica ...  best practices - Full-stack engineering experience with Golang or Java - Experience with web-based monetization…',
    created: '2020-11-30T18:33:44Z',
    contract: 'full_time'
  },
  {
    title: 'Web/Software PHP-Linux Developer',
    company: 'Gulfstream Strategic Placements',
    maxSalary: null,
    minSalary: null,
    locationName: 'Orange County, California',
    area: ['US', 'California', 'Orange County'],
    longitude: -117.810936,
    latitude: 33.699814,
    url:
      'https://www.adzuna.com/land/ad/1856276544?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=524312AFF1C26C3E87CC3ABB07D638DC51E3A0B3',
    description:
      '...  custom application integrations (API), company-specific programs, and help with web development. • Meet with multiple leadership groups to discuss needs and create resolutions to make ...  programming (T-SQL) and basic SSRS Reporting o Cross train with house developer o Ability to write basic stored procedures • Develop, Uphold, and Purchase software solutions for new projects ...',
    created: '2020-12-01T20:35:45Z'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1415651,
    latitude: 37.4213128,
    url:
      'https://www.adzuna.com/land/ad/1856593832?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BB65532D11B7BACF506C01D620AD67F35CBE643A',
    description:
      '...  engineers, marketing and CRM team members, designers, and product managers. Preferred Qualifications bull Developed web design skills and user experience fundamentals knowledge. bull ...  Familiarity with the full web stack, including protocols and web server optimization techniques. Robert Half Technology matches IT professionals with remote or on-site jobs on a temporary…',
    created: '2020-12-02T00:03:23Z'
  },
  {
    title: 'Java Software Engineer Spring / HTML / Javascript / Angular)',
    company: 'BlackRock',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1849511568?se=tE8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A2BE6F4F084E9023380DFA97E8A515C5D910838F',
    description:
      '...  innovation You_Have  3 years software engineering work experience on large scale software development and deployment experience  BA/BS in Computer Science from an accredited university ...  of the most advanced financial companies and also being part of a software development team responsible for next generation technology and solutions. You_Are  Curious and eager to learn new ...',
    created: '2020-11-28T11:01:43Z'
  },
  {
    title: 'Veterans Preferred - Full Stack Principal Engineer',
    company: 'City National Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.2542155,
    latitude: 34.1542018,
    url:
      'https://www.adzuna.com/land/ad/1854402434?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=DF63CFA147C4F2FE31A4940158AC826EB504C8C9',
    description:
      "...  Minimum of 6 years in full stack development for cloud solutions (Azure or AWS) - Azure preferred Skills and Knowledge 8 years of experience in JavaScript development frameworks ... Military Veterans are Encouraged to Apply. Job Details: FULL STACK PRINCIPAL ENGINEER WHAT IS THE OPPORTUNITY? WHAT IS THE OPPORTUNITY?At CNB, we're rapidly moving towards ...",
    created: '2020-12-01T09:14:20Z'
  },
  {
    title: 'Veterans Preferred - Full Stack Senior Engineer',
    company: 'City National Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.2542155,
    latitude: 34.1542018,
    url:
      'https://www.adzuna.com/land/ad/1854402292?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2F69C77894C92D71A64D38BA5FF36CA86A3864F2',
    description:
      "Military Veterans are Encouraged to Apply. Job Details: FULL STACK SENIOR ENGINEER WHAT IS THE OPPORTUNITY? WHAT IS THE OPPORTUNITY?At CNB, we're rapidly moving towards building ...  / design (SQL and NoSQL) And Minimum of 3 years coordinating team efforts in a project or operations environment Minimum of 2 years in full stack development for cloud solutions (Azure ...",
    created: '2020-12-01T09:14:18Z'
  },
  {
    title: 'Full Stack Engineer (SaaS / React / Python)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853155999?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=CA72AB75B43774C3CA1CC4067E181D049AAA2431',
    description:
      '...  () Multi-tenant app development (web-based)So if you are a Full StackFront End Engineer with Python  React experience, please apply today Applicants must be authorized to work ...  Highcharts Mapbox, AWS ElasticBeanstalk EC2 Lambda Pressing Need for a Senior Front End Full Stack Engineer with expertise in SaaS applications Our renowned intercontinental company ...',
    created: '2020-11-30T18:35:23Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Full Stack Java Engineer - AdTech',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.495155,
    latitude: 34.012638,
    url:
      'https://www.adzuna.com/land/ad/1854030498?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=F3142A8CB634F2ECABC6ED123F8C40DAB2C5A0B6',
    description:
      '...  and proper testing efforts. - Knowledge of JavaScript, HTML and CSS best practices - Full-stack engineering experience with Golang or Java - Experience with web-based monetization ... Job Title: Full Stack Engineer Job Location: Santa Monica, CA Salary: $100,000-$130,000 Requirements: Full Stack Engineering</strong…',
    created: '2020-12-01T02:25:00Z'
  },
  {
    title: 'Veterans Preferred - Full Stack Principal Engineer',
    company: 'City National Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.2542155,
    latitude: 34.1542018,
    url:
      'https://www.adzuna.com/land/ad/1815678526?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=B4215DA17D11CC4445A4DEB96EACBB58D51F723B',
    description:
      "Military Veterans are Encouraged to Apply. Job Details: FULL STACK PRINCIPAL ENGINEER WHAT IS THE OPPORTUNITY? WHAT IS THE OPPORTUNITY?At CNB, we're rapidly moving towards ...  Skills and Knowledge 8 years of experience in JavaScript development frameworks and tooling: Angular, React, VueJS, & Gulp, Grunt, Yarn, etc. 8 years of experience managing software ...",
    created: '2020-11-11T09:06:22Z'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'IMVU',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.224319,
    latitude: 37.487996,
    url:
      'https://www.adzuna.com/land/ad/1843644932?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=EE99307E0B31C9555CD4BB15FABBC704AD5BA2D2',
    description:
      'Senior Full Stack Software EngineerRedwood City, CAIMVU is seeking a full stack software engineer to join our FIRE Team. As part of the FIRE team you are responsible for our main ...  and the businessYou are comfortable working, learning and debugging in multiple languages such as Python, C++, Javascript and PHPBONUS POINTSExperience working with a RESTful LAMP…',
    created: '2020-11-25T04:16:00Z'
  },
  {
    title: 'Web Developer',
    company: 'Latitude, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.270863,
    latitude: 34.115582,
    url:
      'https://www.adzuna.com/land/ad/1834293255?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2CB2A76341A79A4584934B8DEDAC161E42C937DC',
    description:
      '...  on web developments and trends Qualifications: Previous experience in web development using WooCommerce Familiarity with HTML, Javascript , or other related languages Strong problem ... Job Description Responsibilities: Design, create, and modify websites Convert written, graphic, audio, and video components to compatible web formats Create back-end code ...',
    created: '2020-11-19T20:30:55Z'
  },
  {
    title: 'Sr. Full-Stack Engineer, Brand Savings',
    company: 'GoodRX',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.499925,
    latitude: 34.01847,
    url:
      'https://www.adzuna.com/land/ad/1775746110?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=A49B787E79282B540714827CCEFD51DA685A5EB3',
    description:
      '...  innovation happens when everyone has room at the table and the tools, resources, and opportunity to excel.About the RoleGoodRx is looking for an experienced Sr. Full-Stack Software Engineer ...  brand therapy options, based on their unique circumstances and needs.As our Sr. Full-Stack Software Engineer, you will be collaborating with the rest of our <stron…',
    created: '2020-10-21T12:46:43Z'
  },
  {
    title: 'Software Engineer - Developer Experience',
    company: 'PLAID',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.40611,
    latitude: 37.7761178,
    url:
      'https://www.adzuna.com/land/ad/1857101486?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=99F133ADA23D87478AFF07DB2C400F9D9A46F273',
    description:
      "...  with JavaScript, HTML, CSS, browsers, stylesheets, and mobile devicesExperience with full-stack development, including building server-side components (Python, Go, PHP, or Java)UI instincts ...  who depend on us and the millions of consumers who use their apps. We're looking for a Full-Stack Engineer with experience building internal and external self-serve products to hel…",
    created: '2020-12-02T04:34:14Z'
  },
  {
    title: 'Senior Full Stack Engineer (Remote $130k - $180k)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1858934643?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E0C4DAA0D515E041E3F0950561ECAD21B1FEACF9',
    description:
      '-stack developer - Building out features that also integrate w/ our Javascript front-end (Angular / VUE / React)What You Need for this Position - 8 years software development - Java ...  (Spring) - JavaScript - React, Angular, or Vue - Typescript - REST API - BS in CS (or related) is preferredSo, if you are a Senior Full Stack Engineer (Remote …',
    created: '2020-12-03T02:26:42Z'
  },
  {
    title: 'Lead Frontend Engineer/ Javascript / React / Redux',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1834514498?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=360F02D4968B0A216ECFEB0AED2D01D80902BB21',
    description:
      '. The team is looking for a Lead Front End developer, who is comfortable working in a startup environment and being the right hand for the Head of Engineering. This is a full-time position ...  working with innovative mind who continues make changes in the industry. Required Skills Experience Lead Frontend Engineer (Javascript, React, Redux) Passionate about webfrontend app ...',
    created: '2020-11-20T00:56:43Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Engineer',
    company: 'Vertical Mass',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.3953631,
    latitude: 34.0221568,
    url:
      'https://www.adzuna.com/land/ad/1856274791?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=14A1AE0DAF4E50AC61060649CB1FBF31DB7E4FE0',
    description:
      'Job Description Vertical Mass is searching for a world class Full Stack Engineer to join our team. This role is vital to designing and building systems to support our clients ...  BS in Computer Science or Related Field (MS preferred) Excellent technical, written, and verbal interpersonal communication skills 2 years of full stack engineering experience ...',
    created: '2020-12-01T20:35:32Z'
  },
  {
    title: 'Web Developer',
    company: 'Sterling Administration',
    maxSalary: null,
    minSalary: null,
    locationName: 'Oakland, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Oakland'],
    longitude: -122.214332,
    latitude: 37.772927,
    url:
      'https://www.adzuna.com/land/ad/1848548671?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2023E70AA77204B79E890468D78C98270908C523',
    description:
      "Job Description Sterling Administration is seeking a full-time Web Developer to work predominantly from a home office with occasional travel to our Downtown Oakland office ...  applications using AWS. Knowledge in Web Services (REST/SOAP), Multimedia Content Development, API's, Security Principles. Knowledge of the Adobe software suite (Photoshop, Dreamweaver ...",
    created: '2020-11-27T20:53:12Z'
  },
  {
    title: 'Senior Full Stack Java Engineer (Remote)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1855378118?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=354CDFFFACAC03601836E3AE21FE64F07417C11B',
    description:
      'Minimum Required Skills Java, Spring, JavaScript, REACT, TypeScript Title Senior Software Engineer Location 100 Remote - Must be based in California (Preferably Orange County LA ... ) Salary 130,000 - 180,000 Requirements 8 years software development with a heavy background in Java (Spring) and Javascript (preferably React) We are an innovative, and premier company ...',
    created: '2020-12-01T14:01:14Z',
    contract: 'full_time'
  },
  {
    title: '100% REMOTE Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1853839258?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=1A9CF4E325CDE42933B01BF14A60475E8F8724BC',
    description:
      '...  nowWhat You Need for this Position - Python - AWS - SQL - REACT - JavaScriptSo, if you are a 100% REMOTE Full Stack Engineer with experience, please apply today CyberCoders will consider ...  around We are currently looking for one senior-level engineer who has experience with Python, AWS, SQL and ideally with Javascript/React as well. We are looking to hire ASAP, so apply ...',
    created: '2020-12-01T01:12:17Z'
  },
  {
    title: 'Full-Stack Developer',
    company: 'Beacon Hill Staffing Group, LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sacramento County, California',
    area: ['US', 'California', 'Sacramento County'],
    longitude: -121.398884,
    latitude: 38.484098,
    url:
      'https://www.adzuna.com/land/ad/1825695093?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=630BD2B3417A6504B4705476544BA9ABC9408436',
    description:
      'W2 candidates only, C2C not permitted for this role REQUIRED SKILLS/EXPERIENCE: Strong understanding of JavaScript, Node, React, Python, OOP, and server-side development. All ...  and managing databases (i.e: MongoDB); Bonus Skills: - Linux/Ubuntu Someone who is a creative problem-solver, proactive, has done POCs, iterative development. Competitive market rate and full ...',
    created: '2020-11-15T22:09:24Z'
  },
  {
    title: 'Software Developer',
    company: 'Kforce Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Financial District, San Francisco',
    area: ['US', 'California', 'San Francisco', 'Financial District'],
    longitude: -122.399089,
    latitude: 37.797476,
    url:
      'https://www.adzuna.com/land/ad/1823263016?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=41A4AD124CE04611A12D4C34442FE1FDCCA3100F',
    description:
      ', and perceived performance Experience influencing software engineering best practices within your team Hands on experience with JavaScript frameworks Knowledge of Accessibility and Web ... RESPONSIBILITIES: Kforce has a client in search of a Software Developer in San Francisco, CA. Summary: Front-end web development, also known as client-side developme…',
    created: '2020-11-14T14:03:02Z'
  },
  {
    title:
      'Senior Software Engineer (Full Stack/ Developer Tools, Top Secret Clearance)',
    company: 'SpaceX',
    maxSalary: null,
    minSalary: null,
    locationName: 'Hawthorne, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Hawthorne'],
    longitude: -118.3282793,
    latitude: 33.9206811,
    url:
      'https://www.adzuna.com/land/ad/1820838239?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=CF12280BB3C8C42C42CA956CB169D174EDA5DF36',
    description:
      ', or scientific discipline and 4 years in software engineering, OR 6 years in software engineering without a degree2 years of experience developing across a full stack: web server, relational ...  developing the technologies to make this possible, with the ultimate goal of enabling human life on Mars.SENIOR SOFTWARE ENG…',
    created: '2020-11-13T12:32:46Z'
  },
  {
    title: 'Full Stack Engineer',
    company: 'Comcast',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -122.0206394,
    latitude: 37.3589267,
    url:
      'https://www.adzuna.com/land/ad/1859715689?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E3A27205F5D0FE9301F41FFF85F1D3353D4C85AD',
    description:
      '...  by range of microservices, developed in Go and Java running in EKS with other supporting technologies. As an Engineer working on this team, you will actively be working and collaborating ...  working in a Continuous Integration Continuous Delivery environment Solid understanding of Agile software development methodologies and experience as a member of a Scrum team Strong ...',
    created: '2020-12-03T10:10:55Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Developer (.NET, C#, .NET Core)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -116.979805,
    latitude: 32.942157,
    url:
      'https://www.adzuna.com/land/ad/1854030777?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=9243840A7C6D5832DE27E8E536F1B787B1A48A42',
    description:
      '...  development using JavaScript framework technology. Our Software Engineers are an integral part of our team responsible for the execution of design, construction, integration and maintenance ... If you are a Senior Full Stack Developer with (.NET, C#, .NET Core) experience, please read on Headquartered in the outskirts of downtown San Diego, CA, we are a leading innovator .…',
    created: '2020-12-01T02:25:14Z'
  },
  {
    title: 'Director, Software Engineering',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Belmont, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Belmont'],
    longitude: -122.2835618,
    latitude: 37.5583305,
    url:
      'https://www.adzuna.com/land/ad/1858311156?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=EF85BE28D6C2B3B0537694AD6E551BE390D555B5',
    description:
      ", coaching and growing highly performant software engineering teams 10 years' experience in a hands-on full stack software development (Java / Spring / Go, NodeJS, Javascript) 8 years ...  At least 5 years' building and leading full stack (Java / Spring / Go, NodeJS, Javascript) software engineering</st…",
    created: '2020-12-02T19:47:49Z'
  },
  {
    title: 'Sr Full Stack Developer',
    company: 'Insigma',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -77.3451917,
    latitude: 38.9476176,
    url:
      'https://www.adzuna.com/land/ad/1860395249?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=2C1265284A76ED0C24789374AFBABAF26C2A6215',
    description:
      '...  124. Position Sr Full Stack Developer Location San Francisco, CA or the Minneapolis Area Duration Full Time Permanent The client prefers Citizens, Holder EADs (BUT WILL SPONSOR ...  are 100 a Must have) More front end but need to have backend work too and be able to test (selenium) and deploy React and JavaScript are must haves Need API development experience (MUST ...',
    created: '2020-12-03T19:18:38Z',
    contract: 'full_time'
  },
  {
    title: 'Java Software Engineer Spring / HTML / Javascript / Angular)',
    company: 'Blackrock Asset Management',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3958435,
    latitude: 37.7890434,
    url:
      'https://www.adzuna.com/land/ad/1849509779?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=9666764DBF3A1A6C37A1EBE9E596FB2774C11357',
    description:
      'Java Software Engineer (J2EE / Spring / HTML / Javascript / Angular) | BlackRock Open MenuHide Menu Our Company and Sites Life at BlackRock Who We Are Inclusion and Diversity ...  East San Francisco Events Blog Search Jobs R Java Software Engineer (J2EE / Spring / HTML / Javascript / Angular) San Francisco, US Analytics & Risk now What we do BlackRock ...',
    created: '2020-11-28T11:01:17Z'
  },
  {
    title: 'Lead Software Engineer',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Piedmont, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Piedmont'],
    longitude: -122.20938,
    latitude: 37.8285,
    url:
      'https://www.adzuna.com/land/ad/1858311190?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=44D40A6367382B77D8B0DB8F173EFA43482616C5',
    description:
      "...  and a team of developers with deep experience in machine learning, distributed microservices, and full stack systems to create solutions that help meet regulatory needs for the company ...  Qualifications: Bachelor's Degree At least 5 years of experience in software engineering At least 1 year experience with Amazon Web Services (AWS), Microsoft Azure or public cloud service ...",
    created: '2020-12-02T19:47:50Z'
  },
  {
    title: 'Telecommute Senior Front End Javascript Engineer',
    company: 'VirtualVocations',
    maxSalary: null,
    minSalary: null,
    locationName: 'Downey, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Downey'],
    longitude: -123.0919241,
    latitude: 44.0277698,
    url:
      'https://www.adzuna.com/land/ad/1858168218?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=7AA7E22184B613C008C90305A347892A1B4B935C',
    description:
      '...  for this position include: 8 years of experience in Software Development as a Front-End Engineer Fluency in JavaScript and customer facing technologies (CSS, HTML) Experience with JavaScript ... A technical staffing agency has a current position open for a Telecommute Senior Front End Javascript Engineer. Must be able to: Create new Front-End architecture for a unified ...',
    created: '2020-12-02T18:02:43Z'
  },
  {
    title: 'Remote Sr Full Stack Developer - React, Node, Python, MySQL',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Mateo County, California',
    area: ['US', 'California', 'San Mateo County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030710?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=188EDED990DEBA24B9427A9CAE50E5EDA5AADE06',
    description:
      "If you are a Remote Senior Full Stack Developer with experience, please read on As a core team member of the Engineering Team, you'll be responsible for working on new products ...  & Python) - Excellent Javascript/Typescript/CSS skills- Developing new software applications, features, and distributed services that support a high-scale web application - Stay cur…",
    created: '2020-12-01T02:25:09Z'
  },
  {
    title: 'Senior Software Engineer (Full Stack / Generalist) - Crossinstall',
    company: 'Twitter',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4172004,
    latitude: 37.7764685,
    url:
      'https://www.adzuna.com/land/ad/1820838232?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=37136FDF85E91B9284D9D9E621B213C056E385EA',
    description:
      ', generalist software engineer, who can tackle any problems that come your wayYou possess deep knowledge in software development, including full stack design and implementation, You have ...  generalist software engineer to help us tackle a number of interesting challenges as part of our small but terrific engineering team at the company. Job d…',
    created: '2020-11-13T12:32:46Z'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -122.02194,
    latitude: 37.376099,
    url:
      'https://www.adzuna.com/land/ad/1861602928?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=10186BD9C66FE7DA176E94EB91852C31234CFBFB',
    description:
      '...  experience as Web Developer. You will be working with team of engineers. Experience in Html, CSS, JavaScript Nice to have experience in PHP, React, NodeJS. Having exposure to design ... Ref ID: 00420-9502777484 Classification: Web Developer Compensation: DOE Please send resumes to Trupti Deshpande. This is 1 to 2 years long term contract. Need 1 to 3 years ...',
    created: '2020-12-04T08:08:51Z'
  },
  {
    title: 'Web/UI Developer',
    company: 'Scadea Solutions Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pleasanton, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Pleasanton'],
    longitude: -74.6656331,
    latitude: 40.30719149999999,
    url:
      'https://www.adzuna.com/land/ad/1853575168?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5ED445138F11F9E8F35770D8D9DA4EAA8D813EB9',
    description:
      ', procedures and approval hierarchies. Qualifications 4-year degree (Software Engineering, Computer Science, Information Systems or related field). 8 years programming experience (JavaScript ...  and mobile space. Experience with Agile Scrum full software development lifecycle and related software development methodologies. Excellent organizational and troubles…',
    created: '2020-11-30T22:02:00Z'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1853136000?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=47B2C8E1CEF266DC1639DBECA3A358E6E13C0CBE',
    description:
      'Minimum Required Skills OpenID, Golang, Python, React.JS, Vue.js, TypeScript, Node.js, SAML, Kratos, Keycloak Job Title Senior Full Stack Web Developer Location 100 REMOTE Salary ...  in the US. Due to growth, we are actively seeking to hire a Senior Full Stack Web Developer to join our team remotely. The ideal candidate will have strong experience with Golang,…',
    created: '2020-11-30T18:33:37Z',
    contract: 'full_time'
  },
  {
    title: 'Senior JavaScript Developer (Vue is a plus)',
    company: 'Cunexus',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Rosa, Sonoma County',
    area: ['US', 'California', 'Sonoma County', 'Santa Rosa'],
    longitude: -122.7129078,
    latitude: 38.4401697,
    url:
      'https://www.adzuna.com/land/ad/1849507686?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5DFA61FEF0F044CF05FCD6E0563C2A5F2B9BB2A8',
    description:
      "Cunexus is a small, successful fintech startup building software that makes lending easier. We're looking for a strong developer with 5 years of modern JavaScript experience ...  or building financial software BENEFITS & COMPENSATION - This position offers a competitive senior developer salary - We offer all the regular perks (i.e. medical, dental and vision) plus ...",
    created: '2020-11-28T11:01:02Z'
  },
  {
    title: 'Sr. Web Developer',
    company: 'Two95 International Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -75.0028839,
    latitude: 39.9202029,
    url:
      'https://www.adzuna.com/land/ad/1817180873?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=6CFE114967EA57FD41470944236D18DC304D3DF2',
    description:
      '-first web applications in object-oriented JavaScript, HTML, and CSS Strong front-end development skill and hands-on experience in the development of a web application. Well-architected ... , performant, and responsive sites using HTML, CSS, Javascript, Angular, or other related languages Strong expertise and experience in developing complex web applications wi…',
    created: '2020-11-11T20:55:11Z'
  },
  {
    title: 'Veterans Preferred - Full Stack Associate Engineer',
    company: 'City National Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.2542155,
    latitude: 34.1542018,
    url:
      'https://www.adzuna.com/land/ad/1824456530?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=4E5CD2F0F0FD315BB5B837CD3D32479359A11E08',
    description:
      "Military Veterans are Encouraged to Apply. Job Details: FULL STACK ASSOCIATE ENGINEER WHAT IS THE OPPORTUNITY? WHAT IS THE OPPORTUNITY?At CNB, we're rapidly moving towards ...  Experience or exposure in JavaScript development frameworks and tooling: Angular, React, VueJS, & Gulp, Grunt, Yarn, etc. Experience with UI/UX development & design systems: CSS, Web ...",
    created: '2020-11-15T09:10:10Z'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Textile Finance, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Textile Finance'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1843030085?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=AD2132E31B09D81FAEEF1365527105903512CBB9',
    description:
      'Senior Full Stack Engineer needed This Jobot Job is hosted by: Cody Gray Are you a fit? Easy Apply now by clicking the "Apply on company site" button and sending us your resume ...  to team members to ensure they understand the software architecture for solution delivery and aid in their technical development Determine and enforce overall architectural principles ...',
    created: '2020-11-24T22:01:58Z'
  },
  {
    title: 'Software Development Engineer job (REMOTE)',
    company: 'CivicMinds Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.9889489,
    latitude: 33.8024366,
    url:
      'https://www.adzuna.com/land/ad/1844590215?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E4AD4C42E3F1CF9233E37DCCC1CC77C4E3C2345C',
    description:
      '...  and achieve. The E-Commerce Software Development Engineer II is a full-stack development position. You will be a core member of a fast-paced engineering team, responsible for expanding ... JOB TITLE Software Development Engineer Position Overview At we are passionate about everything we do, and that means creating an envir…',
    created: '2020-11-25T17:05:40Z'
  },
  {
    title: 'Senior Java / Full Stack Engineer',
    company: 'Kforce Technology Staffing',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pleasanton, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Pleasanton'],
    longitude: -121.959576,
    latitude: 37.772804,
    url:
      'https://www.adzuna.com/land/ad/1858363543?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=D35F45B272C3FBBD6FAE16A1D5322E9008A0221A',
    description:
      'RESPONSIBILITIES Kforce is partnering with one of the largest e-commerce clients in the San Francisco Bay area that is looking for a Senior Java Full Stack Engineer. This role ...  development building Web Services in Java, Spring Boot, Elasticsearch, and Open source technologies At least 4 years UI programming experience with JavaScript, CSS, JSON At least 3 years ...',
    created: '2020-12-02T20:05:56Z'
  },
  {
    title: 'Full Stack Software Developer III - Java / ReactJS / SpringBoot',
    company: 'Sayva Solutions',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.22791,
    latitude: 32.869228,
    url:
      'https://www.adzuna.com/land/ad/1853575094?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E0602B68341F7E59F02EC5DC1A251F54A1240EBA',
    description:
      'Full Stack Software Developer III - Java ReactJS SpringBoot Category IT- Development Posted 10212020 San Diego, California Contract Description Job Title Senior Full Stack ...  Software Engineer About the Opportunity A client of ours in San Diego is looking for a Senior Full Stack Software <str…',
    created: '2020-11-30T22:01:36Z',
    contract: 'full_time'
  },
  {
    title: 'Director, Software Engineering',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Marin County, California',
    area: ['US', 'California', 'Marin County'],
    longitude: -122.4914782,
    latitude: 37.9555128,
    url:
      'https://www.adzuna.com/land/ad/1858310680?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=712E6C48D002029B837A42A1452D8027D45F4DA2',
    description:
      ", coaching and growing highly performant software engineering teams 10 years' experience in a hands-on full stack software development (Java / Spring / Go, NodeJS, Javascript) 8 years ...  At least 5 years' building and leading full stack (Java / Spring / Go, NodeJS, Javascript) software engineering</st…",
    created: '2020-12-02T19:47:40Z'
  },
  {
    title: 'Director, Software Engineering',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Montara, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Montara'],
    longitude: -122.506421,
    latitude: 37.540939,
    url:
      'https://www.adzuna.com/land/ad/1858310681?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=F3E0855689F2A18BE5506F0F13ABA617C8141FBC',
    description:
      ", coaching and growing highly performant software engineering teams 10 years' experience in a hands-on full stack software development (Java / Spring / Go, NodeJS, Javascript) 8 years ...  At least 5 years' building and leading full stack (Java / Spring / Go, NodeJS, Javascript) software engineering</st…",
    created: '2020-12-02T19:47:40Z'
  },
  {
    title: 'Lead Software Engineer',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'South San Francisco, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'South San Francisco'],
    longitude: -122.4183544,
    latitude: 37.6363309,
    url:
      'https://www.adzuna.com/land/ad/1858311188?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=069F302E5CDD50ED96B823D69E15058FE2954029',
    description:
      "...  and a team of developers with deep experience in machine learning, distributed microservices, and full stack systems to create solutions that help meet regulatory needs for the company ...  Qualifications: Bachelor's Degree At least 5 years of experience in software engineering At least 1 year experience with Amazon Web Services (AWS), Microsoft Azure or public cloud service ...",
    created: '2020-12-02T19:47:50Z'
  },
  {
    title: 'Lead Software Engineer',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Tenderloin, San Francisco',
    area: ['US', 'California', 'San Francisco', 'Tenderloin'],
    longitude: -122.4038104,
    latitude: 37.78440399999999,
    url:
      'https://www.adzuna.com/land/ad/1858311366?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=74A4E03EC7EAE38B60E4F012062507982A590F6F',
    description:
      "...  and a team of developers with deep experience in machine learning, distributed microservices, and full stack systems to create solutions that help meet regulatory needs for the company ...  Qualifications: Bachelor's Degree At least 5 years of experience in software engineering At least 1 year experience with Amazon Web Services (AWS), Microsoft Azure or public cloud service ...",
    created: '2020-12-02T19:47:56Z'
  },
  {
    title: 'FullStack Developer',
    company: 'Virtusa',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.885434,
    latitude: 37.390494,
    url:
      'https://www.adzuna.com/land/ad/1853823351?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=99D5B3D92A0452634E1949FA57A226F309256714',
    description:
      'We are in need of an experienced full-stack developer, based on a Java Spring backend. We are going to be doing a lot of heavy lifting around upgrading our Style Guide from ...  who can help us build this out. Required Skills 7 years of web application development experience using Java and JavaScript. 7 years of experience using REST APIs and Web Services. 5 ...',
    created: '2020-12-01T01:09:30Z'
  },
  {
    title: 'Software Engineer (Frontend), Web Presence',
    company: 'Square',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4180928,
    latitude: 37.7756531,
    url:
      'https://www.adzuna.com/land/ad/1845556793?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=36706A346B1DE7253055F28BBE0AE3FCF45BB690',
    description:
      '...  and better ways to help businesses succeed on their own terms—and we’re looking for people like you to help shape tomorrow at Square. Job Description The Web Presence engineering team ...  customer needs — today and tomorrow. As a Software Engineer for this team, you will be responsible for driving initiatives from inception through execution. You will be in the unique ...',
    created: '2020-11-26T04:29:03Z'
  },
  {
    title: 'Full-Stack Developer',
    company: 'Beacon Hill Staffing Group, LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sacramento County, California',
    area: ['US', 'California', 'Sacramento County'],
    longitude: -121.1826719,
    latitude: 38.66057199999999,
    url:
      'https://www.adzuna.com/land/ad/1828578076?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=BE0EFF41C4EA13ECBA9B87871A9CD56C35D6CCC2',
    description:
      'W2 candidates only, C2C not permitted for this roleREQUIRED SKILLS/EXPERIENCE:Strong understanding of JavaScript, Node, React, Python, OOP, and server-side development. All ...  databases (i.e: MongoDB); Bonus Skills: - Linux/Ubuntu Someone who is a creative problem-solver, proactive, has done POCs, iterative development. Competitive market rate and full medical ...',
    created: '2020-11-17T09:46:47Z'
  },
  {
    title: 'PHP/Wordpress Web Developer',
    company: 'Real Tested CBD',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.5664329,
    latitude: 34.2364136,
    url:
      'https://www.adzuna.com/land/ad/1844908912?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=93463693B9851DF3A5AD7AE40D752979509DA5FD',
    description:
      '...  experience in front-end/web development with HTML, CSS/SASS, JavaScript, React and Bootstrap, are a must 2 years previous experience in WordPress development with PHP, including WordPress ... Job Description Real Tested CBD is looking for a PHP/Wordpress web developer to join our team. Remote work is acceptable. Extensive Wordpress knowledge is a must, and eDirectory ...',
    created: '2020-11-25T20:52:53Z'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -121.8947708,
    latitude: 37.3353165,
    url:
      'https://www.adzuna.com/land/ad/1861611447?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=320C3D8DF1A4F857CF6840089A3F91B39DAB009E',
    description:
      'Ref ID: 00420-9502776429 Classification: Web Developer Compensation: DOE Please send resumes to Trupti Deshpande. As a Developer, you will collaborate with many, including fellow ...  developers, marketers, product managers, and engineers to produce quality digital design assets that drive meaningful, intuitive experiences for our customers. ● Update/modify existing ...',
    created: '2020-12-04T08:10:31Z'
  },
  {
    title: 'Software Engineer - C# / Angular',
    company: 'The Search Solutions, LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Beverly Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Beverly Hills'],
    longitude: -118.4857302,
    latitude: 34.0010797,
    url:
      'https://www.adzuna.com/land/ad/1842703562?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=9B0BC922296D584937D656F392043C10831EFEE3',
    description:
      'As a Senior Software Engineer you will build desktop and progressive mobile web applications for the as well as Platform tooling application. The application is an Angular based ... . Primary Duties Building front end apps and UX using JavaScript, CSS and Angular 67. Development of APIs, web services, microservices, and serverless back-end components. Using SQL ...',
    created: '2020-11-24T17:25:55Z',
    contract: 'full_time'
  },
  {
    title: 'Sr. Full Stack Engineer - Creative Cloud',
    company: 'Adobe Systems',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4019811,
    latitude: 37.7713586,
    url:
      'https://www.adzuna.com/land/ad/1820833877?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=AD9D4FFBBAC7B0C094B3F3DE7E73EFBE82115CE3',
    description:
      '...  years of software engineering experience, including a solid understanding of standard data structures and algorithmsFull stack development experienceA minimum of five years proven ...  opportunity. We realize that new ideas can come from everywhere in the organization, and we know the next big idea could be yoursWe are looking for a Sr. Full Stack Engineer to join our ...',
    created: '2020-11-13T12:31:56Z'
  },
  {
    title: 'Telecommute Senior Full Stack Engineer',
    company: 'VirtualVocations',
    maxSalary: null,
    minSalary: null,
    locationName: 'Van Nuys, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Van Nuys'],
    longitude: -123.0919241,
    latitude: 44.0277698,
    url:
      'https://www.adzuna.com/land/ad/1860780502?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=D1913C3D2BFBBF6A7BF3EAEE6EF407CC2CBF485A',
    description:
      'A company providing a legal funding software platform is filling a position for a Telecommute Senior Full Stack Engineer. Core Responsibilities Include: Leading frontend ...  development and architecture Counseling and mentoring junior engineers Improving the team through quality code reviews Skills and Requirements Include: 5 yrs engineering experience Fluency ...',
    created: '2020-12-04T00:08:58Z'
  },
  {
    title: 'DotNet Full Stack Developer with ReactJS - Remote / Telecommute',
    company: 'Cynet Systems',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -74.0139722,
    latitude: 40.702891,
    url:
      'https://www.adzuna.com/land/ad/1853155473?se=bKkhyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=08292B6C97A67B8C72ACB50718A5E44DB1C3A31F',
    description:
      'We are looking for DotNet Full Stack Developer with ReactJS - Remote Telecommute for our client in San Francisco, CA Job Title DotNet Full Stack Developer with ReactJS - Remote ...  Telecommute Job Location San Francisco, CA Job Type Contract Job Description Expertise in Web development technologies specifically Reacts framework with Redux, JavaScript</…',
    created: '2020-11-30T18:35:19Z'
  },
  {
    title: 'Sr. Full Stack Engineer (Angular)',
    company: 'Nisum US',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3996712,
    latitude: 37.7893453,
    url:
      'https://www.adzuna.com/land/ad/1820841472?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=F528C1B0EF474468208DF5C0444DE412F3674587',
    description:
      '...  and inclusion in the workplace.San Francisco, California /Nisum US – Software Development /Full Time ... , business agility, and custom software development. Founded in 2000 with the customer-centric motto “Building Success Together®,” Nisum has grown to over 1,400 professionals across ...',
    created: '2020-11-13T12:33:20Z'
  },
  {
    title: 'Sr. Full Stack Engineer (ReactJS)',
    company: 'Nisum US',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3996712,
    latitude: 37.7893453,
    url:
      'https://www.adzuna.com/land/ad/1820842543?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=741E873914E1800CE4E7CE54E3B9FE5EA2B8F299',
    description:
      '...  in the workplace.San Francisco, California /Nisum US – Software Development /Full Time ... , business agility, and custom software development. Founded in 2000 with the customer-centric motto “Building Success Together®,” Nisum has grown to over 1,400 professionals across ...',
    created: '2020-11-13T12:33:29Z'
  },
  {
    title: 'University Graduate Full Stack Web Developer, Adobe Document Cloud',
    company: 'Adobe',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.8938777,
    latitude: 37.3308855,
    url:
      'https://www.adzuna.com/land/ad/1844370235?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=EE2DB1E7C08F9594A9100477F3E423C44D793817',
    description:
      '...  Science & Engineering fields. - Deep foundational experience in Software Development preferably as a Full Stack web developer. - Experience with various JavaScript frameworks ...  is looking for a Software Engineer to help build our next generation of Adobe Sign service offerings. Adobe Sign is the fastest, the easiest way…',
    created: '2020-11-25T12:56:41Z'
  },
  {
    title: 'Full Stack Sr. Engineer',
    company: 'HANDLR',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4900743,
    latitude: 34.0172478,
    url:
      'https://www.adzuna.com/land/ad/1856267526?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=14F4C05FD087099165E23BD6038E71037BB740A6',
    description:
      "...  product/apps you've been a part of - At least 2 years of professional programming experience. - Full-stack web development experience. About Handlr Handlr handles busy people's lives ...  and build product features end-to-end in Javascript, Objective C, HTML, iOS, Android and Swift- Collaborate with product managers, designers, and business teams to identify and execute ...",
    created: '2020-12-01T20:34:34Z'
  },
  {
    title: 'Web Developer',
    company: 'SleepScore Labs',
    maxSalary: null,
    minSalary: null,
    locationName: 'Carlsbad, San Diego County',
    area: ['US', 'California', 'San Diego County', 'Carlsbad'],
    longitude: -117.2757957,
    latitude: 33.1385481,
    url:
      'https://www.adzuna.com/land/ad/1825119632?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=0E7DADB02100F9C4991A8DDCC48007CF17E1E4FC',
    description:
      ', MEAN/MERN, JAM Stack). Previous Digital Agency experience a plus. Agile Software Development experience or ScrumMaster certification. Job Details Industry Health, Wellness & Fitness ...  team. Requirements: Degree in Computer Science, Web Development, or other related field. 3 years of WordPress development experience. At least 1 years of Shopify development ...',
    created: '2020-11-15T13:11:15Z'
  },
  {
    title: 'Web Designer Developer',
    company: 'Together We Rise',
    maxSalary: null,
    minSalary: null,
    locationName: 'Brea, Orange County',
    area: ['US', 'California', 'Orange County', 'Brea'],
    longitude: -117.9056243,
    latitude: 33.9243125,
    url:
      'https://www.adzuna.com/land/ad/1853468882?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=A7C8104477E5A8DD9983B7504E20942ACF1A1359',
    description:
      '...  experience in responsive website and application development Proficiency in web services and use of open source frameworks Proficiency with PHP & MySQL Proficiency with CRM and/or e ...  websites/a website using standard HTML/CSS practices Constant communication with other colleagues in the organization to develop and deploy their content – and ensuring there is a clear ...',
    created: '2020-11-30T20:43:12Z'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Eliassen Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -118.3924396,
    latitude: 33.9009564,
    url:
      'https://www.adzuna.com/land/ad/1780442394?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=DA722E3B27FB2ADCBBC26DFC4E847D87A260CDD3',
    description:
      'We have an exciting opportunity for a Senior Full Stack Engineer with our industry-leading client in Pasedena, CA. This is a full-time, permanent opportunity, offering ...  and Webpack Thorough understanding of state management with MobX, Redux, or similar Preferred Qualifications Proponent of Agile software development and testing Familiar with Python web ...',
    created: '2020-10-23T20:11:18Z',
    contract: 'full_time'
  },
  {
    title: 'Director, Software Engineering',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Tenderloin, San Francisco',
    area: ['US', 'California', 'San Francisco', 'Tenderloin'],
    longitude: -122.4038104,
    latitude: 37.78440399999999,
    url:
      'https://www.adzuna.com/land/ad/1858310278?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4261506DBB14E1C10B4B7F044DE663D95A241263',
    description:
      ", coaching and growing highly performant software engineering teams 10 years' experience in a hands-on full stack software development (Java / Spring / Go, NodeJS, Javascript) 8 years ...  At least 5 years' building and leading full stack (Java / Spring / Go, NodeJS, Javascript) software engineering</st…",
    created: '2020-12-02T19:47:35Z'
  },
  {
    title: '.NET MVC Web Developer',
    company: 'DCS Corp',
    maxSalary: null,
    minSalary: null,
    locationName: 'Ridgecrest, Kern County',
    area: ['US', 'California', 'Kern County', 'Ridgecrest'],
    longitude: -117.6718832,
    latitude: 35.63676410000001,
    url:
      'https://www.adzuna.com/land/ad/1817324355?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=209BFE70FF2EEA2881CBA2A347225D0EC5DA1EC3',
    description:
      'DCS is seeking a Mid to Senior Level full-stack web application developer to support the F/A-18 & EA-18G Advanced Weapons Laboratory Integrated Project Team. The F/A-18 AWL has ... . The successful candidate will have experience with web application development in .NET MVC and ademonstrable understanding and experience applying software principles, theories, and concepts ...',
    created: '2020-11-11T23:09:17Z'
  },
  {
    title: 'UI Developer Web application',
    company: 'Embedded Resource Group, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -121.9323874,
    latitude: 37.2853668,
    url:
      'https://www.adzuna.com/land/ad/1833929584?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=10915C41DBFE5C042FC75CB4493369245F54E64E',
    description:
      '...  and understand how to create interfaces to hardware devices or instruments using C++ or C. Required bull Full stack web application development bull Javascript or PHP bull C or C++ bull ... UI Developer ndash Web application Design and develop a user interface for a web based application for a medical instrument. The application will be us…',
    created: '2020-11-19T17:05:12Z'
  },
  {
    title: '.Net full stack',
    company: 'ScrumLink, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pleasanton, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Pleasanton'],
    longitude: -121.867646,
    latitude: 37.64362,
    url:
      'https://www.adzuna.com/land/ad/1853575165?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=FCE9A4D6E7FA5824885A630CB70B4F15B0476063',
    description:
      '...  in .NET 4.0 or higher, C, ASP.NET httpasp.net , SQL Server, XML,WEB API development , Test Driven Development middot Full Stack .Net developer with Angular, React, JavaScript middot ... Title .Net full stack Duration- 18 Months Location- Pleasanton CA Job Description Qualifications Job Description looking for a Sr Developer</strong…',
    created: '2020-11-30T22:01:50Z'
  },
  {
    title: 'Lead Software Engineer',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Anselmo, Marin County',
    area: ['US', 'California', 'Marin County', 'San Anselmo'],
    longitude: -122.4914782,
    latitude: 37.9555128,
    url:
      'https://www.adzuna.com/land/ad/1858310856?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=A36F892EBA6033644F79556E1A17D58C090DA651',
    description:
      "...  and a team of developers with deep experience in machine learning, distributed microservices, and full stack systems to create solutions that help meet regulatory needs for the company ...  Qualifications: Bachelor's Degree At least 5 years of experience in software engineering At least 1 year experience with Amazon Web Services (AWS), Microsoft Azure or public cloud service ...",
    created: '2020-12-02T19:47:43Z'
  },
  {
    title: 'Lead Software Engineer',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Montara, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Montara'],
    longitude: -122.471026,
    latitude: 37.6704999,
    url:
      'https://www.adzuna.com/land/ad/1858311239?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4924AF9E39BB2AA7FEB124E11FF3960B8E0F4AD7',
    description:
      "...  and a team of developers with deep experience in machine learning, distributed microservices, and full stack systems to create solutions that help meet regulatory needs for the company ...  Qualifications: Bachelor's Degree At least 5 years of experience in software engineering At least 1 year experience with Amazon Web Services (AWS), Microsoft Azure or public cloud service ...",
    created: '2020-12-02T19:47:52Z'
  },
  {
    title: 'Senior Software Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.270863,
    latitude: 34.115582,
    url:
      'https://www.adzuna.com/land/ad/1858060003?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=53552206CF4CBA3F1167736AE0ADCAD6E4BB3B8C',
    description:
      '...  in software development - Experience with full tech stack, including web application, API, and database development - Strong experience with JavaScript and Golang - Experience with AWS ... Minimum Required Skills Lambda, Serverless, Web Application Development, JavaScript, API Design, Database Design, Golang, AWS, Docker I…',
    created: '2020-12-02T16:27:11Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Software Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1838436192?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=E082DB712ABE0EEF171060D5AE606A6EE541463B',
    description:
      'Los Angeles, CATelecommuting Available Compensation UnspecifiedPosted 11/23/2020If you are a Senior Software Engineer with full stack experience, please read on Headquartered ...  opportunityWhat You Need for this Position- BSCS or equivalent technical degree preferred- 4 years of professional experience in software development - Experience with full tech stack…',
    created: '2020-11-22T04:13:56Z'
  },
  {
    title: 'Full Stack Engineer (Java or Golang) - AdTech - REMOTE',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1853156575?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4EEA2278553E88272E9BD8F7B70FB6E24B9A768F',
    description:
      'Minimum Required Skills Full Stack Engineering, Java, Gogolang, Adtech experience, Software Testing, Javascript Frameworks Job Title Full Stack Engineer Job Location Santa Monica ...  experience in engineering, preferably in the ad industry - Full-stack engineering experience with Golang or Jav…',
    created: '2020-11-30T18:35:33Z',
    contract: 'full_time'
  },
  {
    title: 'FTE // Full stack developer',
    company: 'Insigma',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1860545581?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=722B0C6114F071E9A38D4EFB9E5B69F6C42BF9E3',
    description:
      '...  (BUT WILL SPONSOR for the right person with the right communication skills. They Must have a LinkedIn Page attached to their resume. The LinkedIn Page MUST have their picturehellip Sr Full Stack ...  Developer (70 Frontend and 30 Backend) ndash 9 plus years of experience Salaries DOB Duration Full Time Job Client Modis (Looking for people in the San Francisco, CA or the Minneapolis ...',
    created: '2020-12-03T20:35:50Z',
    contract: 'full_time'
  },
  {
    title: 'Software Development Manager',
    company: 'Project Frog',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4010763,
    latitude: 37.8003703,
    url:
      'https://www.adzuna.com/land/ad/1841017090?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=DE7CC230F4D4268B62719933467A3BF40CB242AF',
    description:
      '...  to hear from you Job Responsibilities Manage a team of software engineers (full stack, desktop, cloud backend) to deliver high quality working software on a regular cadence Work directly ...  feature requirements into software development plans using an agile process This is a hands-on position, full stack coding/development</stron…',
    created: '2020-11-23T20:51:06Z'
  },
  {
    title: 'Sr. Software Engineering Manager - (Web  Mobile App)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1858934250?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=92818FC43C38FDDE96378E42696FDAE41EB9900C',
    description:
      'Title: Sr Engineering Manager (Mobile  Web) Type: Temporarily Full Remote W/ Hybrid Schedule Planned for the Future Location: Redwood City, CA (Temporarily Remote) Compensation ... : 180 - 220k  bonus  equity Requirements: Front End Aplication development (Consumer-facing), JavaScript/HTML/CSS, React  React Native, leadership If you are experienced with Web ...',
    created: '2020-12-03T02:26:24Z'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Textile Finance, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Textile Finance'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1854782758?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=1BDF1491219450972BE59901C5036EA4F26A8FB4',
    description:
      'Senior Full Stack Engineer neededThis Jobot Job is hosted by: Cody GrayAre you a fit? Easy Apply now by clicking the "Apply on company site" button and sending us your resume.A ...  to team members to ensure they understand the software architecture for solution delivery and aid in their technical development Determine and enforce overall architectural principles ...',
    created: '2020-12-01T08:39:10Z'
  },
  {
    title: 'Software Development Engineer job (REMOTE)',
    company: 'CivicMinds, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego, San Diego County',
    area: ['US', 'California', 'San Diego County', 'San Diego'],
    longitude: -117.9889489,
    latitude: 33.8024366,
    url:
      'https://www.adzuna.com/land/ad/1852217119?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=07A9F6EC6A33CA7AF7845FB23F2C594A53354B40',
    description:
      '...  and achieve. The E-Commerce Software Development Engineer II is a full-stack development position. You will be a core member of a fast-paced engineering team, responsible for expanding ... JOB TITLE: Software Development Engineer Position Overview At we are passionate about everything we do, and that means creating an envi…',
    created: '2020-11-30T06:52:40Z'
  },
  {
    title: 'Sr. Software Engineer in Test',
    company: 'NextDeavor Services',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1856278309?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=02736B9D9D0BF8D12A801348506E103ED1EB7E96',
    description:
      'Job Description As a Software Engineer in Test on the Adobe CC Education team you will help build, maintain, and evolve automation systems on web front-end as well as services ...  automated tests for new & existing features, and implement new test automation frameworks for en-to-end testing of the full-stack web product. Skills: Minimum 5 years of experience ...',
    created: '2020-12-01T20:35:57Z'
  },
  {
    title: 'Cloud Full Stack Engineer',
    company: 'Bio Rad Laboratories, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Hercules, Contra Costa County',
    area: ['US', 'California', 'Contra Costa County', 'Hercules'],
    longitude: -122.2763955,
    latitude: 38.0206628,
    url:
      'https://www.adzuna.com/land/ad/1856329524?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=E818F9C24A0C4FCBF2A64957EB4240D02C0E94D4',
    description:
      '...  to succeed: for the last five years Bio-Rad has been named as one of the Bay Area’s “Best Places to Work." We are looking for an enthusiastic full stack software engineer who wants ...  Bachelor’s degree in computer science or a related technology discipline or equivalent experience. 3 years of experience in web application development. Proficient knowledge of a back-end ...',
    created: '2020-12-01T20:47:55Z'
  },
  {
    title: 'Senior Full Stack Engineer (Remote $130k - $180k)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1858059871?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=D923E05EE5720027342C935284F568291E14108E',
    description:
      '...  and APIs - Participating in our dev team sprints as a full-stack developer - Building out features that also integrate w our Javascript front-end (Angular VUE React) What You Need ...  for this Position - 8 years software development - Java (Spring) - JavaScript - React, Angular, or Vue - Typescript - REST API - BS in CS (or related) is preferredSo, if you are a Senior <st…',
    created: '2020-12-02T16:26:52Z',
    contract: 'full_time'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.8512757,
    latitude: 33.6776527,
    url:
      'https://www.adzuna.com/land/ad/1858766641?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=2B7D96FB4C6A5574AF368CE1C182E0B0229A513F',
    description:
      'Description Robert Half Technology is looking for a Backend Web Developer in Orange County, CA. The ideal candidate will have skills to code web applications from UI concept ...  with relational databases and object oriented databases. Knowledge of the full stack AWS, containerization, serverless architecture, relational databases, data modeling, business logic ...',
    created: '2020-12-03T00:20:42Z'
  },
  {
    title:
      'Staff/Sr. Staff Software Engineer – Full Stack Engineering, Infrastructure and Operations 2',
    company: 'Servicenow',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9626911,
    latitude: 37.3759167,
    url:
      'https://www.adzuna.com/land/ad/1820842235?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=A7AF4843324A2812F2EE81ADAECE718A5577E534',
    description:
      '...  platform on conversational interfaceDevelop across the full stack of Web technologies – Java, JavaScript, AngularJS, React, HTML, CSS, and SQLWork in a scrum-based agile development ... DescriptionJob Title: Staff/Sr. Staff Software Engineer – Full Stack Job Location: Santa Clara, CACompanyServiceNow is changing the way people work. With a…',
    created: '2020-11-13T12:33:26Z'
  },
  {
    title: 'Sr. Full Stack Java Engineer - AdTech - REMOTE',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1854030724?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=C46BC97B9BCB63BC7B3D688743396CE4F98CEAFD',
    description:
      'Job Title: Full Stack Engineer Job Location: Santa Monica, CA Salary: $100,000-$140,000 Requirements: Full Stack Engineering with Java or Golang, AdTech experience a big plus.Top ...  for this Position - CS degree and a minimum of 3 year of industry experience in engineering, preferably in the ad industry - Full-stack engineering</stron…',
    created: '2020-12-01T02:25:10Z'
  },
  {
    title: 'Software Engineering Manager',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1859954157?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4554A42A85EB03038F380FDB561DF8DDE00ED0BF',
    description:
      'Minimum Required Skills JavaScript, Responsive Web, AWS, Kubernetes, Docker, REACT, HTML, CSS, Front End, Node.js If you are a Software Engineering Manager with experience, please ...  years of hands-on full-stack technical development experience (more emphasis towards the front-end) - 2 years of engineering management experience - Strong development</s…',
    created: '2020-12-03T12:09:43Z',
    contract: 'full_time'
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7889637,
    latitude: 33.7308448,
    url:
      'https://www.adzuna.com/land/ad/1777578869?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=1389AFD26DF9850E8D1EB2DE559FC800A2598EED',
    description:
      ', JavaScript, C/C++) and open-source technologies (Linux, Spring) · Object-Oriented design experience PREFERRED QUALIFICATIONS · Software Engineer or Software Developer · Experience ...  can think big and loves building cool stuff. As a software development engineer, you’ll play a critical role in the future of how the development community int…',
    created: '2020-10-22T11:45:09Z'
  },
  {
    title: 'Staff/Senior Software Engineer - Full Stack',
    company: 'PayJoy',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1857944427?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4CF40023FCE418CDB53620AE28A011BCDFA123CD',
    description:
      ', and upgrade software  Provide mentorship and feedback to internal teams Requirements  You have 10 years of proven work experience as a Software Engineer, with 5 years in full-stack ...  to Assess, Improve, and Innovate. As a Full Stack Developer, you should be comfortable producing with both front-end and back-end coding languages, development</strong…',
    created: '2020-12-02T14:56:36Z'
  },
  {
    title: 'Director, Software Engineering',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Quentin, Marin County',
    area: ['US', 'California', 'Marin County', 'San Quentin'],
    longitude: -122.4914782,
    latitude: 37.9555128,
    url:
      'https://www.adzuna.com/land/ad/1858311150?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=F70A1F4D3442A97229772BAA82A534315A8A9F7B',
    description:
      ", coaching and growing highly performant software engineering teams 10 years' experience in a hands-on full stack software development (Java / Spring / Go, NodeJS, Javascript) 8 years ...  At least 5 years' building and leading full stack (Java / Spring / Go, NodeJS, Javascript) software engineering</st…",
    created: '2020-12-02T19:47:49Z'
  },
  {
    title: 'Director, Software Engineering',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Alameda Pt, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Alameda Pt'],
    longitude: -122.258202,
    latitude: 37.763607,
    url:
      'https://www.adzuna.com/land/ad/1858310462?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=5A50ECEE702BB3D592C133501D5C9A6BFE8CFF00',
    description:
      ", coaching and growing highly performant software engineering teams 10 years' experience in a hands-on full stack software development (Java / Spring / Go, NodeJS, Javascript) 8 years ...  At least 5 years' building and leading full stack (Java / Spring / Go, NodeJS, Javascript) software engineering</st…",
    created: '2020-12-02T19:47:38Z'
  },
  {
    title: 'Director, Software Engineering',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Half Moon Bay, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Half Moon Bay'],
    longitude: -122.2835618,
    latitude: 37.5583305,
    url:
      'https://www.adzuna.com/land/ad/1858309976?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=3BAF9F9879C26315BA9F48F3E77BD29706453AE9',
    description:
      ", coaching and growing highly performant software engineering teams 10 years' experience in a hands-on full stack software development (Java / Spring / Go, NodeJS, Javascript) 8 years ...  At least 5 years' building and leading full stack (Java / Spring / Go, NodeJS, Javascript) software engineering</st…",
    created: '2020-12-02T19:47:28Z'
  },
  {
    title: 'Full Stack Engineer (Data Platform)',
    company: 'FANDOM',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3983517,
    latitude: 37.782704,
    url:
      'https://www.adzuna.com/land/ad/1856349498?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=27080A1A24135911AED7E953499351B4DE040A59',
    description:
      'Job Description About this Role At Fandom, a Full Stack Engineer works on the latest user-facing product and back-end features to serve our global audience of 300 million unique ...  of experience using full web stack, including protocols and web server optimization techniques 3 years of database management and/or search systems experience 3 years of Java programming ...',
    created: '2020-12-01T20:50:29Z'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Cruz, Santa Cruz County',
    area: ['US', 'California', 'Santa Cruz County', 'Santa Cruz'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1786500868?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=5029F0B766297AEDE65C4A9B64DBC2728C8A2C06',
    description:
      'Senior Full Stack Developer - Ruby on Rails, React.js This Jobot Job is hosted by: Gene Choi Are you a fit? Easy Apply now by clicking the "Apply on company site" button ...  and leverages this real time data to provide an "it just works" experience for both the retail operators and end consumers. If you are a Senior Full Stack Developer with great technical skills ...',
    created: '2020-10-27T15:13:52Z'
  },
  {
    title: 'Full-stack .NET and React Developer - C# / ASP.NET / React / MVC',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Aliso Viejo, Orange County',
    area: ['US', 'California', 'Orange County', 'Aliso Viejo'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1855378177?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=77AAEAEA3F5F0498355D375EE3CB4C277243022E',
    description:
      'Minimum Required Skills .NET, C, JQuery, T-SQL, MVC, ORM LINQ, .Net 4.0, JSON, XML, JavaScript C ASP.NET MVC Developer - Full-stack C .NET and ReactJS Developer - Senior Software ...  Engineer - High Traffic Public Facing Software Applications If you are a Senior C ASP.NET Developer Senior Software Engineer wit…',
    created: '2020-12-01T14:01:28Z',
    contract: 'full_time'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1415651,
    latitude: 37.4213128,
    url:
      'https://www.adzuna.com/land/ad/1858766817?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=2BC4C54A73A4FE71CFD730EAD5C504F6F4EF85E8',
    description:
      'Description Please send resumes to Trupti Deshpande. This is 1 to 2 years long term contract. Need 1 to 3 years experience as Web Developer. You will be working with team ...  of engineers. Experience in Html, CSS, JavaScript Nice to have experience in PHP, React, NodeJS. Having exposure to design will be helpful. Cloud experience is nice to have. Requirements ...',
    created: '2020-12-03T00:21:07Z'
  },
  {
    title: 'Senior Full-Stack Engineer, Anti-Evil',
    company: 'Reddit',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.411274,
    latitude: 37.7863993,
    url:
      'https://www.adzuna.com/land/ad/1845284164?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=7B9140E16F2AC22CDF1A592423393A279CD88CFF',
    description:
      '...  of relevant experience. Software development experience in one or more general-purpose programming languages (e.g. Python, Java, Go). Full-stack development experience including Javascript ... Architect and implement the anti-evil full-stack infrastructure at Reddit. Build real-time data systems to process large datasets in parallel on massive clusters. In…',
    created: '2020-11-26T02:28:13Z'
  },
  {
    title: '100% REMOTE Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1855381481?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=1B52DC77A6E41BC716D80F98CEA6BA3793D2A2B6',
    description:
      "Minimum Required Skills Python, REACT, JavaScript, SQL If you are a Full Stack Developer with Python and React experience, we would love to speak with you We are a rapidly growing ...  digital agency based in LA with a distributed team around the country. In this role you'll have the opportunity to be a Lead Developer on a small team, doing hands-on, full-stack ...",
    created: '2020-12-01T14:04:54Z',
    contract: 'full_time'
  },
  {
    title: 'Software Developer - Full Stack (4-month Returnship Opportunity)',
    company: 'OSIsoft',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Leandro, Alameda County',
    area: ['US', 'California', 'Alameda County', 'San Leandro'],
    longitude: -122.1617994,
    latitude: 37.7211861,
    url:
      'https://www.adzuna.com/land/ad/1820835386?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=9049C51A5BF03A5DC66038B6563EE7B655E4B9AE',
    description:
      ', and department.Takes an active role in recruiting new team members and new developers in general.Qualification:5 years of professional experience as a Software Developer (Full Stack | Front-end ...  focused on caregiving transition back to the paid workforce.We are looking for Full-Stack Developers responsible for managing the interchange of data between back…',
    created: '2020-11-13T12:32:20Z'
  },
  {
    title: 'Full Stack .NET Developer',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1834514495?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=E9A4E24067F7C1E2A93EA105D956483F36949911',
    description:
      'An industry leader in custom development for major field service operations companies is looking to add a Full Stack .NET Developer to their team. Their innovative approach ...  to custom software development is delivered to their clients at an affordable price point that unmatched in the industry. They are able to achieve this by using our prebuilt "building ...',
    created: '2020-11-20T00:56:43Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Instructor',
    company: 'IntelliPro Group Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9631181,
    latitude: 37.3771934,
    url:
      'https://www.adzuna.com/land/ad/1834307380?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=7A40B59A01A6B739B274F7D05B3EB3B0FC77DEE6',
    description:
      '...  in Computer Science • Expertise in front-end web development using React, Redux, d3.js, Less • Have deep knowledge of JavaScript (ES6), HTML5, CSS3, Node.js Proficiency with C++, Python ... Job Description Job Summary: We seek part-time Instructors to assist in developing FLAGDream’s advanced course curriculum. We believe that some of the best instructors are those ...',
    created: '2020-11-19T20:33:43Z'
  },
  {
    title: 'Full Stack Node.JS Developer',
    company: 'iSpace, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Glendale, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Glendale'],
    longitude: -118.3800976,
    latitude: 33.9023339,
    url:
      'https://www.adzuna.com/land/ad/1746578830?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=F682BE8064468C3CC4EB1BA2BB440CE095FD22DB',
    description:
      'JOB DETAILS Title Senior Full Stack Node.JS Developer Location The client is open for both Remote Work as well as onsite in Glendale, CA Type 06 Months Contract (Extendable ...  applications Requirements 7 years of experience building complex web applications Solid work experience using component-based development on the client side 7 years of experience developing ...',
    created: '2020-10-06T19:43:40Z'
  },
  {
    title: 'Software Engineering Manager',
    company: 'PDG Consulting',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.254627,
    latitude: 34.045267,
    url:
      'https://www.adzuna.com/land/ad/1844906484?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=C446DD6C513673DC1256FA70E9BF1D62597E235A',
    description:
      '...  Skills: Minimum B.S. in Computer Science or Engineering 5 years of backend development and microservices/distributed systems experience. Full-stack development experience is a plus 3 ... Job Description PDG Consulting (PDGC) is a Los Angeles, California based software consulting firm specializing in custom Web Application Development, Business Intelligence…',
    created: '2020-11-25T20:46:47Z'
  },
  {
    title: 'Web developer',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Agoura Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Agoura Hills'],
    longitude: -118.4147075,
    latitude: 34.0605808,
    url:
      'https://www.adzuna.com/land/ad/1843022484?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=9349CAD20B1782C33F13846416596897B6E7F128',
    description:
      ", user-centric, cutting edge web and mobile interfaces Help define and ensure conformance to architectural guidelines, platforms, and development standards Research emerging front end ...  which are aligned with the organization's desired culture and values Qualifications: 5 years of experience developing user-centric web and mobile interfaces Advanced understanding ...",
    created: '2020-11-24T22:00:04Z'
  },
  {
    title: 'Software Development Engineer job (REMOTE)',
    company: 'CivicMinds, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego, San Diego County',
    area: ['US', 'California', 'San Diego County', 'San Diego'],
    longitude: -117.9889489,
    latitude: 33.8024366,
    url:
      'https://www.adzuna.com/land/ad/1854787170?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=0D73728AEB3A72B0F8352E26019FA6002789E904',
    description:
      '...  and achieve. The E-Commerce Software Development Engineer II is a full-stack development position. You will be a core member of a fast-paced engineering team, responsible for expanding ... JOB TITLE: Software Development Engineer Position Overview At we are passionate about everything we do, and that means creating an envi…',
    created: '2020-12-01T08:42:11Z'
  },
  {
    title: 'Full Stack developer - Volvo Group Connected Solutions',
    company: 'Volvo',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.1239512,
    latitude: 37.410414,
    url:
      'https://www.adzuna.com/land/ad/1820841797?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=4D881638E6D23722CE6B016889E658798BFA131B',
    description:
      ', sustainability and safety" is much more than a tag-line. If this sounds interesting to you, keep on readingTHE POSITIONWe are now looking for an experienced full stack developer to join our ...  and leveraging our internal platforms when moving from idea to commercial solution.YOUR PROFILEYou have practical & strong experience of web application development (e.g. Javascript, React ...',
    created: '2020-11-13T12:33:22Z'
  },
  {
    title: 'Full Stack Java Developer Local Candidates Rancho Cordova, Ca.',
    company: 'Zeektek',
    maxSalary: null,
    minSalary: null,
    locationName: 'Rancho Cordova, Sacramento County',
    area: ['US', 'California', 'Sacramento County', 'Rancho Cordova'],
    longitude: -121.2220217,
    latitude: 38.7409373,
    url:
      'https://www.adzuna.com/land/ad/1829930872?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=EB80BD1AD6587556E97826C582A91D3DB59EBC5C',
    description:
      'We have two openings for 6 month contracts. Software Engineers are at the core of our software development organization. If yoursquore innovative, a natural leader, and have ...  the ability to roll up your sleeves and code like a rock star then this could be the role for you Software engineers perform the following activities bull Design and develop software .…',
    created: '2020-11-18T00:46:06Z'
  },
  {
    title: 'Senior Full Stack Engineer - Python/JavaScript',
    company: 'Optello',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sausalito, Marin County',
    area: ['US', 'California', 'Marin County', 'Sausalito'],
    longitude: 8.2751321,
    latitude: 49.9968032,
    url:
      'https://www.adzuna.com/land/ad/1765186460?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=1EB621B8AEB4A70B3C8D31D12295F3668D69C3F4',
    description:
      "-thinking and diverse company culture We've been around for over 20 years and have never had a layoff Currently, we're looking for a Senior Full Stack Engineer who has experience ...  Health Benefits (100% Covered By Employer) 401k Matching Unlimited Vacation Bonus What You Need for this Position Experience as a Full Stack Engineer or equivalent Experience ...",
    created: '2020-10-15T18:16:49Z',
    contract: 'full_time'
  },
  {
    title: 'WordPress Full Stack Engineer / Developer',
    company: 'Burning Man Project',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1793996170?se=SkoqyFU26xGsqWXN6QnsyQ&utm_medium=api&utm_source=21e2e505&v=DF9E94B87790E65376F4FB5250134C9F3A6424D6',
    description:
      '...  at burningman.org.JOB SUMMARYThe Burning Man Technology department is looking for a solid, smartWordPress Full Stack Engineer / Developerto enhance an existing development team building WordPress ... , connection, education, and grants to a creative ecosystem of builders, makers, artists, and community leaders. The nonprofit is developing programming in arts, education, and civic ...',
    created: '2020-10-31T02:55:34Z'
  },
  {
    title: 'Software Development Engineer job (REMOTE)',
    company: 'CivicMinds, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego, San Diego County',
    area: ['US', 'California', 'San Diego County', 'San Diego'],
    longitude: -117.9889489,
    latitude: 33.8024366,
    url:
      'https://www.adzuna.com/land/ad/1854787170?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=0D73728AEB3A72B0F8352E26019FA6002789E904',
    description:
      '...  and achieve. The E-Commerce Software Development Engineer II is a full-stack development position. You will be a core member of a fast-paced engineering team, responsible for expanding ... JOB TITLE: Software Development Engineer Position Overview At we are passionate about everything we do, and that means creating an envi…',
    created: '2020-12-01T08:42:11Z'
  },
  {
    title: 'Full Stack Node.JS Developer',
    company: 'iSpace, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Glendale, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Glendale'],
    longitude: -118.3800976,
    latitude: 33.9023339,
    url:
      'https://www.adzuna.com/land/ad/1746578830?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=F682BE8064468C3CC4EB1BA2BB440CE095FD22DB',
    description:
      'JOB DETAILS Title Senior Full Stack Node.JS Developer Location The client is open for both Remote Work as well as onsite in Glendale, CA Type 06 Months Contract (Extendable ...  applications Requirements 7 years of experience building complex web applications Solid work experience using component-based development on the client side 7 years of experience developing ...',
    created: '2020-10-06T19:43:40Z'
  },
  {
    title: 'Web developer',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Agoura Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Agoura Hills'],
    longitude: -118.4147075,
    latitude: 34.0605808,
    url:
      'https://www.adzuna.com/land/ad/1843022484?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=9349CAD20B1782C33F13846416596897B6E7F128',
    description:
      ", user-centric, cutting edge web and mobile interfaces Help define and ensure conformance to architectural guidelines, platforms, and development standards Research emerging front end ...  which are aligned with the organization's desired culture and values Qualifications: 5 years of experience developing user-centric web and mobile interfaces Advanced understanding ...",
    created: '2020-11-24T22:00:04Z'
  },
  {
    title: 'Full Stack developer - Volvo Group Connected Solutions',
    company: 'Volvo',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.1239512,
    latitude: 37.410414,
    url:
      'https://www.adzuna.com/land/ad/1820841797?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=4D881638E6D23722CE6B016889E658798BFA131B',
    description:
      ', sustainability and safety" is much more than a tag-line. If this sounds interesting to you, keep on readingTHE POSITIONWe are now looking for an experienced full stack developer to join our ...  and leveraging our internal platforms when moving from idea to commercial solution.YOUR PROFILEYou have practical & strong experience of web application development (e.g. Javascript, React ...',
    created: '2020-11-13T12:33:22Z'
  },
  {
    title: 'Full Stack Java Developer Local Candidates Rancho Cordova, Ca.',
    company: 'Zeektek',
    maxSalary: null,
    minSalary: null,
    locationName: 'Rancho Cordova, Sacramento County',
    area: ['US', 'California', 'Sacramento County', 'Rancho Cordova'],
    longitude: -121.2220217,
    latitude: 38.7409373,
    url:
      'https://www.adzuna.com/land/ad/1829930872?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=EB80BD1AD6587556E97826C582A91D3DB59EBC5C',
    description:
      'We have two openings for 6 month contracts. Software Engineers are at the core of our software development organization. If yoursquore innovative, a natural leader, and have ...  the ability to roll up your sleeves and code like a rock star then this could be the role for you Software engineers perform the following activities bull Design and develop software .…',
    created: '2020-11-18T00:46:06Z'
  },
  {
    title: 'WordPress Full Stack Engineer / Developer',
    company: 'Burning Man Project',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1793996170?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=DF9E94B87790E65376F4FB5250134C9F3A6424D6',
    description:
      '...  at burningman.org.JOB SUMMARYThe Burning Man Technology department is looking for a solid, smartWordPress Full Stack Engineer / Developerto enhance an existing development team building WordPress ... , connection, education, and grants to a creative ecosystem of builders, makers, artists, and community leaders. The nonprofit is developing programming in arts, education, and civic ...',
    created: '2020-10-31T02:55:34Z'
  },
  {
    title: 'Web Developer',
    company: 'Marqeta',
    maxSalary: null,
    minSalary: null,
    locationName: 'Oakland, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Oakland'],
    longitude: -122.262663,
    latitude: 37.8113615,
    url:
      'https://www.adzuna.com/land/ad/1851106863?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BAEDE32675D73808CED3B141AE903832B7D7C14D',
    description:
      ", SEO & web hosting to create developer efficiencies, remove tech debt & increase site performance - Partner closely with Marketing, Design, QA & Engineering to build new pages ...  job requirements listed below, so please apply. It's an exciting time to join Marqeta. As we grow, your career and opportunities will grow as well. Position Summary We are seeking a web developer ...",
    created: '2020-11-29T17:01:54Z'
  },
  {
    title: 'Senior Full Stack Engineer - Python/JavaScript',
    company: 'Optello',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sausalito, Marin County',
    area: ['US', 'California', 'Marin County', 'Sausalito'],
    longitude: 8.2751321,
    latitude: 49.9968032,
    url:
      'https://www.adzuna.com/land/ad/1765186460?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=1EB621B8AEB4A70B3C8D31D12295F3668D69C3F4',
    description:
      "-thinking and diverse company culture We've been around for over 20 years and have never had a layoff Currently, we're looking for a Senior Full Stack Engineer who has experience ...  Health Benefits (100% Covered By Employer) 401k Matching Unlimited Vacation Bonus What You Need for this Position Experience as a Full Stack Engineer or equivalent Experience ...",
    created: '2020-10-15T18:16:49Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Technical Lead - Expert (2)',
    company: 'The Judge Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3990342,
    latitude: 37.7986895,
    url:
      'https://www.adzuna.com/land/ad/1786523089?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A193A3846D9171B6AEE76D50E5E766F722251BED',
    description:
      '...  and business partners web applications. You should possess a keen knowledge, desire, and passion to produce usable and scalable web software using advanced development at all levels. You ...  should possess a keen knowledge, desire, and passion to produce usable and scalable web software using advanced development technologies. • Coursework and/or experience within <strong…',
    created: '2020-10-27T15:16:06Z'
  },
  {
    title: 'Web and Applications Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1848041992?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A85CE1484635ABC14D0951F7C0C33D40B570D123',
    description:
      'Minimum Required Skills Java, JavaScript, REACT, MySQL, AWS, API, MongoDB, Laravel, PHP If you are a Web and Applications Developer with PHP and React experience, please read ...  Will Be Doing - Writes, debugs, documents, and tests software for Web and server applications according to business requirements. - Works collaboratively with other developers, network ...',
    created: '2020-11-27T15:28:16Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1853636190?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=FC94A71B89B5E5AF551A37518A350410D2DD1EC8',
    description:
      'Senior Full Stack Engineer needed This Jobot Job is hosted by Cody Gray Are you a fit? Easy Apply now by clicking the "Apply Now" button and sending us your resume. A bit about us ...  members to ensure they understand the software architecture for solution delivery and aid in their technical development Determine and enforce overall architectural principles ...',
    created: '2020-12-01T00:02:58Z',
    contract: 'full_time'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -121.8947708,
    latitude: 37.3353165,
    url:
      'https://www.adzuna.com/land/ad/1856594344?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=318A47B04AB45BBC2D1BB277F9111B5A47370358',
    description:
      'Description Please send resumes to Trupti Deshpande. As a Developer, you will collaborate with many, including fellow developers, marketers, product managers, and engineers ...  practical experience bull Experience with HTML5 and CSS3 web standards bull Experience with Liquid logic and conditional content blocks bull Experience in JavaScript bull Experience ...',
    created: '2020-12-02T00:04:35Z'
  },
  {
    title: 'Sr. Software Engineer',
    company: 'eNamix',
    maxSalary: null,
    minSalary: null,
    locationName: 'Diamond Bar, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Diamond Bar'],
    longitude: -117.731217,
    latitude: 33.626456,
    url:
      'https://www.adzuna.com/land/ad/1788638849?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=1E84EC342DF32063F2F18240AA9B610C3A96857B',
    description:
      "...  in Computer Sciencerelated or equivalent experience 5 years full stack software development of complex, enterpriseweb applications, ideally public facing with over 100,000 users Core ...  a seasoned hands-on Sr. Software Engineer to design, code and deploy the next generation version of the core thick-client enterprise web applications. Requirements Bachelor's degree ...",
    created: '2020-10-28T16:24:53Z'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Cruz, Santa Cruz County',
    area: ['US', 'California', 'Santa Cruz County', 'Santa Cruz'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1751054724?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=50751E0FD9EDD393F1BC4F94FC5C2E297C59B3B6',
    description:
      'Senior Full Stack Developer - Ruby on Rails, React.jsThis Jobot Job is hosted by: Gene ChoiAre you a fit? Easy Apply now by clicking the "Apply on company site" button and sending ...  this real time data to provide an "it just works" experience for both the retail operators and end consumers.If you are a Senior Full Stack Developer with great technical skills ...',
    created: '2020-10-08T22:06:46Z'
  },
  {
    title: 'Web Frontend Engineer',
    company: 'IntelliPro Group Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -121.9631181,
    latitude: 37.3771934,
    url:
      'https://www.adzuna.com/land/ad/1860587999?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=2AD033C9FA71958CDF18EC594BF8320A47F4D52B',
    description:
      '/CSS Familiarity with Javascript A solid understanding of how web applications work including security, session management, and best development practices Adequate knowledge ... -powered news aggregator that delivers the most relevant local news to users. The Role We are looking for an outstanding Web Developer to be responsible for the coding, innovative design ...',
    created: '2020-12-03T21:11:46Z'
  },
  {
    title: 'Senior Software Engineer, Web (Health)',
    company: 'Headspace',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Monica, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Santa Monica'],
    longitude: -118.4693338,
    latitude: 34.0268908,
    url:
      'https://www.adzuna.com/land/ad/1820828515?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=5FD64D209C8C6F55B102A5D537A404EFF4D008E9',
    description:
      "About the Senior Software Engineer, Web (Health) at Headspace:Headspace has one mission: to improve the health and happiness of the world. Headspace is a global leader ...  a Software Engineer to join its Health Team and be responsible for building out great web experiences for our growing number of health coaches and partners. As part of this team, you'll ...",
    created: '2020-11-13T12:30:25Z'
  },
  {
    title: 'Data Engineer, Web Personalization - Remote',
    company: 'Spokeo',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pasadena, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Pasadena'],
    longitude: -118.1419375,
    latitude: 34.1424498,
    url:
      'https://www.adzuna.com/land/ad/1856306174?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=52349AB76F6270F925844ACBD634FAA70C88A167',
    description:
      "-functional scrum team that values continuous product improvements. You will use Ruby on Rails, React, HTML, CSS, Javascript, and SQL to enhance our full-stack web personalization ...  Responsibilities: You'll design and develop robust full-stack analytics solutions You'll work in cross-functional scrum team to achieve regular sprint goals You'll use Spokeo’s customer data ...",
    created: '2020-12-01T20:41:35Z'
  },
  {
    title: 'Senior Software Engineer',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Piedmont, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Piedmont'],
    longitude: -122.2793895,
    latitude: 37.78868050000001,
    url:
      'https://www.adzuna.com/land/ad/1858310233?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BDBE5F72F27D9B6B94845BAFED6E7B421661A4DA',
    description:
      '...  engineering practices - Work within and across Agile teams to design, develop, test, implement, and support technical solutions across a full-stack of development tools and technologies ...  and our commitment to diversity & inclusion by jumping to slides 76-91 on our Corporate Social Responsibility Report. As a Capital One Software Development Engineer in…',
    created: '2020-12-02T19:47:34Z'
  },
  {
    title: 'Senior Software Engineer',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Albany, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Albany'],
    longitude: -122.3066769,
    latitude: 37.8827713,
    url:
      'https://www.adzuna.com/land/ad/1858310340?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=96F7447B0A569D486014244CC87B7E19DF214169',
    description:
      '...  engineering practices - Work within and across Agile teams to design, develop, test, implement, and support technical solutions across a full-stack of development tools and technologies ...  and our commitment to diversity & inclusion by jumping to slides 76-91 on our Corporate Social Responsibility Report. As a Capital One Software Development Engineer in…',
    created: '2020-12-02T19:47:36Z'
  },
  {
    title: 'Sr. Full Stack Developer (ASP.NET)',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Tustin, Orange County',
    area: ['US', 'California', 'Orange County', 'Tustin'],
    longitude: -117.8964759,
    latitude: 33.6891655,
    url:
      'https://www.adzuna.com/land/ad/1786518464?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=0F10FA7974448DF89642E861F86DFF5498927922',
    description:
      '. Qualifications: 1. Positive attitude 2. Experience (5 years) with ASP.NET, Web Forms, HTML, JavaScript & CSS 3. Experience (5 years) with C# .NET, VB .NET, .NET Core, Web API, SQL Server 4 ... Looking for a Sr. ASP.NET Developer to start immediately. Direct Hire. Highly desired work culture. This will be remote for now, but will be 100% on site in Tustin, CA after Covid ...',
    created: '2020-10-27T15:15:37Z'
  },
  {
    title: 'Sr. Front End Software Engineering Manager - (Mobile/Web)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030194?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=DC752ECB63E5DBC5EEAA43FAEFCE5EFF8BB7DF1E',
    description:
      'Title: Sr Engineering Manager (Mobile  Web) Type: Temporarily Full Remote W/ Hybrid Schedule Planned for the Future Location: Redwood City, CA (Temporarily Remote) Compensation ... : 180 - 220k  bonus  equity Requirements: Front End Aplication development (Consumer-facing), JavaScript/HTML/CSS, React  React Native, leadership If you are experienced with Web ...',
    created: '2020-12-01T02:24:45Z'
  },
  {
    title: 'Web developer',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Agoura Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Agoura Hills'],
    longitude: -118.4147075,
    latitude: 34.0605808,
    url:
      'https://www.adzuna.com/land/ad/1854783987?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=E6642ED675111ADBEFB5E61E071A001B46151499',
    description:
      "-centric, cutting edge web and mobile interfacesHelp define and ensure conformance to architectural guidelines, platforms, and development standardsResearch emerging front end ...  which are aligned with the organization's desired culture and valuesQualifications:5 years of experience developing user-centric web and mobile interfacesAdvanced understanding ...",
    created: '2020-12-01T08:39:30Z'
  },
  {
    title: 'Principal Software Engineer - Application Platform',
    company: 'Roblox',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Mateo County, California',
    area: ['US', 'California', 'San Mateo County'],
    longitude: -122.2932899,
    latitude: 37.5441682,
    url:
      'https://www.adzuna.com/land/ad/1785641337?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=8192EA2C93ACD8671D3D4198E81088303D4F6F09',
    description:
      ', and the JavaScript frameworks used by all other Roblox full-stack feature teams. We ship on a daily cadence with testable and configurable features that allow for rapid experimentation, data ...  and metrics. Write code in a diverse ecosystem that can be a mix of HTML, mobile web, JavaScript, Amazon Web Services, and C#. Bring your full experiences of rapid daily releases so …',
    created: '2020-10-27T06:42:41Z'
  },
  {
    title: 'Staff Software Engineer  Full-stack',
    company: 'Equinix',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -121.9977283,
    latitude: 37.3799437,
    url:
      'https://www.adzuna.com/land/ad/1841078559?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=4A3F2DE610E02FB5C024F21B8515E9F7CE072D81',
    description:
      "Staff Software Engineer  Full-stack Equinix is one of the fastest growing data center companies, growing connectivity between clients worldwide. That's why we're always looking ...  QUALIFICATIONS  5 years of strong experience as Full stack engineer working on Frontend and Backend development.  Bachelor's degree in Computer Science and Engineering</stro…",
    created: '2020-11-23T21:03:27Z'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Verizon',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.7870966,
    latitude: 33.7267967,
    url:
      'https://www.adzuna.com/land/ad/1851106883?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=A8E792E10B0386477FCE55879CE18DEB40610EFD',
    description:
      '...  involving cloud-based infrastructure. Developing and testing application software to modify existing architecture or implementing the new architecture. Making necessary changes ...  of work experience. Four or more years of relevant work experience. Experience with Java/J2EE development. Experience in React, AngularJS, or Node.js JavaScript frameworks. Even better ...',
    created: '2020-11-29T17:01:55Z'
  },
  {
    title: 'Web Developer-Angular',
    company: 'IntelliPro Group Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9631181,
    latitude: 37.3771934,
    url:
      'https://www.adzuna.com/land/ad/1809491586?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=DAC9F4F1D3D4F7C9E013E9E3D33A6631EF49FADB',
    description:
      '...  phases of the SDLC on both maintenance and new projects Work with internal and external teams and perform validation test. Excellent communication skills with both development team ... , Storm Experience with JavaScript, Angular Experience using Linux or UNIX-variant operating systems Prefer to know both English and Chinese Powered by JazzHR Fa0PM96ozs ...',
    created: '2020-11-07T20:31:46Z'
  },
  {
    title: 'Sr. Software Engineer',
    company: 'Mainz Brady Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'Newark, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Newark'],
    longitude: -122.285639,
    latitude: 37.560429,
    url:
      'https://www.adzuna.com/land/ad/1861209050?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=50798D6B8544AD63B838CF23CBBAC853E1608875',
    description:
      'Sr. Software Engineer, HID Newark, CA Our client is looking for a Sr. Software Engineer that has a strong background in developing software frameworks and tools to interact ...  and APIs Javascript and HTML experience 10 years’ experience developing desktop applications on Windows/Mac Experience developing software that interac…',
    created: '2020-12-04T04:19:49Z'
  },
  {
    title: 'Sr. Full Stack Engineer - Profitable Since 2009 & No Layoffs',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sausalito, Marin County',
    area: ['US', 'California', 'Marin County', 'Sausalito'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1854030323?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=44F5E3932DB33E87ACCF1E9E81EBCE11FDA0E784',
    description:
      '...  for the past decade and provides investment services to ultra-high-net-worth investors Our ideal Full Stack Engineer candidate will have experience with front-end development and OOP ...  as a Senior Full Stack Engineer or equivalent - Experience with JavaScript, HTML, and CSS - Experience with one or more OOP languages such as: Python, Java, Scala, Ruby, …',
    created: '2020-12-01T02:24:53Z'
  },
  {
    title: 'Sr. Full Stack .NET Developer (Angular/React, Cloud)',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Lake Forest, Orange County',
    area: ['US', 'California', 'Orange County', 'Lake Forest'],
    longitude: -117.8964759,
    latitude: 33.6891655,
    url:
      'https://www.adzuna.com/land/ad/1786444147?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=53B3FA20A1AD663EE295022F4A66DECA9F7F5E63',
    description:
      '...  analysis. The Senior Software Development Engineer develops information systems by studying operations; designing, developing, and installing software solutions; supports and develops ... . Experience with unit testing with a successful participation in scrum teams. Strong knowledge for web development best practices using modern technolog…',
    created: '2020-10-27T15:07:41Z'
  },
  {
    title: 'JavaScript Engineer with Liquid/Shopify for Startup in Los Angeles',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1834515533?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=91F0A2B75C14343D7A05BA1C57DCB25EF84817D3',
    description:
      '...  contract with the likelihood of converting to a Full Time Employee based on good performance. Required Skills Experience 3 years of professional software development experience Liquid ... A consumer product company based in Los Angeles that has been featured on the show "Shark Tank" is looking for an experienced JavaScript Engineer that is strong with LiquidShopify ...',
    created: '2020-11-20T00:58:22Z',
    contract: 'full_time'
  },
  {
    title: 'Software Engineer, Scala',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Tenderloin, San Francisco',
    area: ['US', 'California', 'San Francisco', 'Tenderloin'],
    longitude: -122.4038104,
    latitude: 37.78440399999999,
    url:
      'https://www.adzuna.com/land/ad/1858535995?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=44257706F6B64D4F841FF579CEF8B8C25AE52630',
    description:
      '...  engineering practices Work within and across Agile teams to design, develop, test, implement, and support technical solutions across a full-stack of development tools and technologies ... 201 Third Street (61049), United States of America, San Francisco, California Software Engineer, Scala Do you love building and pioneering in the technology space? Do you enjoy ...',
    created: '2020-12-02T21:47:46Z'
  },
  {
    title: 'Lead JAVA Full Stack Engineer',
    company: 'Lighthouse Technology Services',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -78.8762849,
    latitude: 42.8802518,
    url:
      'https://www.adzuna.com/land/ad/1749105525?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=8D0D59EC475CDF8C0AD9AB2C41AFD8CCEF020371',
    description:
      '...  Include 7 years of JAVA software engineering experience Deep knowledge of Java, databases, and web-related servers. Knowledge of JavaScript concepts. Knowledge of Java 1.6 ReactJS Java ... Lighthouse is seeking a Lead Java Full Stack Engineer for a Direct Hire role in San Diego, CA. Responsibilities Include Take ownership of key projects. Maintain very high levels ...',
    created: '2020-10-07T23:24:45Z',
    contract: 'full_time'
  },
  {
    title: 'Senior .NET MVC Web Developer',
    company: 'DCS Corp',
    maxSalary: null,
    minSalary: null,
    locationName: 'Ridgecrest, Kern County',
    area: ['US', 'California', 'Kern County', 'Ridgecrest'],
    longitude: -117.6718832,
    latitude: 35.63676410000001,
    url:
      'https://www.adzuna.com/land/ad/1751085808?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=0F07EB3062BC1EF8CD3CC9B3481FFC5C6A13FC09',
    description:
      'DCS is seeking a Mid to Senior Level full-stack web application developer to support the F/A-18 & EA-18G Advanced Weapons Laboratory Integrated Project Team. The F/A-18 AWL has ... . The successful candidate will have experience with web application development in .NET MVC and ademonstrable understanding and experience applying software principles, theories, and concepts ...',
    created: '2020-10-08T22:10:47Z'
  },
  {
    title: 'Full Stack Technical Lead - Expert (2)',
    company: 'The Judge Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3990342,
    latitude: 37.7986895,
    url:
      'https://www.adzuna.com/land/ad/1814038943?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=F2D1F1118FFFE534955FDB6D70872E22F4202CA5',
    description:
      '...  and business partners web applications. You should possess a keen knowledge, desire, and passion to produce usable and scalable web software using advanced development at all levels. You ...  knowledge, desire, and passion to produce usable and scalable web software using advanced development technologies. Coursework and/or experience within web-based <str…',
    created: '2020-11-10T12:23:28Z'
  },
  {
    title: 'Front-end Developer (JavaScript/HTML/CSS)',
    company: 'SymSoft Solutions',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sacramento County, California',
    area: ['US', 'California', 'Sacramento County'],
    longitude: -121.507871,
    latitude: 38.644372,
    url:
      'https://www.adzuna.com/land/ad/1849513641?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=B0AF0FF7BE42FDE9F5C6EC44D098606C9ECF17C2',
    description:
      '...  and websites. In this position you would work with a small team to develop accessible, compliant, and valid HTML, CSS, and JavaScript for prestigious clients. Requirements Responsibilities ...  for writing documentation and technical specifications Qualifications and Experience:  3-5 years of work experience in developing interfaces or websites using HTML5, CSS3, and JavaScript ...',
    created: '2020-11-28T11:02:04Z'
  },
  {
    title: 'Web Developer/Tech Analyst',
    company: 'Tech Firefly',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -121.976564,
    latitude: 37.4063095,
    url:
      'https://www.adzuna.com/land/ad/1823889182?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=87B845814D9CCE41FB7E275FDAD8BAB3F69B26CA',
    description:
      '...  and Web Development Summary of Job Requirement Develop web application that can render support forms using JavaScript framework Build data automation between Salesforce and other systems ...  web development technology to (HTML, JavaScript, CSS, JSON, XML) to build applications Experience with data analysis and building relational database tables using SQL…',
    created: '2020-11-14T20:25:46Z'
  },
  {
    title: 'Sr. Full Stack Developer (ASP.NET)',
    company: 'Ledgent Technology',
    maxSalary: null,
    minSalary: null,
    locationName: 'Tustin, Orange County',
    area: ['US', 'California', 'Orange County', 'Tustin'],
    longitude: -117.8964759,
    latitude: 33.6891655,
    url:
      'https://www.adzuna.com/land/ad/1814037697?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=8D703E7E215B0C7B810D33ADDDF122A947AF76BA',
    description:
      '...  Covid.Qualifications:1. Positive attitude2. Experience (5 years) with ASP.NET, Web Forms, HTML, JavaScript & CSS3. Experience (5 years) with C# .NET, VB .NET, .NET Core, Web API, SQL Server4. Ability ... Looking for a Sr. ASP.NET Developer to start immediately. Direct Hire. Highly desired work culture. This will be remote for now, but will be 100% on site in Tustin, CA after ...',
    created: '2020-11-10T12:23:14Z'
  },
  {
    title: 'Sr Full Stack Data Engineer',
    company: 'Warner Media Group',
    maxSalary: null,
    minSalary: null,
    locationName: 'Burbank, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Burbank'],
    longitude: -118.3096191,
    latitude: 34.1838751,
    url:
      'https://www.adzuna.com/land/ad/1820831653?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=F447AE3BBD693497B83589990A713D65AA8EAB26',
    description:
      'Req ID: 177939 The JobWarner Bros. Entertainment Inc. seeks a Sr Full Stack Data Engineer for the Digital Product, Platform & Strategy: Content Mgmt & Distribution department ... . The Software Engineer will be a member of the Media Supply Chain (MSC) team within the WarnerMedia Technology (WMTO) organization, the position will be responsible for hands on development ...',
    created: '2020-11-13T12:31:17Z'
  },
  {
    title: 'Senior Web Developer - Studio',
    company: 'IMVU',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.224319,
    latitude: 37.487996,
    url:
      'https://www.adzuna.com/land/ad/1843644936?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=F6A8BC5367BCEA31C5215D0761D1AF42BE7CFB99',
    description:
      'Senior Web Developer for StudioRedwood City, CAStudio is IMVU’s front-end web-based application that allows our over 9 million active users to contribute to the IMVU experience ...  problems, creating a JavaScript web application in Electron that will delight our customers and drive our business. You will have opportunities to grow, all the while solving interesting ...',
    created: '2020-11-25T04:16:00Z'
  },
  {
    title: 'Web UI Developer, Analyst Architect',
    company: 'Globant LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.4041962,
    latitude: 37.78194200000001,
    url:
      'https://www.adzuna.com/land/ad/1853821371?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=56BB40EE9F4C2356A5D23F1F7ACB74CE9764B09A',
    description:
      'Web UI Developer, Analyst Architect Job Description: Web UI Developer, Analyst Architect (Globant LLC, Mountain View, CA); Develop, design, maintain and release modern software ...  developer team. Deliver software and web products with outstanding user experience, performance and code quality. Coordinate with a large team and on multiple proje…',
    created: '2020-12-01T01:09:11Z'
  },
  {
    title: 'Full Stack Engineer - React.JS, Java',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1861080572?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=7F9BFCB39E0388DF81388FD02238A6BDD7A9687E',
    description:
      'Job Title: Full Stack Engineer - React.JS, Java Job Location: Santa Clara, CA Job Salary: $130k-$165k  Bonus Job Requirements: React.JS, Java, Javascript, Node Based in beautiful ...  Santa Clara, CA, we are what the future of medical education and exam preparation looks like Our team is small but mighty and we are looking for a Full Stack Software Engineer to …',
    created: '2020-12-04T02:36:22Z'
  },
  {
    title: 'Front End Web Developer',
    company: 'Corsair',
    maxSalary: null,
    minSalary: null,
    locationName: 'Fremont, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Fremont'],
    longitude: -121.9365855,
    latitude: 37.476125,
    url:
      'https://www.adzuna.com/land/ad/1820840433?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=9FA03BA6CBC4390B8433CD21EDF5B66B3C99E05C',
    description:
      '-on experience with web developmentBA/BS in design,engineering, CS, or other technical field, or equivalent experienceStrong coding experience in e-commerce web and application development ... General Purpose:The Front End Web Developer is responsible for responsive website and ecommerce development. Responsible for developing webpages for product launches, cam…',
    created: '2020-11-13T12:33:07Z'
  },
  {
    title: 'Sr. Full Stack Engineer',
    company: 'nisum',
    maxSalary: null,
    minSalary: null,
    locationName: 'Pleasanton, Alameda County',
    area: ['US', 'California', 'Alameda County', 'Pleasanton'],
    longitude: -121.9442822,
    latitude: 37.4884633,
    url:
      'https://www.adzuna.com/land/ad/1861065318?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=2AD8B5B436B8A193F9A344A4D34E257EFBDC217E',
    description:
      '...  such as Java and JavaScript. Run extensive peer reviews with special attention to clean code and good tests. Contribute technical expertise to all projects as required. Contribute to research ...  and implementing POCrsquos as required. What You Know 6 years of Java development experience. Experience with Spring, Spring Boot. Functional Programming experience with Java is a plus. Reactive ...',
    created: '2020-12-04T02:17:05Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack .NET Developer',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1827924332?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=0959A3B42746204AD38F10B2B109ACE3B6584FDB',
    description:
      "...  Experience Cloud Technologies (AzureAWS) VueJS Episerver Javascript What You Will Be Doing Tech Breakdown 30 Front end development 70 Middle tierbackend development Daily Responsibilities ... , you'll develop in technologies including C, ASP.NET, .NET Core, MVC, Rest API, Angular 6, and SQL. You'll be building out e-commerce platforms for fortune 500 companies, therefore any ...",
    created: '2020-11-17T00:51:33Z',
    contract: 'full_time'
  },
  {
    title:
      'Veterans Preferred - Sr. Full Stack Java Developer- Opportunity for Working Remotely',
    company: 'VMware',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1412969,
    latitude: 37.3971132,
    url:
      'https://www.adzuna.com/land/ad/1824456465?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=BAA64BFDC89A4B2C19463AA3630A2121C6B35E95',
    description:
      '...  (Oracle, MYSQL) Working knowledge of software engineering principles, design patterns, and commercial product development practices Must have the ability to work in an agile development ...  Familiar with Agile/SCRUM development methodologies Experience with Struts, HTML, XHTML, JavaScript, Angular, CSS and basic web design What are the benefits and perks of working at VMw…',
    created: '2020-11-15T09:10:08Z'
  },
  {
    title:
      'Veterans Preferred - Sr. Full Stack Java Developer- Opportunity for Working Remotely',
    company: 'VMware',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1412969,
    latitude: 37.3971132,
    url:
      'https://www.adzuna.com/land/ad/1824457133?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=24091EC86DE0BECA965396E444C275728A3CDCA8',
    description:
      '...  (Oracle, MYSQL) Working knowledge of software engineering principles, design patterns, and commercial product development practices Must have the ability to work in an agile development ...  Familiar with Agile/SCRUM development methodologies Experience with Struts, HTML, XHTML, JavaScript, Angular, CSS and basic web design What are the benefits and perks of working at VMw…',
    created: '2020-11-15T09:10:27Z'
  },
  {
    title:
      'Veterans Preferred - Sr. Full Stack Java Developer- Opportunity for Working Remotely',
    company: 'VMware',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1412969,
    latitude: 37.3971132,
    url:
      'https://www.adzuna.com/land/ad/1824456445?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=E4B41D6CE3DC65CC5F2530D96EBAB4C806528FC1',
    description:
      '...  (Oracle, MYSQL) Working knowledge of software engineering principles, design patterns, and commercial product development practices Must have the ability to work in an agile development ...  Familiar with Agile/SCRUM development methodologies Experience with Struts, HTML, XHTML, JavaScript, Angular, CSS and basic web design What are the benefits and perks of working at VMw…',
    created: '2020-11-15T09:10:07Z'
  },
  {
    title: 'Full Stack .NET Engineer at Data-centric Finance Agency',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1834508719?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=2F8A72CAAD3A95181E414DFF2A009CBA0B70D16C',
    description:
      "An organization in downtown Los Angeles is looking to bring on a Full Stack .NET Engineer to work on their complex internal systems using entirely web based Microsoft technology ...  to work on cutting edge tech is mandatory. Required Skills Experience 4 years' experience with Microsoft Software Development Strong skills with C.NET MVC, WebAPI 2 Knowledge ...",
    created: '2020-11-20T00:52:51Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Cruz County, California',
    area: ['US', 'California', 'Santa Cruz County'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1853637040?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=0A33576F7A87E244CE90B626479315C7FEC6B101',
    description:
      'Senior Full Stack Developer - Ruby on Rails, React.js This Jobot Job is hosted by Gene Choi Are you a fit? Easy Apply now by clicking the "Apply Now" button and sending us your ...  data to provide an "it just works" experience for both the retail operators and end consumers. If you are a Senior Full Stack Developer with great technical skills, then please read ...',
    created: '2020-12-01T00:04:01Z',
    contract: 'full_time'
  },
  {
    title: '.NET Software Engineer / Web API / Core',
    company: 'Motion Recruitment',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1834509173?se=-u8kyFU26xGjN8hxAefmVQ&utm_medium=api&utm_source=21e2e505&v=5DE192D7C66E242579A48A2EE4B2F48AC8BC06D5',
    description:
      "...  companies. As a member of the Development team, you will work on the software that's responsible for getting music, music videos, and other media distributed to broadcasters. You will also ...  get to work with the software that powers some of the biggest award shows around. You will liaise with other software engineers, the QA team, support team and the video engineering ...",
    created: '2020-11-20T00:55:22Z',
    contract: 'full_time'
  },
  {
    title: 'Software Engineer, Scala',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Bruno, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'San Bruno'],
    longitude: -122.4183544,
    latitude: 37.6363309,
    url:
      'https://www.adzuna.com/land/ad/1858535990?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=CDCBB566CF9229E47AF5D6CF08182280B9A142E8',
    description:
      '...  engineering practices Work within and across Agile teams to design, develop, test, implement, and support technical solutions across a full-stack of development tools and technologies ... 201 Third Street (61049), United States of America, San Francisco, California Software Engineer, Scala Do you love building and pioneering in the technology space? Do you enjoy ...',
    created: '2020-12-02T21:47:46Z'
  },
  {
    title: 'Software Engineer, Scala',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Atherton, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Atherton'],
    longitude: -122.2170808,
    latitude: 37.4755693,
    url:
      'https://www.adzuna.com/land/ad/1858535997?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=659CC82946EA90B1E04B040C77750A37E2D945B4',
    description:
      '...  engineering practices Work within and across Agile teams to design, develop, test, implement, and support technical solutions across a full-stack of development tools and technologies ... 201 Third Street (61049), United States of America, San Francisco, California Software Engineer, Scala Do you love building and pioneering in the technology space? Do you enjoy ...',
    created: '2020-12-02T21:47:46Z'
  },
  {
    title: 'Software Developer',
    company: 'TEKsystems, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego, San Diego County',
    area: ['US', 'California', 'San Diego County', 'San Diego'],
    longitude: -117.216804,
    latitude: 32.872512,
    url:
      'https://www.adzuna.com/land/ad/1852169102?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C8874314D4C406F3BBBFEEAEF751387687BAE616',
    description:
      'TEKsystems in San Diego has an immediate role available for full stack Java developer with a Secret level DoD clearance. This position is under full time headcount with our client ...  opportunity to design, develop, modify, and implement software programming applications. 2/3 of the job is doing software development and 1/3 of the job is managing the deploymen…',
    created: '2020-11-30T06:12:13Z'
  },
  {
    title: '100% REMOTE Full Stack Engineer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1848042002?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=DF389E2FD222D7DBBE2BB35CC700BE9B76543808',
    description:
      '...  with JavascriptReact as well. We are looking to hire ASAP, so apply now What You Need for this Position - Python - AWS - SQL - REACT - JavaScriptSo, if you are a 100 REMOTE Full Stack Engineer ... Minimum Required Skills Python, AWS, SQL, REACT, JavaScript If you are looking for a fully remote software role, read on We are a rapidly-growing marketing technology company ...',
    created: '2020-11-27T15:28:16Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Full Stack NodeJS/ReactJS Engineer',
    company: 'Career Movement',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.3841217,
    latitude: 33.925248,
    url:
      'https://www.adzuna.com/land/ad/1858499164?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5EB28C0BA7AE77B889FE06B7099CE90DF10A2A96',
    description:
      "Job Description Award-winning software product company is seeking a Senior Full Stack JavaScript (NodeJS/ReactJS) engineer on their growing team. You will work on the core ... , and AWS Required: Bachelor's Degree or higher in Computer Science, Mathematics, Electrical Engineering, Physics, or similar 5 years of professional software development experience 3 yea…",
    created: '2020-12-02T20:48:13Z'
  },
  {
    title: 'Web Systems Developer 3',
    company: 'Stater Bros. Markets',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Bernardino County, California',
    area: ['US', 'California', 'San Bernardino County'],
    longitude: -116.8837185,
    latitude: 34.2521989,
    url:
      'https://www.adzuna.com/land/ad/1746579444?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=9A768B5356C3A70DD949758196E65BD8B07BD1E0',
    description:
      'JOB SUMMARY Expertise as a Full Stack Developer will be required for your day to day activities. You have the opportunity and are expected to research and learn new technologies ...  experience. Minimum of 7 years application software development or related experience Applicable Skills Strong Application Development ndash ASP.NET Core, C, MVC, Javascript, CSS, HTML ...',
    created: '2020-10-06T19:43:42Z',
    contract: 'full_time'
  },
  {
    title: 'Web Application Support Developer',
    company: 'Nityo Infotech Corporation',
    maxSalary: null,
    minSalary: null,
    locationName: 'Sunnyvale, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Sunnyvale'],
    longitude: -74.5742935,
    latitude: 40.32726050000001,
    url:
      'https://www.adzuna.com/land/ad/1820843167?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=8B09DDFA5711B136F79249CD6EB731217E567D00',
    description:
      ') • Understanding of Web development with PHP, Java, Ruby, Python, XML, Ajax, JavaScript, jQuery, Bootstrap • Understanding of software development lifecycle with focus on operational aspects ... Job DescriptionRole: Web Application Support DeveloperWork Location: Sunnyvale, CAFulltime Permanent RoleJob Description:• Experience working with Web community platforms ...',
    created: '2020-11-13T12:33:35Z'
  },
  {
    title: 'Web Developer Designer',
    company: 'Evolution Music Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Agoura Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Agoura Hills'],
    longitude: -118.763206,
    latitude: 34.143464,
    url:
      'https://www.adzuna.com/land/ad/1856278999?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5B0AA743B25C086B673068DC74C4EDE5A571F619',
    description:
      '...  growing team. In this role, you will be responsible for the full stack development of our new websites, creatively designing the layout of future websites, and managing the company’s ...  collaboratively with small, fast moving team Previous experience in web development or other related fields Familiarity with HTML, Javascript, or other related languages Strong problem solving ...',
    created: '2020-12-01T20:36:01Z'
  },
  {
    title: '.NET Web Developer',
    company: 'Workbridge Associates',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4471069,
    latitude: 34.0575148,
    url:
      'https://www.adzuna.com/land/ad/1820825893?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E76DDEDBC7AF1DC25C00A650F7C71F48E88534EB',
    description:
      '...  on their company website with the latest and greatest tech They are specifically using C#, ASP.NET, MVC, Entity Framework, WCF, Web API, JQuery, JavaScript, HTML, CSS, SQL and need someone who ... A huge commercial lighting company located in Los Angeles is looking to add a Senior .NET Developer to the team They are looking for a driven problem solver to work ...',
    created: '2020-11-13T12:29:45Z'
  },
  {
    title: 'Senior Software Engineer',
    company: 'SpaceX',
    maxSalary: null,
    minSalary: null,
    locationName: 'Hawthorne, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Hawthorne'],
    longitude: -118.3282793,
    latitude: 33.9206811,
    url:
      'https://www.adzuna.com/land/ad/1772916808?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5F6EC5157A4A667967A6F9B568D6557BC58EFB5C',
    description:
      '...  on a super inspiring mission. As a Senior Full Stack Software Engineer on the Software Delivery Engineering team, you will engage with other SpaceX engineers to learn about their workflows ...  AND EXPERIENCE: 5 years of experience in web applications development Expertise writing software in languages like Python, Go, <st…',
    created: '2020-10-20T07:24:18Z'
  },
  {
    title: 'Senior Software Engineer',
    company: 'Jobot',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Jose, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'San Jose'],
    longitude: -117.8508568,
    latitude: 33.6700884,
    url:
      'https://www.adzuna.com/land/ad/1853636915?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=093E352480BA24C4A489BEDA39C2A3B23D7BC719',
    description:
      '...  closed Series E Funding. We are currently at about 200 employees and we are expanding exponentially. We are currently looking for a Senior Full Stack Developer Senior JavaScript ...  Reimbursement Adoption Assistance Casual Dress Code Social Gatherings Fun New Hire Swag Snacks Galore And Fine Coffee Job Details As a Senior Full Stack Engineer Senior Fullstack Devel…',
    created: '2020-12-01T00:03:52Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Front-End Software Engineer',
    company: 'KBWEB Consult, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'Anaheim, Orange County',
    area: ['US', 'California', 'Orange County', 'Anaheim'],
    longitude: -117.795583,
    latitude: 33.867215,
    url:
      'https://www.adzuna.com/land/ad/1827497720?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=254D167A72211CEFA201ABAB4394FC5704AAB3AC',
    description:
      '...  of general engineering approaches and processes Software Frameworks: Angular 6 - experience in building WEB applications in Angular or other similar frameworks desired. Micro-Service ...  of the globe Required Experience 4 years experience in software development with the aforementioned technologies and frameworks Bachelor’s Degree in Software Engineering is desired. Benef…',
    created: '2020-11-16T20:57:33Z'
  },
  {
    title: 'Senior Backend Engineer - Node.js, JavaScript, Computer Science',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Beverly Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Beverly Hills'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1853837095?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=95C145C7879FDF8F63807B68984C62AF10CC5551',
    description:
      'Are you a Senior Backend Engineer with ample node.js experience? Do you want a role fast-growing, well-funded, Los Angeles startup where individuality, creativity, and respect ...  to foster human connection through technology.What You Will Be Doing •Designing software architecture in a scalable manner •Collaborating with the team over our next product features ...',
    created: '2020-12-01T01:11:53Z'
  },
  {
    title: 'Lead Full Stack Engineer (Laurel Road)',
    company: 'KeyBank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Rancho Bernardo, San Diego County',
    area: ['US', 'California', 'San Diego County', 'Rancho Bernardo'],
    longitude: -117.1075854,
    latitude: 32.9523317,
    url:
      'https://www.adzuna.com/land/ad/1747863949?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=C3FB92ED342220B128539B31B249B8BE79997726',
    description:
      '...  to the satisfaction of Module and Product Owners. Required Qualifications 7 years of software engineering experience Deep knowledge of Java, databases, and web-related servers. Knowledge ...  of JavaScript concepts. Knowledge of Java 1.6 Preferred Qualifications ReactJS Java 1.8 Spring MVC PostgreSQL, Hibernate and other ORMs, Spring Data, and QueryDSL. Tomcat, Heroku, and AWS FICO ...',
    created: '2020-10-07T14:19:35Z'
  },
  {
    title: 'Lead Software Engineer',
    company: 'C3 IoT',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.2014776,
    latitude: 37.5137211,
    url:
      'https://www.adzuna.com/land/ad/1845284713?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E4D8820AEB01663020C4C748700816150EEE0149',
    description:
      '...  of full stack web solutions for complex problems. 8 years of professional software development experience with JavaScript, Java, or other object-oriented programming languages. Strong ...  to enable organizations to develop, deploy, and operate enterprise scale AI applications 40x to 100x faster than alternative approaches. C3.ai is looking for a Lead Software</str…',
    created: '2020-11-26T02:28:18Z'
  },
  {
    title: 'Sr. Front End Software Engineering Manager - (Mobile/Web)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1830240653?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=A736A7A491D909CEFAFC4EBE92B49FA4B1443B38',
    description:
      'Redwood City, CA Compensation UnspecifiedPosted 11/17/2020Title: Sr Engineering Manager (Mobile  Web)Type: Temporarily Full Remote W/ Hybrid Schedule Planned for the Future ...  Location: Redwood City, CA (Temporarily Remote) Compensation: 180 - 220k  bonus  equity Requirements: Front End Aplication development (Consumer-facing), JavaScript/HTML/CSS, React  React ...',
    created: '2020-11-18T04:07:49Z'
  },
  {
    title: 'Software Engineer, SEO (Remote)',
    company: 'Houzz',
    maxSalary: null,
    minSalary: null,
    locationName: 'Palo Alto, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Palo Alto'],
    longitude: -122.1607349,
    latitude: 37.4450995,
    url:
      'https://www.adzuna.com/land/ad/1832669864?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=645C78B8ECDFFAC1994E17A69A199DD892468B48',
    description:
      '-Stack Software Engineer, you will work on all parts of our web application, its libraries, services, tools, and custom features. You will work across the entire web stack, developing ...  NoticePalo Alto, CA, US /Engineering – Full-Stack /Full-time ...',
    created: '2020-11-19T04:11:00Z'
  },
  {
    title: 'Javascript Developer',
    company: 'Hire Digital',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -117.9629066,
    latitude: 33.9390008,
    url:
      'https://www.adzuna.com/land/ad/1801953071?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=A923EE985E85872018A22FA9DB11653884C59E68',
    description:
      'A technology client is seeking a JavaScript Developer to design and develop well-tested, high-performing, and scalable applications. One of the key responsibilities you ...  of top talents in digital marketing, web development, and design. Our clients work with high performing teams as well as individual talents who have gone through a rigorous screening ...',
    created: '2020-11-04T00:35:23Z'
  },
  {
    title: 'Javascript Developer',
    company: 'Hire Digital',
    maxSalary: null,
    minSalary: null,
    locationName: 'Orange County, California',
    area: ['US', 'California', 'Orange County'],
    longitude: -117.810936,
    latitude: 33.699814,
    url:
      'https://www.adzuna.com/land/ad/1801953084?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=545E5867C5836272EDF4AC13400F053BA563E546',
    description:
      'A technology client is seeking a JavaScript Developer to design and develop well-tested, high-performing, and scalable applications. One of the key responsibilities you ...  of top talents in digital marketing, web development, and design. Our clients work with high performing teams as well as individual talents who have gone through a rigorous screening ...',
    created: '2020-11-04T00:35:23Z'
  },
  {
    title: 'Javascript Developer',
    company: 'Hire Digital',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.270863,
    latitude: 34.115582,
    url:
      'https://www.adzuna.com/land/ad/1801953161?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=FBE920CB6A7A4444F3673518871F34113EA94860',
    description:
      'A technology client is seeking a JavaScript Developer to design and develop well-tested, high-performing, and scalable applications. One of the key responsibilities you ...  of top talents in digital marketing, web development, and design. Our clients work with high performing teams as well as individual talents who have gone through a rigorous screening ...',
    created: '2020-11-04T00:35:24Z'
  },
  {
    title: 'Javascript Developer',
    company: 'Hire Digital',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4064166,
    latitude: 37.7822587,
    url:
      'https://www.adzuna.com/land/ad/1801952919?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=53D2B8BEF8DC495818B0A9FDDFF1CCC900CCE401',
    description:
      'A technology client is seeking a JavaScript Developer to design and develop well-tested, high-performing, and scalable applications. One of the key responsibilities you ...  of top talents in digital marketing, web development, and design. Our clients work with high performing teams as well as individual talents who have gone through a rigorous screening ...',
    created: '2020-11-04T00:35:21Z'
  },
  {
    title: 'Senior Full Stack Ruby on Rails Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Culver City, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Culver City'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1854030520?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=D88E11406249EC7E93F5029B5A977BB458D70C18',
    description:
      'Are you a Senior Full Stack Ruby on Rails Developer looking to work for an Early Stage Start Up in the Healthcare/Pharmaceutical space? If yesplease read on THIS POSITION ...  on the prescription drug market. We are HIPAA-accredited with operations nationwide and an overall 5-star satisfaction rating. Our most urgent priority is Senior Full Stack Ruby on Rails Developer ...',
    created: '2020-12-01T02:25:01Z'
  },
  {
    title: 'Senior JavaScript Developer',
    company: 'ViacomCBS',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1814218961?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=40019D7F6C5F4E8439A03AA4EFDEFEDC4030F226',
    description:
      '...  with fellow engineers and product management teams to meet fixed deadlines - Work in all phases of software development - Additional other duties and responsibilities, as assigned Key ...  Programming and Design, data structures and algorithms - Keen understanding of web application development and standard methodologies - Strong hands-on knowledge of TypeScript, JavaScript ...',
    created: '2020-11-10T13:47:04Z'
  },
  {
    title: 'Senior JavaScript Developer',
    company: 'ViacomCBS',
    maxSalary: null,
    minSalary: null,
    locationName: 'Burbank, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Burbank'],
    longitude: -118.392351,
    latitude: 34.1446003,
    url:
      'https://www.adzuna.com/land/ad/1823259675?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=81CA2455CE63043596481DDC594265F879BAEA30',
    description:
      '...  with fellow engineers and product management teams to meet fixed deadlines - Work in all phases of software development - Additional other duties and responsibilities, as assigned Key ...  Programming and Design, data structures and algorithms - Keen understanding of web application development and standard methodologies - Strong hands-on knowledge of TypeScript, JavaScript ...',
    created: '2020-11-14T13:59:10Z'
  },
  {
    title: 'Senior JavaScript Developer',
    company: 'CBS',
    maxSalary: null,
    minSalary: null,
    locationName: 'Burbank, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Burbank'],
    longitude: -118.293589,
    latitude: 34.203909,
    url:
      'https://www.adzuna.com/land/ad/1825046778?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=6FC5C1DD752AADD69C4C65B40DC94CBCFD2A4482',
    description:
      '...  and practices Work closely with fellow engineers and product management teams to meet fixed deadlines Work in all phases of software development Additional other duties and responsibilities ...  application development Working knowledge of Docker, Jenkins and CI tools FUNCTION: Software Engineering EEO Statement: ViacomCBS is an equal opportunity employer (EOE) including disability ...',
    created: '2020-11-15T12:04:23Z'
  },
  {
    title: 'Senior JavaScript Developer',
    company: 'CBS',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3915351,
    latitude: 37.7802903,
    url:
      'https://www.adzuna.com/land/ad/1814021628?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=818FF9DAFF358B5FE5885785713C76D57B091397',
    description:
      '...  and practices Work closely with fellow engineers and product management teams to meet fixed deadlines Work in all phases of software development Additional other duties and responsibilities ...  application development Working knowledge of Docker, Jenkins and CI tools FUNCTION: Software Engineering EEO Statement: ViacomCBS is an equal opportunity employer (EOE) including disability ...',
    created: '2020-11-10T11:53:54Z'
  },
  {
    title: 'Senior Ruby Full Stack Software Engineer',
    company: 'CoStar Realty Information, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'Irvine, Orange County',
    area: ['US', 'California', 'Orange County', 'Irvine'],
    longitude: -117.75493,
    latitude: 33.751486,
    url:
      'https://www.adzuna.com/land/ad/1854772376?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=799EDE0130E04670B65955B6E9E32F653AFFDE74',
    description:
      'Senior Ruby Full Stack Software Engineer Job Description Apartments.com is the leading online apartment rental listing website, offering property, commuter, and neighborhood ...  with DevOps to troubleshoot operational issues. Grow Take an active role in mentoring other developers. Collaborate Work on an elite and passionate team to create software that moves our ...',
    created: '2020-12-01T08:04:41Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Software Engineer / .NET Core / Angular',
    company: 'The Search Solutions, LLC',
    maxSalary: null,
    minSalary: null,
    locationName: 'Beverly Hills, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Beverly Hills'],
    longitude: -118.400356,
    latitude: 34.07362,
    url:
      'https://www.adzuna.com/land/ad/1858901439?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=325265BAA3C4418FAD09A0AFE1256B6423A3C838',
    description:
      'Senior Software Engineer Primary Duties Building front end apps using JavaScript, CSS and Angular 67. Development of APIs, web services, microservices, and serverless back-end ...  Software engineer that can work in the full stack when needed with expert understanding of JavaScript, HTML, CSS for front-end and at least intermed…',
    created: '2020-12-03T02:06:30Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Software Engineer Full Stack',
    company: 'Course Hero',
    maxSalary: null,
    minSalary: null,
    locationName: 'Redwood City, San Mateo County',
    area: ['US', 'California', 'San Mateo County', 'Redwood City'],
    longitude: -122.240826,
    latitude: 37.463334,
    url:
      'https://www.adzuna.com/land/ad/1837739083?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=51E869FC810AF013245CCB8A1C5BFE5C521CD598',
    description:
      'Course Hero is scaling. We are looking for an experienced Senior Software Engineer - Full Stack to join Course Hero. The current shift in education due to the lockdown has ...  for internationalization. Are you our next Senior Software Engineer? - Problem solver who can work independently in a high pace environment - Software engineer who cares deeply about dri…',
    created: '2020-11-21T18:58:59Z'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Potrero Hill, San Francisco',
    area: ['US', 'California', 'San Francisco', 'Potrero Hill'],
    longitude: -122.390267,
    latitude: 37.733639,
    url:
      'https://www.adzuna.com/land/ad/1820208286?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=4704A57743DDF806FC731D9B5942CBF4F312FCA0',
    description:
      "Ref ID: 00410-0011617007 Classification: Web Developer Compensation: DOE Please send resumes to Jaime.Beltonrht.com In search of a new opportunity? Robert Half Technology's Web ...  Web Developer will work in San Francisco, California. What you get to do every single day: Identify business needs and adapt solutions that align with the company goals. Create ...",
    created: '2020-11-13T06:22:40Z'
  },
  {
    title: 'Principal Full Stack Engineer (Laurel Road)',
    company: 'KeyBank',
    maxSalary: null,
    minSalary: null,
    locationName: 'Rancho Bernardo, San Diego County',
    area: ['US', 'California', 'San Diego County', 'Rancho Bernardo'],
    longitude: -117.1075854,
    latitude: 32.9523317,
    url:
      'https://www.adzuna.com/land/ad/1747889072?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=6182517C6C07916CA4C7056C205AAD10AEE854A3',
    description:
      '...  and Product Owners. Required Qualifications 7 years of software engineering experience Deep knowledge of Java, databases, and web-related servers. Knowledge of JavaScript concepts. Knowledge ...  Decision Servers, OutSystems REST and SOAP Knowledge of the Agile process and Test Driven Development Integration and Unit Testing Frameworks Experience in startup companies Authorship ...',
    created: '2020-10-07T14:24:25Z'
  },
  {
    title: 'Software Engineer, Scala',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Tenderloin, San Francisco',
    area: ['US', 'California', 'San Francisco', 'Tenderloin'],
    longitude: -122.417362,
    latitude: 37.779805,
    url:
      'https://www.adzuna.com/land/ad/1858310703?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=DAE5BD6216D0804FCBADD6AB99A2914BA0CF18BB',
    description:
      "201 Third Street (61049), United States of America, San Francisco, California Software Engineer, Scala Do you want to work for a tech company that writes its own code, develops ... . As a Capital One Software Engineer, you'll work on everything from customer-facing web and mobile applications using cutting-edge open source frameworks, to highly-available RESTful services ...",
    created: '2020-12-02T19:47:40Z'
  },
  {
    title: 'Software Engineer, Scala',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Marin County, California',
    area: ['US', 'California', 'Marin County'],
    longitude: -122.5530063,
    latitude: 38.0903861,
    url:
      'https://www.adzuna.com/land/ad/1858311097?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=64B18EC744B287ADF5D27F557862622CBC7557A8',
    description:
      "201 Third Street (61049), United States of America, San Francisco, California Software Engineer, Scala Do you want to work for a tech company that writes its own code, develops ... . As a Capital One Software Engineer, you'll work on everything from customer-facing web and mobile applications using cutting-edge open source frameworks, to highly-available RESTful services ...",
    created: '2020-12-02T19:47:48Z'
  },
  {
    title: 'Software Engineer, Scala',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'Muir Beach, Marin County',
    area: ['US', 'California', 'Marin County', 'Muir Beach'],
    longitude: -122.646008,
    latitude: 37.905122,
    url:
      'https://www.adzuna.com/land/ad/1858310918?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=332845BA634935E96055F989204980EDF5829E2B',
    description:
      "201 Third Street (61049), United States of America, San Francisco, California Software Engineer, Scala Do you want to work for a tech company that writes its own code, develops ... . As a Capital One Software Engineer, you'll work on everything from customer-facing web and mobile applications using cutting-edge open source frameworks, to highly-available RESTful services ...",
    created: '2020-12-02T19:47:44Z'
  },
  {
    title: 'Senior Cloud Full Stack Developer',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -117.7618724,
    latitude: 33.6691797,
    url:
      'https://www.adzuna.com/land/ad/1855378143?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=A528914E962D3462002E03FB4903315FD28D281C',
    description:
      'Minimum Required Skills JAMstack, Python, RUBY, Golang, Google Cloud, Firebase, React.JS, Webpack, Parcel, Knative Job Title Senior Cloud Full Stack Developer Location 100 REMOTE ...  Automation companies in the US. Due to growth, we are actively seeking to hire a SeniorCloud Full Stack Developer to join our team remotely. The ideal candidate will have strong experience ...',
    created: '2020-12-01T14:01:18Z',
    contract: 'full_time'
  },
  {
    title: 'Senior Software Engineer',
    company: 'Capital One',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Marin, Marin County',
    area: ['US', 'California', 'Marin County', 'San Marin'],
    longitude: -122.5530063,
    latitude: 38.0903861,
    url:
      'https://www.adzuna.com/land/ad/1858310230?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=781DA10E55A5355691B70F1FFBD2C0A6CA395C10',
    description:
      '...  engineering practices - Work within and across Agile teams to design, develop, test, implement, and support technical solutions across a full-stack of development tools and technologies ...  and our commitment to diversity & inclusion by jumping to slides 76-91 on our Corporate Social Responsibility Report. As a Capital One Software Development Engineer in…',
    created: '2020-12-02T19:47:34Z'
  },
  {
    title: 'Web Developer',
    company: 'Middlebury Institute of International Studies at Monterey',
    maxSalary: null,
    minSalary: null,
    locationName: 'Del Rey Oaks, Monterey County',
    area: ['US', 'California', 'Monterey County', 'Del Rey Oaks'],
    longitude: -121.834952,
    latitude: 36.593293,
    url:
      'https://www.adzuna.com/land/ad/1832614175?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=11A90EBDA1E1DA70AC271C33E9D315257F13B9A9',
    description:
      'Posted with Limited Access: No Title: Web Developer Posting Number: S01469 Full-Time/Part-Time: Full-time Typical Hours Per Week: 38.75 Regular, Temporary or Term: Regular ...  of web sites and interactive marketing material. Extensive knowledge of front-end development technologies (HTML, CSS, Javascript, XML/JSON), a solid understanding of the DOM and how ...',
    created: '2020-11-19T03:44:37Z'
  },
  {
    title: 'Senior .Net / C# Developer - C#, .NET Core, JavaScript, Angular',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.466538,
    latitude: 37.798085,
    url:
      'https://www.adzuna.com/land/ad/1853838750?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=BE4B6F12FF5D3A1AFEF7F90AD8703D6718EC9BA6',
    description:
      ', distributed and web-based system design) - C# - JavaScript/Angular - Cloud (AWS / Azure) It is a plus if you have experience in: - .NET Core - SQL Server (designing, developing and tuning ... If you are a Senior C# Developer with 7 years experience designing and developing enterprise and scalable systems, please read onTop Reasons to Work with Us This is expected ...',
    created: '2020-12-01T01:12:12Z'
  },
  {
    title: 'Senior .NET Developer',
    company: 'AbleForce',
    maxSalary: null,
    minSalary: null,
    locationName: 'Carlsbad, San Diego County',
    area: ['US', 'California', 'San Diego County', 'Carlsbad'],
    longitude: -117.0979567,
    latitude: 32.8404411,
    url:
      'https://www.adzuna.com/land/ad/1749102166?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=F7E386AB06B1CA9CDAF77916DF41101B2674A3CB',
    description:
      'Please, no third parties No employment sponsorship or relocation assistance is available Main Duties and Responsibilities - Full-stack development leveraging Microsoft .NET web ...  to remain professional and effective while handling multiple tasks. - Bachelors or Masters Degree in Computer Science or related field is preferred. tags .net developer, software engineer ...',
    created: '2020-10-07T23:22:35Z',
    contract: 'full_time'
  },
  {
    title: 'Full Stack Technical Lead - Expert (2)',
    company: 'The Judge Group, Inc.',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.3990342,
    latitude: 37.7986895,
    url:
      'https://www.adzuna.com/land/ad/1765653630?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5FCC673EFBD0C5EB27CAFAD670FED56B9D63E1A6',
    description:
      '...  to produce usable and scalable web software using advanced development technologies. Coursework andor experience within web-based development languages, specifically HTML, CSS, JavaScript ...  and business partners web applications. You should possess a keen knowledge, desire, and passion to produce usable and scalable web software using a…',
    created: '2020-10-16T01:34:36Z',
    contract: 'full_time'
  },
  {
    title: 'Lead Full Stack Engineer (Java) x 2',
    company: 'VincentBenjamin',
    maxSalary: null,
    minSalary: null,
    locationName: 'Costa Mesa, Orange County',
    area: ['US', 'California', 'Orange County', 'Costa Mesa'],
    longitude: -117.8814886,
    latitude: 33.6908493,
    url:
      'https://www.adzuna.com/land/ad/1854801158?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=6EDE256D0943E19C664804367A0DAB922AC38517',
    description:
      'Our enterprise clientis looking for a talented Lead Full-Stack Engineer that can thrive in fast paced agile environment.? You will be leading projects and developers using cutting ...  engineers on code reviews, infrastructure, and adhere to software development methodologies Collaborate with Business, UX, QA and back end teams to deliver superior functionalities ...',
    created: '2020-12-01T08:43:42Z'
  },
  {
    title: 'Full Stack Engineer (100% REMOTE)',
    company: 'CyberCoders',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.4059972,
    latitude: 33.9781894,
    url:
      'https://www.adzuna.com/land/ad/1848042096?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=852A8ED71CF9F39D45F8E6889BF52A359EF4DC8F',
    description:
      "Minimum Required Skills JavaScript, REACT, Python, RUBY, Java, SQL, Clojure, Kafka If you are a Full Stack Engineer (100 REMOTE) with experience, please read on Based in Los ... 's In It for You - Competitive Base Salary (90k-140k DOE)  Bonus - Stock Options Equity - Medical - Vision - DentalSo, if you are a Full Stack Engineer (100 remote) with experience ...",
    created: '2020-11-27T15:28:18Z',
    contract: 'full_time'
  },
  {
    title: 'Junior Full Stack Engineer',
    company: 'YepChat',
    maxSalary: null,
    minSalary: null,
    locationName: 'Venice, Los Angeles County',
    area: ['US', 'California', 'Los Angeles County', 'Venice'],
    longitude: -118.46371,
    latitude: 33.994162,
    url:
      'https://www.adzuna.com/land/ad/1821581514?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=DF6A61500E57B2C629DB65503365F9A8700D475E',
    description:
      "...  closely with the CTO and other engineers to scope, build, and deploy new features and improvements. Must have: Experience in Full Stack Development of SaaS products: Front End - Fluency ... Job Description We are looking for a talented and energetic full stack engineer to help us accomplish our mission of disrupting the customer communication space. You'll work ...",
    created: '2020-11-13T20:30:03Z'
  },
  {
    title: 'Software Engineering',
    company: 'Apple',
    maxSalary: null,
    minSalary: null,
    locationName: 'Santa Clara County, California',
    area: ['US', 'California', 'Santa Clara County'],
    longitude: -121.9463428,
    latitude: 37.3256681,
    url:
      'https://www.adzuna.com/land/ad/1820831499?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=5A8F832E7EE8AFEEFD19C730FA2C87755378881E',
    description:
      '...  to operations in a rapidly growing and dynamic setting.A few of the positions available to you:A range of Software Engineering positions such as iOS, macOS, front-end, back-end, and full-stack ...  - explore all of technology’s possibilities.Key QualificationsProgramming knowledge in at least one of the following areas: iOS, macOS (Objective- C, Swift), Web development (JavaScript<…',
    created: '2020-11-13T12:31:14Z'
  },
  {
    title: 'Full Stack Developer with Emphasis on Backend',
    company: 'Symantec Corporation',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego County, California',
    area: ['US', 'California', 'San Diego County'],
    longitude: -116.979805,
    latitude: 32.942157,
    url:
      'https://www.adzuna.com/land/ad/1823591062?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=1EFDFE2BF3B1A9EF092F2DEB4725F3DF8BA6C19E',
    description:
      '...  electronic payments and banking solutions in SaaS using AI/ML to determine risk. This position will be focusing on developing and delivering the full-stack(front-end and back-end products ...  into operations. Requirements: - 5 years of experience in C++, Python, Java - 5 years of experience as a web developer with linux and postgres backend - Advanced level knowledge of React ...',
    created: '2020-11-14T16:56:01Z'
  },
  {
    title: 'Fullstack Software Engineer',
    company: 'Hiretual',
    maxSalary: null,
    minSalary: null,
    locationName: 'Mountain View, Santa Clara County',
    area: ['US', 'California', 'Santa Clara County', 'Mountain View'],
    longitude: -122.0985842,
    latitude: 37.4210442,
    url:
      'https://www.adzuna.com/land/ad/1856342439?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=B300452B47E47DD28428437A189282C83D7E2E62',
    description:
      "...  and trusted by 100 Fortune 500 customers(Amazon, Nike, Paypal, Intel, etc.) As a Full-stack engineer, you will join the core engineering team to scale-up our product development towards ...  on a large scale and high-performance web development experience, with strong problem-solving skills. Bachelor's degree in Computer Science, Engineering, Engin…",
    created: '2020-12-01T20:49:36Z'
  },
  {
    title: 'Software Developer',
    company: 'TEKsystems, Inc',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Diego, San Diego County',
    area: ['US', 'California', 'San Diego County', 'San Diego'],
    longitude: -117.16431,
    latitude: 32.7211,
    url:
      'https://www.adzuna.com/land/ad/1854791733?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=FDF65FCC529C238686253E930FDF958585EA2906',
    description:
      'TEKsystems in San Diego has an immediate role available for full stack Java developer with a Secret level DoD clearance. This position is under full time headcount with our client ...  opportunity to design, develop, modify, and implement software programming applications. 2/3 of the job is doing softwaredevelopment and 1/3 of the job is managing the deployment ...',
    created: '2020-12-01T08:42:35Z'
  },
  {
    title: 'Web Developer',
    company: 'Robert Half',
    maxSalary: null,
    minSalary: null,
    locationName: 'Potrero Hill, San Francisco',
    area: ['US', 'California', 'San Francisco', 'Potrero Hill'],
    longitude: -122.3973037,
    latitude: 37.7940487,
    url:
      'https://www.adzuna.com/land/ad/1821545132?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=388FA7E4B964E11FD406D5354EE01420070C9C6A',
    description:
      '...  Web Developer will work in San Francisco, California.What you get to do every single day:Identify business needs and adapt solutions that align with the company goals. Create simple ...  - Able to progress through development of projects quickly, turning mockups into various web languages - Record of caring for the technical needs of sites, apps and integrations ...',
    created: '2020-11-13T20:21:46Z'
  },
  {
    title: 'Front End Web Developer',
    company: 'Contend',
    maxSalary: null,
    minSalary: null,
    locationName: 'Los Angeles County, California',
    area: ['US', 'California', 'Los Angeles County'],
    longitude: -118.2377318,
    latitude: 34.0616568,
    url:
      'https://www.adzuna.com/land/ad/1841008916?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=51BAC60619410783BADD876FFF2E7966A86EBAC1',
    description:
      '...  content. We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX ...  Experience with jQuery, Angula5 or other JavaScript frameworks would be helpful Comfortable working closely with both the graphics provider and the development team Must understand ...',
    created: '2020-11-23T20:49:31Z'
  },
  {
    title: 'Digital Software Developer',
    company: 'First Republic Bank',
    maxSalary: null,
    minSalary: null,
    locationName: 'San Francisco, California',
    area: ['US', 'California', 'San Francisco'],
    longitude: -122.4515672,
    latitude: 37.7985484,
    url:
      'https://www.adzuna.com/land/ad/1813657166?se=lkAkyFU26xG-zs4EbexJJg&utm_medium=api&utm_source=21e2e505&v=E9FFFFBD556EBA8AA508E3B66BD9853317D0367A',
    description:
      '...  service. The Digital Technology Full Stack Developer is focused on executing of the Digital Channels strategy and roadmap in close partnership with Digital Channel leadership. Solutions ...  will create and support an integrated financial service experience incorporating banking, brokerage, wealth management and trust. As a Digital Technology Full Stack Developer, youll ...',
    created: '2020-11-10T05:14:22Z'
  }
]

module.exports = {
  javaScriptJobsByState,
  californiaJavascriptJobs,
  californiaJavascriptData
}
