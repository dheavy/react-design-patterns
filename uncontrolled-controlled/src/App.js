import { UncontrolledForm } from './UncontrolledForm';
import { ControlledForm } from './ControlledForm';

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm error={''} onSubmit={
        ({ name, age, hairColor }) => {
          console.log(name, age, hairColor);
        }
      } />
    </>
  );
}

export default App;
