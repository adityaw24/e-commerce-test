/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useRegularHooks from "../../../utils/hooks";
import { getDetailProduct } from "../masterProduct/_redux/action";
import { submitOrderProduct } from "./_redux/action";

const CheckoutPage = () => {
  const { dispatch, reduxState } = useRegularHooks();

  const getDataUser = reduxState.user;
  const userData = getDataUser.userData ?? {};

  const getDataProduct = reduxState.product;
  const checkoutProduct = getDataProduct.checkoutProduct ?? {};
  const productDetail = getDataProduct.productDetail ?? {};

  const initForm = {
    address: "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: initForm,
  });

  const onSubmit = async (data) => {
    await dispatch(
      submitOrderProduct(
        checkoutProduct.idProduct,
        checkoutProduct.idUser,
        checkoutProduct.id,
        data.address
      )
    );
  };

  useEffect(() => {
    dispatch(getDetailProduct(checkoutProduct.idProduct));
  }, [checkoutProduct]);

  useEffect(() => {
    setValue("address", userData.address);
  }, [userData]);

  return (
    <div>
      <Row className="mb-3 align-items-center">
        <Col sm={3} md={3} className="text-start">
          <img src={productDetail?.img} height="100vh" />
        </Col>
        <Col className="text-start">
          <h4>{productDetail?.productName}</h4>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="text-start">
          Quantity
        </Col>
        <Col className="text-start">{`: ${checkoutProduct.qty}`}</Col>
      </Row>
      <Row>
        <Col sm={3} className="text-start">
          Total Price
        </Col>
        <Col className="text-start">{`: Rp ${checkoutProduct.price}`}</Col>
      </Row>
      <Row>
        <Col className="text-start">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            // className="position-absolute top-50 start-50 translate-middle"
          >
            <Form.Group className="mb-3">
              <Form.Label className="text-start p-0">
                Shipping Address
              </Form.Label>
              <Form.Control
                {...register("address")}
                as="textarea"
                rows={5}
                name="address"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="float-end">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
