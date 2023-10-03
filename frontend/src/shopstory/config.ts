import type { Config } from '@shopstory/core'
import { sanityPlugin } from '@shopstory/sanity'
import sanityConfig from '../../../studio/sanity.config'

export const shopstoryConfig: Config = {
  // ...
  plugins: [
    sanityPlugin({
      //@ts-ignore
      // dataset: sanityConfig.dataset,
      dataset: 'production',
      //@ts-ignore
      //projectId: sanityConfig.projectId,
      projectId: 'z7s13b6m',
      //@ts-ignore
      token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    }),
  ],
}
