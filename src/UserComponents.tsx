import React from 'react';

interface UserComponentsProps {
  userName: string;
  repos: number;
}

const UserComponents: React.FC<UserComponentsProps> = ({ userName, repos }) => {
  return (
    <div>
      <p>Full Name: {userName}</p>
      <p>Public Repositories: {repos}</p>
    </div>
  );
};

export default UserComponents;