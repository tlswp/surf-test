/**
 *
 * @param {React.SVGProps<SVGSVGElement>} props
 *
 */
const XIcon = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8947 1.41L13.4847 0L7.89481 5.59L2.30488 0L0.894897 1.41L6.48483 7L0.894897 12.59L2.30488 14L7.89481 8.41L13.4847 14L14.8947 12.59L9.30479 7L14.8947 1.41Z"
        fill="#212121"
        fillOpacity="0.4"
      />
    </svg>
  );
};

export default XIcon;
