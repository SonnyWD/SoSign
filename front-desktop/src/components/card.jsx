import { useNavigate } from "react-router-dom";

function Card({ title, subtitle, items }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signature");
  };

  return (
    <div className="border p-4 rounded shadow-md w-[70%] mb-8">
      <div>
        <h2 className="text-xl font-bold pb-3">{title}</h2>
      </div>
      <div>
        <h5 className="text-gray-600">{subtitle}</h5>
        <div className="mt-2 space-y-1 flex justify-between">
          {items.map((item, index) => (
            <p key={index} className="w-[50%]">{item}</p>
          ))}

          <button
            onClick={handleClick}
            className="w-[10%] px-4 py-2 bg-blue-300 hover:bg-blue-400 text-white rounded font-medium text-base transition cursor-pointer"
          >
            Signature
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
