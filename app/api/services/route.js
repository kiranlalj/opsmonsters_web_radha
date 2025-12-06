// Icons
import { LuTelescope } from "react-icons/lu";
import { PiStrategy } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export async function GET() {
  return Response.json({
    services: [
        {
          number: "01",
          icon: <LuTelescope className="w-6 h-6 text-orange-500" />,
          title: "Discovery",
          desc: "We start by listening. Goals, challenges, and vision are mapped out clearly, setting the foundation for everything that follows.",
        },
        {
          number: "02",
          icon: <PiStrategy className="w-6 h-6 text-orange-500" />,
          title: "Strategy",
          desc: "With insights in place, we define the roadmap. Positioning, priorities, and the best way to align design and execution.",
        },
        {
          number: "03",
          icon: <MdDesignServices className="w-6 h-6 text-orange-500" />,
          title: "Design & Build",
          desc: "Ideas take shape. From visuals to digital experiences, we design and develop with sharp attention to detail.",
        },
        {
          number: "04",
          icon: <HiOutlineRocketLaunch className="w-6 h-6 text-orange-500" />,
          title: "Launch & Grow",
          desc: "Delivery is just the beginning. We measure, refine, and scale to ensure your project continues to perform.",
        },
      ]
  });
}
