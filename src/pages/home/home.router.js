import Loadable from 'react-loadable';
import {MyLoadingComponent } from '../../components'

const home= Loadable({
    loader: () => import('./home'),
    loading: MyLoadingComponent
});

export default [
    { path: '/', component: home, exact: process.env.NODE_ENV==='development'? true :false },
  ]

