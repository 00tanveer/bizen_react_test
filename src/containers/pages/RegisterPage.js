import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import theme from '../../styles/styles';

class RegisterPage extends Component {

    render(){

        const StyledForm = styled.div`
            > .formContainer {
                //position: relative;
                max-width: 600px;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 0;
                font-family: 'Lato', sans-serif;

                > .pageTitle{
                    font-size: 1.4rem;
                    text-align: center;
                    flex: 1;
                    display: flex;
                    width: 100%;
                    border-bottom: 0.5px solid rgba(1,1,1,.1);

                    > p {
                        margin: auto;
                    }
                }

                > form {
                    flex: 8;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 2rem;

                    *::placeholder {
                        opacity: .3;
                    }
                    > .row {
                        flex: 1;
                        width: 100%;
                        * {
                            width: 100%;
                        }
                        
                        > label {
                            display: block;
                            font-size: 1.3rem;
                            margin-bottom: 0.4rem;
                        }
                        > input {
                            height: 3rem;
                            padding: 0.8rem;
                            border-style: solid;
                            border-radius: 4px;
                        }
                    }

                    > .signIn {
                        width: 100%;
                        height: 3rem;
                        background-color: ${props => props.theme.buttonColor};
                        border-style: none;
                        border-radius: 3px;
                        color: white;
                        margin-top: 2rem;
                    }
                   
                }

                > .loginLink {
                    flex: 3;
                    width: 100%;
                    display: flex;
                    
                    > .login {
                        margin: 55% auto auto auto;
                        text-decoration: none;
                        font-size: 1.2rem;
                        color: ${props => props.theme.clickableTextColor};
                    }
                }                
            }
        `

        return(
            <ThemeProvider theme={theme}>
                <StyledForm>
                    <div className="formContainer">
                        <div className="pageTitle">
                            <p>Register with SeeBiz</p>
                        </div>

                        <form>
                            <div className="row">
                                <label for="businessName">Business Name</label>
                                <input id="businessName" placeholder="Business Name" />
                            </div>
                            <div className="row">
                                <label for="email">Email</label>
                                <input id="email" placeholder="Email" />
                            </div>
                            <div className="row">
                                <label for="password">Password</label>
                                <input id="password" placeholder="Password" />
                            </div>

                            <div className="row">
                                <label for="confirmPassword"> Confirm Password</label>
                                <input id="confirmPassword" placeholder="Confirm Password" />
                            </div>
                            <input className="signIn" type="submit" value="Next" />
                        </form>
                        <div className="loginLink">
                            <Link className="login" to="/">Already have an account? Log In</Link>
                        </div>
                    </div>

                </StyledForm>
            </ThemeProvider>
        );
    }
}

export default RegisterPage;