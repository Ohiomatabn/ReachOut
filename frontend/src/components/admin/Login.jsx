import NavBar from "../NavBar";
import { useForm } from "react-hook-form";

function AdminLoginForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      loginEmail: "",
      loginPassword: "",
    },
  });

  function signInAdmin(data) {
    try {
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <NavBar />
      <section className="bg-gray-950 h-screen">
        <div className="container flex justify-center items-center h-full">
          <div className="w-75 m-auto bg-gray-100 pt-0 p-4 rounded-md">
            <h3
              className="text-2xl font-bold text-center py-6
          "
            >
              Welcome Back.... Please Login
            </h3>
            <form onSubmit={handleSubmit(signInAdmin)}>
              <input
                type="text"
                placeholder="Email Address"
                className="input py-2 px-1 border rounded-sm w-full mb-4"
                {...register("loginEmail", {
                  required: "Email address is required",
                })}
              />
              {errors.loginEmail && (
                <p className="text-red-500 pb-2">{errors.loginEmail.message}</p>
              )}
              <input
                type="password"
                placeholder="Password"
                className="input py-2 px-1 border rounded-sm w-full mb-4"
                {...register("loginPassword", {
                  required: "Password is required",
                })}
              />
              {errors.loginPassword && (
                <p className="text-red-500 pb-2">
                  {errors.loginPassword.message}
                </p>
              )}
              <button type="submit" className="btn w-full py-2">
                {isSubmitting ? "Sign in" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLoginForm;
