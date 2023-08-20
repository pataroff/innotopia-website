import { ShopstoryProvider } from '@shopstory/react'

//@ts-ignore
export const DemoShopstoryProvider: React.FC = ({ children }) => {
  return <ShopstoryProvider>{children}</ShopstoryProvider>
}
