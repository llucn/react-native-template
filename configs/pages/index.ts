import startCenter from './startCenter.json';
import testPage from './testPage.json';
import simplePage from './simplePage.json';

const pagesConfig = {
  pages: [
    {
      name: 'startCenter',
      components: startCenter,
    },
    {
      name: 'testPage',
      components: testPage,
    },
    {
      name: 'simplePage',
      components: simplePage,
    },
  ]
};

export default pagesConfig;