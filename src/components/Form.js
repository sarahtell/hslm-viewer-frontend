import { useForm } from "react-hook-form";
import axios from "axios"
import BeatLoader from "react-spinners/BeatLoader";


function getModalProperties(formData) {
    console.log(formData);
    const response = axios
    .post(process.env.REACT_APP_ENDPOINT, {data: formData, headers: {}})
    .then(response => {
      return response.data
    }).catch(e => console.error(e))
    return response
}


export default function Form({ setData, setIsLoading, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (formData) => {
    setIsLoading(true)
    const response = await getModalProperties(formData)
    setData(response.data);
    setIsLoading(false);

  }

  const properties = {
    bridge_mass: { name: "Massa [kg/m]", value: 18400 },
    youngs_modulus: { name: "E-modul [Pa]", value: 200e9 },
    moment_of_inertia: { name: "Tröghetsmoment [m^4]", value: 0.61 },
    damping_ratio: { name: "Dämpkvot [-]", value: 0.005 },
    bridge_length: { name: "Längd [m]", value: 42.0 },
    element_size: { name: "Elementstorlek [m]", value: 0.1 },
    mode_numbers: { name: "Antal moder [-]", value: 3 },
    train_speed: { name: "Tåghastighet [m/s]", value: 41 },
    hslm_number: { name: "Typ av HSLM-tåg [1-10]", value: 4 },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col py-5 space-y-5">
        {Object.entries(properties).map(([propertyName, props]) => {
          return (
            <div className="flex flex-col">
              <p className="text-black text-xs">{props.name}</p>
      
              <input
                className="border border-solid"
                type="number"
                value={props.value}
                placeholder={props.value}
                {...register(propertyName, {
                  required: "Fält måste vara ifyllt.",
                  valueAsNumber: true,
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
          {loading ? <BeatLoader color={"#333"} loading={true} size={10} /> : <p>Beräkna</p> }
        </button>
      </div>
    </form>
  );
}
