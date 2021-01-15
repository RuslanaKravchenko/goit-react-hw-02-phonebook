import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 10px;
  border: 1px solid grey;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    border: 1px solid #a75ee1;
    box-shadow: 5px 5px 11px 2px rgba(143, 108, 193, 0.45);
  }

  .listItem_name {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 3px;
  }

  .listItem_number {
    font-size: 14px;
    color: #4b4e4f;
  }

  .listItem_btn {
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }
  .listItem_icon {
    fill: #3e3d3f;

    &:focus,
    &:hover {
      fill: #0b858b;
    }
  }
`;
export default ListItem;
