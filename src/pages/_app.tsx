import { ReactNode, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';

import Layout from '~/components/Layout';
import { InitGlobalStyled } from '~/styles/init';
import { colors, sizes } from '~/styles/themes';

type Theme = typeof colors;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const App = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      theme={useMemo(
        () => ({
          sizes: sizes,
          colors: colors,
        }),
        [],
      )}
    >
      <InitGlobalStyled />

      <Layout>
        <main>{children}</main>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
