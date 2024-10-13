import Image from "next/image";
import dynamic from 'next/dynamic';

const Userform = dynamic(() => import('@/components/Userform'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Userform />
    </div>
  );
}
