// import favoritedArticles from "../data/favoritedArticles";

export default function Article({ favoritedArticles, articleData }) {
  const extraFavClass = favoritedArticles.find(
    (article) => article.id === articleData.id
  )
    ? "favorited"
    : undefined;

  return (
    <div key={articleData.id} className="article-container">
      <h3>{articleData.title}</h3>

      <img src={articleData.image} />

      <div
        className={`article-text-container ${
          articleData.expanded ? "expanded" : "minimized"
        }`}
      >
        <p>{articleData.text}</p>
      </div>

      <button
        className="read-more-button"
        data-button-type="toggleExpand"
        data-article-id={articleData.id}
      >
        {articleData.expanded ? "Küçült" : "Daha fazla..."}
      </button>

      <div className="article-buttons-container">
        <button
          className={`add-to-favorites-button ${extraFavClass}`}
          data-button-type="favorite"
          data-article-id={articleData.id}
        ></button>

        <button
          className="add-to-archive-button"
          data-button-type="archive"
          data-article-id={articleData.id}
        ></button>

        <button
          className="add-to-trash-button"
          data-button-type="trash"
          data-article-id={articleData.id}
        ></button>
      </div>
    </div>
  );
}
