import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div class ="container">
    <div class="row">
        <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
            <form action="/sign_up" method="post">
                <h1> Sign Up Form</h1>
                <input class="box" type="text" name="name" id="name" placeholder="Name" required/>
                <br></br>

                <input class="box" type="email" name="email" id="email"
                placeholder="E-mail" required/> <br></br>

                <input class="box" type="text" name="phone" id="phone"
                placeholder="Phone Number" required/> <br></br>
                
                <input class="box" type="password" name="password"
                id="password" placeholder="Password" required/> 
                <br></br>
                <br></br>

                <input type="submit" id = "submitDetails"
                name="submitDetails" value="Submit"/> <br></br>
            </form>
        </div>
    </div>
</div>
        );
    }
}

export default SignUp;
