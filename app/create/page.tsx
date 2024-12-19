import { CreatePostForm } from "@/components/create-post-form";

export default function Create() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Create New Post</h1>
      <CreatePostForm />
    </div>
  );
}
