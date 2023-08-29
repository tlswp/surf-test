import { useDispatch, useSelector } from 'react-redux';
import UserPreview from '../UserPreview/UserPreview';
import XIcon from '../../icons/XIcon';
import { deleteUserById } from '../../features/users/slice';
import Button from '../Button/Button';

const UserGrid = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const saveHandler = () => console.log(users);
  return (
    <div>
      <div className="w-full gap-[30px] grid grid-cols-3">
        {users.map(({ name, email, id, address }) => (
          <div
            key={id}
            className="p-3.5 group/item bg-white rounded-sm border border-gray-200 hover:border-gray-400 flex-col justify-start items-start gap-2.5 inline-flex relative"
          >
            <XIcon
              onClick={() => dispatch(deleteUserById(id))}
              className=" cursor-pointer absolute right-3 group-hover/item:opacity-100 opacity-0 transform"
            />
            <UserPreview
              name={name}
              email={email}
              city={address.city}
              img={`https://picsum.photos/seed/${id}/300`}
            />
          </div>
        ))}
      </div>
      <Button
        onClick={saveHandler}
        className=" px-[100px] py-[12px] text-base mt-[60px]"
      >
        Сохранить
      </Button>
    </div>
  );
};

export default UserGrid;
