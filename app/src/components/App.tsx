import Router from "./Router.tsx"

export default function App() {
    window.addEventListener("beforeunload", () => {
        window.localStorage.clear();
    })

    return (
        <>
            <Router/>
        </>
    )
}