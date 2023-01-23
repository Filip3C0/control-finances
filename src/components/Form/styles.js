import styled from "styled-components"

export const Container = styled.div`
  margin-top: 80px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  max-width: 1120px;
  margin: 20px auto;
`

export const FormInput = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  align-items: center;

  input {
    accent-color: #35018c;
    
  }
  label{
    margin-left: 5px;
    margin-right: 5px ;
  }
  div {
    margin-right: 20px;
    display: flex;
   
  }
`
export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`
export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 190px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 8px;
  color: black;
  padding-left: 15px;
  display: block;
`
export const Button = styled.button`
  background-color: #35018c;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  color: #fff;
`
