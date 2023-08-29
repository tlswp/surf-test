import classNames from 'classnames';

/**
 *  @typedef {Object} InputProps
 *  @property {boolean} isDisable
 *  @property {any} inputRef
 *
 *  @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputProps} props
 */
const Input = ({ className, inputRef, ...rest }) => {
  return (
    <input
      ref={inputRef}
      className={classNames(
        'h-11 p-3.5 bg-white rounded-[10px] border border-gray-400 justify-start items-center gap-2.5 inline-flex text-black font-brandFont text-base leading-none',
        className
      )}
      {...rest}
    />
  );
};

export default Input;
