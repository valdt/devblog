import classes from './featured-posts.module.css';
import PostsGrid from '../posts/post-grid';

function FeaturedPosts(props) {
    return (
        <section className={classes.latest}>
            <h2>Featured Shitposts and Naps</h2>
            <PostsGrid posts={props.posts}/>
        </section>
    );
}

export default FeaturedPosts;