import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";
import Navbar from "@/components/shared/Navbar";

type Story = {
  username: string;
  profilePicture?: string;
  description: string;
};

export default function SuccessStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStories([
        {
          username: "Alice Johnson",
          profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
          description: "After joining the platform, I landed my dream job at a startup within 2 months!",
        },
        {
          username: "Marcus Lee",
          profilePicture: "",
          description: "The mentorship and resources here helped me transition into a tech career.",
        },
        {
          username: "Priya Sharma",
          profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
          description: "I started with no experience and now I'm a front-end developer at a major company!",
        },
        {
          username: "Daniel Green",
          profilePicture: "",
          description: "The community support gave me confidence to apply for international positions—and I got one!",
        },
        {
          username: "Daniel Green",
          profilePicture: "",
          description: "The community support gave me confidence to apply for international positions—and I got one!",
        },
        {
          username: "Daniel Green",
          profilePicture: "",
          description: "The community support gave me confidence to apply for international positions—and I got one!",
        },
        {
          username: "Daniel Green",
          profilePicture: "",
          description: "The community support gave me confidence to apply for international positions—and I got one!",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-black w-full min-h-screen">
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
                        {story.username.charAt(0).toUpperCase()}
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
    </div>
  );
}
