import CategoryImage from "./category-img";
import Heading from "./heading";

export default function EditorPick() {
  return (
    <section className="flex items-center justify-center my-20">
      <div className="w-[85%]">
        <Heading headingLg="EDITOR&apos;S PICK" headingSm="Problems trying to resolve the conflict between" />
        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-[50%_25%_25%] gap-2 my-5">
          <CategoryImage src="/c-4.png" alt="category images" category="MEN" />
          <CategoryImage src="/c-2.png" alt="category images" category="WOMEN" />
          <div className="grid grid-rows-2 gap-2 h-screen">
            <CategoryImage src="/c-3.png" alt="category images" category="ACCESSORIES" />
            <CategoryImage src="/c-1.png" alt="category images" category="KIDS" />
          </div>
        </div>
      </div>
    </section>
  );
}
