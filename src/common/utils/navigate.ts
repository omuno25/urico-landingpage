const targets = ['_blank', '_self', '_parent', '_top', 'framename'];

const redirectPageOpenWindow = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  href: string,
  target?: string,
): undefined => {
  e.preventDefault();
  window.open(href, targets.includes(target as string) ? target : targets[0]);
};
export { redirectPageOpenWindow };
