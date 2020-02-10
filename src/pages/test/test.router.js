import Loadable from 'react-loadable';
import {MyLoadingComponent } from '../../components'

const test= Loadable({
    loader: () => import('./test'),
    loading: MyLoadingComponent
});

export default [
    { path: '/test', component: test },
  ]

