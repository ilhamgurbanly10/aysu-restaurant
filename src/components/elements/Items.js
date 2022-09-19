import { NormalText, SmallerTitle } from "./Titles";

export function PageItem(props) {

    return (
        <div className="mt-4 row w-100 gx-0 mx-auto justify-content-between">
            
            <div className="col">
                <SmallerTitle  restClassName="fw-normal">
                    {props.itemTitle}
                </SmallerTitle>

                <NormalText>
                    {props.itemText}
                </NormalText>
            </div>

            <div className="col-3 ms-5 text-end">
                <SmallerTitle  restClassName="fw-normal d-flex justify-content-between align-items-center">
                    <i className="fa fa-chevron-right small-font"></i> <span>{props.itemPrice}</span>
                </SmallerTitle>
            </div>

        </div>
    )

}