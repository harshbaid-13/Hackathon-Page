import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { HelpCircle } from "lucide-react";

export function FAQDialog({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className={className || "cursor-pointer border-2 border-white bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-600 px-8 py-6 text-lg gap-2"}
        >
          <HelpCircle className="w-5 h-5" />
          FAQ
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl bg-white text-slate-900 border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900 border-b pb-4">
            Frequently Asked Questions
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-6 overflow-y-auto max-h-[70vh] custom-scrollbar pr-4">
          

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-800 flex gap-2">
              <span className="text-blue-500">Q:</span> What is the mode of the hackathon?
            </h4>
            <p className="text-slate-700 pl-6 leading-relaxed">
              The hackathon will be conducted in a <span className="font-semibold px-2 py-0.5 bg-blue-50 rounded text-blue-700">hybrid</span> mode, allowing both online and on-ground participation.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-800 flex gap-2">
              <span className="text-blue-500">Q:</span> What are the requirements for on-ground participation?
            </h4>
            <p className="text-slate-700 pl-6 leading-relaxed">
              For on-ground participation, all participants are required to <span className="font-semibold">bring their own laptops</span> for coding and competition tasks.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-800 flex gap-2">
              <span className="text-blue-500">Q:</span> Is accommodation provided at IIT Kanpur?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-slate-700 leading-relaxed">
                Yes, accommodation is provided in <span className="font-semibold text-blue-900">Studio apartments at IIT Kanpur</span> on a twin-sharing basis.
              </p>
              <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                <strong>Note:</strong> Limited on-campus accommodation is available specifically for students on a first-come, first-served basis.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-800 flex gap-2">
              <span className="text-blue-500">Q:</span> What about the meal arrangements?
            </h4>
            <div className="pl-6">
              <p className="text-slate-700 leading-relaxed mb-1">
                Meals (Breakfast, Lunch, and Dinner) will be provided at the <span className="font-semibold text-blue-900">Visitors' Hostel, IIT Kanpur</span>.
              </p>
              <p className="text-sm font-medium text-blue-600">
                Arrangements are for the duration: 18th - 24th January.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-800 flex gap-2">
              <span className="text-blue-500">Q:</span> What happens after our registration is approved?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-slate-700 leading-relaxed">
                Once approved, teams will attend an <span className="font-semibold text-blue-900">introductory session</span> (choice of 3 slots, dates TBD) for a platform walkthrough and to receive login credentials. You can then explore the platform and begin training models with your own datasets.
              </p>
              <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                <strong>Note:</strong> Testing against the official held-out datasets will commence on January 19th.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-800 flex gap-2">
              <span className="text-blue-500">Q:</span> How are the evaluation phases structured?
            </h4>
            <p className="text-slate-700 pl-6 leading-relaxed">
              The competition features a <span className="font-semibold">single evaluation phase</span>. Teams are encouraged to iterate and submit multiple models; however, only your <span className="font-semibold text-blue-900">top-performing model</span> will be considered for the final leaderboard.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-800 flex gap-2">
              <span className="text-blue-500">Q:</span> what are the expected outputs from participating teams?
            </h4>
            <p className="text-slate-700 pl-6 leading-relaxed">
              Participation is flexible. Teams can contribute by <span className="font-semibold text-blue-900">developing AI models</span>, providing <span className="font-semibold text-blue-900">high-quality datasets</span> to support model building, or both.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-800 flex gap-2">
              <span className="text-blue-500">Q:</span> Is there scope for further audit or adoption of winning solutions?
            </h4>
            <p className="text-slate-700 pl-6 leading-relaxed">
              Potential for <span className="font-semibold">further auditing, benchmarking, and real-world adoption</span> of winning solutions will be evaluated and discussed following the conclusion of the hackathon.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
