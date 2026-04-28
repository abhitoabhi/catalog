import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getItemBySlug } from "../data/catalog";

export default function ItemDetail() {
  const { slug } = useParams();
  const item = getItemBySlug(slug);

  if (!item) {
    return (
      <div className="detail-shell">
        <div className="detail-wrap">
          <Link to="/" className="back-btn">
            {"<"} Back
          </Link>
          <h1>Item not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-shell">
      <div className="detail-wrap">
        <Link to="/" className="back-btn">
          <span aria-hidden>{"<"}</span> Back to catalog
        </Link>

        <div className="detail-grid">
          <img className="detail-image" src={item.image} alt={item.itemname} />
          <div className="detail-info">
            <span className="detail-cat-pill">{item.category}</span>
            <h1>{item.itemname}</h1>

            <div className="props-list">
              {item.itemprops.map((p) => (
                <div key={p.label} className="prop-item">
                  <div className="prop-label">{p.label}</div>
                  <div className="prop-value">{p.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
