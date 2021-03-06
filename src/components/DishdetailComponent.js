import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({comments}) {
    console.log(comments);
    if (comments === null) {
        return <div></div>;
    } else {
        const C = comments.map((c) => {
            return (<li className="list-unstyled">
                {c.comment}
                <br />
                <br />
                    -- {c.author} {c.date}
                <br />
                <br />
            </li>);
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-group">
                    {C}
                </ul>
            </div>
        );
    }
}

function RenderDish({dish}) {
    if (dish == null) {
        return <div></div>;
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardTitle className="col-12 my-1" >{dish.name}</CardTitle>
                            <p className="col-12" > {dish.description} </p>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

function DishDetail(props) {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );
}


export default DishDetail;