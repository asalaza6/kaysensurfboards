import React from 'react'
import App from 'next/app'
import MyLayout from '../components/MyLayout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <MyLayout><Component {...pageProps} /></MyLayout>;
  }
}

export default MyApp;