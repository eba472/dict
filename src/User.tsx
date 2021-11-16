import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Table } from 'antd'

const QUERY_USERS = gql`
  query {
    users {
      id
      firstName
      lastName
    }
}
`
interface user { id: string, firstName: string, lastName: string }
const User: () => JSX.Element = () => {

  // Polling: provides near-real-time synchronization with
  // your server by causing a query to execute periodically
  // at a specified interval
  const { data, loading } = useQuery(
    QUERY_USERS, {
  }
  )
  // should handle loading status
  if (loading) return <p>Loading...</p>
  if (data === undefined) return <p>Turn on your backend</p>
  const dataSource = data.users.map(({ id, firstName, lastName }: user) => (
    {
      id: id,
      firstName: firstName,
      lastName: lastName
    }
  ))
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    }
  ]
  return <Table dataSource={dataSource} columns={columns} pagination={false} />
}

export default User