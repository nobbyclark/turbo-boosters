import { Button } from "ui";
import { User } from 'firebase/auth';

interface Props {
  user: User;
}

export default function Web() {
  return (
    <div>
      <h1>Web Bro</h1>
      <Button />
    </div>
  );
}
