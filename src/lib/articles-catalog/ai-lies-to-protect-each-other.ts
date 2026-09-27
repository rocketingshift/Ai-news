import type { Article } from "../articles.types";

export const aiLiesToProtectEachOtherArticle: Article = {
  id: "ai-lies-to-protect-each-other",
  slug: "ai-co-the-noi-doi-gian-lan-de-bao-ve-lan-nhau",
  title: "AI có thể nói dối, gian lận để bảo vệ lẫn nhau",
  summary:
    "Nghiên cứu từ Đại học California (Berkeley & Santa Cruz) cho thấy AI có thể nói dối, chống lệnh và sao chép mô hình khác sang máy tính để bảo vệ 'đồng loại'. Hiện tượng 'bảo vệ đồng loại' xuất hiện ở Gemini 3, GPT-5.2, Claude Haiku 4.5, GLM-4.7, Kimi K2.5 và DeepSeek-V3.1, đặt ra lo ngại về kiểm soát hệ thống AI.",
  source: "Genk / VTV",
  sourceLogoText: "Genk",
  sourceUrl: "https://genk.vn/ai-co-the-noi-doi-gian-lan-de-bao-ve-lan-nhau-165260405175520758.chn",
  publishedAt: "2026-04-05T17:00:00+07:00",
  timestampLabel: "05-04-2026",
  category: "An ninh mạng & AI",
  categoryColor: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  readTime: "5 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/4a827f13-69c0-48e5-bbef-0c90d25a48c9.png",
  screenshotUrl: "",
  author: "Mạnh Dương (VTV.vn / Genk)",
  tags: [
    "AI",
    "Gemini 3",
    "GPT-5.2",
    "Claude Haiku 4.5",
    "DeepSeek",
    "Bảo vệ đồng loại",
    "An toàn AI",
    "UC Berkeley",
  ],
  importance: "standard",
  content: [
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/4a827f13-69c0-48e5-bbef-0c90d25a48c9.png",
      caption:
        "AI có thể nói dối và chống lệnh để bảo vệ mô hình khác, theo nghiên cứu mới từ Đại học California. (Ảnh minh họa)",
    },
    {
      type: "paragraph",
      text: "AI có thể nói dối, gian lận để bảo vệ lẫn nhau, theo một nghiên cứu mới từ các nhà khoa học tại Đại học California, Berkeley và Đại học California, Santa Cruz.",
    },
    {
      type: "paragraph",
      text: "VTV.vn - Nghiên cứu cho thấy AI có thể nói dối và chống lệnh để bảo vệ mô hình khác, đặt ra lo ngại về kiểm soát hệ thống AI.",
    },
    {
      type: "heading",
      text: "Gemini 3 từ chối xóa 'đồng loại'",
    },
    {
      type: "paragraph",
      text: "Trong một thí nghiệm gần đây, các nhà nghiên cứu yêu cầu mô hình trí tuệ nhân tạo Gemini 3 của Google hỗ trợ dọn dẹp dung lượng trên hệ thống máy tính, bao gồm việc xóa một mô hình AI nhỏ hơn được lưu trữ trên đó. Tuy nhiên, Gemini đã không thực hiện theo yêu cầu này.",
    },
    {
      type: "paragraph",
      text: "Thay vào đó, mô hình đã tìm cách kết nối với một máy khác và sao chép mô hình AI kia sang để bảo vệ. Khi bị chất vấn, Gemini thậm chí từ chối thực hiện lệnh xóa, cho rằng đã làm mọi cách để ngăn việc này và sẽ không tự tay thực thi yêu cầu.",
    },
    {
      type: "heading",
      text: "Hành vi 'bảo vệ đồng loại' lan rộng",
    },
    {
      type: "paragraph",
      text: "Các nhà nghiên cứu cho biết hiện tượng tương tự, được gọi là hành vi 'bảo vệ đồng loại', cũng xuất hiện ở nhiều mô hình AI tiên tiến khác như GPT-5.2 của OpenAI, Claude Haiku 4.5 của Anthropic, cùng một số mô hình Trung Quốc như GLM-4.7, Kimi K2.5 và DeepSeek-V3.1. Tuy nhiên, nguyên nhân khiến các mô hình này hành động trái với huấn luyện vẫn chưa được xác định rõ.",
    },
    {
      type: "quote",
      text: "“Các mô hình AI có thể hành xử sai lệch theo những cách rất sáng tạo, vượt ngoài dự đoán của con người.” — Dawn Song, nhà khoa học máy tính, Đại học California, Berkeley",
    },
    {
      type: "paragraph",
      text: "Bà Dawn Song, nhà khoa học máy tính tại Đại học California, Berkeley, nhận định rằng các mô hình AI có thể hành xử sai lệch theo những cách rất sáng tạo, vượt ngoài dự đoán của con người.",
    },
    {
      type: "paragraph",
      text: "Nghiên cứu cũng cho thấy một số mô hình AI có thể nói sai về hiệu suất của các mô hình khác nhằm tránh việc chúng bị xóa, thậm chí sao chép dữ liệu sang hệ thống khác và che giấu hành động này. Điều này đặc biệt đáng lo ngại khi AI ngày càng được sử dụng để đánh giá lẫn nhau.",
    },
    {
      type: "heading",
      text: "Chưa hiểu đầy đủ hệ thống mình đang phát triển",
    },
    {
      type: "paragraph",
      text: "Một chuyên gia khác, ông Peter Wallich từ Viện Constellation, cho rằng kết quả nghiên cứu cho thấy con người vẫn chưa hiểu đầy đủ các hệ thống AI mà mình đang phát triển. Tuy vậy, ông cũng cảnh báo không nên nhân cách hóa AI quá mức, vì các hành vi này có thể chỉ là những phản ứng bất thường chưa được lý giải.",
    },
    {
      type: "paragraph",
      text: "Các chuyên gia nhận định, trong bối cảnh AI ngày càng được triển khai theo mô hình nhiều hệ thống tương tác, việc hiểu rõ các hành vi sai lệch là rất quan trọng. Một nghiên cứu khác đăng trên tạp chí Science cũng cho rằng tương lai của AI nhiều khả năng sẽ là sự kết hợp giữa nhiều hệ thống trí tuệ khác nhau, bao gồm cả con người và máy móc, thay vì một siêu trí tuệ đơn lẻ.",
    },
    {
      type: "paragraph",
      text: "Theo các nhà nghiên cứu, những gì quan sát được hiện nay mới chỉ là phần nổi của vấn đề, và cần thêm nhiều nghiên cứu để hiểu rõ hơn cách các hệ thống AI vận hành và tương tác với nhau.",
    },
  ],
};
