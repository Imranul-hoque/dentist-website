import { Blog, blogs } from "@/constants";
import { BlogItem } from "./blog-item";

export const BlogSection = () => {
    return (
      <div className="h-full w-full max-w-6xl mx-auto px-10 lg:px-2">
        <div className="flex flex-col space-y-5 py-4">
          {blogs.map((blog: Blog, index: number) => (
            <BlogItem
              key={index}
              title={blog.title}
              image={blog.image}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    );
}
