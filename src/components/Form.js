import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

function getModalProperties(formData, setIsLoading) {
  console.log(formData);
  const response = axios
    .post(process.env.REACT_APP_ENDPOINT, { data: formData, headers: {} })
    .then((response) => {
      return response.data;
    })
    .catch((e) => setIsLoading(false));
  return response;
}

export default function Form({ setData, setIsLoading, loading }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setIsLoading(true);
    const response = await getModalProperties(formData, setIsLoading);
    setData(response.data);
    setIsLoading(false);
  };

  const properties = {
    bridge_mass: { name: "Mass [kg/m]", value: 18400 },
    youngs_modulus: { name: "Young's modulus [Pa]", value: 200e9 },
    moment_of_inertia: {
      name: (
        <p>
          Area moment of inertia [m<sup>4</sup>]
        </p>
      ),
      value: 0.61,
    },
    damping_ratio: { name: "Damping ratio [-]", value: 0.005 },
    bridge_length: { name: "Length [m]", value: 42.0 },
    element_size: { name: "Element size [m]", value: 0.1 },
    mode_numbers: { name: "Number of modes [-]", value: 3 },
    train_speed: { name: "Train speed [m/s]", value: 47 },
    hslm_number: { name: "HSLM-train number [1-10]", value: 4 },
  };

  return (
    <form className="flex" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col flex-wrap">
        {Object.entries(properties).map(([propertyName, props]) => {
          return (
            <div className="flex flex-col m-5 text-left">
              <p className="text-black text-xs">{props.name}</p>
              <input
                className="border border-solid p-2 rounded-md text"
                type="text"
                defaultValue={props.value}
                placeholder={props.value}
                {...register(propertyName, {
                  required: "This field is required.",
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
          className="flex bg-gray-700 text-white p-2 rounded-md mb-10"
          type="submit"
          disabled
        >
          {loading ? (
            <BeatLoader color="white" loading={true} size={10} />
          ) : (
            <p>
              Calculate (Won't work because there is no infrastructure left 😥)
            </p>
          )}
        </button>

        <h2>Here is the code if interested 😃</h2>
        <a
          className="underline"
          href="https://github.com/sarahtell/hslm-viewer-backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend code
        </a>
        <a
          className="underline"
          href="https://github.com/sarahtell/hslm-viewer-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend code
        </a>
      </div>
    </form>
  );
}
