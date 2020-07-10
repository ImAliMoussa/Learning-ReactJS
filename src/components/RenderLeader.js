import React from 'react';
import { Media } from 'reactstrap';

function RenderLeader({ leader }) {
    return (
        <Media className="row my-4">
            <Media className="mr-5">
                <Media middle object src={leader.image} alt="Generic placeholder image" className="mx-auto" />
            </Media>
            <Media body>
                <Media heading>
                    {leader.name}
                </Media>
                <Media className="my-3">
                    {leader.designation}
                </Media>
                <Media >
                    {leader.description}
                </Media>
            </Media>
        </Media>
    );
}


export default RenderLeader;