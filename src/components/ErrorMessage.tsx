import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";

const ErrorMessage = ({message}: {message: string}) => {
  return (
    <Alert className="bg-zinc-50 max-w-100 w-[450px]">
      <AlertCircle className="mt-0.5"/>
      <div className="ml-2">
        <AlertTitle className="text-2xl">Something Went Wrong :(</AlertTitle>
        <AlertDescription className="text-base">
          Please reload the page and try again.
        </AlertDescription>
      </div>
    </Alert>
  )
}

export default ErrorMessage;