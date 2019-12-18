import React from 'react'
import { connect } from 'react-redux'
class QuestionPicker extends React.Component {
    state = {
        a: '',
        b: '',
        rightanswer: '',//正确答案
        options: []//答案列表

    }
    constructor(props) {
        super(props)
        this.getnum = this.getnum.bind(this)
    }
    componentDidMount() {
        this.getnum()
    }
    getnum() {
        let a = parseInt(Math.random() * 100 + 1)
        let b = parseInt(Math.random() * 100 + 1)
        let rightanswer = 0
        let options = []
        if (this.props.type === 1) {
            rightanswer = a + b
        } else if(this.props.type===2) {
            rightanswer = a - b
        }else{
            rightanswer=a*b
        }
        //正确答案推入到答案里
        options.push(rightanswer)
        //随机剩下答案
        for (let i = 0; i < 3; i++) {
            options.push(parseInt(Math.random() * 100 + 1))
        }
        //随机答案
        options.sort(() => {
            return 0.5-Math.random()
        })
        this.setState({
            a,
            b,
            rightanswer,
            options
        })
    }
    answer(val) {
        this.getnum()
        let {right,wrong} = this.props
        if (val === this.state.rightanswer) {
          this.props.setState('right',++right)
        }else{
            this.props.setState('wrong',++wrong)
        }
    }
    render() {
        return (
            <div className='answer-content'>

                <span>{this.state.a}</span>
                <span>{this.props.type === 1 ? '+' : (this.props.type===2?'-':'x')}</span>
                <span>{this.state.b}</span>
                =__?
                {
                    this.state.options.map((item, i) => {
                        return <div key={i} onClick={() => { this.answer(item) }}>{i + 1}){item}</div>
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        type: state.type,
        right:state.right,
        wrong:state.wrong
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setState(key, value) {
            dispatch({ type: 'SET_STATE', key, value })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPicker)                     