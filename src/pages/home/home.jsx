import React, { Component } from 'react'
import { TabBar ,Button } from 'antd-mobile';
import {Aurl} from "../../api"

 class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'redTab',
          hidden: false,
          fullScreen: false,
        };
      }
    
      componentWillMount(){
        Aurl.getList(1).then(r =>{
          console.log(r.data);
        }).catch(r =>{
          console.log(r)
        })
      }
      handClick(){
        // this.props.history.push({pathname:'/test2',query:{id:1}});
        this.props.history.push({ pathname : '/test',query:{ aa: 'aa'} })
        console.log(this.props.history)
      }

      renderContent(pageText) {
        return (
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
            <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  hidden: !this.state.hidden,
                });
              }}
            >
              Click to show/hide tab-bar
            </a>
            
            <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  fullScreen: !this.state.fullScreen,
                });
              }}
            >
              Click to switch fullscreen
            </a>
            
          </div>
        );
      }
    
      render() {
        return (
          <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100vh' }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="Life"
                key="Life"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                badge={1}
                onPress={() => {
                  this.setState({
                    selectedTab: 'blueTab',
                  });
                }}
                data-seed="logId"
              >
                <Button type="primary" onClick={this.handClick.bind(this)}> 跳转</Button>
                {this.renderContent('Life')}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="Koubei"
                key="Koubei"
                badge={'new'}
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'redTab',
                  });
                }}
                data-seed="logId1"
              >
                {this.renderContent('Koubei')}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="Friend"
                key="Friend"
                dot
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                }}
              >
                {this.renderContent('Friend')}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="My"
                key="my"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                }}
              >
                {this.renderContent('My')}
              </TabBar.Item>
            </TabBar>
          </div>
        );
      }
}
export default home