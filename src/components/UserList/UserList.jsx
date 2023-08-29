import UserPreview from '../UserPreview/UserPreview';

/**
 *
 * @typedef UserListProps
 * @property {Array} users
 * @property {boolean} isEmpty
 * @property {boolean} isLoading
 * @property {boolean} isSuccess
 * @property {()=>{}} onSelect
 *
 * @param {*} props
 * @returns
 */

const UserList = ({ users, isEmpty, onSelect, isLoading, isSuccess }) => {
  if (isLoading)
    return (
      <div className=" z-10 w-full bg-white p-1.5 rounded-[10px] flex justify-center items-center flex-col  mt-5 h-[250px] overflow-auto absolute -bottom-5 transform translate-y-full">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  if (!isSuccess) return null;
  return (
    <div className=" z-10  w-full bg-white p-1.5 rounded-[10px] flex flex-col  mt-5 h-[250px] overflow-auto absolute -bottom-5 transform translate-y-full">
      {isEmpty ? (
        <div className=" text-gray-400 text-sm font-normal leading-[14px] mt-[100px] w-full text-center">
          Пользователи не найдены
        </div>
      ) : (
        users.map(({ name, email, id, address }) => (
          <div
            key={id}
            className="hover:bg-bg-color rounded-md px-4 pt-2.5 pb-2 cursor-pointer"
            onClick={() => onSelect({ name, email, id, address })}
          >
            <UserPreview
              name={name}
              email={email}
              city={address.city}
              img={`https://picsum.photos/seed/${id}/300`}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
