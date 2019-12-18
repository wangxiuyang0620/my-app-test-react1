import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionPicker from '../components/QuestionPicker'
class Item extends Component {
    render() {
        return (
            <div className='answer'>
                <span>回答正确：{this.props.right}</span>
                <span>回答错误：{this.props.wrong}</span>
                <QuestionPicker></QuestionPicker>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        right: state.right,
        wrong: state.wrong
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps)(Item)