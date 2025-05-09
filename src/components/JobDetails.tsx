import { css } from '@emotion/react';
import type { JobDetailData } from '../data/jobs';


const containerStyle = css`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`

const companyInfoStyle = css`
  display:flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  text-align: left;
  flex: 2
`

const logoContainerStyle = css`
  display: flex;
  flex: 1;
  max-width: 120px;
  max-height: 120px;
  margin-right 1rem;
`

const logoStyle = css`
  min-width: 75px;
  min-height: 100px;
  padding: 0.4rem;
  background-color: #f0f0f0;
`

const companyDetailsStyle = css`
  display: flex;
  flex-direction: row;
  flex: 5;
  margin auto 0
  text-align: left;
  align-items: center;
`

const companyResponsibilitiesStyle = css`
  text-align: left;
  font-size: 1rem;
`

const jobDetailStyle = css`
  margin: 0
`

export const JobDetails = (props: JobDetailData) => {
  const {
    name,
    logo,
    location,
    startDate,
    endDate,
    responsibilities,
    jobTitle
  } = props;

  return (
    <div
      data-testid='company-card'
      css={containerStyle}
      className='company-card'
    >
      <div
        css={companyDetailsStyle}
        className='company-details'
      >
        <div className='company-logo-container' css={logoContainerStyle}>
          <img
            src={logo}
            alt={`${name} logo`}
            className='company-logo'
            css={logoStyle}
          />
        </div>
        <div className='company-info' css={companyInfoStyle}>
          <h2 css={jobDetailStyle}>{name}</h2>
          <h3 css={jobDetailStyle}>{jobTitle}</h3>
          <p css={jobDetailStyle}>{location}</p>
          <p css={jobDetailStyle}>{startDate} - {endDate}</p>
        </div>
      </div>
      <div className='company-responsibilities' css={companyResponsibilitiesStyle}>
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}