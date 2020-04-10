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
                  buildHookId: '5e902bf03c0e438eb200d89a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sncdi1me',
                  apiId: '0050ec1a-8513-4e7f-bb59-b400bb392994'
                },
                {
                  buildHookId: '5e902bf087476806bc36c289',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-99fn7pd2',
                  apiId: '1596913e-e0d0-4046-882d-40f5fa55a62c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GradleD/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-99fn7pd2.netlify.com', category: 'apps'}
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
