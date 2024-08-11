import { Loader, Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center backdrop-blur-md">
      <Loader2 className="animate-spin w-10 h-10" />
    </div>
  );
};

export default Loading;
