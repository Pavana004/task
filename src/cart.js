import React from "react";


function Cart() {
    
    const {count,setcount}= React.useState(0);

    const inc = () => setcount(count + 1);

    return (
        
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">All Products</a></li>
                                    <hr />
                                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn" type="submit"><i className="bi bi-cart-fill" onClick={inc}></i>Cart-{count}</button>

                    </div>
                </div>
            </nav>
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Shop in Style</h1>
                    <p className="card-text">With this shop hompeage template</p>
                </div>
            </div>
            <div className='row'>
                 <div className="cart" >
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="cart-body">
                        <h5 className="cart-title">Fancy Product</h5>
                        <p>$40.00 - $80.00</p>
                        <br />
                        <a href="" className="btn btn-black text-center" onClick={inc}>View options</a>
                    </div>
                </div>
                <div className="cart" >
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="cart-body">
                        <h5 className="cart-title">Special Item</h5>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <p>$20.00 $18.00</p>
                        <a href="#" className="btn btn-black text-center">Add to Cart</a>
                    </div>
                </div>
                <div className="cart" >
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="cart-body">
                        <h5 className="cart-title">Sale Item</h5>
                        <p>$50.00 $25.00</p>
                        <br />
                        <a href="#" className="btn btn-black text-center">Add to Cart</a>
                    </div>
                </div>
                <div className="cart" >
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="cart-body">
                        <h5 className="cart-title">Popular Item</h5>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <p>$40.00</p>
                        <a href="#" className="btn btn-black text-center" onClick={inc}>Add to Cart</a>
                    </div>
                </div>
                <div className="cart" >
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="cart-body">
                        <h5 className="cart-title">Sale Item</h5>
                        <p>$50.00 $25.00</p>
                        <br />
                        <a href="#" className="btn btn-black text-center">Add to Cart</a>
                    </div>
                </div>
                <div className="cart" >
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="cart-body">
                        <h5 className="cart-title">Fancy Product</h5>
                        <p>$120.00 - $280.00</p>
                        <br />
                        <a href="#" className="btn btn-black text-center">View options</a>
                    </div>
                </div>
                <div className="cart" >
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="cart-body">
                        <h5 className="cart-title">Special Item</h5>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <p>$20.00 $18.00</p>
                        <a href="#" className="btn btn-black text-center">Add to Cart</a>
                    </div>
                </div>
                <div className="cart" >
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                    <div className="cart-body">
                        <h5 className="cart-title">Popular Item</h5>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <p>$40.00</p>
                        <a href="#" className="btn btn-black text-center">Add to Cart</a>
                    </div>
                </div> 
            </div>
            <br />
            <br />
            <div className="card">
                <div className="card-body">
                    <h6>Copyright © Your Website 2022</h6>
                </div>
            </div>

        </>


    );
}
export default Cart;