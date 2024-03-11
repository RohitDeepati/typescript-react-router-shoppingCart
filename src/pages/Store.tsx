// bootstrap library imports
import { Col, Row } from "react-bootstrap"
// josn items imports
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export const Store = () => {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map((item) => (
                    <Col key={item.id}><StoreItem {...item} /></Col>
                ))}
            </Row>
        </>
    )
}