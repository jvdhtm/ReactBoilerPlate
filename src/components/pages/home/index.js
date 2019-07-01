import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

// Components
import H from '../../atoms/h';
import Select from '../../atoms/select';
import Standard from '../../templates/standard';

const options = [
  { text: 'Lund', value: 'lund' },
  { text: 'Malmo', value: 'malmo' },
  { text: 'Kristianstad', value: 'kristianstad' },
];

const Home = ({ ...props }) => {
  return (
    <Standard>
        <Select onChange={e => props.selectLocation(e.target.value)} options={options} variant="primary" />
        <H level={1}>{props.activeCity[0].town && props.activeCity[0].town}</H>
        <H level={2}>
          Active machines :{' '}
          {props.activeCity &&
            props.activeCity.filter(x => {
              return x.settings.status === 'Active';
            }).length}
        </H>
        <H level={4}>
          Inactive machines :{' '}
          {props.activeCity &&
            props.activeCity.filter(x => {
              return x.settings.status === 'Inactive';
            }).length}
        </H>
        <H level={4}>
          Machines in Storage :{' '}
          {props.activeCity &&
            props.activeCity.filter(x => {
              return x.settings.status === 'Storage';
            }).length}
        </H>
        <p>thing demo</p>
    </Standard>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.citySelected,
  };
}

export default connect(
  mapStateToProps,
  actions
)(Home);
