import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, MessageCircle } from "lucide-react";

export default function PostCard({ post }: { post: any }) {

    const liked = true; // Replace with actual liked state
    const likeLoading = false; // Replace with actual loading state
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.author.image || ""} />
            <AvatarFallback>{post.author.name?.[0] || "A"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <CardTitle className="mt-4 text-lg">
          <Link href={`/posts/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1"
        >
          <Heart
            className={`h-4 w-4 ${
              likeLoading
                ? "animate-pulse"
                : liked
                ? "fill-red-500 text-red-500"
                : ""
            }`}
          />
          <span>10</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1"
        >
          <MessageCircle className="h-4 w-4"/>
          <span>4</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
