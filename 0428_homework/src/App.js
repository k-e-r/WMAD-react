import ChallengeA from './challenges/ChallengeA';
import ChallengeB from './challenges/ChallengeB';
import ChallengeC from './challenges/ChallengeC';
import ChallengeD from './challenges/ChallengeD';
import { ComponentB } from './challenges/ChallengeE/ComponentB';
import { ComponentC } from './challenges/ChallengeE/ComponentC';
import { ComponentD } from './challenges/ChallengeE/ComponentD';

function App() {
  return (
    <>
      {/* <ChallengeA />
      <ChallengeB />
      <ChallengeC />
      <ChallengeD /> */}
      <ComponentB />
      <ComponentC />
      <ComponentD />
    </>
  );
}

export default App;
