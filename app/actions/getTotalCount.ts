import { db } from '@/lib/db';

export default async function GetTotalCount() {
  const data = await db.total.findMany();
  return data;
}
