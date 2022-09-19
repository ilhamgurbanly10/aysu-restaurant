
export function BiggerTitle4(props) {
    return <h3 className={"bigger-title-4" + (props.restClassName ? " " + props.restClassName : "") }>{props.children}</h3>
}

export function SmallCursiveTitle(props) {
    return <h4 className={"small-cursive-title" + (props.restClassName ? " " + props.restClassName : "") }>{props.children}</h4>
}

export function NormalText(props) {
    return <p className={"normal-text" + (props.restClassName ? " " + props.restClassName : "") }>{props.children}</p>
}

export function SmallerTitle(props) {
    return <h6 className={"smaller-title" + (props.restClassName ? " " + props.restClassName : "") }>{props.children}</h6>
}

