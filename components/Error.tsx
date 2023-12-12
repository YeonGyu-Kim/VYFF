export default function Error({ children }: { children: React.ReactNode }) {
  return <div className='text-red-400 mt-2 text-sm'>{children}</div>;
}
