/*
This App component is a top-level component which will be common across all different pages.
Add global styles here
*/
import "../styles/global.css";

export default function App({Component, pageProps}) {
    return<Component {...pageProps}/>
}
