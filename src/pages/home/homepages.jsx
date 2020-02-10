import React, { Component } from 'react'
import { Route , Link, Switch,withRouter,Redirect   } from 'react-router-dom';

 class homepages extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                 <Switch>
                        {
                            this.props.routes.map(route => (
                                <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                            ))
                        }
                        <Redirect from="*" to="/" />
                        {/* <Route component={ Error } /> */}
                    </Switch>
            </>
        )
    }
}
export default withRouter(homepages)