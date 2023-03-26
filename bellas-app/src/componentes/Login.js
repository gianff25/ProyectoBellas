import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { types } from './variables-globales/InitialReducer';
import { useDispatch } from './variables-globales/initialProvider';

const Login = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    let db = JSON.parse(localStorage.getItem('data'));

    
    const onFinish = (values) => {
        console.log('Success:', values);

        let auth = db.filter((e) => e.name === values.name && e.lastName === values.lastName);

        if( auth.length > 0){
            localStorage.setItem('usuario', JSON.stringify(auth))
            console.log(localStorage.getItem('usuario'));
            localStorage.setItem('logeado', 1);
            dispatch({type: types.authLogin});
            navigate('/');
        }
        else{
            console.log('no coincide')
        }
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                    margin: "20vh 25vw",
                    width: "40vw",
                    position: "absolute"
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="Nombre"
                name="name"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Apellido"
                name="lastName"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>

            </Form>
    )
}
export default Login;