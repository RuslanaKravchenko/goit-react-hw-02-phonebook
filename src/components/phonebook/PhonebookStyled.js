import styled from 'styled-components';
const Main = styled.main`
  margin: 0 auto;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  .phonebook_title {
    color: #0d5667;
    margin-bottom: 30px;
    text-align: center;
  }

  .contacts_title {
    color: #286671;
    margin-bottom: 20px;
    text-align: center;
  }

  .contacts_text {
    padding: 0 10px;
    text-align: center;
    color: #464b51;
  }
`;
export default Main;
