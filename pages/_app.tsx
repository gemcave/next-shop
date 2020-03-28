import App from "next/app";
import "antd/dist/antd.css";
import { withApollo } from "../components/withApolloClient";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default withApollo({ ssr: true })(MyApp);
