import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { toast } from "sonner";
import { CheckCircle, XCircle } from "lucide-react";

type AddStoryModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (story: { description: string }) => void;
};

export default function AddStoryModal({ open, onClose, onSubmit }: AddStoryModalProps) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!description.trim()) {
      alert("Please enter a story.");
      return;
    }
    try {
      setIsSubmitting(true);
      setLoading(true);
      const response = await axios.post<{ description: string }>("https://skillscan-backend-production.up.railway.app/api/v1/success-story/addStory", { description }, {
        withCredentials: true
      });
      toast.success("Story Submitted Successfully", {
        icon: <CheckCircle className="text-green-600 w-5 h-5" />
      })

      onSubmit(response.data);
      setDescription("");
      onClose();
    } catch (error: any) {
      const message = error?.response?.data?.message || error?.message || "Some error occurred";
      toast.error(message, {
        icon: <XCircle className="text-red-600 w-5 h-5" />
      });
      setDescription("");
    } finally {
      setLoading(false);
      setIsSubmitting(false);
      setDescription("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Your Story</DialogTitle>
        </DialogHeader>

        <Textarea
          placeholder="Share your journey, breakthrough, or success..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
        />

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose} className="cursor-pointer">
            Cancel
          </Button>
          <Button className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700" disabled={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
