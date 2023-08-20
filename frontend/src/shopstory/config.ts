import type { Config } from '@shopstory/core'
import { sanityPlugin } from '@shopstory/sanity'
import sanityConfig from '../../../studio/sanity.config'

export const shopstoryConfig: Config = {
  // ...
  plugins: [
    sanityPlugin({
      //@ts-ignore
      dataset: sanityConfig.dataset,
      //@ts-ignore
      projectId: sanityConfig.projectId,
      //@ts-ignore
      token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    }),
  ],
}
