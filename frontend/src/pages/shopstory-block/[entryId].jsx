import { Metadata, RenderableContent, ShopstoryClient } from '@shopstory/core';
import { Shopstory, ShopstoryMetadataProvider } from '@shopstory/react';
import { sanityClient } from '../../lib/sanity.client';
import { shopstoryConfig } from '../../shopstory/config';
import { DemoShopstoryProvider } from '../../shopstory/provider';

const ShopstoryBlockPage = (props) => {
  return (
    //@ts-ignore
    <DemoShopstoryProvider>
      <ShopstoryMetadataProvider meta={props.meta}>
        <Shopstory content={props.renderableContent} />
      </ShopstoryMetadataProvider>
    </DemoShopstoryProvider>
  );
};

export const getStaticPaths = () => {
  return { paths: [], fallback: 'blocking' };
};

export const getStaticProps = async (context) => {
  let { params, preview, locale = 'en' } = context;

  if (!params) {
    return { notFound: true };
  }

  const rawContent = await fetchShopstoryContentJSONFromCMS(
    params.entryId,
    locale,
    !!preview
  );

  console.log(rawContent);
  // Returns an object with content.en properties directly inside of it!

  const shopstoryClient = new ShopstoryClient(shopstoryConfig, {
    locale,
    sanity: { preview },
  });
  const renderableContent = shopstoryClient.add(rawContent);
  const meta = await shopstoryClient.build();

  return {
    props: { renderableContent, meta },
    revalidate: 10,
  };
};

async function fetchShopstoryContentJSONFromCMS() {
  const entryIdQuery =
    preview && !entryId.startsWith('drafts.') ? `drafts.${entryId}` : entryId;

  const documents = await sanityClient.fetch(
    `*[_id == "${entryIdQuery}"]{"content":content.${locale}}`
  );

  if (documents.length === 0) {
    // Handle the case when no matching document is found
    // entryId = _id of the Shopstory Block inside Sanity Studio
    throw new Error('No matching document found');
  }

  return documents[0].content;
}

export default ShopstoryBlockPage;
