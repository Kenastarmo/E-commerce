import React from 'react'

type ImageProps = {
  alt: string,
  src: string,
  width?: number | string,
  height?: number | string
}

const Image = ({ alt, src, width, height }: ImageProps) => {

  const imgStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`
  };

  return (
    <img
      alt={alt}
      src={src}
      className={`w-[${width}px] h-[${height}px]`}
      style={imgStyle}
    ></img>
  )
}

export default Image