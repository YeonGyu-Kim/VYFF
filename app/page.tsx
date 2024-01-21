import UserForm from '@/components/UserForm';
import MainPage from '@/components/Main';
import getCurrentUser from './actions/getCurrentUser';

export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log(currentUser);

  return (
    <>
      {currentUser ? (
        <MainPage currentUser={currentUser} />
      ) : (
        <UserForm currentUser={currentUser} />
      )}
    </>
  );
}
