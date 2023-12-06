import UserForm from '@/components/Form';
import MainPage from '@/components/Main';
import getCurrentUser from './actions/getCurrentUser';

export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log(currentUser);

  return (
    <main>
      {currentUser ? <MainPage /> : <UserForm currentUser={currentUser} />}
    </main>
  );
}
