import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import{Label,Btn,Title} from './contact-form.styled'

const FormSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.number()
  .min(7, 'Too Short!').required('This field is required!'),
})
export const ContactForm =({addContact}) =>{ 
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}  
 
    onSubmit={(values, actions) => {
      addContact(values)
      actions.resetForm();        
      }} 
    >
      <Form>
      <Label htmlFor="name"><Title>Name</Title>
          <Field name="name" placeholder="name" />
      </Label>
      <Label htmlFor="number"><Title>Number</Title>
          <Field type="tel" name="number" placeholder="tel" />
      </Label>
    <Btn  type="submit">Add contact</Btn>
      </Form>
    </Formik>)
};
    




