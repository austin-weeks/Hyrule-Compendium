import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle, RotateCw } from "lucide-react";
import { Button } from "./ui/button";

const ErrorMessage = () => {
  return (
    <Alert className="bg-zinc-50 max-w-100 w-[450px]">
      <AlertCircle className="mt-0.5"/>
      <div className="ml-2">
        <AlertTitle className="text-2xl">Something Went Wrong :(</AlertTitle>
        <AlertDescription className="text-base">
          <span>Please try again.</span>
        </AlertDescription>
        <Button variant="outline" className="mt-2"
          onClick={() => location.reload()}
        >
          Reload &nbsp;<RotateCw />
        </Button>
      </div>
    </Alert>
  )
}

export default ErrorMessage;