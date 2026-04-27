import { useEffect, useState } from "react";
// import { groupByCategory } from "@/data/catalog.js";
// import groupByCategory from "../data/catalog";
// import { ItemCard } from "@/components/ItemCard.jsx";
import { ItemCard } from "../components/ItemCard";
import { groupByCategory } from "../data/catalog";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const grouped = groupByCategory();
  const categories = Object.keys(grouped).sort();

  useEffect(() => {
    document.title = "Dynamic Multi-Category Catalog";
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="catalog-shell">
      <header className="catalog-hero">
        <div className="catalog-hero-inner">
          <h1>Dynamic Multi-Category Catalog</h1>
        </div>
      </header>

      <main className="catalog-main">
        {loading ? (
          <div className="card-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="skeleton skeleton-card" />
            ))}
          </div>
        ) : (
          categories.map((cat) => (
            <section key={cat} className="category-section">
              <div className="category-header">
                <h2>{cat}</h2>
                <span className="category-count">
                  {grouped[cat].length} item
                  {grouped[cat].length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="card-grid">
                {grouped[cat].map((item) => (
                  <ItemCard key={item.itemname} item={item} />
                ))}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  );
}
