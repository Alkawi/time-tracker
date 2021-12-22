import Form from './Form';

export default {
  title: 'Component/Form',
  component: Form,
};

export const FormExample = (): JSX.Element => <Form onSubmit={console.log} />;
