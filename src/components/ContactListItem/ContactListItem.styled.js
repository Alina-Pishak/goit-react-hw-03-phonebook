import styled from "styled-components";

export const ContactItem = styled.li`
    display: flex;
    height: 40px;
    align-items: center;
	gap: 10px;
    background-color: #ecebfa;
    border-radius: 20px;
    margin-top: 10px;
    padding: 10px;

`
export const ContactTextName = styled.p`
    text-align: start;
	color: #6658d3;
`
export const ContactTextNumber = styled.p`
	font-size: smaller;
	color: #6658d3;
`

export const ContactDeleteBtn = styled.button`
	height: 30px;
	margin-left: auto;
 	background-color: #6658d3;
 	border-radius: 6px;
 	color: #FFF;
 	border: 0;
 	&:focus {
 		outline: 0;
 	}
`