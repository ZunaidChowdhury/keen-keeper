import React from 'react'
import FriendCard from '../cards/FriendCard'
import { wait } from '@/utils/utils';

export const dynamic = 'force-dynamic';

const FriendList = async () => {

    await wait(3000);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/friends.json`, {
    cache: 'no-store' // This prevents caching so it hits your delay every time
});
    let friendListData = [];

    if (res.ok) {
        friendListData = await res.json();
    } else {
        console.error("Failed to fetch friends:", res.statusText);
    }



    return (
        <div className='max-w-277.5 mx-auto pb-20'>
            <h3 className='text-text-primary text-2xl font-semibold mb-4'>
                Your Friends
            </h3>

            {/* Friend list  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    friendListData.map(friend => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    )
}

export default FriendList