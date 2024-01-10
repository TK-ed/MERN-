export default function Comp1(props) {
  const obj = { name: "tk", dept: "cse" };
  return (
    <div className="h-40 ml-15 mr-25">
      Hello, {props.name}{props.dept}
      {obj.name}{obj.dept}
    </div>
  );
}
