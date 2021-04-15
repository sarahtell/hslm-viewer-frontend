import { useForm } from "react-hook-form";
import axios from "axios"


function getModalProperties(formData) {
    console.log(formData);
    const response = axios
    .get('http://127.0.0.1:5000/', {headers: "Bearer 12903109230+9123091" })
    .then(response => {
      return response.data
    })
    return response
}


export default function Form({ setData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (formData) => {

    const data = getModalProperties(formData)

    setData(data);

  }

  const properties = {
    mass: { name: "Massa [kg/m]", value: 19000 },
    youngs_modulus: { name: "E-modul [Pa]", value: 200e9 },
    moment_of_inertia: { name: "Tröghetsmoment [m^4]", value: 0.86 },
    damping_ratio: { name: "Dämpkvot [-]", value: 0.005 },
    length: { name: "Längd [m]", value: 48.0 },
    element_size: { name: "Elementstorlek [m]", value: 0.1 },
    mode_numbers: { name: "Antal moder [-]", value: [1, 2, 3] },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col py-5 space-y-5">
        {Object.entries(properties).map(([propertyName, props]) => {
          return (
            <div className="flex flex-col">
              <p className="text-black text-xs">{props.name}</p>

              <input
                className="border border-solid rounded-md"
                type="text"
                value={props.value}
                placeholder={props.value}
                {...register(propertyName, {
                  required: "Fält måste vara ifyllt.",
                })}
              />

              {errors[propertyName] ? (
                <p className="text-red-500 text-xs">
                  {errors[propertyName].message}
                </p>
              ) : null}

            </div>
          );
        })}

        <button
          className="bg-green-500 text-white p-2 rounded-md"
          type="submit"
        >
          Beräkna
        </button>
      </div>
    </form>
  );
}
