// Item da galeria de mídia (imagens ou vídeos do jogo)
export interface GalleryItem {
  id: string
  type: 'image' | 'video'
  url: string
}

// Modelo principal de um jogo
export interface Game {
  id: string // ← Mantido como string para compatibilidade com API e Redux
  name: string
  description?: string
  release_date?: string
  prices: {
    old: number
    current: number
    discount?: number
  }
  details?: {
    system: string
    developer: string
    publisher: string
    category: string
    languages: string[]
  }
  media?: {
    cover: string
    thumbnail?: string
    gallery: GalleryItem[]
  }
}
