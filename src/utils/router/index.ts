// import { Router } from 'framework7/types';

// import DM0001 from '@/pages/DM/DM0/DM0001/index.vue';
// import DM0002 from '@/pages/DM/DM0/DM0002/index.vue';
// import DM0003 from '@/pages/DM/DM0/DM0003/index.vue';
// import DM0004 from '@/pages/DM/DM0/DM0004/index.vue';

// import DM1001 from '@/pages/DM/DM1/DM1001/index.vue';
// import DM1002 from '@/pages/DM/DM1/DM1002/index.vue';
// import DM1003 from '@/pages/DM/DM1/DM1003/index.vue';

// const routes: Array<Router.RouteParameters> = [
//   {
//     name: 'DM0001',
//     path: '/',
//     component: DM0001,
//   },
//   {
//     name: 'DM0002',
//     path: '/DM0002/',
//     component: DM0002,
//   },
//   {
//     name: 'DM0003',
//     path: '/DM0003/',
//     component: DM0003,
//   },
//   {
//     name: 'DM0004',
//     path: '/DM0004/',
//     component: DM0004,
//   },
//   {
//     name: 'DM1001',
//     path: '/DM1001/',
//     component: DM1001,
//   },
//   {
//     name: 'DM1002',
//     path: '/DM1002/',
//     component: DM1002,
//   },
//   {
//     path: '(.*)',
//     component: DM1003,
//   },
// ];

// export default routes;

import basicRoutes from 'router-inject';

const RouteRoot = {
  path: '/',
  name: basicRoutes[0].name,
  component: basicRoutes[0].component
};

console.warn(basicRoutes);

const Route404 = {
  path: '(.*)',
  component: basicRoutes[basicRoutes.length - 1].component
};


basicRoutes.shift();
basicRoutes.unshift(RouteRoot);
basicRoutes.push(Route404);

export default basicRoutes;