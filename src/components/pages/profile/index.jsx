/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { editProfile } from "./_redux/action";
import useRegularHooks from "../../../utils/hooks";

const ProfilePage = () => {
  const { dispatch, reduxState } = useRegularHooks();

  const getDataUser = reduxState.user;
  const userData = getDataUser.userData ?? {};

  const [isEnable, isEnableSet] = useState({
    edit: false,
  });

  const initForm = {
    name: "",
    address: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: initForm,
  });

  const [showPassword, showPasswordSet] = useState(false);

  const toggleShowPassword = () => showPasswordSet(!showPassword);

  const handleBirthDate = (e) => {
    const { value } = e.target;
    // setValue('birthDate', moment(value).format('DD-MM-YYYY'))
    setValue("birthDate", value);
  };

  const onSubmit = async (data) => {
    await dispatch(
      editProfile(
        data.email,
        data.password,
        userData.role,
        data.name,
        data.gender,
        data.birthDate,
        data.address,
        userData.id
      )
    );
  };

  const handleEdit = () => isEnableSet({ ...isEnable, edit: !isEnable.edit });

  useEffect(() => {
    setValue("address", userData.address);
    setValue("email", userData.email);
    setValue("name", userData.name);
    // setValue("password", initForm.password);
    setValue("birthDate", userData.birthDate);
    setValue("gender", userData.gender);
  }, [userData]);

  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ height: "100vh" }}
    >
      <Form
        onSubmit={handleSubmit(onSubmit)}
        // className="position-absolute top-50 start-50 translate-middle"
      >
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Name</Form.Label>
          <Form.Control
            {...register("name")}
            type="text"
            name="name"
            required
            disabled={!isEnable.edit}
          />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Email</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            name="email"
            required
            disabled={!isEnable.edit}
          />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Password</Form.Label>
          <InputGroup className="p-0">
            <Form.Control
              {...register("password")}
              type={showPassword ? "text" : "password"}
              name="password"
              required
              disabled={!isEnable.edit}
            />
            <InputGroup.Text id="basic-addon2" className="pe-auto">
              <span role="button" onClick={toggleShowPassword}>
                {!showPassword && <FaEye />}
                {showPassword && <FaEyeSlash />}
              </span>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Gender</Form.Label>
          <Form.Check className="d-flex gap-3">
            <Form.Check.Input
              {...register("gender")}
              type="radio"
              name="gender"
              id="gender-male"
              value="male"
              required
              disabled={!isEnable.edit}
            />
            <Form.Check.Label className="text-start">Male</Form.Check.Label>
          </Form.Check>
          <Form.Check className="d-flex gap-3">
            <Form.Check.Input
              {...register("gender")}
              type="radio"
              name="gender"
              id="gender-female"
              value="female"
              required
              disabled={!isEnable.edit}
            />
            <Form.Check.Label className="text-start">Female</Form.Check.Label>
          </Form.Check>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Birth data</Form.Label>
          <Form.Control
            {...register("birthDate")}
            type="date"
            name="birtDate"
            onChange={(e) => handleBirthDate(e)}
            required
            disabled={!isEnable.edit}
          />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Address</Form.Label>
          <Form.Control
            {...register("address")}
            as="textarea"
            rows={5}
            name="address"
            required
            disabled={!isEnable.edit}
          />
        </Form.Group>
        <div className="d-flex flex-wrap justify-content-end gap-3">
          {!isEnable.edit && (
            <Button type="button" variant="primary" onClick={handleEdit}>
              Edit
            </Button>
          )}
          {isEnable.edit && (
            <Button type="submit" variant="primary">
              Submit
            </Button>
          )}
          {isEnable.edit && (
            <Button type="button" variant="secondary" onClick={handleEdit}>
              Cancel
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default ProfilePage;
