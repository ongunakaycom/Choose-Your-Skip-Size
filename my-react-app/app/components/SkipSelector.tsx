'use client';

import { useEffect, useState } from 'react';

type Skip = {
  name: string;
  price: number;
  size: string;
  // Add more fields as needed
};

export default function SkipSelector() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        const data = await res.json();
        setSkips(data.skips);
      } catch (err) {
        console.error('Error fetching skips:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  if (loading) return <p>Loading skips...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skips.map((skip, index) => (
        <div key={index} className="border rounded-xl p-4 shadow hover:shadow-md transition">
          <h2 className="text-xl font-bold">{skip.name}</h2>
          <p className="text-sm text-gray-600">Size: {skip.size}</p>
          <p className="text-lg font-semibold mt-2">£{skip.price}</p>
        </div>
      ))}
    </div>
  );
}
