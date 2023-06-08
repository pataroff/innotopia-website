import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'z7s13b6m',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-08',
})
