import type { Article } from "../articles.types";

export const beBoiDeepseekHotVangClaudeArticle: Article = {
  id: "be-boi-deepseek-hot-vang-claude-vi-sao-chi-hoi-that-nhieu-lai-co-the-giup-xay-dung-ai-rieng-79471",
  slug: "be-boi-deepseek-hot-vang-claude-vi-sao-chi-hoi-that-nhieu-lai-co-the-giup-xay-dung-ai-rieng-79471",
  title:
    "Bê bối Deepseek hớt váng Claude: Vì sao chỉ “hỏi thật nhiều” lại có thể giúp xây dựng AI riêng?",
  summary:
    "Anthropic cáo buộc các công ty Trung Quốc tạo hơn 24.000 tài khoản giả để gửi 16 triệu câu hỏi đến Claude. Bằng kỹ thuật chưng cất mô hình (knowledge distillation), việc 'hỏi thật nhiều' giúp trích xuất năng lực AI cực kỳ hiệu quả mà không cần tốn hàng trăm triệu USD huấn luyện từ đầu.",
  source: "VnReview",
  sourceLogoText: "VnReview",
  sourceUrl:
    "https://vnreview.vn/threads/be-boi-deepseek-hot-vang-claude-vi-sao-chi-hoi-that-nhieu-lai-co-the-giup-xay-dung-ai-rieng.79471/",
  publishedAt: "2026-02-24T14:30:00+07:00",
  timestampLabel: "24-02-2026 - 14:30",
  category: "An ninh AI & Công nghệ",
  categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  readTime: "4 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/1a46a0c0-6839-41f5-915d-1bf9f8b57819.png",
  screenshotUrl: "",
  author: "Vũ Nguyễn (Theo VnReview)",
  tags: [
    "DeepSeek",
    "Anthropic",
    "Claude",
    "Chưng cất mô hình",
    "Distillation",
    "Trí tuệ nhân tạo",
    "Bảo mật AI",
    "VnReview",
  ],
  importance: "hot",
  content: [
    {
      type: "paragraph",
      text: "Câu chuyện bắt đầu từ việc Anthropic, công ty đứng sau mô hình AI Claude, cáo buộc một số công ty Trung Quốc như DeepSeek, Moonshot AI và MiniMax đã tạo hơn 24.000 tài khoản giả để truy cập Claude. Theo Wall Street Journal ngày 23/02/2026, các tài khoản này đã gửi khoảng 16 triệu câu hỏi. Họ dùng proxy để che giấu nguồn truy cập vì Claude bị hạn chế tại Trung Quốc.",
    },
    {
      type: "paragraph",
      text: "Vấn đề nằm ở kỹ thuật gọi là “chưng cất mô hình”. Hiểu đơn giản thế này: bạn có một mô hình AI rất mạnh, giống như một giáo viên cực giỏi. Thay vì tự huấn luyện từ đầu bằng cách thu thập khối dữ liệu khổng lồ và tốn kém, bạn đặt hàng triệu câu hỏi cho “giáo viên”, ghi lại câu trả lời, rồi dùng chính những câu trả lời đó để huấn luyện một mô hình nhỏ hơn. Mô hình nhỏ sẽ học nhanh hơn, rẻ hơn, mà vẫn giữ được phần lớn năng lực.",
    },
    {
      type: "image",
      url: "https://vibe.filesafe.space/1790240714414154753/assets/1a46a0c0-6839-41f5-915d-1bf9f8b57819.png",
      caption:
        "Thủ thuật dùng tài khoản giả trích xuất dữ liệu câu trả lời từ mô hình AI hàng đầu để chưng cất mô hình nhỏ hơn (Ảnh: VnReview)",
      alt: "Kỹ thuật chưng cất mô hình AI từ Claude sang các mô hình nhỏ hơn",
    },
    {
      type: "paragraph",
      text: "Đây không phải ý tưởng mơ hồ. Từ năm 2015, Geoffrey Hinton đã nghiên cứu và phổ biến kỹ thuật này. Sau đó, hàng loạt ví dụ thực tế chứng minh nó hiệu quả. DistilBERT của Hugging Face là phiên bản rút gọn của BERT, nhỏ hơn khoảng 40% nhưng vẫn giữ khoảng 97% hiệu năng. Microsoft từng chưng cất các mô hình Llama cỡ 405 tỷ tham số xuống bản nhỏ hơn mà vẫn giữ được chất lượng. Chính DeepSeek cũng công khai dùng chưng cất để tạo ra phiên bản nhỏ nhưng mạnh từ mô hình lớn của họ.",
    },
    {
      type: "paragraph",
      text: "Vậy việc dùng tài khoản giả có đủ để xây AI không? Nếu chỉ hỏi vài câu thì không có ý nghĩa. Nhưng nếu hỏi hàng triệu câu, đặc biệt là những câu buộc mô hình phải giải thích từng bước suy nghĩ, viết mã phức tạp, sử dụng công cụ, thì bạn đang thu thập một kho dữ liệu cực kỳ giá trị. Kho dữ liệu này có thể rút ngắn đáng kể thời gian và chi phí huấn luyện.",
    },
    {
      type: "paragraph",
      text: "Anthropic cho rằng quy mô truy vấn trong vụ việc này đủ lớn để “trích xuất năng lực” của Claude. Tuy chưa có bằng chứng công khai cho thấy các mô hình của DeepSeek hay Moonshot đã cải thiện trực tiếp nhờ vụ này, nhưng về mặt kỹ thuật, cách làm đó hoàn toàn có thể mang lại lợi thế.",
    },
    {
      type: "paragraph",
      text: "Điểm gây tranh cãi không nằm ở kỹ thuật, vì chưng cất mô hình là phương pháp hợp pháp và phổ biến. Vấn đề nằm ở cách tiếp cận bị cho là vi phạm điều khoản dịch vụ và cố tình né hạn chế truy cập. Ngoài ra, Anthropic còn cảnh báo rằng nếu chỉ sao chép năng lực mà không sao chép các cơ chế an toàn, mô hình mới có thể thiếu rào chắn kiểm soát rủi ro.",
    },
    {
      type: "paragraph",
      text: "Đây không phải chuyện viễn tưởng. Việc dùng tài khoản giả để thu thập lượng lớn câu trả lời từ một mô hình mạnh hoàn toàn có thể giúp tăng tốc xây dựng AI riêng. Nhưng nó kéo theo rủi ro pháp lý, đạo đức và cả nguy cơ về an toàn công nghệ.",
    },
  ],
};
