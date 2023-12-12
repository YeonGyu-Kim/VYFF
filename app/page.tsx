import UserForm from '@/components/UserForm';
import MainPage from '@/components/Main';
import getCurrentUser from './actions/getCurrentUser';

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <main>
      {currentUser ? <MainPage /> : <UserForm currentUser={currentUser} />}
    </main>
  );
}
