import SearchUserInput from './components/SearchUserInput/SearchUserInput';
import UserGrid from './components/UserGrid/UserGrid';
import AppShell from './components/AppShell/AppShell';

function App() {
  return (
    <AppShell>
      <div className="w-full max-w-[888px] flex flex-col gap-[40px]">
        <div className="text-neutral-800 text-[26px] font-normal leading-loose">
          Команда организации
        </div>
        <div className="text-neutral-800 text-sm font-medium leading-[16.80px]">
          Владельцы команд могут добавлять участников в команду своей
          организации, добавляя их адреса электронной почты. У них должна быть
          учетная запись на сайте.
        </div>
        <SearchUserInput />
        <UserGrid />
      </div>
    </AppShell>
  );
}

export default App;
