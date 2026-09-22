import Footer from "./HomePage/Footer";
import NavBar from "./NavBar";

function ReportIssueForm() {
  return (
    <>
      <NavBar />
      <section className="max-w-2xl mx-auto pb-2 pt-16">
        <div className="container">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Report a Community Issue
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Help local authorities identify infrastructure problems in your
              LGA.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Issue Title / Summary
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="e.g., Broken bridge on main road"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lga"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Local Government Area (LGA)
                </label>
                <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="All">All</option>
                  <option value="Adavi">Adavi</option>
                  <option value="Ajaokuta">Ajaokuta</option>
                  <option value="Ankpa">Ankpa</option>
                  <option value="Bassa">Bassa</option>
                  <option value="Dekina">Dekina</option>
                  <option value="Ibaji">Ibaji</option>
                  <option value="Idah">Idah</option>
                  <option value="Igalamela-Odolu">Igalamela-Odolu</option>
                  <option value="Ijumu">Ijumu</option>
                  <option value="Kabba/Bunu">Kabba/Bunu</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Lokoja">Lokoja</option>
                  <option value="Mopa-Muro">Mopa-Muro</option>
                  <option value="Ofu">Ofu</option>
                  <option value="Ogori/Magongo">Ogori/Magongo</option>
                  <option value="Okehi">Okehi</option>
                  <option value="Okene">Okene</option>
                  <option value="Olamaboro">Olamaboro</option>
                  <option value="Omala">Omala</option>
                  <option value="Yagba East">Yagba East</option>
                  <option value="Yagba West">Yagba West</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Issue Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                >
                  <option value="Roads & Infrastructure">
                    Roads & Infrastructure
                  </option>
                  <option value="Electricity & Power">
                    Electricity & Power
                  </option>
                  <option value="Water Supply">Water Supply</option>
                  <option value="Healthcare Facilities">
                    Healthcare Facilities
                  </option>
                  <option value="Education / Schools">
                    Education / Schools
                  </option>
                  <option value="Sanitation & Waste">Sanitation & Waste</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="locationDetail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Specific Location / Landmark
              </label>
              <input
                type="text"
                id="locationDetail"
                name="locationDetail"
                placeholder="e.g., Near Central Market junction, Lokoja"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Detailed Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Describe how long this issue has persisted and its impact on the community..."
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Evidence (Photo)
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/"
                className="w-full text-sm file:py-2 file:px-4 rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer shadow-md text-gray-700 border border-gray-300"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 hover:rounded-4xl text-white rounded-lg shadow-md transition"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ReportIssueForm;
