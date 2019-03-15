import * as HTTP from './http';

const exception = (error: string) => {
  throw new Error(error);
};

const redirect = (route: string) => {
  window.location.href = route;
};

export const updateStoreKeys = (data: any) => {
  return {
    type: 'UPDATE_STORE_KEYS',
    data,
  };
};

export const viewerAuthenticated = (viewer: any) => {
  return {
    type: 'VIEWER_AUTHENTICATED',
    isAuthenticated: true,
    viewer,
  };
};

export const viewerLogout = () => {
  return {
    type: 'VIEWER_LOGOUT',
  };
};

export const viewerDelete = () => {
  return async (dispatch: any) => {
    const response = await HTTP.deleteViewer();

    if (response.status !== 200) {
      return exception('error');
    }

    return dispatch(requestLogout());
  };
};

export const requestSaveComment = ({
  postId,
  content,
}: {
  postId: string;
  content: string;
}) => {
  return async (dispatch: any) => {
    const response = await HTTP.saveComment({ postId, content });

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestSaveReply = ({
  postId,
  commentId,
  content,
}: {
  postId: string;
  commentId: string;
  content: string;
}) => {
  return async (dispatch: any) => {
    const response = await HTTP.saveReply({ postId, commentId, content });

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestUpdateComment = ({
  postId,
  commentId,
  content,
}: {
  postId: string;
  commentId: string;
  content: string;
}) => {
  return async (dispatch: any) => {
    const response = await HTTP.updateComment({ postId, commentId, content });

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestDeleteComment = ({
  postId,
  commentId,
}: {
  postId: string;
  commentId: string;
}) => {
  return async (dispatch: any) => {
    const response = await HTTP.deleteComment({ postId, commentId });

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestDeletePost = (id: string) => {
  return async (dispatch: any) => {
    const response = await HTTP.deletePost(id);

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestUpdatePost = ({
  content,
  title,
  postId,
}: {
  content: string;
  title: string;
  postId: string;
}) => {
  return async (dispatch: any) => {
    const response = await HTTP.updatePost({ content, title, postId });

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestSavePost = ({
  content,
  title,
}: {
  content: string;
  title: string;
}) => {
  return async (dispatch: any) => {
    const response = await HTTP.savePost({ content, title });

    if (response.status === 200) {
      return redirect('/');
    }

    if (response.status === 403) {
      return dispatch(requestLogout());
    }

    return exception('error');
  };
};

export const requestLogout = () => {
  return async (dispatch: any) => {
    const response = await HTTP.logout();

    if (response.status === 200) {
      return redirect('/');
    }

    if (response.status === 403) {
      return redirect('/');
    }

    return exception('error');
  };
};

export const requestLogin = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return async (dispatch: any) => {
    const response = await HTTP.login({ username, password });

    if (response.status !== 200) {
      return exception('error');
    }

    return redirect('/');
  };
};

export const requestSignup = ({
  username,
  password,
  verify,
}: {
  username: string;
  password: string;
  verify: string;
}) => {
  return async (dispatch: any) => {
    const response = await HTTP.signup({ username, password, verify });

    if (response.status !== 200) {
      return exception('error');
    }

    return redirect('/');
  };
};
