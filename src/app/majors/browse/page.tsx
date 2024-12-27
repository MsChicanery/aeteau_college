'use server'
 
import { redirect } from 'next/navigation'
 
export async function welcomepage(data) {
  redirect(`/majors`)
}
