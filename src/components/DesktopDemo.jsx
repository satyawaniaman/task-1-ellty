import { Checkbox } from "../components/CheckBox";
const DesktopDemo = () => {
  return (
    <div className="relative w-16 h-96 rounded border border-dashed border-[#9747FF] flex flex-col items-center justify-around py-2">
      <Checkbox variant={1} />
      <Checkbox variant={2} />
      <Checkbox variant={9} />
      <Checkbox variant={4} />
      <Checkbox variant={5} />
      <Checkbox variant={6} />
      <Checkbox variant={7} />
      <Checkbox variant={8} />
      <Checkbox variant={10} />
      <div className="absolute -bottom-6 left-0 w-full text-center bg-[#9747FF] text-white text-xs px-2 py-1 rounded">
        Desktop
      </div>
    </div>
  );
};

export default DesktopDemo;
