const PAGES = [
  {
    date: 'October 31, 2019',
    enabled: false,
    id: 'a-jump-into-the-event-loop',
    title: 'A Jump Into The Event Loop',
  },
  {
    date: 'November 28, 2019',
    enabled: false,
    id: 'untangling-react-fiber',
    title: "Untangling React Fiber",
  },
  {
    date: 'December 22',
    enabled: false,
    id: 'you-might-not-not-need-graphql',
    title: 'You Might Not Not Need GraphQL',
  },
  {
    date: 'TBD',
    enabled: false,
    id: 'browser-security-features-cors-and-csp',
    title: 'Browser Security Features: CORS and CSP',
  },
];

const findPage = id => PAGES.find(page => id === page.id);

export { findPage, PAGES };
