import { CommentsType } from "../types/comments";
import { CommentsFormState } from "../types/forms";

export function buildCommetsToServer(values: CommentsFormState, postId: number): CommentsType {
   return {
      postId: postId,
      id: Date.now(),
      name: values.name,
      email: values.email,
      body: values.message
   }
}