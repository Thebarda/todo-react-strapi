import { bindActionCreators } from 'redux'
import * as TodoActionCreators from './ducks/todos'

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TodoActionCreators}, dispatch)
}