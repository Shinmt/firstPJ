import img from '../img/iPad_Air.jpg'

export default function Home() {
    return(
        <div style={{ margin: '100px' }} >
            <div><img src={img} alt="scenary" style={{ width: '400px', }}/></div>
            <p>This is Home Page.</p>
        </div>
    );
}