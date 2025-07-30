export const useGalleryStore = defineStore('gallery', {
    state: () => ({
        selectedIndex: null,
        images: [
            { src: '/images/gallery/1.png', caption: 'První obrázek' },
            { src: '/images/gallery/2.png', caption: 'Druhý obrázek' },
            { src: '/images/gallery/3.png', caption: 'Třetí obrázek' },
            { src: '/images/gallery/4.png', caption: 'Čtvrtý obrázek' },
            { src: '/images/gallery/1.png', caption: 'Pátý obrázek' },
            { src: '/images/gallery/2.png', caption: 'Šestý obrázek' },
        ]
    }),
    getters: {
        selectedImage: (state) =>
            state.selectedIndex !== null ? state.images[state.selectedIndex] : null
    },
    actions: {
        open(index) {
            this.selectedIndex = index
        },
        close() {
            this.selectedIndex = null
        },
        next() {
            if (this.selectedIndex === null) return
            this.selectedIndex = (this.selectedIndex + 1) % this.images.length
        },
        prev() {
            if (this.selectedIndex === null) return
            this.selectedIndex =
                (this.selectedIndex - 1 + this.images.length) % this.images.length
        }
    }
})