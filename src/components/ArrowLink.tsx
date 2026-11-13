type ArrowLinkProps = {
  href?: string;
  children: string;
  className?: string;
};

export function ArrowIcon() {
  return (
    <svg
      className="arrow-link__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="14"
      viewBox="0 0 43 14"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
      </g>
    </svg>
  );
}

/** Uppercase text link followed by the long arrow ("Button 2" / "Button 4"). */
export function ArrowLink({ href = '#', children, className = '' }: ArrowLinkProps) {
  return (
    <a className={`arrow-link ${className}`.trim()} href={href}>
      <span className="arrow-link__label">{children}</span>
      <ArrowIcon />
    </a>
  );
}
