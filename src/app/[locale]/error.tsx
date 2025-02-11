"use client";

import { useEffect } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const { toast } = useToast();

  useEffect(() => {
    setTimeout(() => toast({ title: "Uh oh! Something went wrong.", description: error.message, variant: "destructive" }), 500);
  }, [error, toast]);

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Card>
        <CardHeader>
          <h2>Something went wrong!</h2>
        </CardHeader>
        <CardContent>
          <Button onClick={() => reset()}>Try again</Button>
        </CardContent>
      </Card>
    </div>
  );
}
