import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className ="container">
    <div className="row">
        <div className='col-10 mx-auto text-center text-title pt-5'>
            <form action="/sign-up" method="post">
                <h1> Sign Up Form</h1>
                <input className="box" type="text" name="firstName" id="firstName" placeholder="First Name" required/>
                <br></br>
                <input className="box" type="text" name="lastName" id="lastName" placeholder="Last Name" required/>
                <br></br>
                <input className="box" type="email" name="email" id="email"
                placeholder="E-mail" required/> <br></br>
                
                <input className="box" type="password" name="password"
                id="password" placeholder="Password" required/> 
                <br></br>
                <br></br>

                <input type="submit" id = "submitDetails"
                name="submitDetails" value="Submit"/> <br></br>
            </form>
            {/* <a href="view-feedbacks">View Feedbacks</a> */}
        </div>
    </div>
</div>
        );
    }
}

export default SignUp;
