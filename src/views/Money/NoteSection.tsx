import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background:#f5f5f5;
  padding:0 16px;
  font-size:14px;
  > label{
    display: flex;
    align-items: center;
    > span{
      margin-right:16px;
      white-space:nowrap;
    }
    >input{
      display: block;
      width:100%;
      height:72px;
      background:none;
      border:none;
    }
  }
`
type Props = {
  value:string;
  onChange:(value:string)=>void
}
const NoteSection:React.FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if(refInput.current){
      props.onChange(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注" defaultValue={note} ref={refInput} onBlur={onBlur}/>
      </label>
    </Wrapper>
  )
}
export {NoteSection};