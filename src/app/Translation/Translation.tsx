import { Input } from 'antd'
import React from 'react'

const { Search } = Input

const onSearch: (value: string) => void = value => console.log(value)

const Translation: React.VoidFunctionComponent = () => <div style={{ width: '400px' }}><div>Word Search:</div> <Search placeholder="input search text" onSearch={onSearch} enterButton /></div>

export default Translation