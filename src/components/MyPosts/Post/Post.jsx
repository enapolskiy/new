import style from "./Post.module.css";


const  Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhN56ea-RbuQpes3eSvgfbbr5i5Z_NBfpLBA&usqp=CAU"/>
            {props.message}

            <div>
<div>
    {props.like}
</div>
            </div>
        </div>
    )
}

export default Post;