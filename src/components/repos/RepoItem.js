import React from 'react'
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
    return (
        <div className="card repo-card" style={{margin: '1rem 0 0 0'}}>
            <h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            </h3>
        </div>
    );
};

RepoItem.propTypes={
    repo: PropTypes.object.isRequired
}

export default RepoItem;