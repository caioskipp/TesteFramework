// ProductList Controller.js
// Author: Caio Franco
// Created at 27/08/21

import Errors from '../../../../common/errors';
import controlPanel from '../../../../common/controlPanel';
import GetProductListResponseModel from '../../../../models/GetProductListResponseModel';

module.exports = {
  async getProducts(store) {
    if (controlPanel.isMockedOffline) {
      return new GetProductListResponseModel().mock();
    }
    if (controlPanel.isMockedOnline) {
      const fetchResult = await fetch(controlPanel.mockedURL);
      if (!fetchResult.ok) {
        throw Error(Errors.Network.fetchError);
      }
      return new GetProductListResponseModel().mock();
    } else {
      // Fazer chamada aqui
    }
  },
};
