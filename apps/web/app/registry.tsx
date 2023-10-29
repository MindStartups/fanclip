'use client';
import React from 'react';
import createCache from '@emotion/cache';
import type { Options } from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: { options: Options, children: React.ReactNode }) {
  const { options, children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}







//import React, { useState } from 'react';
//import { useServerInsertedHTML } from 'next/navigation';
//import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
//
//export function StyledComponentsRegistry({
//  children,
//}: {
//  children: React.ReactNode;
//}) {
//  // Only create stylesheet once with lazy initial state
//  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
//  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
//
//  useServerInsertedHTML(() => {
//    const styles = styledComponentsStyleSheet.getStyleElement();
//
//    // Types are out of date, clearTag is not defined.
//    // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/65021
//    (styledComponentsStyleSheet.instance as any).clearTag();
//
//    return <>{styles}</>;
//  });
//
//  if (typeof window !== 'undefined') return <>{children}</>;
//
//  return (
//    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
//      {children}
//    </StyleSheetManager>
//  );
//}
