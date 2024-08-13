import startCenter from './startCenter.json';
import workOrders from './workOrders.json';
import workOrderDetail from './workOrderDetail.json';

const pagesConfig = {
  pages: [
    {
      name: 'startCenter',
      components: startCenter,
    },
    {
      name: 'workOrders',
      components: workOrders,
    },
    {
      name: 'workOrderDetail',
      components: workOrderDetail,
    },
  ]
};

export default pagesConfig;