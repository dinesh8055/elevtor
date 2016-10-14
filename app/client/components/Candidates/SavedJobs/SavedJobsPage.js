import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as jobActions from '../../../actions/jobActions';
import SavedJobList from './SavedJobList';
import { loadSavedJobs } from '../../../actions/jobActions';


class SavedJobsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadSavedJobs();
  }

  render() {
    const {savedJobs} = this.props;

    return (
      <div>
        <SavedJobList savedJobs={savedJobs} />
      </div>
    );
  }
}

SavedJobsPage.propTypes = {
  savedJobs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    savedJobs: state.jobs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jobActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedJobsPage);
