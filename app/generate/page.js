//Responsible for generating flash cards

'use client'

export default function Generate() {
    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState({})
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)

    const router = useRouter()
    // ... (rest of the component)

    const handleSubmit = async () => {
        // We'll implement the API call here
        fetch('api/generate',{
            method: 'POST',
            body:text,
        } )
        .then((res) => res.json())
        .then(data > setFlashcards(data))
    }


    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    const handleOpen =() => {
        setOpen(true)
    }

    const handleClose =() => {
        setOpen(false)
    }

    const saveFlashcards = async () => {
        if (!name) {
            alert('Please enter a name for your flashcard set.')
            return
        }
    }

    const batch = writeBatch(db)


    

}