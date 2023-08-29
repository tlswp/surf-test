/**
 *
 * @param {React.SVGProps<SVGSVGElement>} props
 *
 */

const PlusIcon = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      {...rest}
    >
      <g clipPath="url(#clip0_0_377)">
        <path
          d="M14 6.66667H7.33333V0H6.66667V6.66667H0V7.33333H6.66667V14H7.33333V7.33333H14V6.66667Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_377">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
