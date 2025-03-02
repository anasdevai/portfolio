export const Project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        },
        {
        name: 'link',
        title: 'Link',
        type: 'url',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        }
        },
        {
        name: 'tags',
        title: 'Tags',  
        type: 'array',
        of: [{type: 'string'}],
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',

        },
    ],
}