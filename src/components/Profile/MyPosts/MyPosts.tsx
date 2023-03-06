import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField, requiredLength} from "../../../utils/validators/validators";
import {TextArea} from "../../common/formControls/formControl";

type FormDataType = {
  text: string
}


const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.postsBlock}>
        <div className={s.field}>
          <Field placeholder={'Write your new post'}
                 name={'text'}
                 component={TextArea}
                 validate={[requiredLength]}/>
        </div>
        <div className={s.buttonBlock}>
          <button className={s.button}>Add post</button>
        </div>
      </div>
    </form>
  );
};


const PostReduxForm = reduxForm<FormDataType>({form: 'text'})(MyPostForm)


export const MyPosts = React.memo<ProfilePropsType>((props) => {

  let getPostData = props.profilePage.postData.map((ev, id) => {
    return (
      <div className={s.postsInfo}>
        <Post key={id}
              name={ev.name}
              message={ev.message}
              likes={ev.likes}
              photos={props.profilePage.profile?.photos}/>
      </div>
    )
  })

  const addPost = (newTextValue: FormDataType) => {
    props.addPostCallback(newTextValue.text);
  }

  return (
    <div>
      <div className={s.posts}>
        <h3>My posts</h3>
        <PostReduxForm onSubmit={addPost}/>
      </div>
      <div className={s.postsInfoBlock}>
        {getPostData}
      </div>
    </div>
  )
});