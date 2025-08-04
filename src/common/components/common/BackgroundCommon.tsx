import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { CSSProperties } from 'react';

import metadata from '../../../data/metadata.json';

type BackgroundCommonProps = {
  className?: string;
  src: string;
  alt?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  style?: CSSProperties;
  zIndex?: number;
  quality?: number;
  placeholder?: PlaceholderValue;
};

const BackgroundCommon: React.FC<BackgroundCommonProps> = (
  props: BackgroundCommonProps,
) => {
  const convertImage = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return (
    <Image
      fill
      className={`${props.className || ''}`}
      src={`/${props.src}`}
      alt={`${props.alt || metadata.default.altImage}`}
      placeholder={`${props.placeholder || 'blur'}`}
      sizes={`${props.sizes || '100vw'}`}
      quality={`${props.quality || 100}`}
      style={{
        objectFit: 'cover',
        zIndex: props.zIndex !== undefined ? props.zIndex : -1,
        ...(props.style ? props.style : {}),
      }}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        convertImage(700, 475),
      )}`}
      loading={props.loading}
    />
  );
};

export default BackgroundCommon;
