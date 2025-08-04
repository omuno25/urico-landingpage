import { Image } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';

export interface SvgIconProps {
  className?: string;
  id: string;
  size?: string;
  alt?: string;
}

const SvgIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => (
  <Image
    className={props.className || ''}
    src={`static/icons/${props.id}.svg`}
    alt={props.alt || metadata.default.altImage}
    width={props.size}
    height={props.size}
  />
);

export default SvgIcon;
