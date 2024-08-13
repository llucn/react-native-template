const routesConfig = {
  routes: [
    {
      name: "index",
      title: "Start Center",
      page: "startCenter",
    },
    {
      name: "myWorkOrders",
      title: "Work Orders - Assigned to Me",
      page: "workOrders",
      params: {
        type: "my"
      }
    },
    {
      name: "completedWorkOrders",
      title: "Work Orders - Completed",
      page: "workOrders",
      params: {
        type: "completed"
      }
    },
    {
      name: "workOrders",
      title: "Work Orders - ${type}",
      page: "workOrders",
    },
    {
      name: "workOrderDetail",
      title: "Work Order ${id}",
      page: "workOrderDetail",
    },
  ]
};

export default routesConfig;