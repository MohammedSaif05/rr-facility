import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function ServiceAreaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const validAreas = ['doha', 'al-wakrah', 'al-rayyan', 'al-khor'];
  
  if (!validAreas.includes(slug)) {
    notFound();
  }

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-primary">Facility Management in {title}</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Refined Radiance provides top-tier cleaning and facility management services for homes and businesses in {title}, Qatar.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us in {title}?</h2>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground">
            <li>Local teams deployed quickly in {title}</li>
            <li>Familiar with residential compounds and commercial towers in the area</li>
            <li>Trusted by hundreds of clients in {title}</li>
            <li>Fully equipped with the latest cleaning technology</li>
          </ul>
        </div>
        <div className="h-full min-h-[300px] bg-muted rounded-2xl flex items-center justify-center border border-border">
          <span className="text-muted-foreground font-medium">Map of {title} (Placeholder)</span>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Need Services in {title}?</h3>
        <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg">
          Book Now
        </a>
      </div>
    </div>
  );
}
