import { Play } from "lucide-react";

interface VideoEmbedProps {
  title: string;
  videoId?: string;
  placeholder?: boolean;
}

const VideoEmbed = ({ title, videoId, placeholder = false }: VideoEmbedProps) => {
  if (placeholder || !videoId) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-muted to-secondary border-2 border-border">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <Play className="h-10 w-10 text-primary" />
          </div>
          <div className="text-center px-4">
            <p className="font-semibold text-foreground mb-1">{title}</p>
            <p className="text-sm text-muted-foreground">Video content will be embedded here</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-border">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default VideoEmbed;
