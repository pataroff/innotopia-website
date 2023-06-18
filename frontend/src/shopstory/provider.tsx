import { ShopstoryProvider } from '@shopstory/react'

export const DemoShopstoryProvider: React.FC = ({ children }) => {
  return <ShopstoryProvider>{children}</ShopstoryProvider>
}
