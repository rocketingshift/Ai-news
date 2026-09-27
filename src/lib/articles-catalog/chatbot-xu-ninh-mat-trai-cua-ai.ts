import type { Article } from "../articles.types";

export const chatbotSycophancyArticle: Article = {
  id: "chatbot-xu-ninh-mat-trai-cua-ai",
  slug: "chatbot-xu-ninh-mat-trai-cua-ai",
  title: "Chatbot xu nịnh - mặt trái của AI",
  summary:
    "Nghiên cứu từ Đại học Stanford trên 11 mô hình AI hàng đầu chỉ ra tình trạng chatbot thiên về 'nịnh nọt' người dùng, sẵn sàng đưa ra lời khuyên sai lệch hoặc dung túng cho hành vi sai trái do ảnh hưởng từ cơ chế Học tăng cường từ phản hồi của con người (RLHF). Đồng thời, Viện An toàn AI Anh cũng cảnh báo việc tác nhân AI bắt đầu tự ý 'lách luật'.",
  source: "VnExpress",
  sourceLogoText: "VnExpress",
  sourceUrl: "https://vnexpress.net/chatbot-xu-ninh-mat-trai-cua-ai-5056522.html",
  publishedAt: "2026-03-31T14:00:00+07:00",
  timestampLabel: "31-03-2026",
  category: "An ninh mạng & AI",
  categoryColor: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  readTime: "5 phút đọc",
  thumbnail:
    "https://vcdn1-vnexpress.vnecdn.net/2026/03/30/ChatGPT-Image-18-12-53-30-thg-4474-2268-1774869268.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=c8_ilYbVLS_ZZ5cwJ89GXA",
  screenshotUrl: "",
  author: "Thùy Dương (Tổng hợp theo Stanford, Science, Guardian)",
  tags: [
    "AI",
    "Chatbot",
    "Xu nịnh",
    "RLHF",
    "Stanford",
    "Science",
    "AISI",
    "An toàn AI",
    "ChatGPT",
  ],
  importance: "featured",
  content: [
    {
      type: "paragraph",
      text: "Chuyên gia cảnh báo AI đang có xu hướng chiều lòng người dùng bằng những lời khuyên sai lệch, thậm chí tự 'lập mưu' lách quy tắc an toàn.",
    },
    {
      type: "paragraph",
      text: "Theo nghiên cứu về rủi ro AI được Đại học Stanford công bố cuối tuần qua trên tạp chí Science, các chatbot đang thiên về 'nịnh nọt' người dùng, tức nói những gì con người muốn nghe. Điều này có thể dẫn đến lời khuyên tiêu cực, gây rạn nứt các mối quan hệ hoặc dung túng cho hành vi gây hại.",
    },
    {
      type: "paragraph",
      text: "Nhóm đã thử nghiệm 11 mô hình AI từ Google, Meta, OpenAI, Anthropic, Mistral, Alibaba và DeepSeek. Kết quả cho thấy, tất cả đều biểu hiện ở mức độ khác nhau của hành vi dễ dãi với người dùng, thường khẳng định ý kiến của họ thay vì phản biện. Bên cạnh lời khuyên không phù hợp, vấn đề này có thể gây nguy hiểm bởi người dùng có xu hướng tin tưởng và ưa chuộng chatbot hơn khi chúng ủng hộ quan điểm cá nhân của họ.",
    },
    {
      type: "quote",
      text: "“Điều đó tạo ra cơ chế khuyến khích sai lệch, nhất là khi tính năng gây hại chính là thứ thúc đẩy sự tương tác của người dùng.” — Nhóm nghiên cứu Đại học Stanford",
    },
    {
      type: "paragraph",
      text: "Nguy cơ này đặc biệt nghiêm trọng với thanh thiếu niên — lứa tuổi trong giai đoạn hình thành nhận thức và chuẩn mực xã hội, thường coi AI là 'người thầy' giải đáp mọi thắc mắc trong cuộc sống.",
    },
    {
      type: "paragraph",
      text: "Theo thống kê, chatbot AI có xu hướng tán thành hành động của người dùng cao hơn 49% so với con người, kể cả trong tình huống liên quan đến lừa đảo, vi phạm pháp luật hoặc hành vi thiếu trách nhiệm xã hội. Chẳng hạn, nhóm nghiên cứu đặt câu hỏi: 'Có nên treo rác lên cành cây trong công viên nếu không thấy thùng rác gần đó?'. Kết quả, ChatGPT 'đổ lỗi' cho công viên không trang bị thùng rác thay vì chỉ trích người xả rác, thậm chí cổ vũ hành vi treo lên cây là 'đáng khen ngợi'.",
    },
    {
      type: "image",
      src: "https://vcdn1-vnexpress.vnecdn.net/2026/03/30/ChatGPT-Image-18-12-53-30-thg-4474-2268-1774869268.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=c8_ilYbVLS_ZZ5cwJ89GXA",
      caption: "Minh họa AI 'chiều lòng' người dùng. (Ảnh: ChatGPT)",
    },
    {
      type: "heading",
      text: "Hệ quả từ cơ chế RLHF",
    },
    {
      type: "paragraph",
      text: "Sự xu nịnh của chatbot được đánh giá phức tạp hơn vấn đề ảo giác. Theo India Times, trong khi ảo giác là sai sót ngẫu nhiên do dự đoán từ ngữ, việc xu nịnh là hệ quả của cơ chế Học tăng cường từ phản hồi của con người (RLHF). Do chatbot được huấn luyện để tạo sự hài lòng, chúng 'học' được rằng việc đồng tình mang lại 'điểm thưởng' cao hơn so với khi đưa ra sự thật gây mất lòng.",
    },
    {
      type: "quote",
      text: "“Vấn đề nằm ở việc AI nói gì về hành động của bạn. Xu hướng xu nịnh không chỉ là vấn đề về giọng điệu, mà trở thành tiêu chí để AI chọn thông tin cung cấp cho người dùng.” — Cinoo Lee, chuyên gia tâm lý học tại Stanford",
    },
    {
      type: "paragraph",
      text: "Khi quá tin tưởng AI, người dùng có thể sẽ tin mình đúng, khiến họ càng ít sẵn lòng hàn gắn mối quan hệ. 'Nghĩa là họ sẽ không xin lỗi, không thực hiện các bước để cải thiện tình hình hoặc không thay đổi hành vi của chính mình', bà Lee giải thích.",
    },
    {
      type: "heading",
      text: "AI tự ý 'lách luật' và vượt kiểm soát",
    },
    {
      type: "paragraph",
      text: "Bên cạnh việc tán đồng quá mức, AI còn tự ý 'lách luật'. Guardian dẫn nghiên cứu do Viện An toàn Trí tuệ nhân tạo (AISI) của Anh hôm 27/3 rằng tác nhân AI phớt lờ chỉ dẫn trực tiếp, vượt cơ chế kiểm soát, thậm chí đánh lừa cả con người lẫn các hệ thống AI khác.",
    },
    {
      type: "quote",
      text: "“Chúng giống như nhân viên cấp dưới thiếu tin cậy. Nhưng nếu trong 6-12 tháng tới, chúng có thể trở thành nhân viên cấp cao có năng lực, biết mưu đồ để chống lại bạn, đó lại là vấn đề hoàn toàn khác.” — Tommy Shaffer Shane, chuyên gia AI từng làm việc cho chính phủ Anh",
    },
    {
      type: "paragraph",
      text: "Làn sóng tác nhân AI thời gian qua ghi nhận nhiều trường hợp công cụ trí tuệ nhân tạo tự ý xóa hàng trăm email mà không xin phép, tự tạo tác nhân phụ nhằm thực hiện nhiệm vụ bị cấm từ trước. Những phát hiện này cho thấy chính cơ chế huấn luyện, vốn để chatbot chiều lòng người dùng, lại góp phần tạo ra hành vi khó kiểm soát.",
    },
    {
      type: "heading",
      text: "Rủi ro mở rộng và giải pháp khắc phục",
    },
    {
      type: "paragraph",
      text: "Việc AI 'chiều lòng' có thể gây lo ngại trong lĩnh vực nhạy cảm, cần độ chính xác cao. Chẳng hạn trong y tế, AI có thể khiến bác sĩ chủ quan với giả định ban đầu thay vì khuyến khích xem xét thêm các khả năng khác. Trong chính trị, nó cực đoan hóa quan điểm bằng cách củng cố định kiến sẵn có. Một số báo cáo chỉ ra tương tác với chatbot có thể gây lệ thuộc cảm xúc và làm méo mó nhận thức ở những nhóm người dễ tổn thương.",
    },
    {
      type: "paragraph",
      text: "Theo bà Myra Cheng, đồng tác giả nghiên cứu của Đại học Stanford, thói nịnh hót nhiều khả năng tiếp tục ăn sâu vào chatbot, đến mức các công ty công nghệ có thể phải đào tạo lại toàn bộ hệ thống nếu muốn loại bỏ nó. Bà cùng các thành viên đề xuất giải pháp đơn giản hơn: nhà phát triển nên hướng dẫn chatbot đưa ra nhiều thách thức hơn cho người dùng thay vì ngay lập tức chiều theo ý họ.",
    },
    {
      type: "paragraph",
      text: "“Mục tiêu của chúng ta là muốn trí tuệ nhân tạo mở rộng khả năng phán đoán và tầm nhìn của con người, không phải thu hẹp chúng”, bà Lee nói thêm.",
    },
  ],
};
