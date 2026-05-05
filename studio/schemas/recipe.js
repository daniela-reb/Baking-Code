export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'text'
      
    },
    {
      name: 'prepTime',
      title: 'Preparation Time (minutes)',
      type: 'number'
    },
    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: ['Easy', 'Medium', 'Hard']
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    }
  ]
}