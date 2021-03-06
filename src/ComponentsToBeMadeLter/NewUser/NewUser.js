import React from 'react';

import RegistrationForm from '../../Components/NewUser/NewUser';

const NewUser = (props) => {

  const handleSuccessfulSignup = user => {
    const { history } = props
    history.push('/login')
  }

  return (
    <div className="signupDisplay">
      <div className="signupHeader">
        <h1>
          Become a Grapher
        </h1>
      </div>
      <section className="signupBody">
        <RegistrationForm 
          onSuccessfulSignup={handleSuccessfulSignup}
        />
      </section>
    </div>
  );
}

NewUser.defaultProps = {
  history: {
    push: () => {},
  },
}

export default NewUser;