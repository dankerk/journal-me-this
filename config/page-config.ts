interface PageConfig {
  [key: string]: {
    title: string;
    path: string;
  }
}

export const pageConfig: PageConfig = {
  home: {
    title: 'Journal me this',
    path: '/',
  },
  account: {
    title: 'Account',
    path: '/account'
  },
  create: {
    title: 'Create a journal',
    path: '/create'
  }
}