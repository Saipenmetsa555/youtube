import Button from "./Button";

const list = [
  "All",
  "Telugu Cinema",
  "Music",
  "Mixes",
  "Trailers",
  "Cricket",
  "Live",
  "Sports",
  "Soccer",
  "Web Develpement",
];

const ButtonList = () => {
  return (
    <div className="overflow-auto">
      <div className="flex  justify-center">
        {list.map((each) => (
          <Button name={each} key={each} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
