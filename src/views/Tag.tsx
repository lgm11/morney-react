import { Button } from 'components/Button';
import { Center } from 'components/Center';
import Icon from 'components/Icon';
import Layout from 'components/Layout';
import { Space } from 'components/Space';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTags } from 'useTags';
type Params = {
    id:string
}

const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding: 14px;
    background: white;
`
const LabelWrapper = styled.div`
 background:white;
  padding:0 16px;
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
const Tag:React.FC = () => {
    const {findTag,updateTag,deleteTag} = useTags()
    let {id:idString} = useParams<Params>()
    const tag = findTag(parseInt(idString))
    const tagContent = (tag:{id:number,name:string})=>(
        <div>
            <LabelWrapper>
                    <label>
                        <span>标签名</span>
                        <input type="text" placeholder="标签名" value={tag.name} onChange={(e)=>{updateTag(tag.id,{name:e.target.value})}}/>
                    </label>
                </LabelWrapper>
                <Center>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Button onClick={()=>deleteTag(tag.id)}>删除标签</Button>
                </Center>
        </div>
    )
    return (
        <Layout>
            <Topbar>
                <Icon name="left" />
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            {tag ? tagContent(tag):<Center>tag不存在</Center>}
        </Layout>
    )
}
export {Tag}