
const InputField = ({ label, type, name, register, errors, placeholder }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2 text-gray-800">{label}</label>
      {type === 'textarea' ? (
        <textarea
          {...register(name, { required: `${label} is required` })}
          className="w-full p-4 rounded-lg bg-gray-100 border border-transparent focus:border-color-1 focus:ring-2 focus:ring-color-1 focus:outline-none transition duration-300 h-32"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          {...register(name, { required: `${label} is required` })}
          className="w-full p-4 rounded-lg bg-gray-100 border border-transparent focus:border-color-1 focus:ring-2 focus:ring-color-1 focus:outline-none transition duration-300"
          placeholder={placeholder}
        />
      )}
      {errors[name] && <p className="text-red-500 mt-2">{errors[name].message}</p>}
    </div>
  );
};

export default InputField;
