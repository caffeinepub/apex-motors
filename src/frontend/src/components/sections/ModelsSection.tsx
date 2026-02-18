import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { models } from '@/content/models';

export function ModelsSection() {
  return (
    <section id="models" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Lineup
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect blend of power, luxury, and innovation across our model range.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <Card key={model.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    {model.badge}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{model.name}</CardTitle>
                <CardDescription className="text-base">{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {model.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
