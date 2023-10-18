import { ShopstoryProvider } from '@shopstory/react';

//@ts-ignore
export const DemoShopstoryProvider = ({ children }) => {
  return <ShopstoryProvider>{children}</ShopstoryProvider>;
};
