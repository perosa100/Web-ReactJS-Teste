import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 30px;
`
export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: space-between;

    height: 352px;
    width: 344.5px;
    padding: 25px 22px 14px 24px;

    background: ${theme.colors.lightBg};
    border: 1px solid #9aa3bc;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.24);
  `}
`
export const Header = styled.div`
  ${({ theme }) => css`

    font-family: "Proxima Nova Extrabold";
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;

    h1 {
      font-size: 25px;
      color:${theme.colors.secondary};
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
  `}
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 22px;
  }
`
export const ContentTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 16px;
    margin-bottom: 7px;
  `}
`
export const ContentAmount = styled.span`
  ${({ theme }) => css`
    font-family: 'Proxima Nova Extrabold';
    color: ${theme.colors.secondary};
    font-size: 22px;
    margin-bottom: 34px;
  `}
`

type hasHistoryProps = {
  hasHistory: boolean
}
export const ContentLayer = styled.div<hasHistoryProps>`
  ${({ hasHistory }) => css`
    width: 100%;
    margin-bottom: ${hasHistory ? '0' : '30'}px;
  `}
`
export const ContentLayerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`
export const ContentLayerItemName = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: ${theme.colors.text};
  `}
`
export const ContentLayerItemValue = styled.span`
  ${({ theme }) => css`
    font-family: 'Proxima Nova Extrabold';
    color: ${theme.colors.secondary};
    font-size: 18px;
  `}
`
export const Divider = styled.div`
  ${({ theme }) => css`
    margin-top: 16px;

    margin-bottom: 18px;
    border: 1px solid ${theme.colors.gray100};
  `}
`

export const Footer = styled.div`
  width: 100%;
  height: 64px;
  margin-top: 40px;
  position: relative;
`
export const Button = styled.button`
  ${({ theme }) => css`
    font-family: 'Proxima Nova Bold';
    font-size: 16px;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.lightBg};
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.24);

    position: absolute;
    right: 0;
    bottom: 15px;

    width: 100px;
    height: 32px;
    border: 1px solid ${theme.colors.secondary};
    border-radius: 35px;
  `}
`
