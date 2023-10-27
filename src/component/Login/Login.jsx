import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {googleSignin} = useContext(AuthContext)
    const {createUser} = useContext(AuthContext)

    const handleGoogle = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value ;
        const password = form.password.value ;
        console.log(email, password)

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
           
        })
        .catch(error =>{
            console.error(error)
        })

       
    }
    const handleGoogleLogin = () =>{
      googleSignin(GoogleAuthProvider)
      .then(res =>{
        res.user

      } )
      .catch(error =>{
        console.error(error)
      })
    }

    return (
        <div className="hero min-h-screen my-12 bg-gray-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center l">
            
            {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className='text-3xl font-medium text-center mt-4'>Login Now </h2>
            
            <form onSubmit={handleGoogle} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
              <div className='login-btn'>
                <button type='button' onClick={handleGoogleLogin}>Google</button>

              </div>
            </form>
            <p className='text-center'>Do not have an account <Link to="/register"><span className='text-center font-bold'>Register</span></Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;