import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { FC } from 'react';


interface pageProps {};

const page = async ({}) => {
  const session = await getServerSession(authOptions)
  return <pre></pre>

};

export default page;