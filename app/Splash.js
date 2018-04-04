import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import '../global.js'
var hdkey = require('ethereumjs-wallet/hdkey')
var util = require('ethereumjs-util')
var randomBytes = require('randombytes')

const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var bip39 = require('bip39')
export default class Splash extends Component {

  state = {
    mnemonic: '',
    address: '',
  };

  getBalance() {
    var mnemonic = bip39.generateMnemonic(128, randomBytes);
    console.log('mnemonic==',mnemonic)
    this.setState({
      mnemonic
    })
    var seed = bip39.mnemonicToSeed(mnemonic)
    console.log('seed==',seed)
    var hdWallet = hdkey.fromMasterSeed(seed)
    console.log('hdWallet==',hdWallet)

    var w = hdWallet.getWallet()
    var k = w.toV3("123456789")

    console.log('k==',k.address)
    this.setState({
      address: k.address
    })
    // var key1 = hdWallet.derivePath("m/44'/60'/0'/0/0")

    // console.log("明文私钥:", key1._hdkey._privateKey.toString('hex'))

    // var address1 = util.pubToAddress(key1._hdkey._publicKey, true)

    // address1 = util.toChecksumAddress(address1.toString('hex'))

    // console.log('地址',address1);

  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.balanceButton} onPress={this.getBalance.bind(this)}>
          <Text style={styles.balanceText}>Get Balance</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 15}}>
          {` mnemonic ${this.state.mnemonic}`}
          {` address ${this.state.address}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  balanceButton: {
    backgroundColor: '#0dab7f',
    padding: 10,
    width: 200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  balanceText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
});
