import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const { Search } = Input;

const StyledInput = styled.input`
font-size: 2em;
border-radius: 2em;
border: 1px solid #505050;
`

const SearchPage = () => {

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div>
            <StyledInput size={'large'} />
            <Button type="primary" shape="circle" icon={<SearchOutlined />} size={'large'} />
        </div>
    )
}

export default SearchPage