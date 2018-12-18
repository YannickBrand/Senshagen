import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Tab, Tabs, Title, Button, Icon } from 'native-base';
import Map from './src/Map';
import Table from "./src/Table";
import {SafeAreaView,StatusBar} from "react-native";
import {Constants} from "expo";

export default class App extends Component {
  state = { 
    loading: true 
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (!this.state.loading)
      return (
        <Container>
        <StatusBar hidden={true} />
          <Header hasTabs>
            <Left>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Weather Sensor</Title>
            </Body>
            <Right />
          </Header>
          <Tabs locked>
            <Tab heading="Map">
              <Map />
            </Tab>
            <Tab heading="Table">
              <Table />
            </Tab>
          </Tabs>
        </Container>
    );
    return null
  }
}