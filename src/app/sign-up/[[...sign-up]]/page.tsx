import SignUpWrapper from './SignUpWrapper';

export const runtime = 'edge';
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ 'sign-up': [] }];
}

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUpWrapper />
    </div>
  );
}
