import 'isomorphic-fetch';

// need to fix fetch's @ts-ignores

const requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getAllComments = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };
  //@ts-ignore
  return fetch(`/api/comments`, options);
};

export const saveComment = ({
  postId,
  content,
}: {
  postId: string;
  content: string;
}) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ postId, content }),
  };
  //@ts-ignore
  return fetch(`/api/comments`, options);
};

export const saveReply = ({
  postId,
  commentId,
  content,
}: {
  postId: string;
  commentId: string;
  content: string;
}) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ postId, commentId, content }),
  };
  //@ts-ignore
  return fetch(`/api/comments`, options);
};

export const updateComment = ({
  postId,
  commentId,
  content,
}: {
  postId: string;
  commentId: string;
  content: string;
}) => {
  const options = {
    method: 'PUT',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ commentId, content }),
  };
  //@ts-ignore
  return fetch(`/api/posts/${postId}/comments/${commentId}`, options);
};

export const deleteComment = ({
  postId,
  commentId,
}: {
  postId: string;
  commentId: string;
}) => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };
  //@ts-ignore
  return fetch(`/api/posts/${postId}/comments/${commentId}`, options);
};

export const getAllPosts = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };
  //@ts-ignore
  return fetch(`/api/posts`, options);
};

export const getPostById = (id: string) => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };
  //@ts-ignore
  return fetch(`/api/posts/${id}`, options);
};

export const deleteViewer = () => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };
  //@ts-ignore
  return fetch(`/api/viewer/delete`, options);
};

export const deletePost = (id: string) => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };
  //@ts-ignore
  return fetch(`/api/posts/${id}`, options);
};

export const updatePost = ({
  content,
  title,
  postId,
}: {
  content: string;
  title: string;
  postId: string;
}) => {
  const options = {
    method: 'PUT',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ content, title }),
  };
  //@ts-ignore
  return fetch(`/api/posts/${postId}`, options);
};

export const savePost = ({
  content,
  title,
}: {
  content: string;
  title: string;
}) => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ content, title }),
  };

  //@ts-ignore
  return fetch(`/api/posts`, options);
};

export const getAllUsers = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };
  //@ts-ignore
  return fetch(`/api/users`, options);
};

export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ username: username.toLowerCase(), password }),
  };
  //@ts-ignore
  return fetch(`/api/login`, options);
};

export const logout = () => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
  };
  //@ts-ignore
  return fetch(`/api/logout`, options);
};

export const signup = ({
  username,
  password,
  verify,
}: {
  username: string;
  password: string;
  verify: string;
}) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({
      username: username.toLowerCase(),
      password,
      verify,
    }),
  };
  //@ts-ignore
  return fetch(`/api/signup`, options);
};
