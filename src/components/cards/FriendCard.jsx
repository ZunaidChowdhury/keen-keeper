import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const FriendCard = ({ friend }) => {
    return (
        <Link href={`/friends/${friend.id}`} className="flex flex-col items-center p-6 bg-foreground rounded-lg shadow-sm border border-gray-100 text-center
        hover:border-green-600 hover:shadow-lg transition-all duration-300">
            {/* Profile Image Container */}
            <div className="relative w-20 h-20 mb-3">
                <Image
                    src={friend.picture}
                    alt="David Kim"
                    fill
                    sizes="(max-width: 80px)"
                    className="rounded-full object-cover"
                />
            </div>

            {/* Text Info */}
            <h2 className="text-xl font-semibold text-text-primary mb-2">{friend.name}</h2>
            <p className="text-xs text-text-secondary mb-3">{friend['days_since_contact']}d ago</p>

            {/* Tags Section */}
            {/* Category Tag */}
            <div className='flex items-center gap-2'>
                {
                    friend.tags.map((tag, i) => <span key={i} className="mb-2 px-3 py-2 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                        {tag}
                    </span>)
                }
            </div>

            {/* Status Badge */}
            <span className={`px-4 py-1.5 ${friend.status === 'almost due' ? 'bg-[#efad44]' : friend.status === 'overdue' ? 'bg-[#ef4444]' : friend.status === 'on-track' ? 'bg-[#244d3f]' : 'bg-gray-300'} text-white text-sm font-medium rounded-full shadow-md`}>
                {friend.status === 'almost due' ? 'Almost Due' : friend.status === 'overdue' ? 'Overdue' : friend.status === 'on-track' ? 'On-Track' : 'null'}
            </span>
        </Link>
    )
}

export default FriendCard