'use client'

import React, { useEffect, useState } from 'react'
import { Footer } from '@/components/sections/Footer'

interface User {
  id: string
  name: string
  email: string
  consent: boolean
  createdAt: string
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()

        if (response.ok) {
          setUsers(data.users)
        } else {
          setError(data.error || 'Failed to fetch users')
        }
      } catch (err) {
        setError('An error occurred while fetching users')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <main className="px-6">
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10" />

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          Dashboard of registered users
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10" />
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        {loading && <div className="text-center text-amber-800 text-2xl">Loading users...</div>}

        {error && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-center">
            {error}
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <div className="text-center text-amber-800 text-2xl">No users registered yet.</div>
        )}

        {!loading && !error && users.length > 0 && (
          <div className="bg-white/50 rounded-lg shadow-lg overflow-hidden border border-[#c19a6b]/30">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#e1bc8f] via-[#ecd8ae] to-[#e1bc8f]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">#</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                      Consent
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                      Registered
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c19a6b]/20">
                  {users.map((user, index) => (
                    <tr key={user.id} className="hover:bg-[#c19a6b]/5 transition-colors">
                      <td className="px-6 py-4 text-sm text-amber-900">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-amber-900 font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-amber-900">{user.email}</td>
                      <td className="px-6 py-4 text-sm">
                        {user.consent ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            No
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-amber-900">
                        {new Date(user.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#f7e9d2]/50 border-t border-[#c19a6b]/30">
              <p className="text-sm text-amber-800">
                Total registered users: <span className="font-semibold">{users.length}</span>
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
