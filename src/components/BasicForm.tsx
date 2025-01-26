import { useState } from "react";

type FormData = {
  name: string,
  email: string,
  password: string,
};

// 間違っているコード
// type ErrorText = {
//   name: string,
//   email: string,
//   password: string
// } | {};
type ErrorText = {
  name?: string,
  email?: string,
  password?: string
};

const BasicForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorText>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ErrorText = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }


    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const isOutOfRange = (data: string, min: number, max: number) => {
        const length = data.length;
        return !(length >= min && length <= max);
      };

      if (isOutOfRange(formData.password, 8, 18)) {
        newErrors.password = "Password must be between 8 and 18 characters";
      }
    }

    // エラーがあるかどうかを確認
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // エラーがなければフォーム送信
      console.log("Form submitted:", formData);
      setErrors({}); // エラーをリセット
    }
  };

  return (
    <>
    <h2 className="text-2xl font-bold text-center mt-10">ライブラリを使わないフォーム</h2>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default BasicForm;
