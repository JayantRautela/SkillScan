import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import AddStoryModal from "@/components/AddStory";
import { useSelector } from "react-redux";
import axios from "axios";
import { User } from "lucide-react";

type Story = {
  username: string;
  profilePicture?: string;
  description: string;
};

export default function SuccessStories() {
  const { user } = useSelector((store: any) => store.auth);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response: any = await axios.get("https://skillscan-backend-production.up.railway.app/api/v1/success-story/getStories");
        setStories(response.data.stories);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  return (
    <div className="bg-black w-full min-h-screen relative">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Success Stories</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading stories...</p>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <Card className="p-4 shadow-md">
                <div className="flex items-center gap-4 mb-3">
                  <Avatar>
                    {story.profilePicture ? (
                      <AvatarImage src={story.profilePicture} alt={story.username} />
                    ) : (
                      <AvatarFallback>
                        <User className="text-black" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className="font-medium text-lg">{story.username}</span>
                </div>
                <CardContent className="p-0 text-sm text-muted-foreground">
                  {story.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
    <div className="flex justify-end max-w-6xl mx-auto p-6 md:p-0">
        <Button
          className="fixed bottom-6 right-6 md:static md:ml-auto bg-blue-600 text-white hover:bg-blue-700 mt-2 md:mt-0 cursor-pointer text-lg p-5 mb-2"
          onClick={() => setShowModal(true)}
        >
          Add Story
        </Button>
      </div>
      <AddStoryModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={async ({ description }) => {
          try {
            const newStory = {
              username: user.username,
              profilePicture: user.profilePicture,
              description,
            };
            const response = await axios.post("https://skillscan-backend-production.up.railway.app/api/v1/success-story/addStory", newStory, {
              withCredentials: true
            });
            setStories((prev) => [response.data as Story, ...prev]);
          } catch (error) {
            console.error("Failed to add story:", error);
          } finally {
            setShowModal(false);
          }
        }}
      />
    </div>
  );
}
