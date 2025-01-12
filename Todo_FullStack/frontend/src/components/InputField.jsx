import React from "react";

export function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          type={type}
          className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
