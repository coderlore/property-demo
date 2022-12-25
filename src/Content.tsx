export interface Props {
    title: string
    color?: string
}

const Content = (props: Props) => {
    return (
        <section className="title">
            <h3 style={{ color: props.color ? props.color : 'blue' }}>
                {props.title}
            </h3>
            <p>Unit Type</p>
            <p>Average Square Footage</p>
            <p>Range</p>
        </section>
    )
}

export default Content 