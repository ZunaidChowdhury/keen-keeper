import RecentInteraction from '@/components/cards/RecentInteraction';
import NotFound from '@/components/NotFound';
import { formatDate, wait } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaClockRotateLeft } from 'react-icons/fa6';
import { IoReload } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineArchive, MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraLight } from 'react-icons/pi';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { SiInteractiondesignfoundation } from 'react-icons/si';

const recentInteractions = [
  {
    icon: MdOutlineTextsms,
    iType: 'Text',
    details: 'Asked for career advice',
    date: 'Jan 28, 2026',
  },
  {
    icon: LuPhoneCall,
    iType: 'Meetup',
    details: 'Industry conference meetup',
    date: 'Jan 28, 2026',
  },
  {
    icon: PiVideoCameraLight,
    iType: 'Video',
    details: 'Asked for career advice',
    date: 'Jan 28, 2026',
  },
  {
    icon: MdOutlineTextsms,
    iType: 'Text',
    details: 'Asked for career advice',
    date: 'Jan 28, 2026',
  },
];


const FriendDetailsPage = async ({ params }) => {

  await wait(2200);
  let friend = null;
  const { friendId } = await params
  if (isNaN(Number(friendId))) {
    return <NotFound />
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/friends.json`, {
    cache: 'no-store' // This prevents caching so it hits your delay every time
  });

  let friendListData = [];

  if (res.ok) {
    friendListData = await res.json();
    // console.log('friendListData', friendListData);
    friend = friendListData.find(person => person.id === parseInt(friendId));
    if (!friend) {
      return <NotFound />
    }
  }
  else {
    return (
      <div className='max-w-277.5 mx-auto my-20 h-60 p-6 bg-foreground rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center'>
        <p className='text-text-primary text-lg font-medium mb-6'>Failed to load data.</p>
        <Link href={`/friends/${friendId}`} className='btn'><IoReload />Reload</Link>
      </div>
    )
    // console.error("Failed to fetch friends:", res.statusText);
  }



  return (
    // container
    <div className='max-w-277.5 mx-auto my-20 grid grid-cols-[350px_736px] gap-6'>
      {/* My Post: {friendId} */}

      {/* left */}
      <div>
        {/* profile card */}
        <div className="mb-4 flex flex-col items-center p-6 bg-foreground rounded-lg shadow-sm">
          {/* Profile Image Container */}
          <div className="relative w-20 h-20 mb-3">
            <Image
              src={friend.picture}
              alt="David Kim"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Text Info */}
          <h2 className="text-xl font-semibold text-text-primary mb-2">{friend.name}</h2>

          {/* Status Badge */}
          <span className={`mb-2 px-4 py-1.5 ${friend.status === 'almost due' ? 'bg-[#efad44]' : friend.status === 'overdue' ? 'bg-[#ef4444]' : friend.status === 'on-track' ? 'bg-[#244d3f]' : 'bg-gray-300'} text-white text-sm font-medium rounded-full shadow-md`}>
            {friend.status === 'almost due' ? 'Almost Due' : friend.status === 'overdue' ? 'Overdue' : friend.status === 'on-track' ? 'On-Track' : 'null'}
          </span>

          {/* Category Tag */}
          <div className='flex items-center gap-2'>
            {
              friend.tags.map((tag, i) => <span key={i} className="mb-3 px-3 py-2 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                {tag}
              </span>)
            }
          </div>


          <p className="text-base text-text-secondary font-medium italic mb-2">{friend.bio}</p>
          <p className="text-sm text-text-secondary">{friend.email}</p>
        </div>

        {/* btns */}
        <div className="space-y-2">
          <button className='btn w-full bg-foreground h-13 py-4 text-text-primary text-base font-medium'>
            <RiNotificationSnoozeLine />
            <span>Snooze 2 weeks</span>
          </button>
          <button className='btn w-full bg-foreground h-13 py-4 text-text-primary text-base font-medium'>
            <MdOutlineArchive />
            <span>Archive</span>
          </button>
          <button className='text-red-500 btn w-full bg-foreground h-13 py-4 text-base font-medium'>
            <RiDeleteBin6Line />
            <span>Delete</span>
          </button>
        </div>
      </div>


      {/* right */}
      <div className='space-y-6'>
        {/* c1 */}
        <div className='grid grid-cols-3 gap-6'>
          <div className=' bg-foreground rounded-lg shadow-sm py-8 px-4 text-center'>
            <h3 className='text-theme-primary text-[1.875rem] font-semibold m-0'>
              {friend.days_since_contact}
            </h3>
            <p className='text-text-secondary text-lg'>
              Days Since Contact
            </p>
          </div>

          <div className=' bg-foreground rounded-lg shadow-sm py-8 px-4 text-center'>
            <h3 className='text-theme-primary text-[1.875rem] font-semibold m-0'>
              {friend.goal}
            </h3>
            <p className='text-text-secondary text-lg'>
              Goal (Days)
            </p>
          </div>

          <div className=' bg-foreground rounded-lg shadow-sm py-8 px-4 text-center'>
            <h3 className='text-theme-primary text-[1.875rem] font-semibold m-0'>
              {formatDate(friend.next_due_date)}
            </h3>
            <p className='text-text-secondary text-lg'>
              Next Due
            </p>
          </div>
        </div>

        {/* c2 */}
        <div className='bg-foreground rounded-lg shadow-sm p-6'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-theme-primary text-[1.25rem] font-medium'>
              Relationship Goal
            </h3>
            <button className='btn w-15 h-8.25 text-text-primary text-sm font-medium'>Edit</button>
          </div>
          <p className='text-text-secondary text-lg'>
            Connect every <span className='text-text-primary font-bold'>{friend.goal} days</span>
          </p>
        </div>

        {/* c3 */}
        <div className='bg-foreground rounded-lg shadow-sm p-6'>
          <div>
            <h3 className='text-theme-primary text-[1.25rem] font-medium mb-4'>
              Quick Check-In
            </h3>
            <div className='grid grid-cols-3 gap-4'>
              <button className='text-text-primary hover:text-white  cursor-pointer flex flex-col items-center justify-center  w-full bg-background hover:bg-theme-primary transition-all  duration-300 active:translate-y-[2px] rounded-lg border border-gray-200  py-4 '>
                <LuPhoneCall className=' w-8 h-8 mb-2' />
                <span className='text-lg'>Call</span>
              </button>

              <button className='text-text-primary hover:text-white  cursor-pointer flex flex-col items-center justify-center  w-full bg-background hover:bg-theme-primary transition-all  duration-300 active:translate-y-[2px] rounded-lg border border-gray-200  py-4 '>
                <MdOutlineTextsms className=' w-8 h-8 mb-2' />
                <span className='text-lg'>Text</span>
              </button>

              <button className='text-text-primary hover:text-white  cursor-pointer flex flex-col items-center justify-center  w-full bg-background hover:bg-theme-primary transition-all  duration-300 active:translate-y-[2px] rounded-lg border border-gray-200  py-4 '>
                <PiVideoCameraLight className=' w-8 h-8 mb-2' />
                <span className='text-lg'>Video</span>
              </button>
            </div>
          </div>
        </div>

        {/* c4 */}
        <div className='bg-foreground rounded-lg shadow-sm p-6'>
          <div className='flex items-center justify-between'>
            <h3 className='text-theme-primary text-[1.25rem] font-medium'>
              Recent Interactions
            </h3>
            <button className='btn  h-8.25 text-text-primary text-sm font-medium'><FaClockRotateLeft />Full History</button>
          </div>

          {/* content  */}
          <div className='border border-gray-200 mt-4'>
            {
              recentInteractions.map((interaction, i) => (
                <div key={i}>
                  <RecentInteraction  interaction={interaction} />
                  {i === recentInteractions.length - 1 ? null : <div className='w-full h-px bg-gray-200' />}
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default FriendDetailsPage