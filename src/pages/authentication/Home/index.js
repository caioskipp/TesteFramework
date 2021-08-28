// Home.js
// Author: Caio Franco
// Created at 27/08/21

import React, {useEffect, useState} from 'react';
import {
  ButtonBackground,
  FadeIn,
  Input,
  SlideInRight,
  Text,
  ViewBasic,
} from '../../../components';
import strings from './strings';
import {Alert} from 'react-native';
import images from '../../../assets';
import controller from './controller';
import screens from '../../../common/screens';
import * as Theme from '../../../common/theme';
import controlPanel from '../../../common/controlPanel';
import asyncVariables from '../../../common/asyncVariables';
import {Content, LogoView, Logo, MidContent} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import LoginRequestModel from '../../../models/LoginRequestModel';

export default function Home(props) {
  const [loginData, setLoginData] = useState(new LoginRequestModel());
  const [loading, setLoading] = useState(false);

  // Mark: Lifecycle functions

  useEffect(() => {
    if (controlPanel.developMode) {
      setLoginData(new LoginRequestModel().mock());
    }
  }, []);

  // Mark: General functions

  function handleTextChange(field, text) {
    setLoginData({...loginData, [field]: text});
  }

  function validateFields() {
    let errors = controller.validateFields(loginData);
    if (errors.length !== 0) {
      Alert.alert(strings.errorTitle, errors[0]);
    } else {
      handleLogin();
    }
  }

  const setLoginLocal = async profileData => {
    try {
      await AsyncStorage.setItem(
        asyncVariables.profileData,
        JSON.stringify(profileData),
      );
    } catch (err) {
      console.debug(err);
    }
  };

  async function handleLogin() {
    setLoading(true);

    try {
      await controller.handleLogin().then(result => {
        setLoginLocal(result).then(() => {
          goToNavigationTabs();
        });
      });
    } catch (err) {
      Alert.alert(strings.errorTitle, strings.errorLogin);
    } finally {
      setLoading(false);
    }
  }

  // Mark: Navigation functions

  function goToNavigationTabs() {
    props.navigation.navigate(screens.tabs.tabNavigator);
  }

  return (
    <Content>
      <ViewBasic isLoading={loading} background={Theme.Colors.primary}>
        <SlideInRight index={0}>
          <LogoView>
            <Logo source={images.logoWhite} />
          </LogoView>
        </SlideInRight>
        <MidContent>
          <SlideInRight index={1}>
            <Text h1 white margin>
              {strings.title}
            </Text>
          </SlideInRight>
          <SlideInRight index={2}>
            <Text h1 white>
              {strings.subtitle}
            </Text>
          </SlideInRight>
          <FadeIn delay={500} duration={800}>
            <Input
              onChangeText={text => {
                handleTextChange('email', text);
              }}
              title={strings.inputEmailLabel}
              value={loginData.email}
            />
          </FadeIn>
          <FadeIn delay={550} duration={800}>
            <Input
              onChangeText={text => {
                handleTextChange('password', text);
              }}
              secure
              title={strings.inputPasswordLabel}
              value={loginData.password}
            />
          </FadeIn>
        </MidContent>
        <SlideInRight index={3}>
          <ButtonBackground
            onPress={() => validateFields()}
            isEnabled
            text={'Entrar'}
          />
        </SlideInRight>
      </ViewBasic>
    </Content>
  );
}
