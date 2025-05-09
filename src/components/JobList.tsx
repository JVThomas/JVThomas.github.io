import { useMemo } from 'react';
import { jobs } from '../data/jobs';
import { JobDetails } from './JobDetails';
import { css } from '@emotion/react';

const headerStyle = css`
  text-align: left;
`

export const JobList = () => {
  const jobList = useMemo(() => jobs.map(
    (job) => <JobDetails {...job} key={job.name} />
  ), []);

  return(
    <div>
      <h1 css={headerStyle}>Experience</h1>
      {jobList}
    </div>
  )
};