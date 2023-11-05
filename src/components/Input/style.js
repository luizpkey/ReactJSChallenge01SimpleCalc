import style from 'styled-components';

export const InputContainer = style.div `
   width: 100%;
   height: 75px;
   background-color: #AAAAFF;

   display: flex;
   align-items: center;
   justify-content: flex-end;

   font-size: 24px;
   font-family: Roboto;

   input {
      padding: 0 10px;
      width: 100%;
      height: 75px;
      background-color: #AAAAFF;
      border: 0;

      direction: rtl;

      font-size: 24px;
      font-family: Roboto;
      color: #ffffff;
   }
`