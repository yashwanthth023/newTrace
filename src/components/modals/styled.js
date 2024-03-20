import Styled from 'styled-components';
import { Modal } from 'antd';

const ModalStyledColord = (type, theme) => `
.atbd-modal2{
  position: relative;
  top :50px !important
} 
  .ant-modal-content, .ant-modal-header {
    background-color: ${type !== 'default' && theme[`${type}-color`]} !important;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer button {
    background: #fff;
    color: #999;
    border: 1px solid #ffff;
  }
`;

const ModalStyled = Styled(Modal)`   
.atbd-modal2{
  position: relative;
  top :50px !important
} 
  ${({ theme, type }) => type && ModalStyledColord(type, theme)}
`;

export { ModalStyled, ModalStyledColord };
