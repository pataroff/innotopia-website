import type { Config } from '@shopstory/core'
import { sanityPlugin } from '@shopstory/sanity'
import sanityConfig from '../../../studio/sanity.config'

export const shopstoryConfig: Config = {
  // ...
  plugins: [
    sanityPlugin({
      dataset: sanityConfig.dataset,
      projectId: sanityConfig.projectId,
      token: process.env.NEXT_PUBLIC_SHOPSTORY_API_TOKEN,
    }),
  ],
}
