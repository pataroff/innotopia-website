import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defaultDocumentNode} from './defaultDocumentNode'
// Add Shopstory plugin
import {shopstory} from '@shopstory/sanity'
import {mediaAssetSource} from 'sanity-plugin-media'
// Icon Picker
import {iconPicker} from 'sanity-plugin-icon-picker'

const SITE_URL = 'http://localhost:3000' // root URL of your site

export default defineConfig({
  name: 'default',
  title: 'innotopia-sanity-cms',

  projectId: 'z7s13b6m',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool(),
    shopstory({
      accessToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X2lkIjoiMjkxZWM2MzEtNjM1My00YjhhLTkxYzgtN2M3ZTUxNmZlMWM0IiwianRpIjoiZGVkMGZiM2YtZDFmNC00NjQ5LWEyNTQtNTZjMTJiNDUzMzE0IiwiaWF0IjoxNjg2MTE4Nzg2fQ.3Vf0-B8GWYHNcSH6rnnCRxz5L4gTrsceeyUN2ITYw0c',
      canvasUrl: `${SITE_URL}/shopstory-canvas`,
      locales: [
        {
          code: 'en',
          isDefault: true,
        },
        {
          code: 'nl',
          fallback: 'en',
        },
      ],
      assetSource: mediaAssetSource,
    }),
    iconPicker(),
  ],

  schema: {
    types: schemaTypes,
  },
})
