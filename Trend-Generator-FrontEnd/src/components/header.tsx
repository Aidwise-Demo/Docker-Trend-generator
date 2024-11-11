// "use client";

// import Link from "next/link";
// import { Button } from "./ui/button";

// const Header = () => {
//   return (
//     <div className="w-full flex items-center justify-end p-2">
//       <Link href={"/generate-trend"}>
//         <Button variant={"primary"}>Generate Trend</Button>
//       </Link>
//     </div>
//   );
// };

// export default Header;
"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-2">
      <h1 className="text-2xl font-bold">Trend Generator</h1> {/* Added Header */}
      <Link href={"/generate-trend"}>
        <Button variant={"primary"}>Generate Trend</Button>
      </Link>
    </div>
  );
};

export default Header;
