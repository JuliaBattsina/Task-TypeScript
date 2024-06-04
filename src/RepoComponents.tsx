import React from 'react';

interface RepoComponentsProps {
  repoName: string;
  stars: number;
}

const RepoComponents: React.FC<RepoComponentsProps> = ({ repoName, stars }) => {
  return (
    <div>
      <p>Repositories Name: {repoName}</p>
      <p>Stars: {stars}</p>
    </div>
  );
};

export default RepoComponents;