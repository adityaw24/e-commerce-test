/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import useRegularHooks from "../../../utils/hooks"
import { getDetailProduct, getProduct } from "../masterProduct/_redux/action"
import { Button, Card } from "react-bootstrap"
import { ModalProductDetail } from "./component"

const ProductPage = () => {
    const {refresh, dispatch, reduxState} = useRegularHooks()

    const [showModal, showModalSet] = useState({
        detail: false
    })

    const getDataProduct = reduxState.product
    const productList = getDataProduct.product ?? []

    const handleModalDetail = () => showModalSet({...showModal, detail: !showModal.detail})

    useEffect(() => {
        const fetchData = () => {
            dispatch(getProduct())
        }
        fetchData()
    }, [refresh])

  return (
    <>
        <ModalProductDetail show={showModal.detail} handleModal={handleModalDetail}/>

        <div className="d-flex flex-wrap gap-5 justify-content-center">
            {productList?.map((p) => 
                <Card key={p.id}>
                    <Card.Img variant="top" src={p.img} height='100vh' />
                    <Card.Body>
                        <Card.Title>{p.productName}</Card.Title>
                        <Card.Text>{p.description}</Card.Text>
                        <Button 
                            variant="primary" 
                            size="sm" 
                            // className="float-end"
                            onClick={() => {
                                dispatch(getDetailProduct(p.id))
                                handleModalDetail()
                            }}
                        >
                            Detail
                        </Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    </>
  )
}

export default ProductPage