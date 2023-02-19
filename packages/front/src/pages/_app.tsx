import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';


import { SiteHead } from 'components/nonVisual/siteHead';
import createEmotionCache from 'mui/createEmotionCache';
import theme from 'mui/theme';
import { AppUserInit } from 'provider/appUserInit';

import 'styles/globals.css';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function AppInit():null {
  // 現時点のユーザ情報を
  // stateに保持するための共通処理
  AppUserInit();
  
  return null;
}

function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <RecoilRoot>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SiteHead />
            <Component {...pageProps} />
            <AppInit />
          </ThemeProvider>
        </CacheProvider>
      </RecoilRoot>
    </>
  );
}
export default MyApp;