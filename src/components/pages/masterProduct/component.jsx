/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { createProduct, deleteProduct, updateProduct } from "./_redux/action"
import { useEffect } from "react"
import useRegularHooks from "../../../utils/hooks"

export const ModalEditProduct = ({show, handleModal}) => {
    // const {id, code, productName, description, qty, price} = data

    const {dispatch, reduxState, handleRefresh} = useRegularHooks()

    const getDataProduct = reduxState.product
    const {productDetail} = getDataProduct ?? {}

    const initForm = {
        productName: '',
        code: '',
        description: '',
        qty: '',
        price: '',
        img: '',
    }

    const {
        register,
        handleSubmit,
        setValue,
        // formState: { errors }
    } = useForm({
        defaultValues: initForm
    })

    const onSubmit = (data) => {
      dispatch(
        updateProduct(
            productDetail.id,
          data.code,
          data.productName,
          data.description,
          data.qty,
          data.price,
          data.img
        )
      )
        handleModal()
        handleRefresh()
    }

    useEffect(() => {
        setValue('code', productDetail?.code)
        setValue('description', productDetail?.description)
        setValue('price', productDetail?.price)
        setValue('productName', productDetail?.productName)
        setValue('qty', productDetail?.qty)
        setValue('img', productDetail?.img)
    }, [productDetail])
    
    return (
        <Modal
            show={show}
            onHide={handleModal}
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
                // onSubmit={handleSubmit(onSubmit)}
                className="m-0"
            >
                <Form.Group as={Row} className="mb-3 m-0">
                    <Form.Label className="text-start p-0">Product Name</Form.Label>
                    <Form.Control
                        {...register('productName')}
                        type="text"
                        name="productName"
                        required
                    />
                </Form.Group>
                <Form.Group as={Row} className="mb-3 m-0">
                    <Form.Label className="text-start p-0">Code Product</Form.Label>
                    <Form.Control
                        {...register('code')}
                        type="text"
                        name="code"
                        required
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group as={Row} className="mb-3 m-0">
                            <Form.Label className="text-start p-0">Qty</Form.Label>
                            <Form.Control
                                {...register('qty')}
                                type="number"
                                name="qty"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Row} className="mb-3 m-0">
                            <Form.Label className="text-start p-0">Price</Form.Label>
                            <Form.Control
                                {...register('price')}
                                type="number"
                                name="price"
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group as={Row} className="mb-3 m-0">
                    <Form.Label className="text-start p-0">Description</Form.Label>
                    <Form.Control
                        {...register('description')}
                        as="textarea"
                        rows={5}
                        name="description"
                        required
                    />
                </Form.Group>
                <Form.Group as={Row} className="mb-3 m-0">
                    <Form.Label className="text-start p-0">URL Image</Form.Label>
                    <Form.Control
                        {...register('img')}
                        type="text"
                        name="img"
                        required
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' size="sm" onClick={handleSubmit(onSubmit)}>Submit</Button>
            <Button variant='secondary' size="sm" onClick={handleModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    )
}

export const ModalDeleteProduct = ({show, handleModal}) => {
    // const {id, code, productName, description, qty, price} = data

    const {dispatch, reduxState, handleRefresh} = useRegularHooks()

    const getDataProduct = reduxState.product
    const {productDetail} = getDataProduct ?? {}

    const onSubmit = () => {
      dispatch(
        deleteProduct(productDetail.id)
      )
        handleModal()
        handleRefresh()
        alert(`Success Delete ${productDetail.productName}`)
    }

    return (
        <Modal
            show={show}
            onHide={handleModal}
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Delete Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
                {`Are you sure want to delete ${productDetail.productName} ?`}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' size="sm" onClick={onSubmit}>Yes</Button>
            <Button variant='secondary' size="sm" onClick={handleModal}>No</Button>
          </Modal.Footer>
        </Modal>
    )
}

export const ModalAddProduct = ({show, handleModal}) => {
    // const {id, code, productName, description, qty, price} = data

    const {dispatch, handleRefresh} = useRegularHooks()

    const initForm = {
        productName: '',
        code: '',
        description: '',
        qty: '',
        price: '',
        img: '',
    }

    const {
        register,
        handleSubmit,
        // setValue,
        // formState: { errors }
    } = useForm({
        defaultValues: initForm
    })

    const onSubmit = (data) => {
      dispatch(
        createProduct(
            // productDetail.id,
          data.code,
          data.productName,
          data.description,
          data.qty,
          data.price,
          data.img
        )
      )
        handleModal()
        handleRefresh()
    }

    // useEffect(() => {
    //     setValue('code', productDetail?.code)
    //     setValue('description', productDetail?.description)
    //     setValue('price', productDetail?.price)
    //     setValue('productName', productDetail?.productName)
    //     setValue('qty', productDetail?.qty)
    // }, [productDetail])
    
    return (
        <Modal
            show={show}
            onHide={handleModal}
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
                // onSubmit={handleSubmit(onSubmit)}
                className="m-0"
            >
                <Form.Group as={Row} className="mb-3 m-0">
                    <Form.Label className="text-start p-0">Product Name</Form.Label>
                    <Form.Control
                        {...register('productName')}
                        type="text"
                        name="productName"
                        required
                    />
                </Form.Group>
                <Form.Group as={Row} className="mb-3 m-0">
                    <Form.Label className="text-start p-0">Code Product</Form.Label>
                    <Form.Control
                        {...register('code')}
                        type="text"
                        name="code"
                        required
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group as={Row} className="mb-3 m-0">
                            <Form.Label className="text-start p-0">Qty</Form.Label>
                            <Form.Control
                                {...register('qty')}
                                type="number"
                                name="qty"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Row} className="mb-3 m-0">
                            <Form.Label className="text-start p-0">Price</Form.Label>
                            <Form.Control
                                {...register('price')}
                                type="number"
                                name="price"
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group as={Row} className="mb-3 m-0">
                    <Form.Label className="text-start p-0">Description</Form.Label>
                    <Form.Control
                        {...register('description')}
                        as="textarea"
                        rows={5}
                        name="description"
                        required
                    />
                </Form.Group>
                <Form.Group as={Row} className="mb-3 m-0">
                    <Form.Label className="text-start p-0">URL Image</Form.Label>
                    <Form.Control
                        {...register('img')}
                        type="text"
                        name="img"
                        required
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' size="sm" onClick={handleSubmit(onSubmit)}>Submit</Button>
            <Button variant='secondary' size="sm" onClick={handleModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    )
}