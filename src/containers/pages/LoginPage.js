import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../images/icons/logo.png';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import theme from '../../styles/styles';

class LoginPage extends Component {

    // <TextField placeholder="Email Address" type="email" />
    // <TextField placeholder="Password" type="password" />
    // <a href="#">Forgot Password?</a>
    // <Button>Sign In</Button>
    render(){

        const StyledForm = styled.div`
            > .formContainer{
                position: relative;
                max-width: 600px;
                height: 100%;
                padding: 2rem;
                font-family: 'Lato', sans-serif;

                > img {
                    position: relative;
                    top: 5%;
                    left: 44%;
                    width: 60%;
                    transform: translateX(-40%);
                }

                > form {

                    *::placeholder {
                        opacity: .3;
                    }
                    > .email {
                        position: relative;
                        top: 13rem;
                        width: 100%;
                        height: 3rem;
                        padding: 0.8rem;
                        border-style: solid;
                        border-radius: 4px;
                    }

                    > .password {
                        position: relative;
                        top: 14rem;
                        width: 100%;
                        height: 3rem;
                        padding: 0.8rem;
                        border-style: solid;
                        border-radius: 4px;
                    }

                    > .forgotPassword {
                        position: relative;
                        top: 15rem;
                        display: block;
                        text-align: right;
                        text-decoration: none;
                        font-size: 1.2rem;
                        color: ${props => props.theme.buttonColor}
                    }

                    > .signIn {
                        position: relative;
                        top: 20rem;
                        width: 100%;
                        height: 3rem;
                        background-color: ${props => props.theme.buttonColor};
                        border-style: none;
                        border-radius: 3px;
                        color: white;
                        font-size: 1.5rem;
                    }
                }
                > .register {
                    position: absolute;
                    top: 58rem;
                    right: 50%;
                    transform: translateX(50%);
                    width: 100%;
                    text-align: center;
                    text-decoration: none;
                    font-size: 1.2rem;
                    color: ${props => props.theme.clickableTextColor}
                }
            }
        `

        return(
            <ThemeProvider theme={theme}>
                <StyledForm style={{height: "100vh"}}>
                    <div className="formContainer">
                        <img src={Logo} alt="seebiz logo" />
                        <form>
                            <input className="email" placeholder="Email Address" type="email"/>
                            <input className="password" placeholder="Password" type="password"/>
                            <a className="forgotPassword" href="#">Forgot Password?</a>
                            <input className="signIn"type="submit" value="Sign In"/>
                        </form>
                        <Link className="register" to="/register">Don't have an account? Register</Link>
                    </div>
                </StyledForm>
            </ThemeProvider>
        );
    }
}

export default LoginPage;