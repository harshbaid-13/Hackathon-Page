import { Calendar, Clock, Video } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function WebinarSection() {
  return (
    <section className="py-16 bg-blue-50/50" id="webinars">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <p className="text-blue-700 font-medium text-sm">Don't Miss Out</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Orientation Webinars
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our expert-led sessions to get a comprehensive overview of the
            hackathon, understand the problem statements, and have your
            questions answered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Webinar 1 */}
          <Card className="border-t-4 border-t-cyan-500 shadow-md hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Calendar className="w-6 h-6 text-cyan-600" />
                Monday, 12 Jan 2026
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-base mt-2">
                <Clock className="w-4 h-4" />
                7:00 PM - 10:00 PM
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase">
                      Meeting Number
                    </span>
                    <span className="font-mono text-gray-900 font-medium">
                      2517 682 6168
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-gray-500 uppercase">
                      Password
                    </span>
                    <span className="font-mono text-gray-900 font-medium">
                      a8dMtCQS3m4
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">
                  Join via Video System
                </h4>
                <code className="block w-full p-2 bg-gray-900 text-gray-100 rounded text-xs overflow-x-auto font-mono">
                  25176826168@nationalhealthauthority.webex.com
                </code>
                <p className="text-xs text-gray-500">
                  Video/Audio Password: 28368277
                </p>
              </div>

              <Button
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white gap-2 cursor-pointer"
                size="lg"
                asChild
              >
                <a
                  href="https://nationalhealthauthority.webex.com/nationalhealthauthority/j.php?MTID=md9a54b1f8804ab0b31265af91ecad4d3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Video className="w-4 h-4" />
                  Join Webinar
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Webinar 2 */}
          <Card className="border-t-4 border-t-blue-600 shadow-md hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Calendar className="w-6 h-6 text-blue-600" />
                Wednesday, 14 Jan 2026
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-base mt-2">
                <Clock className="w-4 h-4" />
                7:00 PM - 10:00 PM
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase">
                      Meeting Number
                    </span>
                    <span className="font-mono text-gray-900 font-medium">
                      2519 551 4778
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-gray-500 uppercase">
                      Password
                    </span>
                    <span className="font-mono text-gray-900 font-medium">
                      gfM4dkCpJ32
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">
                  Join via Video System
                </h4>
                <code className="block w-full p-2 bg-gray-900 text-gray-100 rounded text-xs overflow-x-auto font-mono">
                  25195514778@nationalhealthauthority.webex.com
                </code>
                <p className="text-xs text-gray-500">
                  Video/Audio Password: 43643527
                </p>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 cursor-pointer"
                size="lg"
                asChild
              >
                <a
                  href="https://nationalhealthauthority.webex.com/nationalhealthauthority/j.php?MTID=m10714d8c5bfb884e28a3a5f9b1b11a40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Video className="w-4 h-4" />
                  Join Webinar
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
