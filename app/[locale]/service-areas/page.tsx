import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

const areas = ['Doha', 'Al Wakrah', 'Al Rayyan', 'Al Khor'];

export default async function ServiceAreasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Our Service Areas in Qatar</h1>
      <p className="text-lg text-muted-foreground mb-12">
        We provide premium facility management and cleaning services across all major locations in Qatar.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map(area => (
          <Link key={area} href={`/service-areas/${area.toLowerCase().replace(/\s+/g, '-')}`} className="block bg-card hover:bg-muted border border-border rounded-xl p-8 text-center transition-colors shadow-sm hover:shadow-md">
            <h3 className="text-xl font-bold text-primary">{area}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
