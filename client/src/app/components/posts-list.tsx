import { PostCard } from "./post-card";
import { type Post } from "@/app/types/posts";

export function PostLists({posts}: {posts: Post[] | null}){
    return(
        <>
        {
            posts?.map((post) => {
            const { id, user, content } = post;
    
            const {
              user_name: userName,
              name: UserFullName,
              avatar_url: avatarUrl,
            } = user;
    
            return (
              <PostCard
                key={id}
                userName={userName}
                userFullName={UserFullName}
                avatarUrl={avatarUrl}
                content={content}
              />
            );
          })
        }
        </>
    )
}