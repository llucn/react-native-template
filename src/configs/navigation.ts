const navigationConfig = {
  navigation: [
    {
      text: 'Start Center',
      leftIcon: 'BeeIcon',
      textBreakMode: 'tail',
      disabled: false,
      route: {
        name: 'index'
      }
    },
    {
      text: 'Work Orders',
      leftIcon: 'BeeIcon',
      textBreakMode: 'tail',
      disabled: false,
      openOnLoad: true,
      children: [
        {
          text: 'Assigned to Me',
          leftIcon: 'LaunchIcon',
          textBreakMode: 'tail',
          disabled: false,
          route: {
            name: 'myWorkOrders'
          }
        },
        {
          text: 'Active',
          leftIcon: 'LaunchIcon',
          textBreakMode: 'tail',
          disabled: false,
          route: {
            name: 'workOrders',
            params: {
              type: 'active'
            }
          }
        },
        {
          text: 'Completed',
          leftIcon: 'LaunchIcon',
          textBreakMode: 'tail',
          disabled: false,
          route: {
            name: 'completedWorkOrders'
          }
        },
      ]
    },
    {
      text: 'Test Work Order Detail',
      leftIcon: 'BeeIcon',
      textBreakMode: 'tail',
      disabled: false,
      route: {
        name: 'workOrderDetail',
        params: {
          id: 100
        }
      }
    }
  ]
};

export default navigationConfig;