'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Apply() {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>We are building an application that confuses you infinitely! Coming soon!</p>
        </CardContent>
      </Card>
    </div>
  );
}
