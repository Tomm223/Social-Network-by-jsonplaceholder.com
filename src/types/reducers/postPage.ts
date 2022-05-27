import { PostType } from "../post"

export enum TypesPostsPage {
   POST_CHANGE = 'POST/CHANGE',
   POST_LOADING = 'POST/LOADING',
   POST_ERROR = 'POST/ERROR',
   POST_ERROR_CLOSE = 'POST/ERROR/CLOSE',
   POST_USERNAME_CHANGE = "POST/USERNAME/CHANGE",
   POST_USERNAME_RESET = "POST/USERNAME/NULL",
   POST_MODAL_OPEN = 'POST/MODAL/OPEN',
   POST_MODAL_CLOSE = 'POST/MODAL/CLOSE',
}

export interface PostPageChange {
   type: TypesPostsPage.POST_CHANGE,
   payload: PostType
}
export interface PostPageUserNameChange {
   type: TypesPostsPage.POST_USERNAME_CHANGE,
   payload: string
}
export interface PostPageUserNameReset {
   type: TypesPostsPage.POST_USERNAME_RESET
}
export interface PostPageModalOpen {
   type: TypesPostsPage.POST_MODAL_OPEN
}
export interface PostPageModalClose {
   type: TypesPostsPage.POST_MODAL_CLOSE
}
export interface PostPageLoading {
   type: TypesPostsPage.POST_LOADING
}
export interface PostPageErrorClose {
   type: TypesPostsPage.POST_ERROR_CLOSE,
   timeout: number
}
export interface PostPageError {
   type: TypesPostsPage.POST_ERROR,
   payload: string,
}

export type ActionsTypePostPage = PostPageChange | PostPageLoading | PostPageError | PostPageErrorClose |
   PostPageUserNameChange | PostPageUserNameReset | PostPageModalOpen | PostPageModalClose
