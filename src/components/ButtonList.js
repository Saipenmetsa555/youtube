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
    <div className="flex justify-center">
      {list.map((each) => (
        <Button name={each} key={each} />
      ))}
    </div>
  );
};

export default ButtonList;
