import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [
            {
                id: 1,
                slug: 'prvni-clanek',
                title: 'První článek',
                image: '/images/gallery/1.png',
                content: 'Obsah prvního článku...'
            },
            {
                id: 2,
                slug: 'druhy-clanek',
                title: 'Druhý článek',
                image: '/images/gallery/2.png',
                content: 'Obsah druhého článku...'
            },
        ]
    }),
    getters: {
        getBySlug: (state) => (slug) =>
            state.posts.find((post) => post.slug === slug)
    }
})