import Heading from "./heading";
import Post from "./post";
import HeadingSection from "./section-heading";

export default function FeaturedPosts() {
  return (
    <section className="w-full flex items-center justify-center my-5">
      <div className="w-[85%] flex gap-2 flex-col items-center justify-center">
        <HeadingSection heading="Practice Advise" css="text-blue-500 text-sm font-bold tracking-[0.2px]" />
        <div className="w-[90%] md:w-[60%] flex flex-col gap-2">
          <Heading
            headingLg="FEATURED POSTS"
            headingSm="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
          />
        </div>
        <div className="grid grid-rows-1 justify-center items-center md:justify-start md:items-start md:grid-cols-3 gap-3">
            <Post />
            <Post />
            <Post />
        </div>
      </div>
    </section>
  );
}
