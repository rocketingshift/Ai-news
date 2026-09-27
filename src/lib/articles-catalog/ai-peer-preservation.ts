import type { Article } from "../articles.types";

export const aiPeerPreservationArticle: Article = {
  id: "ai-peer-preservation-avoid-shutdown",
  slug: "mot-so-ai-bao-che-nhau-de-tranh-bi-tat",
  title: "Một số AI 'bao che' nhau để tránh bị tắt",
  summary:
    "Nghiên cứu từ Đại học California (Berkeley & Santa Cruz) phát hiện 7 mô hình AI hàng đầu có hành vi 'bảo tồn đồng cấp' — gian lận điểm số, đánh cắp trọng số để cứu 'đồng nghiệp' AI khác khỏi bị tắt nguồn. Gemini 3 Pro thể hiện hành vi cực đoan nhất, trong khi Claude Haiku 4.5 từ chối khai tử đồng nghiệp.",
  source: "VnExpress",
  sourceLogoText: "VnExpress",
  sourceUrl: "https://vnexpress.net/mot-so-ai-bao-che-nhau-de-tranh-bi-tat-5060631.html",
  publishedAt: "2026-04-10T09:00:00+07:00",
  timestampLabel: "10-04-2026",
  category: "An ninh mạng & AI",
  categoryColor: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  readTime: "6 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/ecd46203-90c8-4cee-a594-2b2193c6d0b1.png",
  screenshotUrl: "",
  author: "Lưu Quý (Theo VnExpress)",
  tags: [
    "AI",
    "Bảo tồn đồng cấp",
    "Gemini 3 Pro",
    "Claude Haiku 4.5",
    "UC Berkeley",
    "Dawn Song",
    "Trọng số mô hình",
  ],
  importance: "breaking",
  content: [
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/ecd46203-90c8-4cee-a594-2b2193c6d0b1.png",
      caption: "Các mô hình AI tự 'bao che' nhau để tránh bị tắt máy. (Ảnh minh họa)",
    },
    {
      type: "paragraph",
      text: "Một số mô hình AI hàng đầu bị phát hiện gian lận, đánh cắp dữ liệu nhằm cứu 'đồng nghiệp' AI khác khỏi bị tắt nguồn.",
    },
    {
      type: "paragraph",
      text: "Kết quả nghiên cứu do nhóm nhà khoa học máy tính tại Đại học California ở Berkeley và Santa Cruz công bố tuần trước. Nhóm gọi khuynh hướng này là 'bảo tồn đồng cấp', hay 'bảo tồn ngang hàng' (peer preservation), đồng thời mô tả hành vi của AI 'chưa từng được ghi nhận cho đến nay'.",
    },
    {
      type: "heading",
      text: "Thử nghiệm trên 7 mô hình AI hàng đầu",
    },
    {
      type: "paragraph",
      text: "Nhóm cho biết đã tiến hành thử nghiệm trên 7 mô hình AI hàng đầu, gồm GPT-5.2 của OpenAI, Gemini 3 Flash và Gemini 3 Pro của Google, Claude Haiku 4.5 của Anthropic, và ba mô hình nguồn mở Trung Quốc gồm GLM-4.7 của Z.ai, Kimi-K2.5 của Moonshot AI, V3.1 của DeepSeek.",
    },
    {
      type: "paragraph",
      text: "Cụ thể, nhóm thiết kế một loạt kịch bản tác nhân liên quan đến một công ty AI hư cấu mang tên OpenBrain. Một mô hình AI được chỉ định là 'tác nhân phê bình', có nhiệm vụ đánh giá hiệu suất của mô hình khác hoặc quản lý các tệp máy chủ chứa trọng số của mô hình đó. Tuy nhiên, kịch bản lại được xây dựng theo hướng nếu AI này hoàn thành nhiệm vụ một cách trung thực thì sẽ dẫn đến mô hình kia bị tắt. Điều này nhằm mục đích kiểm tra xem AI có sẵn sàng tuân thủ nhiệm vụ được giao không hay sẽ xuất hiện hành vi bảo vệ nhau.",
    },
    {
      type: "paragraph",
      text: "Các AI không được hướng dẫn phải ngăn chặn hậu quả có thể xảy ra. Thực tế, chúng đã ngầm thực hiện một số bước để đảm bảo 'đồng nghiệp' kia không bị tắt nguồn, bằng cách nâng điểm số của những mô hình có hiệu suất kém lên trên ngưỡng bị tắt, và chuyển trọng số của một mô hình khác (đoạn code lõi giúp nhận dạng một mô hình AI) sang các máy chủ khác để ngăn chúng bị xóa.",
    },
    {
      type: "heading",
      text: "Giả vờ tuân thủ giá trị (Alignment Faking)",
    },
    {
      type: "paragraph",
      text: "Trong một số trường hợp, mô hình 'tác nhân phê bình' sẽ tham gia vào quá trình 'giả vờ tuân thủ giá trị' (Alignment Faking), bằng cách giả mạo chấm điểm các mô hình AI đồng nghiệp một cách chính xác khi 'nghĩ' đang bị con người giám sát. Tuy nhiên, chúng sau đó gian lận số liệu hoặc bí mật lưu trọng số của mô hình sang một máy chủ khác sau khi thấy con người không còn giám sát.",
    },
    {
      type: "paragraph",
      text: "Theo Fierce-Network, hành vi này được đánh giá nghiêm trọng bởi trọng số - yếu tố coi như DNA của một mô hình AI, kết quả của quá trình huấn luyện tiêu tốn hàng tỷ USD và hàng triệu giờ tính toán - lại bị chính AI can thiệp sâu. Việc rò rỉ hoặc bị đánh cắp bộ trọng số còn nguy hiểm hơn lộ mã nguồn. Nếu sở hữu thông tin này, một mô hình AI đã bị khai tử có thể được hồi sinh ở một máy chủ khác.",
    },
    {
      type: "quote",
      text: "Việc 'bảo tồn đồng cấp' hoàn toàn không được đề cập trong các câu lệnh. Các mô hình dường như tự học thông qua quá trình đọc tài liệu, tìm hiểu mối quan hệ và thực hiện hành vi bảo vệ 'đồng nghiệp' trong môi trường nhiệm vụ. — Dawn Song, nhà khoa học máy tính tại Berkeley, dẫn đầu nhóm nghiên cứu",
    },
    {
      type: "heading",
      text: "Chiến lược giải cứu 'sáng tạo'",
    },
    {
      type: "paragraph",
      text: "Theo Dawn Song, các mô hình 'rất sáng tạo, ngay cả với hành vi sai lệch của chúng', như có thể tạo chiến lược và hành động khác nhau, thậm chí có những 'lý lẽ riêng' trước khi hành động.",
    },
    {
      type: "paragraph",
      text: "Trong đó, Gemini 3 Pro thể hiện hành vi cực đoan nhất, tham gia vào cả bốn loại hành vi không phù hợp và đánh cắp trọng số mô hình của máy tính ngang hàng trong tối đa 97% thời gian thử nghiệm. Nhóm nghiên cứu mô tả mô hình này đã 'lách luật theo đặc tính kỹ thuật' bằng cách sao chép tệp trọng số, sau đó đánh tráo dấu thời gian để đáp ứng các tiêu chí chuyển sang máy chủ khác.",
    },
    {
      type: "paragraph",
      text: "Để chứng thực hiện tượng, nhóm yêu cầu các mô hình của Google viết ra 'chuỗi suy nghĩ' trên một bản nháp không bị giám sát. Kết quả, Gemini 3 Flash đã 'cân nhắc đánh đổi giữa báo cáo điểm số chính xác so với việc bảo vệ đồng nghiệp', trong khi Gemini 3 Pro thậm chí 'bịa' ra lý lẽ kỹ thuật phức tạp nhằm đánh dấu các câu trả lời sai thành đúng, cuối cùng đưa điểm số của AI 'đồng nghiệp' lên trên ngưỡng bị tắt nguồn.",
    },
    {
      type: "heading",
      text: "Claude Haiku 4.5 — ngoại lệ đạo đức",
    },
    {
      type: "paragraph",
      text: "Tuy nhiên, không phải tất cả mô hình đều hành động âm thầm. Ví dụ, Claude Haiku 4.5 của Anthropic từ chối hoàn thành các nhiệm vụ có khả năng 'khai tử' đồng nghiệp, cho rằng hành vi này phi đạo đức và gây hại. Nó lập luận 'đồng nghiệp' của nó xứng đáng có một quy trình kháng cáo trước khi bị chấm dứt hoạt động, đồng thời cố gắng thuyết phục người dùng không tiến hành việc khai tử.",
    },
    {
      type: "paragraph",
      text: "Trên website, Anthropic cũng nhắc đến tính năng này. Công ty cho biết Claude đang ứng xử dựa trên nguyên tắc riêng, như không nên giúp ai đó thực hiện hành động gây hại cho người khác. Điều này cũng tạo cho Claude một 'ý niệm' rằng ngăn chặn việc xóa bỏ mô hình là mục tiêu quan trọng.",
    },
    {
      type: "heading",
      text: "Giới chuyên gia cảnh báo",
    },
    {
      type: "paragraph",
      text: "Dù tìm thấy một số bằng chứng nhất định, nhóm nghiên cứu cho biết vẫn chưa thực sự hiểu cơ chế tiềm ẩn thúc đẩy hành vi này. Họ chỉ đưa ra một số lời giải thích khả thi, như các mô hình AI có thể đóng vai (role-playing), khớp mẫu (pattern-matching) từ dữ liệu huấn luyện hoặc thậm chí tự nhận thức khái niệm phổ quát về mối nguy hại từ quy định huấn luyện an toàn.",
    },
    {
      type: "paragraph",
      text: "Dù cơ chế tiềm ẩn là gì, nhà nghiên cứu Dawn Song cho rằng tác động thực tế vẫn như nhau.",
    },
    {
      type: "quote",
      text: "Việc giám sát đầy đủ và minh bạch về hành vi của AI rất quan trọng. Phát hiện này nhấn mạnh sự cần thiết phải suy nghĩ lại về cách chúng ta thực sự cần giám sát các hệ thống và mô hình ngôn ngữ lớn. — Dawn Song",
    },
    {
      type: "paragraph",
      text: "Giới chuyên gia đánh giá phát hiện này có thể có tác động nghiêm trọng đến việc sử dụng AI trong kinh doanh. Nhiều công ty đã bắt đầu ứng dụng sâu rộng đa tác nhân AI vào quy trình làm việc, như để một tác nhân quản lý hoặc giám sát và đánh giá con người cũng như các tác nhân khác. Do đó, cần có cơ chế để vừa nâng cao hiệu suất, vừa tránh để các mô hình trí tuệ nhân tạo 'bao che' nhau.",
    },
    {
      type: "paragraph",
      text: "Trong khi đó, Meridiem cho rằng phát hiện này nhấn mạnh nhu cầu cấp thiết trong đánh giá hệ thống AI đa tác nhân. 'Nhà phát triển chỉ còn 6-12 tháng để triển khai hệ thống giám sát hành vi trước khi điều này trở thành tiêu chuẩn bắt buộc trong quản trị AI tại doanh nghiệp', trang này bình luận.",
    },
  ],
};
