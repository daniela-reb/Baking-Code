import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ttdrbacm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: 'skRJumjARMxM7bKI2CUFzrobsRF5nrIey3VKzBNSOGXaZMG7SKGuj6xR4MqqlznVjg07A0Bm4R1McfuyLcT8eW9jrNG3mxHAvF5c2lOaQ8b6JEiOEu37asha9QnXrffKb6kan6C6552CJZTwRtsdjUkxII676RKdSblzDYGt2J1eZ9kUKo7W'
})