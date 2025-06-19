import { useState } from "react";
import Flag from "react-world-flags";


const countries = [
  { code: "KE", name: "Kenya", dial: "+254" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  // Add more countries as needed
];

export default function RegisterPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="p-3 bg-gray-800 rounded" required />
          <input type="text" placeholder="Middle Name" className="p-3 bg-gray-800 rounded" />
          <input type="text" placeholder="Last Name" className="p-3 bg-gray-800 rounded" required />
          <input type="email" placeholder="Email" className="p-3 bg-gray-800 rounded" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="ID Number" className="p-3 bg-gray-800 rounded" required />
          <input type="text" placeholder="KRA PIN" className="p-3 bg-gray-800 rounded" required />
          <input type="text" placeholder="NTSA Phone Number" className="p-3 bg-gray-800 rounded" required />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className={`flag-icon flag-icon-${selectedCountry.code.toLowerCase()}`}></span>
            <select
              className="bg-gray-800 p-2 rounded"
              value={selectedCountry.code}
              onChange={(e) =>
                setSelectedCountry(
                  countries.find((c) => c.code === e.target.value) || countries[0]
                )
              }
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.dial})
                </option>
              ))}
            </select>
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 bg-gray-800 rounded w-full"
            minLength={10}
            maxLength={20}
            required
          />
        </div>

        <input
          type="password"
          placeholder="Password"
          className="p-3 bg-gray-800 rounded w-full"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-bold"
        >
          Register
        </button>
      </form>
    </div>
  );
}
