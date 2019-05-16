import styled from 'styled-components'
import antd from 'antd'

const LoadingWrap= styled.div`
   background: transparent;
   height: 500px;
   line-height: 500px;
   width: 100%;
   text-align: center;
`
const { Spin, Icon } = antd
const antIcon = <Icon type="loading" style={{fontSize: 24, color: '#1890ff'}} dpin/>

const Loading = () => (
  <>
    <LoadingWrap>
      <Spin indicator={antIcon} />
    </LoadingWrap>
  </>
)

export default Loading;