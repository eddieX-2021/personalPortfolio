
import './SideCard.css';
import { TechIcon } from '../TechIcons';

export default function SideCard({
  title,
  link,
  imageSrc,
  dateRange,
  summary,
  bullets = [],
  tags = [], 
  external = true, 
}) {
  return (
    <a
      className="side-card"
      href={link}
      target={external ? '_blank' : '_self'}
      rel="noopener noreferrer"
      aria-label={title}
    >
      <div className="card-inner">
        <div className="left">
          <div className="img-wrapper">
            <img src={imageSrc} alt={title} />
          </div>
        </div>
        <div className="right">
          <div className="header-row">
            <div className="title-block">
              <h3 className="card-title">{title}</h3>
              {dateRange && <span className="date-range">{dateRange}</span>}
            </div>
          </div>
          {summary && <p className="summary">{summary}</p>}
          {bullets.length > 0 && (
            <ul className="bullets">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {tags.length > 0 && (
            <div className="tags">
              {tags.map((t, i) => (
                <div className="tag" key={i}>
                  <span className="tag-icon">
                    <TechIcon name={t.name} size={16} />
                  </span>
                  <span className="tag-name">{t.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}