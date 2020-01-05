export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e116756bdf2b2a0bb3f73fa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gniaotvu',
                  apiId: 'a89c66b7-b64c-44dc-8864-2f724e1094f2'
                },
                {
                  buildHookId: '5e1167564040ec0451167613',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p7x8ggqn',
                  apiId: 'ea4fdde9-4b46-4b9b-9ed7-d312d9d9a9c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neetish3b/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p7x8ggqn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
