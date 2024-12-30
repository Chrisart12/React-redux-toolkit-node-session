import {Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>

        <section className="py-6">
            <div className="container bg-light min-vh-50 py-6 d-flex justify-content-center align-items-center" >
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="lc-block mb-4">
                            <div >
                                <h1 className="fw-bold display-1">404</h1>
                            </div>
                        </div>
                        <div className="lc-block">
                            <div >
                                <p className="h2">Sorry, we can’t find the page you’re looking for. </p>
                                <p className="lead">Click the button below to go back to the homepage</p>
                            </div>
                        </div>
                        <div className="lc-block">
                            <Link className="btn btn-primary" to="/" role="button">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-9">
                        <div className="lc-block mb-5 text-center">
                            <div >
                                <h1 className="display-5 fw-bold">Our Latest Social Post</h1>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    </div>
  )
}
