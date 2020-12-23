import React from 'react'
import App from 'next/app'
import MyLayout from '../components/MyLayout'
import '../styles.css'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <MyLayout><Component {...pageProps} /></MyLayout>;
  }
}

export default MyApp;