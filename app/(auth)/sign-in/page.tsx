import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="w-full max-w-[556px] flex flex-col lg:gap-[10px] gap-5 px-5 py-[30px] lg:px-[60px] lg:py-[50px] rounded-[10px] bg-whitish-pure dark:bg-dark-secondary z-20">
      <div>
        <h1 className="text-text-text1 text-center text-lg lg:text-xl font-semibold leading-normal dark:text-whitish-pure">
          Welcome Back!
        </h1>
        <p className="text-center text-xs text-text-200 lg:text-sm dark:text-text-200 lg:pb-[10px]">
          Dont have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-primary-500 underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}