import AddForm from "../components/AddForm.tsx"

interface Props {
    onAdd: (newItem: string) => void
}

export default function AddPage({onAdd}: Props) {
    const handleAdd = (newItem: string) => {
        console.log("add")

        onAdd(newItem)
    }

    return (
        <>
            <AddForm onAdd={handleAdd}/>
        </>
    )
}
