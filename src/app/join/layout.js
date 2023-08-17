import { JoinContextProvider } from "@/Context/Join/store";
export default function JoinLayout({ children }) {
  return (
    <>
      <JoinContextProvider>
        {children}
      </JoinContextProvider>
    </>
  )
}