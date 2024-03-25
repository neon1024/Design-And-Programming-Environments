export default function AddForm() {
    return (
        <form className="position-absolute top-50 start-50 translate-middle boder rounded">
            <input id="input-value" name="value" placeholder="..." />
            <button className="border rounded" type="button">add</button>
        </form>
    );
}
