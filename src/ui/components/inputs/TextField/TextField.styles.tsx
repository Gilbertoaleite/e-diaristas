import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextFieldStyled = styled(TextField)`
  .MuiInput-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
