import { Store, PlusCircle, ClipboardList, Layers, Rocket } from "lucide-react";
import { Link } from "react-router";

export default function Merchant() {
  const steps = [
    {
      icon: <Store className="text-green-600 w-6 h-6" />,
      title: "Connect with Dummy Merchant",
      text: (
        <>
          Set up your merchant account to start managing your restaurant. If you
          have any questions, we're here to help —{" "}
          <Link className="text-blue-600">Contact Support.</Link>
        </>
      ),
    },
    {
      icon: <PlusCircle className="text-green-600 w-6 h-6" />,
      title: "Add Menu",
      text: "Upload your menu items, descriptions, and prices so customers can see what you offer.",
    },
    {
      icon: <ClipboardList className="text-green-600 w-6 h-6" />,
      title: "Review Menu",
      text: "Double-check your menu items for accuracy before publishing them live to customers.",
    },
    {
      icon: <Layers className="text-green-600 w-6 h-6" />,
      title: "Finish the integration with your POS Provider",
      text: "Connect your store with your POS system to sync orders, track inventory, and streamline operations.",
    },
    {
      icon: <Rocket className="text-green-600 w-6 h-6" />,
      title: "Go Live!",
      text: "Launch your store and start accepting real customer orders instantly.",
    },
  ];

  return (
    <section className="flex justify-center">
      <div className="w-3/5">
        <article className="mb-6">
          <h1 className="text-xl font-bold mb-2">
            Welcome to your new store, The current person logged In
          </h1>
          <p className="text-gray-600">
            This is your quick start guide. Complete these steps to activate
            your store and start earning money with CamChop
          </p>
        </article>

        <ul className="space-y-4 relative">
          {steps.map((step, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-2 items-center relative"
            >
        
                <span className="absolute left-[18px] top-0 w-px h-full bg-gray-300"></span>
              

              
              <div className="relative z-10 flex items-center justify-center">
                <div className="bg-white z-20 rounded-full p-1.5">
                  {step.icon}
                </div>
              </div>

             
              <div className="border p-4 rounded-lg flex flex-col justify-center">
                <h1 className="font-semibold">{step.title}</h1>
                <p className="text-gray-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
