export default [
  {
    path: '',
    load: () => import(/* webpackChunkName: "p_index" */ '@/pages/index'),
    componentName: 'index',
    index: true,
    id: 'index',
    exact: true,
    exports: ["default"],
  },
];
