'use client'
import { chatHerfConstructor } from '@/lib/utils';
import { Divide,ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

interface SidebarChatListProps {
    friends: User[]
    sessionId : string
};

const SidebarChatList: FC<SidebarChatListProps> = ({friends,sessionId}) => {
    const router = useRouter()
    const pathname = usePathname()
    const [unseenMessages, setunseenMessages] = useState<Message[]>([])

    useEffect(() =>{
       if(pathname?.includes('chat')){
        setunseenMessages((prev) => {
            return prev.filter((msg) => !pathname.includes(msg.senderId))
        })
       }
    },[pathname])

  return <ul role='list' className='max-[25rem] overflow-y-auto -mx-2 space-y-1'>
{friends.sort().map((friend) =>{
    const unseenMessagesCount = unseenMessages.filter((unseenMsg)=>{
        return unseenMsg.senderId = friend.id
    }).length
 return <li key={friend.id}>
    <a href={`/dashboard/chat/${chatHerfConstructor(sessionId, friend.id)}`} className='text-gray-700 hover:text-indigo-600 hover:bg-slate-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold justify-between'>
      <div className='flex gap-4 items-center justify-center'>
<Image  src={friend.image} alt='Chat Friend' width={30} height={30} className='rounded-full '/>
 {friend.name}
      </div>
 {unseenMessagesCount > 0 && <div className='bg-indig0-600 font-medium text-xs text-white w-4 h-4 rounded-full flex justify-center items-center'>
  {unseenMessagesCount}
  </div>}
 <ChevronRight className='justify-end' />
</a>

 </li>
} )}
  </ul>
};

export default SidebarChatList;