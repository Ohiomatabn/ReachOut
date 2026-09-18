import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/background.jpg')] min-h-screen bg-no-repeat w-full bg-cover bg-center flex justify-center items-center text-white bg-fixed">
      <div className="container text-center">
        <h1 className="text-6xl py-4 font-bold">ReachOut</h1>
        <p className="text-lg font-bold py-2">
          Where citizens have direct report access to their Government
        </p>
        <Link
          className="btn bg-blue-700 hover:bg-blue-800 py-2 px-8 rounded-sm hover:rounded-4xl cursor-pointer"
          to="report-issue"
        >
          Report an issue
        </Link>
      </div>
    </section>
  );
}

export default Hero;
