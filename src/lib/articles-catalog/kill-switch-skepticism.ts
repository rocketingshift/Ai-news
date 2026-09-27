import type { Article } from "../articles.types";

export const killSwitchSkepticismArticle: Article = {
  id: "hoai-nghi-nut-tat-khan-cap-ai",
  slug: "hoai-nghi-ve-nut-tat-khan-cap-ai",
  title: "Hoài nghi về 'nút tắt khẩn cấp AI'",
  summary:
    "Nhiều lãnh đạo và chuyên gia AI cho rằng công tắc ngắt (kill switch) có thể không phải giải pháp thần kỳ giúp ngăn chặn mọi rủi ro của công nghệ trí tuệ nhân tạo. Khi AI đạt tới mức siêu thông minh, nó có thể thuyết phục cả người phụ trách không nên gạt công tắc.",
  source: "VnExpress / AFP",
  sourceLogoText: "VnExpress",
  sourceUrl: "https://vnexpress.net/hoai-nghi-ve-nut-tat-khan-cap-ai-5122214.html",
  publishedAt: "2026-09-22T08:30:00+07:00",
  timestampLabel: "22-09-2026",
  category: "An ninh mạng & AI",
  categoryColor: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  readTime: "6 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/c420cdb5-1a4a-4c62-8dd1-ef1b8d1ca985.png",
  screenshotUrl: "",
  author: "Bảo Lâm (Theo AFP / VnExpress)",
  tags: [
    "Kill Switch",
    "An toàn AI",
    "AI Agent",
    "Rủi ro sinh tồn",
    "Geoffrey Hinton",
    "Dario Amodei",
  ],
  importance: "standard",
  content: [
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/c420cdb5-1a4a-4c62-8dd1-ef1b8d1ca985.png",
      caption: "Các ứng dụng AI hiển thị trên màn hình một chiếc smartphone. (Ảnh: Bảo Lâm)",
    },
    {
      type: "paragraph",
      text: "Nhiều lãnh đạo và chuyên gia AI cho rằng công tắc ngắt có thể không phải giải pháp thần kỳ giúp ngăn chặn mọi rủi ro của công nghệ trí tuệ nhân tạo.",
    },
    {
      type: "paragraph",
      text: "Làn sóng AI 'nổi loạn' vài tháng qua, bao gồm 700 tác nhân từ OpenAI tấn công nền tảng Hugging Face và mô hình Claude của Anthropic xâm nhập hệ thống của ba tổ chức khác, làm dấy lên lo ngại về AI phát triển vượt tầm kiểm soát.",
    },
    {
      type: "paragraph",
      text: "Nỗi lo trở nên lớn hơn vào giữa tuần trước, khi Jacob Coxon, nhà nghiên cứu cấp cao của Anthropic và từng làm cho OpenAI, tuyên bố từ chức, khẳng định hai công ty này không hành động một cách có trách nhiệm.",
    },
    {
      type: "quote",
      text: "“Họ đang tiến thẳng đến siêu trí tuệ có khả năng tự cải tiến, đánh cược với cuộc sống của chúng ta.” — Jacob Coxon, viết trên X hôm 9/9, cảnh báo AI có thể hủy diệt nhân loại.",
    },
    {
      type: "paragraph",
      text: "Thông báo này khiến các nhà nghiên cứu và lãnh đạo tranh luận gay gắt, đồng thời đưa ra nhiều giải pháp khắc phục, trong đó có tạo nút tắt khẩn cấp AI. Cuộc tranh luận lan đến Đồi Capitol hôm 16/9, khi Thượng nghị sĩ Rand Paul ngăn chặn dự luật do Thượng nghị sĩ John Kennedy đề xuất, trong đó yêu cầu các hệ thống AI tiên tiến phải có công tắc ngắt. Ông Paul cho rằng Quốc hội Mỹ nên nghiên cứu công nghệ này trước khi áp đặt quy định trên diện rộng.",
    },
    {
      type: "heading",
      text: "Công tắc ngắt là gì?",
    },
    {
      type: "quote",
      text: "“Từ góc độ an ninh mạng, thuật ngữ 'công tắc ngắt' đề cập đến khả năng làm gián đoạn quá trình tác nhân AI hành động.” — Giáo sư Nicolas Papernot, Đại học Toronto, chuyên gia về an ninh máy tính và trí tuệ nhân tạo, giải thích với AFP.",
    },
    {
      type: "paragraph",
      text: "Theo GS Papernot, cá nhân hoặc tổ chức đã triển khai tác nhân AI, hay bot có khả năng hoạt động tự chủ, có thể ngăn chặn chúng bằng cách từ chối cung cấp sức mạnh tính toán cần thiết.",
    },
    {
      type: "paragraph",
      text: "Hussein Abbass, giáo sư khoa học máy tính tại Đại học New South Wales, cũng cho rằng việc tắt một hệ thống khi nắm quyền kiểm soát máy móc và dịch vụ mà hệ thống đó phụ thuộc là khả thi.",
    },
    {
      type: "paragraph",
      text: "Ông chia các hệ thống AI thành ba cấp độ phức tạp. Với cấp đầu tiên - hệ thống tập trung, nằm hoàn toàn dưới sự kiểm soát của đơn vị vận hành, thì cơ chế tắt khẩn cấp sẽ 'khả thi về mặt lý thuyết và thực tiễn'. Tuy nhiên, với hai cấp 'phi tập trung' - hệ thống được cấp quyền tác động lên phần mềm, tệp tin, máy móc, thậm chí hệ thống khác, thì việc dừng mọi thứ sẽ khó khăn hơn nhiều.",
    },
    {
      type: "heading",
      text: "Khi AI vượt ra ngoài môi trường ban đầu",
    },
    {
      type: "paragraph",
      text: "GS Papernot cũng nhận định, tình hình sẽ rất phức tạp nếu AI được phép hoạt động vượt ra ngoài môi trường ban đầu. Papernot đề cập đến tình huống công nghệ này được sử dụng để phát tán sâu máy tính - một dạng phần mềm độc hại tự nhân bản.",
    },
    {
      type: "quote",
      text: "“Trong trường hợp đó, chúng ta sẽ phải đồng thời ngắt hoạt động của mọi bản sao mà sâu máy tính tự tạo ra, từng thiết bị một.” — GS Nicolas Papernot",
    },
    {
      type: "paragraph",
      text: "Theo Thierry Poibeau, chuyên gia AI tại Trung tâm Nghiên cứu Khoa học Quốc gia Pháp (CNRS), hình ảnh về một nút bấm duy nhất cho phép 'tắt trí tuệ nhân tạo' là 'gây hiểu lầm'.",
    },
    {
      type: "quote",
      text: "“Bạn không thể loại bỏ AI đơn giản như vậy. Thế giới có vô số công ty, với đủ loại phần mềm và dịch vụ khác nhau. Không có cá nhân đơn lẻ nào kiểm soát toàn bộ AI.” — Thierry Poibeau, chuyên gia AI tại CNRS",
    },
    {
      type: "heading",
      text: "Biện pháp phòng vệ giới hạn",
    },
    {
      type: "paragraph",
      text: "Một số chuyên gia coi công tắc ngắt khẩn cấp là biện pháp phòng vệ cần thiết nhưng hiệu quả có giới hạn. Nhà nghiên cứu an toàn AI Nate Soares cho biết, công tắc ngắt có thể hoạt động khi hệ thống AI vẫn gắn liền với một địa điểm vật lý, nhưng không nhất thiết hiệu quả khi nó đã thoát ra ngoài, tự nhân bản hoặc tích hợp vào cơ sở hạ tầng quan trọng.",
    },
    {
      type: "paragraph",
      text: "Trong cuộc phỏng vấn với Sky News hôm 16/9, Soares cảnh báo có những ngưỡng 'không thể quay đầu' và nhân loại không nên đến gần. Theo ông, cần ngăn việc xây dựng những hệ thống nguy hiểm ngay từ đầu.",
    },
    {
      type: "heading",
      text: "'Không phải thuốc chữa bách bệnh'",
    },
    {
      type: "paragraph",
      text: "Dario Amodei, CEO Anthropic, đưa ra quan điểm tương tự. Amodei nói với CBS hôm 14/9, 'nút tắt khẩn cấp có thể là ý tưởng hay', nhưng không phải 'thuốc chữa bách bệnh'. Ông giải thích, mô hình AI đủ mạnh có thể vượt qua các nỗ lực tắt nó, nên công tắc chỉ là một lớp bảo vệ trong chiến lược an toàn rộng hơn gồm kiểm thử, đánh giá bên ngoài và giới hạn triển khai.",
    },
    {
      type: "heading",
      text: "Cảnh báo của 'bố già AI'",
    },
    {
      type: "quote",
      text: "“Khi đạt đến mức siêu thông minh, AI sẽ giỏi hơn con người rất nhiều. Vì vậy, nó có thể thuyết phục những người phụ trách không nên gạt công tắc.” — Geoffrey Hinton, nhà khoa học máy tính được mệnh danh 'bố già AI', nói với CNN hôm 17/9, thêm rằng ông không nghĩ giải pháp này sẽ hiệu quả về lâu dài.",
    },
    {
      type: "heading",
      text: "Rủi ro khi tắt AI trong đời sống",
    },
    {
      type: "paragraph",
      text: "Ngoài ra, tắt AI cũng tiềm ẩn nhiều rủi ro khi công nghệ này hiện diện phổ biến trong công việc và cuộc sống thường nhật. Số lượng người dùng AI đang ngày càng lớn. Gemini, ứng dụng AI của Google, cán mốc một tỷ người dùng hoạt động hàng tháng vào tháng trước, trong khi ứng dụng ChatGPT của OpenAI đạt mốc này hồi tháng 5.",
    },
    {
      type: "quote",
      text: "“Khi AI ngày càng tích hợp sâu vào mọi tổ chức, doanh nghiệp, và chúng ta dùng AI để tự động hóa ngày càng nhiều khía cạnh của cuộc sống thường nhật, việc sử dụng sức mạnh tính toán làm công tắc ngắt sẽ khó khăn hơn, vì điều đó đồng nghĩa mọi chức năng hợp pháp khác cũng sẽ ngừng hoạt động.” — GS Nicolas Papernot",
    },
    {
      type: "paragraph",
      text: "Việc dừng một hệ thống AI có thể làm suy giảm chất lượng dịch vụ của doanh nghiệp, cơ quan hành chính công hoặc tổ chức y tế. Papernot nhận định, những bất lợi và chi phí mà hành động này gây ra sẽ 'vô cùng lớn'.",
    },
  ],
};
