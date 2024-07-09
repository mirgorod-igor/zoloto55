declare namespace JSX {
    interface IntrinsicElements {
        'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            class
            'slides-per-view'?: number
            speed?: number
            loop?: boolean
            'css-mode'?
            navigation?: boolean
            pagination?: boolean
            scrollbar?: boolean
        }
        'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            lazy?: boolean
        }
    }
  }
  