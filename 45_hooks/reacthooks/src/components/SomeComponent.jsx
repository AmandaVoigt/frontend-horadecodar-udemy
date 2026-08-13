import { forwardRef, useRef, useImperativeHandle } from "react";

const SomeComponent = forwardRef((props, ref) => {
  const localImputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localImputRef.current.value.length > 3) {
          localImputRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localImputRef} />
    </div>
  );
});

export default SomeComponent;
