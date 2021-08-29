import { useState } from "react";

function useForm() {
  const [state, setState] = useState();

  const onChange = (e) => {
    const { name, value } = e.target;

    setState((state) => ({ ...state, [name]: value }));
  };

  return { onChange, formState: state };
}

export default useForm;
