import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as jobActions from '../../../actions/jobActions';
import InterviewList from './InterviewList';
import { loadInterviews } from '../../../actions/jobActions';

class InterviewsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadInterviews();
  }

  render() {
    const {interviews} = this.props;

    return (
      <div>
        <InterviewList interviews={interviews} />
      </div>
    );
  }
}

InterviewsPage.propTypes = {
  interviews: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    interviews: state.jobs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jobActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewsPage);
