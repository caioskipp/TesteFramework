// PDF.js
// Author: Caio Franco
// Created at 27/08/21

import {Content, PDFViewer} from './styles';
import Pdf from 'react-native-pdf';
import React, {useEffect, useState} from 'react';
import {NavigationBar, ViewBasic} from '../../components';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useSelector} from 'react-redux';
import {PermissionsAndroid, Platform} from 'react-native';
import icons from '../../common/icons';

export default function PDF(props) {
  const cart = useSelector(state => state.cart);
  const [pdfFile, setPdfFile] = useState('');

  // Mark: Lifecycle functions
  useEffect(() => {
    requestCameraPermission().then(result => {
      if (result) {
        createPDF().then(() => console.debug('PDF Created'));
      }
    });
  }, []);

  // Mark: General functions

  const requestCameraPermission = async () => {
    return Platform.select({
      ios: async () => {
        return true;
      },
      android: async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Atenção',
              message: 'É necessário que você de permissão para gerar o PDF',
              buttonNegative: 'Cancelar',
              buttonPositive: 'Aceito',
            },
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
        }
      },
    });
  };

  function renderPrice(item) {
    let priceAux = item.price;
    priceAux = priceAux.toFixed(2);
    priceAux = priceAux.toString();
    priceAux = priceAux.replace('.', ',');
    return priceAux;
  }

  function renderItensHTML() {
    return cart.map(item => {
      return (
        '<tr><td> <h3>' +
        item.item.name +
        '</h3></td><td> <h3>R$ ' +
        renderPrice(item.item) +
        '</h3></td></tr>\n'
      );
    });
  }

  function renderTotal() {
    let total = 0;
    cart.map(item => {
      total = total + item.item.price;
    });
    let priceAux = total;
    priceAux = priceAux.toFixed(2);
    priceAux = priceAux.toString();
    priceAux = priceAux.replace('.', ',');
    return priceAux;
  }

  async function createPDF() {
    let options = {
      html:
        '<h1>Este é seu comprovante</h1>' +
        '<table>' +
        '    <tr>\n' +
        '        <td><h2>Nome</h2></td>\n' +
        '        <td><h2>Preço</h2></td>\n' +
        '    </tr>\n' +
        renderItensHTML() +
        '    <tr>\n' +
        '        <td><h1>Total = </h1></td>\n <td><h1> R$ ' +
        renderTotal() +
        '</h1></td>\n </tr>\n' +
        '</table>',
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    setPdfFile(file.filePath);
  }

  function renderPDFFile() {
    if (pdfFile && pdfFile.length > 0) {
      return (
        <Pdf
          source={{uri: pdfFile, cache: true}}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link presse: ${uri}`);
          }}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
          }}
        />
      );
    }
  }

  // Mark: Navigation functions

  function goBack() {
    props.navigation.goBack();
  }

  return (
    <Content>
      <NavigationBar
        showLogo
        leftIconPressed={() => goBack()}
        leftIcon={icons.goBack}
      />
      <PDFViewer>{renderPDFFile()}</PDFViewer>
    </Content>
  );
}

PDF.defaultProps = {};

PDF.propTypes = {};
