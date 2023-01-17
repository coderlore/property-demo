export interface Props {
    title: string
}

const Header = (props: Props) => {
    return (
        <header className="container-fluid justify-content-start">
            <h1 className="header mt-5 mx-5 d-flex text-start" >
                {props.title}
            </h1>
            <p className="d-flex mx-5 text-start">
                Find your next affordable housing with our easy to find search.
            </p>
        </header>
    )
}

export default Header 