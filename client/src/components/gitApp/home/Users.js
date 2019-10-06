import React, { useContext } from 'react';
import GithubContext from '../../../Context/Github/githubContext';
import UserCard from './UserCard';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInUsers = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;
const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, clearButton, loading } = githubContext;

  return (
    <div>
      {loading ? (
        <div className='loader container'></div>
      ) : githubContext.users.length > 0 ? (
        <FadeInUsers>
          <div className='container'>
            <div className='userCards' style={{ marginBottom: '1rem' }}>
              {users.map(user => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        </FadeInUsers>
      ) : githubContext.users.length === 0 && clearButton ? (
        <FadeIn>
          <div className='no-results-icon container'>
            <div className='sky'>
              <span>&nbsp;&nbsp;</span>
              <i className='fas fa-star hide-sky'></i>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <i className='fas fa-moon fa-3x'></i>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <i className='fas fa-star'></i>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <i className='fas fa-star hide-sky'></i>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className='ground'>
              <i className='fas fa-tree fa-10x'></i>
              <i className='fas fa-campground fa-5x'></i>
              <i className='fas fa-tree fa-10x'></i>
            </div>
            <h2 style={{ marginTop: '0.5rem' }}>
              It's pretty quiet out here...
            </h2>
          </div>
        </FadeIn>
      ) : (
        <div className='home-github-icon'>
          <FadeIn>
            <i className='fab fa-github fa-10x'></i>
          </FadeIn>
        </div>
      )}
    </div>
  );
};

export default Users;
