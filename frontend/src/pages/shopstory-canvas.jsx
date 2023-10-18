import { Canvas } from '@shopstory/react';
import { shopstoryConfig } from '../../src/shopstory/config';
import { DemoShopstoryProvider } from '../../src/shopstory/provider';

const ShopstoryCanvasPage = () => {
  return (
    //@ts-ignore
    <DemoShopstoryProvider>
      <Canvas config={shopstoryConfig} />
    </DemoShopstoryProvider>
  );
};

export default ShopstoryCanvasPage;
