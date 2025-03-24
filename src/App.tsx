import { Signin } from './Signin'
import { Signup } from './Signup'

export function Demo() {
   const onSubmit = (data) => console.log('Signin data', data)
  return (
    <>
    <Signin onSubmit={onSubmit} />
    <Signup onSubmit={onSubmit} />
    </>
    
  );
}
