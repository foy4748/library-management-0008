"use client";

import { registerUser } from "@/actions/userActions";

function RegisterForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const _form = e.currentTarget;
      const form = _form.elements as typeof _form.elements & {
        email: HTMLInputElement;
        password: HTMLInputElement;
      };
      const email = form.email.value;
      const password = form.password.value;
      const user = await registerUser(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input id="email" type="email" name="email" />
      <input id="password" type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
