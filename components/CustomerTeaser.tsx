import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

interface CustomerTeaserProps {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  features: string[];
}

export function CustomerTeaser({ slug, name, industry, summary, features }: CustomerTeaserProps) {
  return (
    <Link href={`/kunden/${slug}`} className="group block">
      <Card className="h-full transition-all hover:border-sky-500 hover:shadow-lg">
        <CardHeader>
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="secondary">{industry}</Badge>
            <ArrowRight
              size={20}
              className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky-500"
            />
          </div>
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription>{summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

