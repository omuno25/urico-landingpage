import Link from 'next/link';
import React from 'react';

import { ImageCommon } from '../common';
import metadata from '../../../data/metadata.json';

const CLASS = 'st-category-strip';

interface Category {
  title: string;
  image: string;
  alt?: string;
  href?: string;
  width?: number | string;
  height?: number | string;
  iconSize?: number;
}
const CategoryStripSection: React.FC<{ className?: string }> = ({
  className,
}) => {
  // Load categories directly from metadata like other sections
  const categories = metadata.sectionCategories || [];

  return (
    <section
      className={`${CLASS} ${className || ''}`.trim()}
      aria-label="Category navigation"
    >
      <div className={`${CLASS}__container`}>
        {categories.map((category: Category, idx: number) => {
          // Individual sizing with fallbacks
          const itemWidth = category.width || 100; // default 100px
          const itemHeight = category.height || 'auto'; // default auto
          const iconSize = category.iconSize || 32; // default 32px

          const itemStyle = {
            width: typeof itemWidth === 'number' ? `${itemWidth}px` : itemWidth,
            height:
              typeof itemHeight === 'number' ? `${itemHeight}px` : itemHeight,
          };

          const content = (
            <div className={`${CLASS}__item`} style={itemStyle}>
              <div className={`${CLASS}__icon-wrap`}>
                <ImageCommon
                  className={`${CLASS}__icon`}
                  src={category.image}
                  alt={category.alt || category.label || 'Category icon'}
                  width={iconSize}
                  height={iconSize}
                />
              </div>
              <div className={`${CLASS}__label`}>{category.title}</div>
            </div>
          );
          return category.href ? (
            <Link
              href={category.href}
              key={`${category.title}-${idx}`}
              className={`${CLASS}__link`}
            >
              {content}
            </Link>
          ) : (
            <div key={`${category.title}-${idx}`} className={`${CLASS}__link`}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryStripSection;
