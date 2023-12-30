import styled from 'styled-components'
import Arrow from '../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'

const maxMobileWidthTwo = '620px'
export const BackWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    position: absolute;
    top: 90px;
    left: 20px;
    cursor: pointer;
  }
`

export const Back = () => {
  const navigate = useNavigate()

  return (
    <BackWrapper onClick={() => navigate(-1)}>
      <img src={Arrow}></img>
    </BackWrapper>
  )
}

// useLocation
