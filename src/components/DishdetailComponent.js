import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends React.Component {
    renderComments(dish) {
        if (dish === null || dish.comments === null) {
            return <div></div>;
        } else {
            const comments = dish.comments.map((c) => {
                return (<li className="list-unstyled">
                    {c.comment}
                    <br />
                    <br />
                    -- {c.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
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

    renderDish(dish) {
        if (dish == null) {
            return <div></div>;
        } else {
            const comments = this.renderComments(dish);

            return (
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
            );
        }
    }

    render() {
        return (
            <div className="container">
                {this.renderDish(this.props.dish)}
            </div>
        );
    }
}

export default DishDetail;