import { KBLayoutType } from '../../enums/KBLayout'

type Props = {
    char: string | null
}

function Key({ char }: Props) {
    if (char == null) {
        return <span className='m-1 py-0.5 px-1 rounded text-white text-center'>
            {char}
        </span>
    }
    return <span className='bg-zinc-600 m-1 py-0.5 px-1 rounded text-white text-center'>
        {char}
    </span>
}

export default Key
