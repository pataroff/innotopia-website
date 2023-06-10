import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defaultDocumentNode} from './defaultDocumentNode'

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
  ],

  schema: {
    types: schemaTypes,
  },
})
