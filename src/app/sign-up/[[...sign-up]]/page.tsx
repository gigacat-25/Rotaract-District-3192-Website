import dynamic from 'next/dynamic';

const SignUp = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignUp), { ssr: false });

export const runtime = 'edge';
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ 'sign-up': [] }];
}

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp />
    </div>
  );
}
