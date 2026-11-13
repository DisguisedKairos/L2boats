declare module '*.jpg' {
  const source: import('expo-image').ImageProps['source'];
  export = source;
}
