// =============================================================================
// LỚP SERVER FUNCTIONS (RPC) — bọc mỏng lớp data-source.
// =============================================================================
// Mỗi hàm là một createServerFn mỏng: validate đầu vào (Zod) rồi gọi hàm tương
// ứng trong `articles.server.ts`. Client gọi qua useServerFn(...).
//
// Khi chuyển sang CMS: chỉ cần `articles.server.ts` đổi nguồn dữ liệu. Các
// server function này giữ nguyên chữ ký -> UI không thay đổi.
// =============================================================================

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  listArticleSummaries,
  listCategories,
  getArticleBySlug,
  getBreakingArticle,
  DEFAULT_ARTICLE_PAGE_SIZE,
} from "./articles.server";
import type { ArticleListResult, ArticleSummary } from "./articles.types";

// ---- Schemas ----
const ListParamsSchema = z.object({
  page: z.number().int().min(0).default(0),
  pageSize: z.number().int().min(1).max(50).default(DEFAULT_ARTICLE_PAGE_SIZE),
  category: z.string().optional(),
  search: z.string().optional(),
});

const SlugSchema = z.object({
  slug: z.string().min(1).max(200),
});

// ---- Server functions ----

export const fetchArticleList = createServerFn({ method: "GET" })
  .validator((d) => ListParamsSchema.parse(d))
  .handler(async ({ data }): Promise<ArticleListResult> => {
    return listArticleSummaries({
      page: data.page,
      pageSize: data.pageSize,
      category: data.category,
      search: data.search,
    });
  });

export const fetchCategories = createServerFn({ method: "GET" }).handler(
  async (): Promise<string[]> => {
    return listCategories();
  },
);

export const fetchArticleBySlug = createServerFn({ method: "GET" })
  .validator((d) => SlugSchema.parse(d))
  .handler(async ({ data }) => {
    return getArticleBySlug(data.slug);
  });

export const fetchBreakingArticle = createServerFn({ method: "GET" }).handler(
  async (): Promise<ArticleSummary | null> => {
    return getBreakingArticle();
  },
);
