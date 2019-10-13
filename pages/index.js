import Head from 'next/head';
import '../styles/styles.scss'
import Particles from '../components/Particles';

const pageStyles = {
    minHeight: '100vh',
    position: 'relative'
}


const Index = () => {
    return (
        <div className='hero is-black is-bold is-medium' style={pageStyles}>
            <Head>
                <meta charSet='utf-8' />
                <title>RichPlayers | Neteller &amp; Skrill VIP Upgrades</title>
                <meta name='description' content={`Free VIP upgrades for your Skrill &amp; Neteller ewallet accounts`} />
                <link rel='canonical' href='https://www.richplayers.co.uk' />
            </Head>
            <Particles/>
            <div className='hero-body'>
                <div className='container'>
                
                </div>
            </div>
        </div>
    )
}
 

export default Index;

