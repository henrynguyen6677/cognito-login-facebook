import Amplify, { API, graphqlOperation } from "@aws-amplify/api";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
