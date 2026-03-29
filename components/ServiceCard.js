import Link from 'next/link'

export default function ServiceCard({ title, count, color }) {
  return (
    <Link href="/services">
      <div className={`bg-gradient-to-br ${color} rounded-xl p-8 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer h-full flex flex-col justify-center items-center text-center`}>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg opacity-90">{count}</p>
      </div>
    </Link>
  )
}
