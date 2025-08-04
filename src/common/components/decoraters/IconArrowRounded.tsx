import SvgIcon from '../common/SvgIcon';

export interface IconArrowRoundedProps {
  id: string;
  size?: string;
  className?: string;
  classNameIcon?: string;
}

const className = 'st-icon-arrow-rounded';

const IconArrowRounded: React.FC<IconArrowRoundedProps> = (
  props: IconArrowRoundedProps,
) => {
  return (
    <div
      className={`${className}__wrap ${props.className || ''}`}
      style={{
        height: `${String(Number(props.size || '20') * 3)}px`,
        width: `${String(Number(props.size || '20') * 3)}px`,
      }}
    >
      <SvgIcon
        className={`${className}__wrap__icon`}
        {...props}
        size={props.size}
      />
    </div>
  );
};

export default IconArrowRounded;
