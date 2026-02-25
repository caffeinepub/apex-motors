import { Target, Award, Users } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize the automotive industry through sustainable innovation and uncompromising performance.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Every vehicle is a masterpiece, crafted with precision and attention to the finest details.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction drives us. We\'re committed to delivering exceptional experiences at every touchpoint.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Redefining Automotive Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded on the principles of innovation and performance, HOOD has been pushing 
              the boundaries of what's possible in automotive engineering. Our commitment to 
              sustainability, cutting-edge technology, and driver-centric design has made us a 
              leader in the next generation of mobility.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our state-of-the-art manufacturing facilities to our global network of service 
              centers, every aspect of HOOD is designed to deliver an unparalleled ownership 
              experience.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-card border-2 border-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">50K+</div>
              <div className="text-muted-foreground">Vehicles Delivered</div>
            </div>
            <div className="bg-card border-2 border-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="bg-card border-2 border-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Countries Worldwide</div>
            </div>
            <div className="bg-card border-2 border-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Electric Future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
