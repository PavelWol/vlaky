import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('gallery', {
    state: () => ({
            selectedImage: null,
        }),
    actions: {
        open(img) {
            this.selectedImage = img
        },
        close() {
            this.selectedImage = null
        }
    }
})