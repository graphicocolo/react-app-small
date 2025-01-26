import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zodでスキーマを定義
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
    password: z
    .string()
    .min(8, { message: "Please enter a password of 8 or more digits." })
    .max(18, { message: "Please enter a password of 18 characters or less." })
});

type FormData = z.infer<typeof schema>;

const CustomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
    <h2 className="text-2xl font-bold text-center mt-10">ライブラリを使ったフォーム</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          {...register("name")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          {...register("email")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          {...register("password")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
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

export default CustomForm;