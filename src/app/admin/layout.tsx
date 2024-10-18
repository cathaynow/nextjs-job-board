import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
} from "@clerk/nextjs";
import { Metadata } from "next";
import AdminNavbar from "./AdminNavbar";

export const metadata: Metadata = {
  title: "Admin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <AdminNavbar />
      <div className="flex flex-col items-center justify-center py-10">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>{children}</SignedIn>
      </div>
    </ClerkProvider>
  );
}
