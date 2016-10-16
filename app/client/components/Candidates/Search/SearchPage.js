import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as jobActions from '../../../actions/jobActions';
import Search from './Search';
import {loadJobs} from '../../../actions/jobActions';

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadJobs();
  }

  render() {
    const {jobs} = this.props;

    return (
      <div>
        <Search jobs={jobs} />
      </div>
    );
  }
}

SearchPage.propTypes = {
  jobs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    jobs: state.jobs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jobActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
