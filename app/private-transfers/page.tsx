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
    inputType: "date",
    dataField: "date",
    placeholder: "Date",
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

export default function PrivateTransfers() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <h2 className="bold text-3xl text-center">Book a transfer.</h2>
      <form className="flex flex-col">
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2">
          {formInputs.map(
            ({
              dataField,
              icon,
              inputType,
              placeholder,
              colSpan,
              required,
            }) => (
              <label
                className={`form-control w-full  ${
                  colSpan ? "col-span-full" : ""
                }`}
              >
                <span className="w-full flex items-center gap-2 input input-bordered">
                  <input
                    required={required}
                    placeholder={placeholder}
                    type={inputType}
                    className="grow w-full"
                  />
                  {icon}
                </span>
              </label>
            )
          )}
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Book now!
        </button>
      </form>
    </main>
  );
}
