import { StyledItem, StyledBtm, StyledText } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { fetchDelContact } from 'redux/contacts/operations';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const onClick = evt => {
    dispatch(fetchDelContact(evt.currentTarget.name));
  };

  return (
    <StyledItem>
      <StyledText>
        {item.name}: {item.number}
      </StyledText>
      <StyledBtm type="button" name={item.id} onClick={onClick}>
        delete
      </StyledBtm>
    </StyledItem>
  );
};
