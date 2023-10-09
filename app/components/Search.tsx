'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-center md:justify-between">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="bg-white p-2 w-80 text-xl rounded-xl"
            />
            <button
                type="submit"
                className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
                🚀
            </button>
        </form>
    );
}
