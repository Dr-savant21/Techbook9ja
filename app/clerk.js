// clerk.js
import { ClerkProvider } from "@clerk/nextjs";

export const ClerkWrapper = ({ children }) => {
  return (
    <ClerkProvider apiKey={process.env.CLERK_API_KEY}>
      {children}
    </ClerkProvider>
  );
};
