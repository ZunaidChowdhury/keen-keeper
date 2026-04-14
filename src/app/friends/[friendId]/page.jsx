import { wait } from '@/utils/utils';
import React from 'react'

const FriendDetailsPage = async ({ params }) => {
  await wait(5000);
  const { friendId } = await params
  return (
    <div>My Post: {friendId}</div>
  )
}

export default FriendDetailsPage