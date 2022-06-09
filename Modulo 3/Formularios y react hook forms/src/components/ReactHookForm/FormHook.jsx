import React from "react";
import { useForm } from "react-hook-form";

function FormHook() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control"{...register("Nombre", { required: true, maxLength: 20 })} placeholder="nombre"/>
      {errors.Nombre?.type === 'required' && (<p>"First name is required"</p>)}
      <input {...register("Apellido", { pattern: /^[A-Za-z]+$/i })} placeholder="apellido" />
      <input type="number" {...register("Edad", { min: 18, max: 999})} placeholder="edad" />
      <input type="submit" />
    </form>
  )
}

export default FormHook