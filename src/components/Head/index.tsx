import NextHead from 'next/head';

interface Props {
    title: string;
}

const Head = ({ title }: Props) => {
    return (
        <NextHead>
            <title>{title}</title>
        </NextHead>
    );
};

export default Head;
