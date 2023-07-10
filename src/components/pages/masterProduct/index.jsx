/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getDetailProduct, getProduct } from "./_redux/action";
import useRegularHooks from "../../../utils/hooks";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import {
  ModalAddProduct,
  ModalDeleteProduct,
  ModalEditProduct,
} from "./component";
import { IconContext } from "react-icons";

const MasterProduct = () => {
  const column = [
    "Action",
    "No",
    "Code",
    "Product Name",
    "Description",
    "Qty",
    "Price",
  ];

  const [showModal, showModalSet] = useState({
    add: false,
    edit: false,
    delete: false,
  });

  const { refresh, dispatch, reduxState } = useRegularHooks();

  const getDataMasterProduct = reduxState.product;
  const masterProduct = getDataMasterProduct.product ?? [];

  const handleModalEdit = () =>
    showModalSet({ ...showModal, edit: !showModal.edit });
  const handleModalAdd = () =>
    showModalSet({ ...showModal, add: !showModal.add });
  const handleModalDelete = () =>
    showModalSet({ ...showModal, delete: !showModal.delete });

  useEffect(() => {
    const fetchData = () => {
      dispatch(getProduct());
    };
    fetchData();
  }, [showModal, refresh]);

  return (
    <>
      <ModalEditProduct show={showModal.edit} handleModal={handleModalEdit} />
      <ModalAddProduct show={showModal.add} handleModal={handleModalAdd} />
      <ModalDeleteProduct
        show={showModal.delete}
        handleModal={handleModalDelete}
      />

      <div className="d-flex flex-column">
        <div className="mb-2">
          <Button
            variant="primary"
            size="sm"
            className="d-flex align-items-center gap-2 float-end"
            onClick={handleModalAdd}
          >
            <FaPlus />
            Add New
          </Button>
        </div>
        <Table responsive striped borderless hover>
          <thead>
            <tr>
              {column.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {masterProduct?.map((p, index) => (
              <tr key={p.id}>
                <td className="d-flex gap-3 justify-content-center">
                  <span
                    role="button"
                    onClick={() => {
                      dispatch(getDetailProduct(p.id));
                      handleModalEdit();
                    }}
                  >
                    <FaPen />
                  </span>
                  <span
                    role="button"
                    onClick={() => {
                      dispatch(getDetailProduct(p.id));
                      handleModalDelete();
                    }}
                  >
                    <IconContext.Provider value={{ color: "red" }}>
                      <FaTrash />
                    </IconContext.Provider>
                  </span>
                </td>
                <td>{index + 1}</td>
                <td>{p.code}</td>
                <td>{p.productName}</td>
                <td>{p.description}</td>
                <td>{p.qty}</td>
                <td>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MasterProduct;
