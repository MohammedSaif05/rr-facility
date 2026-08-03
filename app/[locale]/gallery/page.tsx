import { setRequestLocale } from 'next-intl/server';

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Our Work</h1>
      <p className="text-lg text-muted-foreground mb-12">
        A glimpse into the high standards we maintain across residential and commercial properties in Qatar.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground/50 border border-border">
            Project Image {i}
          </div>
        ))}
      </div>
    </div>
  );
}
