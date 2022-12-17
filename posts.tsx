const posts = [
  {
    id: 0,
    header: "jonghwi's devlog",
    title: 'When to Use Static Generation v.s. Server-side Rendering',
    desc: 'Before you learn more advanced Next.js features, it would be helpful to understand the basics of how Next.js works.',
    author: 'Jonghwi Kim',
    date: '2022-12-13',
    likes: 100,
    src: '/images/thumbnail0.jpg',
    contents: (
      <>
        <p className='mb-4'>
          Before you learn more advanced Next.js features, it would be helpful
          to understand the basics of how Next.js works.
        </p>
        <p className='mb-4'>
          At the beginning of this course, we talked about how React is
          relatively unopinionated about how you build and structure your
          applications - there are multiple ways to build applications with
          React. Next.js provides a framework to structure your application, and
          optimizations that help make both the development process and final
          application faster.
        </p>
        <p className='mb-4'>
          In the next sections, we’ll look at what happens to your application
          code during these different stages:
        </p>
        <ul className='list-disc ml-8'>
          <li>
            The environment where your code runs: Development vs. Production
          </li>
          <li>When your code runs: Build Time vs. Runtime</li>
          <li>Where rendering happens: Client vs. Server</li>
        </ul>

        <p className='my-4'>
          Now let’s dive deeper into these concepts and discuss some of the
          processes Next.js is doing behind the scenes.
        </p>
      </>
    ),
    profileImg: '/images/profile0.png',
    profileDesc: 'Frontend Developer',
  },
  {
    id: 1,
    header: "grant's devlog",
    title: 'What is Next.js?',
    desc: 'Next.js is a flexible React framework that gives you building blocks to create fast web applications. But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.',
    author: 'Grant Novak',
    date: '2022-12-16',
    likes: 22,
    src: '/images/thumbnail1.jpg',
    contents: (
      <>
        <p className='mb-4'>
          Next.js is a flexible React framework that gives you building blocks
          to create fast web applications.
        </p>
        <p className='mb-4'>
          But what exactly do we mean by this? Let’s spend some time expanding
          on what React and Next.js are and how they can help.
        </p>
        <h4 className='text-lg font-semibold mb-2'>
          Building Blocks of a Web Application
        </h4>
        <p className='mb-4'>
          There are a few things you need to consider when building modern
          applications. Such as:
        </p>
        <ul className='list-disc ml-8'>
          <li>
            <strong>User Interface</strong> - how users will consume and
            interact with your application.
          </li>
          <li>
            <strong>Routing</strong> - how users navigate between different
            parts of your application.
          </li>
          <li>
            <strong>Data Fetching </strong> - where your data lives and how to
            get it.
          </li>
          <li>
            <strong>Rendering</strong> - when and where you render static or
            dynamic content.
          </li>
          <li>
            <strong>Integrations</strong> - what third-party services you use
            (CMS, auth, payments, etc) and how you connect to them.
          </li>
          <li>
            <strong>Infrastructure</strong> - where you deploy, store, and run
            your application code (Serverless, CDN, Edge, etc).
          </li>
          <li>
            <strong>Performance</strong> - how to optimize your application for
            end-users.
          </li>
          <li>
            <strong>Scalability</strong> - how your application adapts as your
            team, data, and traffic grow.
          </li>
          <li>
            <strong>Developer Experience</strong> - your team’s experience
            building and maintaining your application.
          </li>
        </ul>
        <p className='my-4'>
          For each part of your application, you will need to decide whether you
          will build a solution yourself or use other tools such as libraries
          and frameworks.
        </p>
      </>
    ),
    profileImg: '/images/profile1.jpeg',
    profileDesc: 'Fullstack Developer',
  },
  {
    id: 2,
    header: "chloe's devlog",
    title: 'What is Code Splitting?',
    desc: 'Developers usually split their applications into multiple pages that can be accessed from different URLs. Each of these pages becomes a unique entry point into the application.',
    author: 'Chloe McDowell',
    date: '2022-12-17',
    likes: 32,
    src: '/images/thumbnail2.jpg',
    contents: (
      <>
        <p className='mb-4'>
          Developers usually split their applications into multiple pages that
          can be accessed from different URLs. Each of these pages becomes a
          unique entry point into the application.
        </p>
        <p className='mb-4'>
          Code-splitting is the process of splitting the application’s bundle
          into smaller chunks required by each entry point. The goal is to
          improve the application's initial load time by only loading the code
          required to run that page.
        </p>
        <p className='mb-4'>
          Next.js has built-in support for code splitting. Each file inside your
          pages/ directory will be automatically code split into its own
          JavaScript bundle during the build step.
        </p>
        <p className='mb-4'>Further:</p>
        <ul className='list-disc ml-8 mb-4'>
          <li>
            Any code shared between pages is also split into another bundle to
            avoid re-downloading the same code on further navigation.
          </li>
          <li>
            After the initial page load, Next.js can start pre-loading the code
            of other pages users are likely to navigate to.
          </li>
          <li>
            Dynamic imports are another way to manually split what code is
            initially loaded.
          </li>
        </ul>
      </>
    ),
    profileImg: '/images/profile2.jpeg',
    profileDesc: 'Frontend Developer',
  },
  {
    id: 3,
    header: "jared's devlog",
    title: 'Client and Server',
    desc: 'In the context of web applications, the client refers to the browser on a user’s device that sends a request to a server for your application code. It then turns the response it receives from the server into an interface the user can interact with.',
    author: 'Jared Berg',
    date: '2022-11-04',
    likes: 55,
    src: '/images/thumbnail3.jpg',
    contents: (
      <>
        <p className='mb-4'>
          In the context of web applications, the client refers to the browser
          on a user’s device that sends a request to a server for your
          application code. It then turns the response it receives from the
          server into an interface the user can interact with.
        </p>
        <p className='mb-4'>
          <strong>Server</strong> refers to the computer in a data centre that
          stores your application code, receives requests from a client, does
          some computation, and sends back an appropriate response.
        </p>
      </>
    ),
    profileImg: '/images/profile3.jpeg',
    profileDesc: 'Backend Developer',
  },
  {
    id: 4,
    header: "jonghwi's devlog",
    title: 'What is the Network?',
    desc: 'It’s helpful to know where your application code is stored and run once it’s deployed to the network. You can think of the network as linked computers (or servers) capable of sharing resources.',
    author: 'Kylie Rose',
    date: '2021-02-03',
    likes: 21,
    src: '/images/thumbnail4.jpg',
    contents: (
      <>
        <p className='mb-4'>
          It’s helpful to know where your application code is stored and run
          once it’s deployed to the network. You can think of the network as
          linked computers (or servers) capable of sharing resources. In the
          case of a Next.js application, your application code can be
          distributed to{' '}
          <strong>origin servers, Content Delivery Networks (CDNs),</strong> and{' '}
          <strong>the Edge</strong>.Let’s see what each of these are:
        </p>
        <h4 className='mb-4 text-xl font-semibold'>Origin Servers</h4>
        <p className='mb-4'>
          As we discussed earlier, the server refers to the main computer that
          stores and runs the original version of your application code.
        </p>
        <p className='mb-4'>
          We use the term origin to distinguish this server from the other
          places application code can be distributed to, such as CDN servers and
          Edge servers.
        </p>
        <p className='mb-4'>
          When an origin server receives a request, it does some computation
          before sending a response. The result of this computation work can be
          moved to a CDN (Content Delivery Network).
        </p>
      </>
    ),
    profileImg: '/images/profile4.jpeg',
    profileDesc: 'Network Specialist',
  },
]

export { posts }
