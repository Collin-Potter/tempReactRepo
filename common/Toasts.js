import PropTypes from "prop-types";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toast from "./Toast";
import { removeToast } from "./actions/ToastActions";

const Toasts = ({ actions, toasts }) => {
    const { removeToast } = actions;
    return (
        <ul className = "toasts">
            {toasts.map(toast => {
                const { id } = toast;
                return id == 0 ? (
                    <Toast {...toast} key={id} onDismissClick={() => removeToast(id)} />
                ) : <></>;
            })}
        </ul>
    );
};
//Pop it out

Toasts.propTypes = {
    actions: PropTypes.shape({
        removeToast: PropTypes.func.isRequired
    }).isRequired,
    toasts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ removeToast }, dispatch)
});

const mapStateToProps = state => ({
    toasts: state.toasts
});

export default connect(mapStateToProps, mapDispatchToProps)(Toasts); 