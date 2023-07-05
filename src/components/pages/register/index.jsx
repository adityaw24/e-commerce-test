import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useState } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { registerUser } from './_redux/action'

const Register = () => {
  const dispatch = useDispatch()

  const validation = yup
    .object({
      name: yup.string().required('Please enter a valid name'),
      address: yup.string().required('Please enter a valid address'),
      email: yup.string().required('Please enter a valid email'),
      password: yup
        .string()
        .required('Please enter a valid password'),
      birthDate: yup.string().required('Please enter a valid date')
    })
    .required()

  const initForm = {
    name: '',
    address: '',
    email: '',
    password: '',
    birthDate: ''
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validation),
    defaultValues: initForm
  })

  const [showPassword, showPasswordSet] = useState(false)

  const toggleShowPassword = () => showPasswordSet(!showPassword)

  const handleBirthDate = (e) => {
    const { value } = e.target
    // setValue('birthDate', moment(value).format('DD-MM-YYYY'))
    setValue('birthDate', value)
  }

  const onSubmit = async (data) => {
    await dispatch(
      registerUser(
        data.email,
        data.password,
        data.name,
        data.gender,
        data.birthDate,
        data.address
      )
    )
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ height: '100vh' }}
    >
      <Form
        onSubmit={handleSubmit(onSubmit)}
        // className="position-absolute top-50 start-50 translate-middle"
      >
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Name</Form.Label>
          <Form.Control
            {...register('name')}
            type="text"
            name="name"
            required
            //   value={values.firstName}
            //   onChange={handleChange}
            //   isValid={touched.firstName && !errors.firstName}
          />
          {errors.name && (
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Email</Form.Label>
          <Form.Control
            {...register('email')}
            type="email"
            name="email"
            required
            //   value={values.firstName}
            //   onChange={handleChange}
            //   isValid={touched.firstName && !errors.firstName}
          />
          {errors.email && (
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Password</Form.Label>
          <InputGroup className="p-0">
            <Form.Control
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              //   value={values.firstName}
              //   onChange={handleChange}
              //   isValid={touched.firstName && !errors.firstName}
            />
            <InputGroup.Text id="basic-addon2" className="pe-auto">
              <span role="button" onClick={toggleShowPassword}>
                {/* <FaEyeSlash/> */}
                {!showPassword && <FaEye />}
                {showPassword && <FaEyeSlash />}
              </span>
            </InputGroup.Text>
          </InputGroup>
          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Gender</Form.Label>
          <Form.Check className="d-flex gap-3">
            <Form.Check.Input
              {...register('gender')}
              type="radio"
              name="gender"
              id="gender-male"
              value="male"
              required
            />
            <Form.Check.Label className="text-start">
              Male
            </Form.Check.Label>
          </Form.Check>
          <Form.Check className="d-flex gap-3">
            <Form.Check.Input
              {...register('gender')}
              type="radio"
              name="gender"
              id="gender-female"
              value="female"
              required
            />
            <Form.Check.Label className="text-start">
              Female
            </Form.Check.Label>
          </Form.Check>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">
            Birth data
          </Form.Label>
          <Form.Control
            {...register('birthDate')}
            type="date"
            name="birtDate"
            onChange={(e) => handleBirthDate(e)}
            required
            //   value={values.firstName}
            //   onChange={handleChange}
            //   isValid={touched.firstName && !errors.firstName}
          />
          {/* <DatePicker
        // showIcon
        // selected={startDate}
        // onChange={(date) => setStartDate(date)}
        /> */}
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="text-start p-0">Address</Form.Label>
          <Form.Control
            {...register('address')}
            as="textarea"
            rows={5}
            name="address"
            required
          />
          {errors.address && (
            <Form.Control.Feedback type="invalid">
              {errors.address?.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}

export default Register
