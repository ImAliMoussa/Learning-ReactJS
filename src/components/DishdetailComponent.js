import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

function RenderComments(dish) {
    if (dish === null || dish.comments === null) {
        return <div></div>;
    } else {
        const comments = dish.comments.map((c) => {
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
                    {comments}
                </ul>
            </div>
        );
    }
}

function RenderDish(dish) {
    if (dish == null) {
        return <div></div>;
    } else {
        const comments = RenderComments(dish);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardTitle className="col-12 my-1" >{dish.name}</CardTitle>
                            <p className="col-12" > {dish.description} </p>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
}

function DishDetail(props) {
    return RenderDish(props.dish);
}


export default DishDetail;