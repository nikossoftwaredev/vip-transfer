"use client";

import Calendar from "@/components/Calendar";
import { HTMLInputTypeAttribute } from "react";
import { MdPerson } from "react-icons/md";
import { MdComment } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const initFormData = {
  name: "",
  phone: "",
  email: "",
  comments: "",
  date: "",
};

interface InputFieldProps {
  dataField: keyof typeof initFormData;
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  icon?: React.ReactNode;
  required?: boolean;
  colSpan?: number;
}

const formInputs: InputFieldProps[] = [
  {
    inputType: "text",
    placeholder: "Full name",
    icon: <MdPerson />,
    dataField: "name",
  },
  {
    inputType: "text",
    placeholder: "Email",
    icon: <MdAlternateEmail />,
    dataField: "email",
  },
  {
    inputType: "number",
    placeholder: "Phone number",
    icon: <MdLocalPhone />,
    dataField: "phone",
  },
  {
    inputType: "text-area",
    dataField: "comments",
    placeholder: "Comments",
    icon: <MdComment />,
    colSpan: 2,
  },
];

const Form = () => {
  return (
    <form className="flex flex-col gap-8 card bg-base-300 p-8">
      <Calendar />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 ">
        <span className="col-span-full flex items-center gap-2 input input-bordered">
          <input
            autoComplete="name"
            placeholder="Full Name"
            type="text"
            className="grow w-full"
          />
          <MdPerson />
        </span>
        <select className="select select-bordered max-w-xs">
          <option disabled selected>
            Pick up location
          </option>
          <option>Airport</option>
          <option>Peireus</option>
          <option>Google Api</option>
        </select>
        <select className="select select-bordered  max-w-xs">
          <option disabled selected>
            Drop of location
          </option>
          <option>Airport</option>
          <option>Peireus</option>
          <option>Google Api</option>
        </select>
        <span className="w-full flex items-center gap-2 input input-bordered">
          <input placeholder="Email" type="text" className="grow w-full" />
          <MdAlternateEmail />
        </span>
        <span className="w-full flex items-center gap-2 input input-bordered">
          <input
            placeholder="Phone number"
            type="text"
            className="grow w-full"
          />
          <MdLocalPhone />
        </span>
        <textarea
          placeholder="Comments"
          className="col-span-full textarea textarea-bordered"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Book now!
      </button>
    </form>
  );
};

export default Form;
