import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({repos}) => {
    return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
        {repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)}
    </div>
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos;