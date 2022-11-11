import { useCallback, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { Cookie } from '../interfaces'
import styles from '../styles/Home.module.css'
import { Button } from "@nextui-org/react";
import { useCookies } from '../context/CookieContext'

const fetcher = async(url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function Home() {
  const { data, error } = useSWR(`/api/cookies`, fetcher);
  const { cookies, setCookies } = useCookies();

  const setCookiesToContext = useCallback(() => {
    if(cookies && data && cookies[0]._id !== 0) {
      console.log('Not setting, correct cookies in context');
      return
    };
    
    setCookies(data)
  }, [cookies, data, setCookies])

  useEffect(() => {
    setCookiesToContext();
  }, [setCookiesToContext])

  console.log('cookies', cookies);
  
  if (error) return <div>{error.message}</div>

  if (!cookies) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Cookie cookie</title>
        <meta name="Rate your favorite cookies!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl">cookiecookie</h1>
      <h2 className="text-lg">This weeks cookies</h2>
      <p>Week of ____ to _____</p>

      <main className={styles.main}>
        <div className="flex flex-col space-y-10 md:space-y-20">
          {cookies.map((cookie: Cookie) => {
            const imageUrl = cookie?.image;
            return (
              <div key={cookie._id} className="flex flex-row space-x-5">
                <div className="relative w-1/5 lg:w-1/12 h-16">
                  <img src={imageUrl} alt={`Close up of ${cookie.name}`} height={"auto"}/>
                </div>
                <div className="flex flex-col space-y-2 w-4/5 lg:w-11/12">
                  <h3 className="h3">{cookie.name}</h3>
                  <p className="cookieDescription">{cookie.description}</p>
                  <Link href={`/cookie/${cookie._id}`} prefetch={false} shallow>
                    
                        View Details
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
