import { useEffect, useMemo } from "react";
import { ItemCard } from "../components/ItemCard";
import { groupByCategory } from "../data/catalog";

export default function Home() {
  const grouped = useMemo(() => groupByCategory(), []);
  const categories = useMemo(() => Object.keys(grouped).sort(), [grouped]);

  return (
    <div className="catalog-shell">
      <header className="catalog-hero">
        <div className="catalog-hero-inner">
          <h1>Dynamic Multi-Category Catalog</h1>
        </div>
      </header>

      <main className="catalog-main">
        {categories.map((cat) => (
          <section key={cat} className="category-section">
            <div className="category-header">
              <h2>{cat}</h2>
              <span className="category-count">
                {grouped[cat].length} item
                {grouped[cat].length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="row-wrapper">
              <button
                className="scroll-btn left"
                onClick={() => {
                  document
                    .getElementById(`row-${cat}`)
                    .scrollBy({ left: -300, behavior: "smooth" });
                }}
              >
                {"<"}
              </button>

              <div className="card-grid" id={`row-${cat}`}>
                {grouped[cat].map((item) => (
                  <ItemCard key={item.itemname} item={item} />
                ))}
              </div>

              <button
                className="scroll-btn right"
                onClick={() => {
                  document
                    .getElementById(`row-${cat}`)
                    .scrollBy({ left: 300, behavior: "smooth" });
                }}
              >
                {">"}
              </button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
