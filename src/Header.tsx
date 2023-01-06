export interface Props {
    title: string
}

const Header = (props: Props) => {
    return (
        <header>
            <h1 className="header" >
                {props.title}
            </h1>
        </header>
    )
}

export default Header 