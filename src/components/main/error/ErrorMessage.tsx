import { useEffect, useState } from "react"

export function ErrorMessage({ error }: { error: Error }) {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        setText(error.message);
        setTimeout(() => {
            setText('');
        }, 2500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {text.length !== 0 && <span className='mb-1 mt-1 text-center font-bold text-red-600 text-md'>{text}</span>}
        </>
    )
}
