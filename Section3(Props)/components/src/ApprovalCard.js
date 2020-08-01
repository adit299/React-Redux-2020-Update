import React from 'react';

const ApprovalCard = props => {
    return (
        <div className="ui card">
            {/* We are passing in a comment into the approval card by using opening and 
            closing JSX tags in indes.js. We access this using props.children, and we
            can hourse it in the content div */}
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};


export default ApprovalCard;



