import { AccountContextProvider } from "@/Context/account/store";

export default function AccountLayout({ children }) {
  return (
    <>
      <AccountContextProvider>
        {children}
      </AccountContextProvider>
    </>
  )
}