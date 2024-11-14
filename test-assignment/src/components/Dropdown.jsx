// src/components/Dropdown.js
export default function Dropdown() {
    return (
      <div className="relative">
        <button className="bg-black text-white p-2">Dropdown</button>
        <div className="absolute hidden bg-black text-yellow p-4 top-0 left-0">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
        </div>
      </div>
    );
  }
  