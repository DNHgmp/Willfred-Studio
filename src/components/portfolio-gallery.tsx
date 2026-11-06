"use client";

import { useState } from "react";
import { categories, projects, type Category } from "@/data/portfolio";

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const visibleProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="portfolio-section" id="portafolio">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WILLFRED STUDIO / FOTOGRAFÍA</p>
          <h2>Galería</h2>
        </div>
        <p className="section-note">Bodas. Celebraciones. Retratos.</p>
      </div>

      <div className="gallery-toolbar">
        <div className="category-list" role="group" aria-label="Filtrar fotografías por categoría">
          {categories.map((category) => (
            <button
              className={`category-button${activeCategory === category ? " is-active" : ""}`}
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={`gallery-grid${visibleProjects.length < 4 ? " gallery-grid-short" : ""}`} aria-live="polite">
        {visibleProjects.map((project, index) => (
          <figure
            className="gallery-tile"
            key={`${activeCategory}-${project.title}`}
            style={{ animationDelay: `${Math.min(index * 45, 270)}ms` }}
          >
            <div className="gallery-frame">
              <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
            </div>
              <figcaption className="gallery-caption">
                <p>{project.category} <span>·</span> {project.year}</p>
                <h3>{project.title}</h3>
              </figcaption>
              <span className="gallery-number">{String(index + 1).padStart(2, "0")}</span>
          </figure>
        ))}
      </div>
    </section>
  );
}