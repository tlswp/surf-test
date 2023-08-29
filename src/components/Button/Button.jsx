import classNames from 'classnames';

/**
 *  @param {React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> } props
 */
const Button = ({ className, ...rest }) => {
  return (
    <button
      className={classNames(
        'bg-sky-400 rounded-[10px] border justify-start items-center gap-2 inline-flex text-white border-none disabled:opacity-75 disabled:cursor-not-allowed',
        className
      )}
      {...rest}
    />
  );
};

export default Button;
