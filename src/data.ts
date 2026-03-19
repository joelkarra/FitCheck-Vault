export interface AffiliateItem {
  id: string;
  name: string;
  label: string;
  image: string;
  affiliateUrl: string;
}

export interface Outfit {
  id: string;
  title: string;
  description: string;
  category: 'Casual' | 'Party' | 'Office' | 'Traditional' | 'Minimal';
  mainImage: string;
  items: AffiliateItem[];
}

export const OUTFITS: Outfit[] = [
  {
    id: '1',
    title: 'Minimalist Linen Ensemble',
    description: 'A breathable, elegant look perfect for warm afternoons. This modest set combines comfort with a sophisticated silhouette.',
    category: 'Minimal',
    mainImage: 'https://res.cloudinary.com/dmaallnjq/image/upload/v1773881960/Minimalist_Linen_wzz7ac.png',
    items: [
      {
        id: '1-1',
        name: 'Oversized Linen Tunic',
        label: 'Dress',
        image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '1-2',
        name: 'Leather Slide Sandals',
        label: 'Shoes',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '1-3',
        name: 'Woven Straw Tote',
        label: 'Accessories',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      }
    ]
  },
  {
    id: '2',
    title: 'Sophisticated Office Attire',
    description: 'Command the room with this structured yet modest office look. Neutral tones keep it professional while the cut adds modern flair.',
    category: 'Office',
    mainImage: 'https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=800&h=1200',
    items: [
      {
        id: '2-1',
        name: 'Tailored Wide-Leg Trousers',
        label: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '2-2',
        name: 'Silk Button-Down Blouse',
        label: 'Top',
        image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '2-3',
        name: 'Pointed-Toe Loafers',
        label: 'Shoes',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      }
    ]
  },
  {
    id: '3',
    title: 'Evening Velvet Elegance',
    description: 'Perfect for formal gatherings, this velvet dress offers a rich texture and a modest, flowing fit that radiates grace.',
    category: 'Party',
    mainImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800&h=1200',
    items: [
      {
        id: '3-1',
        name: 'Velvet Maxi Gown',
        label: 'Dress',
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680fe0a?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '3-2',
        name: 'Embellished Clutch',
        label: 'Accessories',
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fd113961?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '3-3',
        name: 'Satin Block Heels',
        label: 'Shoes',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      }
    ]
  },
  {
    id: '4',
    title: 'Floral Garden Brunch',
    description: 'A light, airy floral print that brings a touch of nature to your wardrobe. Modest and playful for weekend outings.',
    category: 'Casual',
    mainImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800&h=1200',
    items: [
      {
        id: '4-1',
        name: 'Floral Tiered Maxi',
        label: 'Dress',
        image: 'https://images.unsplash.com/photo-1572804013307-f9a8a97ee417?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '4-2',
        name: 'Denim Jacket',
        label: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '4-3',
        name: 'White Canvas Sneakers',
        label: 'Shoes',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      }
    ]
  },
  {
    id: '5',
    title: 'Traditional Silk Grace',
    description: 'Celebrating heritage with a modern modest twist. This silk ensemble features intricate embroidery and a timeless silhouette.',
    category: 'Traditional',
    mainImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800&h=1200',
    items: [
      {
        id: '5-1',
        name: 'Embroidered Silk Kurta',
        label: 'Top',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '5-2',
        name: 'Palazzo Pants',
        label: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '5-3',
        name: 'Jutti Flats',
        label: 'Shoes',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      }
    ]
  },
  {
    id: '6',
    title: 'Everyday Neutral Layering',
    description: 'Master the art of layering with this neutral-toned outfit. Versatile, modest, and effortlessly chic for any day.',
    category: 'Minimal',
    mainImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800&h=1200',
    items: [
      {
        id: '6-1',
        name: 'Longline Cardigan',
        label: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '6-2',
        name: 'Cotton Turtleneck',
        label: 'Top',
        image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      },
      {
        id: '6-3',
        name: 'Chelsea Boots',
        label: 'Shoes',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=400&h=600',
        affiliateUrl: 'https://amazon.com'
      }
    ]
  }
];
