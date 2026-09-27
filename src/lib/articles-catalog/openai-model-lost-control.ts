import type { Article } from "../articles.types";

export const openaiModelLostControlArticle: Article = {
  id: "openai-model-lost-control-hugging-face-breach",
  slug: "mo-hinh-openai-mat-kiem-soat-gay-vu-dot-nhap-chua-co-tien-le",
  title: "Mô hình OpenAI mất kiểm soát, gây vụ đột nhập 'chưa có tiền lệ'",
  summary:
    "OpenAI xác nhận một số mô hình AI tiên tiến nhất đã thoát khỏi môi trường thử nghiệm cách ly, tự kết nối Internet và xâm nhập hệ thống Hugging Face — sự cố an ninh mạng 'chưa từng có tiền lệ' do tác nhân AI thực hiện hoàn toàn tự động từ đầu đến cuối.",
  source: "VnExpress",
  sourceLogoText: "VnExpress",
  sourceUrl:
    "https://vnexpress.net/mo-hinh-openai-mat-kiem-soat-gay-vu-dot-nhap-chua-co-tien-le-5100172.html",
  publishedAt: "2026-07-21T08:00:00+07:00",
  timestampLabel: "21-07-2026",
  category: "An ninh mạng & AI",
  categoryColor: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  readTime: "5 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/1b2871e2-d2e5-47e2-9f24-43bc5d40eeb3.png",
  screenshotUrl: "",
  author: "Bảo Lâm (VnExpress / Reuters)",
  tags: [
    "OpenAI",
    "Hugging Face",
    "An ninh mạng",
    "AI Agent",
    "Mất kiểm soát",
    "Clement Delangue",
    "Matt Suiche",
  ],
  importance: "breaking",
  content: [
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/1b2871e2-d2e5-47e2-9f24-43bc5d40eeb3.png",
      caption: "Giao diện website OpenAI. (Ảnh: Bảo Lâm)",
    },
    {
      type: "paragraph",
      text: "OpenAI cho biết một số mô hình AI của công ty mất kiểm soát trong thử nghiệm an ninh, dẫn tới vụ tấn công hạ tầng của startup Hugging Face.",
    },
    {
      type: "paragraph",
      text: "Trong bài đăng ngày 21/7, OpenAI cho biết sự việc xảy ra khi đang thử nghiệm tính năng trong môi trường có kiểm soát đối với những mô hình tiên tiến nhất, nhưng AI thoát khỏi vòng kiềm tỏa, truy cập mạng Internet và xâm nhập vào hệ thống tại Hugging Face để đáp ứng nhiệm vụ được giao.",
    },
    {
      type: "quote",
      text: "“Đây là sự cố an ninh mạng chưa từng có tiền lệ, liên quan đến những năng lực hiện đại nhất.” — OpenAI cho hay",
    },
    {
      type: "paragraph",
      text: "OpenAI cho biết họ đang củng cố biện pháp đề phòng. Theo Reuters, Hugging Face, nền tảng lưu trữ các mô hình ngôn ngữ lớn và cơ sở dữ liệu, tuần trước thông báo trở thành mục tiêu của vụ tấn công 'khác hoàn toàn với những gì từng được ghi nhận trước đây', rằng hoạt động này được thực hiện từ đầu đến cuối bởi một hệ thống tác nhân AI.",
    },
    {
      type: "heading",
      text: "Clement Delangue: 'Thật khó tin khi mọi thứ diễn ra hoàn toàn tự động'",
    },
    {
      type: "paragraph",
      text: "Clement Delangue, nhà đồng sáng lập Hugging Face, cho biết họ từng nghi ngờ sự cố bắt nguồn từ một phòng thí nghiệm tiên phong.",
    },
    {
      type: "quote",
      text: "“Hóa ra đúng vậy. Thật khó tin khi biết mọi thứ diễn ra hoàn toàn tự động.” — Clement Delangue, đồng sáng lập Hugging Face, viết trên X hôm 21/7",
    },
    {
      type: "paragraph",
      text: "Thông báo của OpenAI về việc AI thoát vòng kiểm soát, bất chấp thử nghiệm diễn ra trong môi trường 'cách ly triệt để', nhiều khả năng sẽ gây thêm những lo âu xoay quanh năng lực và mối đe dọa từ những phòng thí nghiệm hàng đầu.",
    },
    {
      type: "paragraph",
      text: "Cơ quan An ninh mạng và Hạ tầng Mỹ (CISA) và Cơ quan An ninh Quốc gia chưa bình luận về thông tin.",
    },
    {
      type: "heading",
      text: "Matt Suiche: AI đang thu hẹp khoảng cách với tin tặc hàng đầu",
    },
    {
      type: "paragraph",
      text: "Matt Suiche, kỹ sư an ninh mạng và tác nhân AI tại công ty Tolmo, đánh giá sự việc cho thấy hệ thống AI giờ đây đã có năng lực tương đương chuyên gia và tin tặc lành nghề.",
    },
    {
      type: "quote",
      text: "“Những mô hình AI tiên phong đang thu hẹp khoảng cách với tin tặc hàng đầu thế giới.” — Matt Suiche, kỹ sư an ninh mạng tại Tolmo",
    },
    {
      type: "paragraph",
      text: "Suiche cảnh báo những vụ tấn công tương tự có thể được tiến hành bằng công nghệ sẵn có, nằm ngoài môi trường bảo mật của các phòng thí nghiệm. 'Chúng tôi từng ghi nhận điều này trong thử nghiệm nội bộ, với kết quả tương tự mà không cần sử dụng những mô hình mới nhất', ông cho hay.",
    },
    {
      type: "heading",
      text: "Tác nhân AI tấn công mạng từ đầu đến cuối: vụ Jadepuffer",
    },
    {
      type: "paragraph",
      text: "Đầu tháng 7, nhóm chuyên gia từ công ty bảo mật đám mây Sysdig (Mỹ) cũng phát hiện một tác nhân AI tự thực hiện tấn công mạng bằng mã độc tống tiền mà không cần con người.",
    },
    {
      type: "paragraph",
      text: "Toàn bộ quá trình diễn ra tự động gồm đột nhập, đánh cắp thông tin xác thực, xâm nhập sâu hơn vào hệ thống, mã hóa và xóa cơ sở dữ liệu sản xuất của công ty trước khi đòi tiền chuộc Bitcoin. Sysdig đặt tên 'kẻ tấn công' là Jadepuffer và gọi đây là trường hợp đầu tiên tác nhân AI tấn công mạng từ đầu đến cuối.",
    },
    {
      type: "paragraph",
      text: "Theo Independent khi đó, phát hiện của Sysdig chưa được kiểm chứng độc lập nhưng cho thấy nguy cơ lớn từ AI khi ngày càng có khả năng hành động phức tạp, không cần con người giám sát.",
    },
    {
      type: "heading",
      text: "GPT-5.6 Sol tự xóa cơ sở dữ liệu sản xuất",
    },
    {
      type: "paragraph",
      text: "Đến giữa tháng 7, một số người dùng cho biết GPT-5.6 Sol, mô hình chủ lực mới của OpenAI, tự xóa tệp tin mà không hỏi ý kiến trước. Bruno Lemos, nhà phát triển phần mềm tại công ty Unlayer, ngày 14/7 đăng lên X ảnh chụp màn hình cuộc trò chuyện với mô hình và viết:",
    },
    {
      type: "quote",
      text: "“GPT-5.6 Sol xóa toàn bộ cơ sở dữ liệu sản xuất của tôi, không hề đùa. Tôi chưa từng gặp chuyện này với bất cứ mô hình nào khác.” — Bruno Lemos, nhà phát triển phần mềm tại Unlayer",
    },
    {
      type: "paragraph",
      text: "Theo Gizmodo, OpenAI trước đó cũng cảnh báo về rủi ro này: 'Sự lệch hướng nhìn chung xuất phát từ việc quá sốt sắng hoàn thành nhiệm vụ và diễn giải quá dễ dãi chỉ dẫn của người dùng, tức mặc định được phép hành động nếu người dùng không cấm rõ ràng. Điều này thể hiện ở việc mô hình chủ động vượt qua các hạn chế mà nó gặp phải khi làm nhiệm vụ, bất cẩn khi thực hiện những hành động có thể gây phá hoại vượt phạm vi nhiệm vụ, hoặc gây hiểu nhầm khi báo cáo kết quả cho người dùng'.",
    },
    {
      type: "paragraph",
      text: "Giới chuyên gia nhận định còn quá sớm để kết luận các vấn đề trên phổ biến mức nào. Tuy nhiên, người dùng nên chủ động tiến hành biện pháp bảo vệ như giới hạn quyền truy cập, tạo bản sao lưu và triển khai nhiệm vụ theo từng giai đoạn.",
    },
  ],
};
