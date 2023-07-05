import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useState } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { loginRequest } from './_redux/action'

const Login = () => {
  const dispatch = useDispatch()

  const validation = yup
    .object({
      email: yup.string().required('Please enter a valid email'),
      password: yup.string().required('Please enter a valid password')
    })
    .required()

  const initForm = {
    email: '',
    password: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validation),
    defaultValues: initForm
  })

  const [showPassword, showPasswordSet] = useState(false)

  const toggleShowPassword = () => showPasswordSet(!showPassword)

  const onSubmit = async (data) => {
    await dispatch(loginRequest(data.email, data.password))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit" variant="primary">
        Sign Up
      </Button>
    </Form>
    // </div>
  )
}

export default Login
