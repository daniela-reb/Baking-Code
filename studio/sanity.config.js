import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas/index.js'

export default defineConfig({
  name: 'default',
  title: 'Baking Recipes CMS',
  projectId: 'ttdrbacm',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})