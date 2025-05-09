
import { css } from '@emotion/react';
import './App.css'
import { JobList } from './components/JobList'
import SiteBar from './components/SiteBar';

const wrapperStyle = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

function App() {
  return (
    <div>
      <SiteBar />
      <div css={wrapperStyle}>
        <JobList />
      </div>
    </div>
  );
}

export default App
