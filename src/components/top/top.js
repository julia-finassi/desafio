import React from 'react';
import './top.css';

const Top = () => {
    return (


        <section className="container top">

            <header className="row">
                <div className="col-sm-8 col-md-10 col-lg-10">
                    <h1>Top 5</h1>
                </div>

            </header>
            <hr />
            <article className="row">

                <div className="col-sm-12 col-md-12 col-lg-12 tablestop justify-content-center mb-4">
                    <table className="topTable">
                        <thead>
                            <th>Highest avg age</th>
                        </thead>
                        <tbody className="bgcolor">
                            <div className="wrap">
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                            </div>
                        </tbody>
                    </table>
                    <div className="mx-3"></div>
                    <table className="topTable">
                        <thead>
                            <th>Lowest avg age</th>
                        </thead>

                        <tbody className="bgcolor">
                            <div className="wrap">
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                                <tr>
                                    <td>Inter Milan</td>
                                    <td align="right">31.9</td>
                                </tr>
                            </div>
                        </tbody>

                    </table>
                </div>
            </article>


        </section>






    )
}

export default Top;