/**
 *  @typedef {Object} UserPreviewProps
 *  @property {string} name
 *  @property {string} email
 *  @property {string} city
 *  @property {string} img
 *
 * @param {UserPreviewProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> } props
 */

import classNames from 'classnames';

const UserPreview = ({ name, email, city, img, className, ...rest }) => {
  return (
    <div
      className={classNames(
        'h-[63px] justify-start items-start gap-2 inline-flex',
        className
      )}
      {...rest}
    >
      <img
        className="h-[54px] aspect-square rounded-full"
        src={img}
        alt={name}
      />
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch text-gray-400 text-xs font-medium leading-[14.40px]">
          {email}
        </div>
        <div className="w-[193px] grow shrink basis-0 text-neutral-800 text-sm font-medium leading-[16.80px]">
          {name}
        </div>
        <div className="self-stretch text-gray-400 text-xs font-medium leading-[14.40px]">
          {city}
        </div>
      </div>
    </div>
  );
};

export default UserPreview;
