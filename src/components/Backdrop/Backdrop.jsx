/**
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>} props
 */

const Backdrop = ({ ...rest }) => {
  return (
    <div
      className="w-screen h-screen fixed cursor-pointer top-0 left-0"
      {...rest}
    />
  );
};

export default Backdrop;
