"use client"; 
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils';
import { Bolt, SquareUser, User } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';

const ProfileComp = () => {
	const [name, setName] = useState<string | undefined>(undefined);
	return (
		
		<div className='flex flex-row space-x-3 w-full mt-2 p-2 mb-1 bg-slate-100 rounded-md dark:bg-slate-900'>
			<div className='w-10 h-10 rounded-lg'>
				<Avatar className={'rounded-lg'}>
					<AvatarImage src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg.webp" alt="@shadcn" />
					<AvatarFallback className={'rounded-lg text-[#0c4c6c] dark:text-white'}>PP</AvatarFallback>
				</Avatar >
			</div>
			<div className='w-full'>
				<h2 className='text-[#0c4c6c] font-semibold text-[18px] dark:text-white'>
					Tajbir Ahmed
				</h2>
				<h4 className='text-[16px] dark:text-white'>
					Student
				</h4>
			</div>
			<Popover>
				<PopoverTrigger>
					<User />
				</PopoverTrigger>
				<PopoverContent className='border-0 shadow-transparent dark:bg-transparent'>
					<Card>
						<CardHeader>
							<CardTitle>Manage Profile</CardTitle>
						</CardHeader>
						<CardContent>
							<Link href='/viewprofile' className='flex flex-row space-x-6 hover:bg-slate-200 h-12 items-center p-2 rounded-md dark:hover:bg-slate-800' >
								<SquareUser size={28} />
								<p className='font-semibold'>View Profile</p>
							</Link>
							<Link href='/editprofile' className='flex flex-row space-x-6 hover:bg-slate-200 h-12 items-center p-2 rounded-md dark:hover:bg-slate-800'>
								<Bolt size={28} />
								<p className='font-semibold'>Edit Profile</p>
							</Link>
						</CardContent>
					</Card>
				</PopoverContent>
			</Popover>
		</div>
			
	)
}

export default ProfileComp