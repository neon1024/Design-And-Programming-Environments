interface Props {
    onAdd: (newItem: string) => void
}

export default function AddForm({onAdd}: Props) {
    const handleAdd = () => {
        const newItem = GetInputValue().toString().trim();

        onAdd(newItem);
    }

    return (
        <form className="position-absolute top-50 start-50 translate-middle">
            <input id="add-input" name="add" placeholder="value"/>
            <button className="border rounded" onClick={handleAdd} type="button">add</button>
        </form>
    );
}

function GetInputValue() {
    return (document.getElementById("add-input") as HTMLInputElement).value;
}
