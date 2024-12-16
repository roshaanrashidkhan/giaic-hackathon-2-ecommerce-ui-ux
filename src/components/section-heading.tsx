interface Props {
    heading: string,
    css?: string
}

export default function HeadingSection({heading, css}:Props) {
    return (
        <>
            <h2 className={css + " text-xl text-center tracking-[0.2px]"}>{heading}</h2>
        </>
    );
};