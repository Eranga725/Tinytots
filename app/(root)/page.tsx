import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <section className="bg-color-50 bg-dotted-pattern bg-contain
    py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2
      2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Play, Studdy, Create content, Our Platform</h1>
          <p className="p-regular-20 md:p-regular-24">play learn study and create content as techar let's tech theam how to win the life goal</p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#Events">
              Let's go
            </Link>
          </Button>

        </div>
      </div>
    </section>
    </>
  )
}
