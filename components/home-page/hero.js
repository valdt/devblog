import classes from './hero.module.css'
import Image from 'next/image';
function Hero(){
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="https://placekitten.com/300/300" alt="" width={300} height={300} />
        </div>
        <h1>Hi, I'm Shittler</h1>
        <p>
            I shitpost about genocide and naps.
        </p>
    </section>
}

export default Hero;