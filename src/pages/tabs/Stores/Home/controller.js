// Home Controller.js
// Author: Caio Franco
// Created at 27/08/21

import errors from '../../../../common/errors';
import controlPanel from '../../../../common/controlPanel';
import GetStoresResponseModel from '../../../../models/GetStoresResponseModel';

module.exports = {
  async getStores() {
    if (controlPanel.isMockedOffline) {
      return new GetStoresResponseModel().mock();
    }
    if (controlPanel.isMockedOnline) {
      const fetchResult = await fetch(controlPanel.mockedURL);
      if (!fetchResult.ok) {
        throw Error(errors.Network.fetchError);
      }
      return new GetStoresResponseModel().mock();
    } else {
      // Fazer chamada aqui
      return new GetStoresResponseModel().mock();
    }
  },
};
