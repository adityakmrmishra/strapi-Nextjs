import Link from "next/link";

export default function NotFoundRoot() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="space-y-6 flex items-center flex-col">
        <ManIcon className="h-24 w-24  text-blue-500 dark:text-blue-400" />
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          Oops!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          It seems you’re lost. Let’s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

function ManIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 22a10.9 10.9 0 0 1 13 0" />
      <line x1="9" y1="17" x2="9" y2="22" />
      <line x1="15" y1="17" x2="15" y2="22" />
    </svg>
  );
}
