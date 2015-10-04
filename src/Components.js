import React from 'react';
var NameSupplier = function(Component) {

    var NameSupplierComponent = React.createClass({
        getUserName: function() {
            //Somewhere the username is stored but we'll just return a string
            return 'Jason'
        },
        render: function() {
            return (
                <Component username={this.getUserName()} />
            )
        }
    });
    return NameSupplierComponent;
}

var UserPost = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.username} created this.
            </div>
        )
    }
});

var ActiveUserPost = NameSupplier(UserPost);
module.exports = ActiveUserPost;