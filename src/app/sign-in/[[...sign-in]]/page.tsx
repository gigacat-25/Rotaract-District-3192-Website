import SignInWrapper from './SignInWrapper';

export const runtime = 'edge';
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ 'sign-in': [] }];
}

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignInWrapper />
    </div>
  );
}
