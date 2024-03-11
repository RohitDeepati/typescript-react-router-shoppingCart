// bootstrap library imports
import { Button } from "react-bootstrap"
// rrd imports
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1>Welcome to Our Store</h1>
            <p className="py-4 fs-5">We take pride in offering a diverse and curated selection of high-quality products to enhance your lifestyle. Our store is more than just a shopping destination; it's a place where quality meets affordability, and customer satisfaction is our top priority.
            </p>
            <Link to="/store">
                <Button>Explore our store</Button>
            </Link>
        </div>
    )
}