import Rider from "../assets/images/Rider.png";
import Driver from "../assets/images/Driver.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RiderRegister from "./ui/layout/RiderRegister";
import DriverRegister from "./ui/layout/DriverRegister";

export default function RegisterTab() {
  return (
    <Tabs defaultValue="tab-1" className=" h-screen">
      <ScrollArea>
        <TabsList className="mb-3 gap-4 bg-transparent">
          <TabsTrigger
            value="tab-1"
            className="border-2 border-red-500 text-2xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
          >
            <img src={Rider} className="h-16 w-16" alt="" />
            Rider
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="border-2 border-red-500 text-2xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
          >
            <img src={Driver} className="h-16 w-16" alt="" />
            Driver
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <TabsContent value="tab-1" className="w-full h-full">
       <RiderRegister/>
      </TabsContent>

      <TabsContent value="tab-2" className="w-full h-full">
        <DriverRegister/>
      </TabsContent>
    </Tabs>
  );
}
