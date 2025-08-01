import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('gallery', {
    state: () => ({
        images: [
            { src: '/images/gallery/1.png', alt: 'Historická lokomotiva' },
            { src: '/images/gallery/1.png', alt: 'Pohled ze stanoviště' },
            { src: '/images/gallery/1.png', alt: 'Nádraží při západu slunce' },
            { src: '/images/gallery/1.png', alt: 'Děti nastupují do vlaku' },
            { src: '/images/gallery/1.png', alt: 'Detail kola lokomotivy' },
            { src: '/images/gallery/1.png', alt: 'Vlak projíždí krajinou' }
        ],
        currentZoomIndex: null
    }),

    getters: {
        currentImage(state) {
            return state.images[state.currentZoomIndex]
        }
    },

    actions: {
        openZoom(index) {
            this.currentZoomIndex = index
            document.body.style.overflow = 'hidden'
        },
        closeZoom() {
            this.currentZoomIndex = null
            document.body.style.overflow = ''
        },
        nextImage() {
            if (this.currentZoomIndex < this.images.length - 1) {
                this.currentZoomIndex++
            }
        },
        prevImage() {
            if (this.currentZoomIndex > 0) {
                this.currentZoomIndex--
            }
        }
    }
})