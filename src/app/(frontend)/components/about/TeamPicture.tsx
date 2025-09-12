import Image from 'next/image';

interface TeamPictureProps {
    src: string;
    alt: string;
    caption: string;
}

export default function TeamPicture({ src, alt, caption }: TeamPictureProps) {
    return (
        <figure className='relative'>
            <Image src={src} alt={alt} width={600} height={400} className='h-auto w-full shadow-md' />
            <figcaption className='mt-2 text-center text-lg xl:text-left'>{caption}</figcaption>
        </figure>
    );
}
