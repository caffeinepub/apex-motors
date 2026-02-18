import { Zap, Shield, Wifi, Gauge } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TechnologySection() {
  const features = [
    {
      icon: Zap,
      title: 'Electric Performance',
      description: 'Advanced electric powertrains delivering instant torque and zero emissions without compromising on performance.',
    },
    {
      icon: Shield,
      title: 'Advanced Safety',
      description: 'Comprehensive suite of active and passive safety systems including autonomous emergency braking and adaptive cruise control.',
    },
    {
      icon: Wifi,
      title: 'Connected Experience',
      description: 'Seamless connectivity with over-the-air updates, smart navigation, and integrated entertainment systems.',
    },
    {
      icon: Gauge,
      title: 'Precision Engineering',
      description: 'Meticulously crafted with aerospace-grade materials and cutting-edge manufacturing techniques for unmatched quality.',
    },
  ];

  return (
    <section id="technology" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Innovation at Every Turn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology designed to elevate your driving experience to unprecedented heights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
