import { useRef, useState } from 'react';
import { useSearchUsersByEmailQuery } from '../../features/users/api';
import Input from '../Input';
import Button from '../Button';
import classNames from 'classnames';
import Backdrop from '../Backdrop/Backdrop';
import UserList from '../UserList/UserList';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/users/slice';
import PlusIcon from '../../icons/PlusIcon';

const SearchUserInput = ({}) => {
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState('');
  const ref = useRef();

  const [isFocused, setIsFocused] = useState('');
  // Получение данных происходит при изменении emailValue, если его значение пустое, то запрос не происходит.
  const { data, isSuccess, isLoading } = useSearchUsersByEmailQuery(
    emailValue,
    {
      skip: emailValue === '',
    }
  );
  const isEmpty = emailValue !== '' && data?.length === 0;
  const isFullfield =
    isSuccess && data.length === 1 && data[0].email === emailValue;
  const isInputError = !isFocused && !isFullfield && emailValue !== '';
  const emailValueHandler = (e) => {
    setEmailValue(e.target.value);
  };
  const submitHandler = () => {
    dispatch(addUser(data[0]));
    setEmailValue('');
    setIsFocused(false);
  };
  const selectHandler = ({ email }) => {
    setEmailValue(email);
    ref.current.focus();
  };
  return (
    <div className="w-full flex-col justify-start items-start gap-2 inline-flex relative">
      {isFocused && <Backdrop onClick={() => setIsFocused(false)} />}
      {/*  Инпут и его лейбл лучше вынести в отдельный компонент, но в рамках тестого задания не критично */}
      <div
        className={classNames(
          'text-sm font-normal leading-[14px] text-left',
          isInputError ? 'text-red-600' : 'text-gray-400'
        )}
      >
        Введите e-mail участника
      </div>
      <div className="w-full flex gap-5">
        <Input
          inputRef={ref}
          className={classNames('w-full relative', {
            'border-green-600': isFullfield,
            'border-red-600': isInputError,
          })}
          value={emailValue}
          onFocus={() => setIsFocused(true)}
          onChange={emailValueHandler}
        />
        <Button
          onClick={submitHandler}
          disabled={!isFullfield}
          className="w-[194px] h-11 px-5 py-[15px] relative"
        >
          <div className="w-3.5 h-3.5 relative">
            <PlusIcon />
          </div>
          <div className="text-white text-sm font-normal leading-[14px] whitespace-nowrap">
            Добавить участника
          </div>
        </Button>
      </div>
      {isFocused && !isFullfield && (
        <UserList
          users={data}
          isEmpty={isEmpty}
          isLoading={isLoading}
          isSuccess={isSuccess}
          onSelect={selectHandler}
        />
      )}
    </div>
  );
};

export default SearchUserInput;
