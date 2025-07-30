import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [
            {
                id: 1,
                slug: 'prvni-clanek',
                title: 'První článek',
                date: '12. března 2025, Gabriela Slezáčková',
                image: '/images/gallery/1.png',
                content: `
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    `,
                last: `
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    `
            },
            {
                id: 2,
                slug: 'druhy-clanek',
                title: 'Druhý článek',
                date: '9. března 2025, Gabriela Slezáčková',
                image: '/images/gallery/2.png',
                content: 'Obsah druhého článku...'
            },
            {
                id: 3,
                slug: 'treti-clanek',
                title: 'Třetí článek',
                date: '6. března 2025, Gabriela Slezáčková',
                image: '/images/gallery/3.png',
                content: 'Obsah třetího článku...'
            },
        ]
    }),
    getters: {
        getBySlug: (state) => (slug) =>
            state.posts.find((post) => post.slug === slug)
    }
})