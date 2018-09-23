import React from 'react';
import {
  Layout, Menu, Carousel, Row, Col, Card, Input,
} from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const { Content, Header, Footer } = Layout;
const { Meta } = Card;
const { Search } = Input;

const App = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['4']}
        style={{ lineHeight: '64px' }}
      >
        <Search
          placeholder="input search text"

          size="large"
          onSearch={value => console.log(value)}
          style={{ width: '50%' }}
        />
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        <Row>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
            >
              <Carousel autoplay>
                <img src="https://images.unsplash.com/photo-1537557436197-445104c17075?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e22e833eb944c01d3a469d1777fe0769&auto=format&fit=crop&w=800&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1537557436197-445104c17075?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e22e833eb944c01d3a469d1777fe0769&auto=format&fit=crop&w=800&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1537557436197-445104c17075?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e22e833eb944c01d3a469d1777fe0769&auto=format&fit=crop&w=800&q=60" alt="" />
              </Carousel>
              <Meta
                style={{ marginTop: '10px' }}
                title="Testing"
                description="What up"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
            >
              <Carousel autoplay>
                <img src="https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf61f7387cf2cb8758d724978fcbd198&auto=format&fit=crop&w=800&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf61f7387cf2cb8758d724978fcbd198&auto=format&fit=crop&w=800&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf61f7387cf2cb8758d724978fcbd198&auto=format&fit=crop&w=800&q=60" alt="" />
              </Carousel>
              <Meta
                style={{ marginTop: '10px' }}
                title="Testing"
                description="What up"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Carousel autoplay>
                <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="" />
                <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="" />
                <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="" />
              </Carousel>
              <Meta
                style={{ marginTop: '10px' }}
                title="Testing"
                description="What up"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default App;
