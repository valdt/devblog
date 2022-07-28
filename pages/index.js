import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS= [
  {title:'Nap',image:'cat300.jpg',excerpt:'The worst nap, not clickbiat. Owner in shock',date:'2022-02-10',slug:'nap'},
  {title:'Nap',image:'cat300.jpg',excerpt:'The worst nap, not clickbiat. Owner in shock',date:'2022-02-10',slug:'murder'},
  {title:'Nap',image:'cat300.jpg',excerpt:'The worst nap, not clickbiat. Owner in shock',date:'2022-02-10',slug:'catnip-found'},
  {title:'Nap',image:'cat300.jpg',excerpt:'The worst nap, not clickbiat. Owner in shock',date:'2022-02-10',slug:'rehab'},
  {title:'Nap',image:'cat300.jpg',excerpt:'The worst nap, not clickbiat. Owner in shock',date:'2022-02-10',slug:'genocide-northafrica'},
  {title:'Nap',image:'cat300.jpg',excerpt:'The worst nap, not clickbiat. Owner in shock',date:'2022-02-10',slug:'are-we-gods'},
]

function Home(){
  return(
    <Fragment>
      <Hero/>
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  );
}

export default Home;

//1) Splash Screen

//2) Featured Content