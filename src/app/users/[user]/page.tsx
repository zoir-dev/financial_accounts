import UserPage from '@/pages/Users/User'

const User = ({ params }: { params: { user: string } }) => {
  return (
    <UserPage slug={params.user} />
  )
}

export default User