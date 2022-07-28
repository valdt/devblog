import Link from "next/link";
import classes from "./post-item.module.css";
import Image from 'next/Image';
function PostItem(props) {
    const { title,image,excerpt,date,slug } = props.post;
    const formatedDate = new Date(date).toLocaleDateString('en-us'); 
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={300}/>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}


export default PostItem;
