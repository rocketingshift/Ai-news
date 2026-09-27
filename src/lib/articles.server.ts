// =============================================================================
// LỚP TRUNG GIAN DỮ LIỆU PHÍA SERVER (DATA SOURCE LAYER)
// =============================================================================
// Re-export từ service để các server function gọi độc lập.
// =============================================================================

export {
  listArticleSummaries,
  listCategories,
  getArticleBySlug,
  getBreakingArticle,
  DEFAULT_PAGE_SIZE as DEFAULT_ARTICLE_PAGE_SIZE,
} from "./articles.service";
