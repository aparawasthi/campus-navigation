import Image from "next/image";

export default function header() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="flex items-center justify-between mx-auto px-4 py-6 md:px-12">
        <div>
          <Image
            className="max-w-[100px] mb-2"
            src={"https://www.dituniversity.edu.in/uploads/logo/6350d4ffdd3471666241791.svg"}
            width={226}
            height={170}
            alt="DIT University Campus Navigation"
          />
          <p className="text-blue-100">Find your way around campus easily</p>
        </div>
        <nav className="flex items-center gap-8">
          <a href="https://www.dituniversity.edu.in/" className="text-white text-base">
            About Us
          </a>
          <a href="#" className="text-white text-base">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
}
