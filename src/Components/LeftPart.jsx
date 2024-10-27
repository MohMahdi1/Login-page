import img from "../assets/20944201.jpg";

function LeftPart() {
  return (
    <div className="w-full lg:w-1/2 h-64 lg:h-auto">
      <img className="w-full h-full object-cover" src={img} alt="img" />
    </div>
  );
}

export default LeftPart;
