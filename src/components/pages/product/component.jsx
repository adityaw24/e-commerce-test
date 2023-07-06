/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import useRegularHooks from "../../../utils/hooks"
import { createCheckout } from "./_redux/action"
import { getUserID } from "../../../utils"

export const ModalProductDetail = ({show, handleModal}) => {
    // const {id, code, productName, description, qty, price} = data

    const {dispatch, reduxState, handleRefresh, refresh} = useRegularHooks()

    const getDataProduct = reduxState.product
    const {productDetail} = getDataProduct ?? {}
    const idUser = getUserID

    const [qtyNew, qtyNewSet] = useState(1)
    const [totalPrice, totalPriceSet] = useState(productDetail.price)

    const initForm = {
        qty: '',
    }

    const {
        register,
        setValue,
        // formState: { errors }
    } = useForm({
        defaultValues: initForm
    })

    // const totalPrice = totalQty * productDetail?.price

    const onSubmit = () => {
      dispatch(
        createCheckout(
            qtyNew,
            totalPrice,
            productDetail.id,
            idUser,
        )
      )
        handleModal()
        handleRefresh()
    }

    // const handleQty = () => {
    //     if (totalQty <= productDetail?.qty) {
    //         setValue('qty', totalQty+1)
    //     } else if (totalQty > productDetail?.qty)
    // }

    const handleQty = (value) => {
        qtyNewSet(Number(value))
    }

    useEffect(() => {
        totalPriceSet(qtyNew * productDetail.price)
    }, [qtyNew, totalPrice, productDetail])

    useEffect(() => {
        setValue('qty', 1)
        totalPriceSet(productDetail.price)
        qtyNewSet(1)
    }, [refresh, productDetail])

    return (
        <Modal
            show={show}
            onHide={handleModal}
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Detail Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={productDetail?.img} height='100vh' />
            <h4>{productDetail?.productName}</h4>
            <p>{productDetail?.description}</p>
            <div className="mt-3 d-flex justify-content-between">
                <div>
                    <p>
                        {`total price : ${totalPrice}`}
                    </p>
                </div>
                <div>
                    <Form.Label>Quantity</Form.Label>
                    <InputGroup>
                        {/* <InputGroup.Text id="basic-addon2" className="pe-auto">
                            <span role="button" onClick={handleReduceQty}>
                                <FaMinus/>
                            </span>
                        </InputGroup.Text> */}
                        <Form.Control
                            {...register('qty')}
                            type='number'
                            name="qty"
                            required
                            onChange={(e) => {
                                const {value} = e.target
                                handleQty(value)
                            }}
                            // disabled={totalQty === 0 || totalQty > productDetail.qty}
                            // disabled
                        />
                        {/* <InputGroup.Text id="basic-addon2" className="pe-auto">
                            <span role="button" onClick={handleAddQty}>
                                <FaPlus/>
                            </span>
                        </InputGroup.Text> */}
                    </InputGroup>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' size="sm" onClick={onSubmit}>Checkout</Button>
            <Button variant='secondary' size="sm" onClick={handleModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    )
}