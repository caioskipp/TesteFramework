// Home Controller.js
// Author: Caio Franco
// Created at 27/08/21

import errors from '../../../common/errors';
import functions from '../../../common/functions';
import controlPanel from '../../../common/controlPanel';
import loginResponseModel from '../../../models/LoginResponseModel';

module.exports = {
  validateFields(loginData) {
    let errorsArray = [];
    if (functions.verifyEmptyFields(loginData.email)) {
      errorsArray.push(errors.Home.emptyEmail);
    }
    if (functions.verifyEmailFormat(loginData.email)) {
      errorsArray.push(errors.Home.invalidEmail);
    }
    if (functions.verifyEmptyFields(loginData.password)) {
      errorsArray.push(errors.Home.emptyPassword);
    }
    return errorsArray;
  },
  async handleLogin(loginData) {
    if (controlPanel.isMockedOffline) {
      return new loginResponseModel().mock();
    }
    if (controlPanel.isMockedOnline) {
      const fetchResult = await fetch(controlPanel.mockedURL);
      if (!fetchResult.ok) {
        throw Error(errors.Network.fetchError);
      }
      return new loginResponseModel().mock();
    } else {
      // Fazer chamada aqui
      return new loginResponseModel().mock();
    }
  },
};
