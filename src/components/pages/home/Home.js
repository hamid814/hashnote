import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import Notes from '../../notes/Notes';
import HomeTags from './HomeTags';

import { getNotes } from 'store/actions/note';

import './home.scss';

const Home = ({ notes, getNotes }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getNotes();

    try {
      axios.get('/api/v1/tags').then((res) => setTags(res.data.data));
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home-page">
      <HomeTags tags={tags} />
      <br />
      <div style={{ color: '#888', fontSize: 36, marginBottom: 20 }}>
        <i class="icon icon-vector1"></i>
        <i class="icon icon-logo-square"></i>
        <i class="icon icon-logo-radius"></i>
        <i class="icon icon-logo-circle"></i>
      </div>
      <Notes notes={notes} />
    </div>
  );
};

Home.propTypes = {
  getNotes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notes: state.note.notes,
});

export default connect(mapStateToProps, { getNotes })(Home);
