import { BookCheck, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <section className="max-w-screen-lg mx-auto">
      <h1 className="bg-gradient-to-b from-purple-800 to-pink-200 bg-clip-text text-transparent font-extrabold text-5xl tracking-tighter leading-tight flex gap-3 items-baseline">
        My Work
        <BookCheck size={34} color="#ffffff" strokeWidth={3} />
      </h1>
      <Tabs defaultValue="writings" className="mt-4">
        <TabsList className="w-full">
          <TabsTrigger value="writings" className="w-1/2">
            writings
          </TabsTrigger>
          <TabsTrigger value="entities" className="w-1/2">
            entities
          </TabsTrigger>

          <TabsTrigger value="collaborations" className="w-1/2">
            collaborations
          </TabsTrigger>
        </TabsList>
        <TabsContent value="writings">
          <div className="space-y-3">
            <div className="text-white bg-white/5 rounded-sm p-4">
              <h3 className="font-bold text-xl p-4 bg-white/5 rounded-sm">
                A story about a vintage city!
              </h3>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                amet blanditiis minus reprehenderit cum animi nobis sapiente
                laborum cupiditate esse voluptates? Cupiditate, molestiae at
                distinctio, blanditiis ullam ipsa, inventore quod mollitia hic
                nostrum consectetur excepturi quisquam sapiente facilis maiores
                quidem.
              </p>
              <div className="border-2 border-transparent border-t-gray-800 pt-4">
                <div className="flex gap-2 items-center max-w-fit">
                  <Calendar size={20} color="purple" strokeWidth={3} />
                  <p>Mar 20th, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="entities">
          <h1 className="text-white">You have created no entities</h1>
        </TabsContent>
        <TabsContent value="collaborations">
          <h1 className="text-white">You have not collaborated with anyone!</h1>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default page;
