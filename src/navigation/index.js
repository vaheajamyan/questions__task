import React, {useMemo} from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Login, Questions, Question, Menu, FlipClock} from '../screens';

const StackNavigator = createStackNavigator(
  {
    Login: Login,
    Questions: Questions,
    Question: Question,
    Menu: Menu,
    FlipClock: FlipClock,
  },
  {headerMode: 'none'},
);

export const RootNavigator = () => createAppContainer(StackNavigator);

export const AppContainer = () => {
  const Nav = useMemo(() => {
    return RootNavigator();
  }, []);

  return <Nav />;
};
