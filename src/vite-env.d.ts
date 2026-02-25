/// <reference types="vite/client" />

// vite-imagetools type declarations for specific query patterns
declare module '*?w=640&format=webp' {
  const src: string;
  export default src;
}

declare module '*?w=1024&format=webp' {
  const src: string;
  export default src;
}

declare module '*?w=1920&format=webp' {
  const src: string;
  export default src;
}

declare module '*?w=640&format=avif' {
  const src: string;
  export default src;
}

declare module '*?w=1024&format=avif' {
  const src: string;
  export default src;
}

declare module '*?w=1920&format=avif' {
  const src: string;
  export default src;
}

// Generic pattern for any width/format combination
declare module '*&format=webp' {
  const src: string;
  export default src;
}

declare module '*&format=avif' {
  const src: string;
  export default src;
}

// Srcset patterns
declare module '*&as=srcset' {
  const srcset: string;
  export default srcset;
}

// Generic imagetools catch-all
declare module '*?imagetools' {
  const output: unknown;
  export default output;
}
