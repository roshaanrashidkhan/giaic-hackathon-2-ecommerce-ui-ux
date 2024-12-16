export default function PaginationSection() {
  return (
    <section className="w-full flex items-center justify-center my-10">
        <div className="w-[85%] flex items-center justify-center gap-2">
            <div className="flex border-2 text-[#23A6F0] items-center justify-center rounded-sm text-sm font-bold">
                <div className="flex items-center justify-center px-4 py-3 border-r rounded-l-sm hover:bg-[#23a6f0] hover:text-white bg-[#fafafa]">
                    <h6 className="text-[#737373]">First</h6>
                </div>
                <div className="flex items-center justify-center px-4 py-3 border-r hover:bg-[#23a6f0] hover:text-white">
                    <h6 className="">1</h6>
                </div>
                <div className="flex items-center justify-center px-4 py-3 border-r hover:bg-[#23a6f0] hover:text-white">
                    <h6 className="">2</h6>
                </div>
                <div className="flex items-center justify-center px-4 py-3 border-r hover:bg-[#23a6f0] hover:text-white">
                    <h6 className="">3</h6>
                </div>
                <div className="flex items-center justify-center px-4 py-3 rounded-r-sm hover:bg-[#23a6f0] hover:text-white">
                    <h6>Next</h6>
                </div>
            </div>
        </div>
    </section>    
  );
}
