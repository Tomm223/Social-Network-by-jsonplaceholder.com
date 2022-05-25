import axios, { AxiosResponse } from "axios";
import { CommentsType } from "../types/comments";
import { PostType } from "../types/post";
import { User } from "../types/user";

export async function getUsers(): Promise<User[]> {
   const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
   return resp.data
}
export async function getPosts(): Promise<PostType[]> {
   const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
   return resp.data
}
export async function getUserById(id: number): Promise<User> {
   const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
   return resp.data
}
export async function getPostById(id: number | string): Promise<PostType> {
   const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
   return resp.data
}
export async function getPostsByUserId(userID: number): Promise<PostType[]> {
   const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
   return resp.data
}

export async function postComments(comment: CommentsType) {
   const resp = await axios.post(`https://jsonplaceholder.typicode.com/comments`, comment)
   return resp.data
}
export async function getCommentsByPostId(postID: number): Promise<CommentsType> {
   const resp = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
   return resp.data[0]
}
export async function getUserByEmail(email: string): Promise<User> {
   const resp = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
   return resp.data[0]
}
export async function getUserByUserName(username: string): Promise<User> {
   const resp = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
   const user = resp.data[0]
   return user
}