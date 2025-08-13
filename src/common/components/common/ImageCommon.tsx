import Image from 'next/image';
import { CSSProperties } from 'react';

import metadata from '../../../data/metadata.json';

type ImageCommonProps = {
  className?: string;
  src: string;
  alt?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  layout?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  priority?: boolean;
  fetchPriority?: 'auto' | 'high' | 'low';
};

const ImageCommon: React.FC<ImageCommonProps> = (props: ImageCommonProps) => {
  // Check if this is an opening section image that needs object-fit: cover
  const isOpeningImage = props.className?.includes('st-opening-section__image');

  return (
    <div
      className={`w-100 h-auto position-relative flex-shrink-0 ${props.className || ''}`}
    >
      <Image
        src={`/${props.src}`}
        alt={props.alt || metadata.default.altImage}
        style={{
          width: '100%',
          height: isOpeningImage ? '100%' : 'auto',
          objectFit: isOpeningImage ? 'cover' : 'contain',
          ...(props.style ? props.style : {}),
        }}
        width={props.width || 500}
        height={props.height || 300}
        sizes={props.sizes || '100vw'}
        loading={props.loading}
        priority={props.priority}
        fetchPriority={props.fetchPriority}
      />
    </div>
  );
};

export default ImageCommon;
