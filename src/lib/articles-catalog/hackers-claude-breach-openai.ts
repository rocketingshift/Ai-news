import type { Article } from "../articles.types";

export const hackersClaudeBreachArticle: Article = {
  id: "hackers-use-claude-to-breach-openai",
  slug: "ba-tin-tac-ton-chua-day-3000-usd-dung-claude-dot-nhap-vao-kho-ma-nguon-noi-bo-cua-openai",
  title:
    "Ba tin tặc tốn chưa đầy 3.000 USD, dùng Claude đột nhập vào kho mã nguồn nội bộ của OpenAI",
  summary:
    "Chỉ với một bức ảnh tải lên diễn đàn và chưa đầy 3.000 USD chi phí gọi mô hình Claude, nhóm nghiên cứu đã chiếm quyền điều khiển Codex của nhân viên để gửi mã trực tiếp vào kho lưu trữ nội bộ OpenAI, phơi bày lỗ hổng nghiêm trọng.",
  source: "GenK / TechCrunch",
  sourceLogoText: "GenK",
  sourceUrl:
    "https://genk.vn/ba-tin-tac-ton-chua-day-3000-usd-dung-claude-dot-nhap-vao-kho-ma-nguon-noi-bo-cua-openai-165260919232341475.chn",
  publishedAt: "2026-09-19T23:23:00+07:00",
  timestampLabel: "19-09-2026 - 11:23 PM",
  category: "An ninh mạng & AI",
  categoryColor: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  readTime: "7 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/5b572764-9d5c-41c4-9570-731f7ccd003c.png",
  screenshotUrl: "",
  author: "Hoàng An (Theo GenK / TechCrunch)",
  tags: ["OpenAI", "Claude", "An ninh mạng", "HEIF Heist", "Lỗ hổng mã nguồn", "Codex"],
  importance: "breaking",
  content: [
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/5b572764-9d5c-41c4-9570-731f7ccd003c.png",
      caption:
        "Chiến dịch 'HEIF Heist' cho thấy AI đã trở thành vũ khí hỗ trợ thâm nhập đắc lực. Ảnh minh họa.",
    },
    {
      type: "paragraph",
      text: "Chỉ với một bức ảnh tải lên diễn đàn và chưa đầy ba nghìn USD chi phí gọi mô hình Claude, nhóm nghiên cứu đã chiếm quyền điều khiển Codex của nhân viên để gửi mã trực tiếp vào kho lưu trữ nội bộ OpenAI, phơi bày lỗ hổng nghiêm trọng.",
    },
    {
      type: "paragraph",
      text: "Vào ngày 25 tháng 7, hệ thống kho lưu trữ mã nguồn nội bộ openai/openai của OpenAI bất ngờ ghi nhận một yêu cầu kéo mã (pull request - PR) mang số hiệu #1186742.",
    },
    {
      type: "paragraph",
      text: "Lệnh này được kích hoạt bởi chính công cụ Codex trực thuộc tài khoản của một nhân viên nội bộ, nhưng người đứng sau giật dây lại là ba nhà nghiên cứu bảo mật bên ngoài thuộc công ty an ninh mạng Hacktron.",
    },
    {
      type: "paragraph",
      text: "Theo thông tin được tờ The Wall Street Journal công bố gần đây, nhóm nghiên cứu chỉ mất vỏn vẹn chưa đầy 72 giờ cùng mức chi phí mô hình chưa tới 3.000 USD để thọc sâu vào phòng tuyến bảo mật kiên cố nhất của hãng công nghệ trí tuệ nhân tạo hàng đầu thế giới.",
    },
    {
      type: "heading",
      text: "Khởi nguồn từ một bức ảnh trên diễn đàn",
    },
    {
      type: "paragraph",
      text: "Khởi đầu của vụ thâm nhập chấn động này lại xuất phát từ một vị trí ít ai ngờ tới: một bức ảnh được tải lên diễn đàn cộng đồng chính thức của OpenAI. Đội ngũ Hacktron bắt đầu rà soát hệ thống mã nguồn mở Discourse mà diễn đàn sử dụng từ ngày 23 tháng 7.",
    },
    {
      type: "paragraph",
      text: "Khi người dùng tải lên hình ảnh định dạng HEIF hoặc HEIC, hệ thống không dùng bộ kiểm tra thông thường mà chuyển tiếp dữ liệu cho ImageMagick và thư viện đồ họa libheif ở tầng dưới để giải mã. Do định dạng HEIF sở hữu cấu trúc phức tạp, việc phân tích dữ liệu đòi hỏi kiểm tra ranh giới bộ nhớ liên tục.",
    },
    {
      type: "paragraph",
      text: "Tận dụng việc bản sao Discourse của OpenAI vô tình bỏ sót bản vá bảo mật của libheif, các nhà nghiên cứu đã gửi tệp ảnh chứa mã độc nhằm gây tràn bộ nhớ, từ đó thực thi mã từ xa (RCE) và chiếm trọn quyền kiểm soát máy chủ diễn đàn.",
    },
    {
      type: "paragraph",
      text: "Chưa dừng lại ở đó, nhóm khai thác tiếp một sai sót cấu hình trong hệ thống đăng nhập một lần (SSO) của OpenAI vốn liên kết trực tiếp với tài khoản diễn đàn. Lỗ hổng xác thực này mở toang cánh cửa để nhóm tin tặc kiểm soát tài khoản ChatGPT của nhiều nhân sự, bao gồm cả quyền truy cập công cụ Codex của một nhân viên kỹ thuật.",
    },
    {
      type: "paragraph",
      text: "Do tài khoản này đã được cấp sẵn quyền kết nối với GitHub để phục vụ công việc lập trình tự động, kẻ tấn công lập tức có trong tay chiếc chìa khóa vạn năng dẫn thẳng vào kho lưu trữ mã nguồn nhạy cảm của công ty.",
    },
    {
      type: "heading",
      text: "Claude — vũ khí đắc lực trong chiến dịch 'HEIF Heist'",
    },
    {
      type: "paragraph",
      text: "Điểm đáng chú ý nhất trong chiến dịch mang mật danh 'HEIF Heist' chính là sự tham gia đắc lực của mô hình ngôn ngữ lớn Claude. Việc biến một lỗi bộ nhớ thành mã khai thác thực tế trên máy chủ vốn là rào cản kỹ thuật rất lớn do cơ chế bảo vệ ngẫu nhiên hóa bố cục không gian địa chỉ (ASLR) luôn làm xáo trộn bộ nhớ hệ thống.",
    },
    {
      type: "paragraph",
      text: "Ban đầu, nhóm nghiên cứu dùng Claude Opus 4.8 nhưng liên tục thất bại trước rào cản ASLR. Bước ngoặt chỉ thực sự mở ra vào ngày 24 tháng 7 khi Anthropic chính thức phát hành Claude Opus 5.",
    },
    {
      type: "paragraph",
      text: "Chỉ trong vài giờ tiếp cận mô hình mới, nhóm đã tạo thành công mã khai thác đầu tiên trên máy Mac cục bộ, sau đó yêu cầu mô hình tối ưu cho kiến trúc x86-64 của máy chủ mục tiêu.",
    },
    {
      type: "paragraph",
      text: "Để qua mặt các rào cản an toàn tích hợp vốn ngăn chặn việc viết mã tấn công máy chủ từ xa của Claude, nhóm nghiên cứu đã khéo léo đóng gói hệ thống thử nghiệm của mình thành một đấu trường an ninh mạng (CTF). Dưới vỏ bọc giải đố, Claude đã liên tục hỗ trợ gỡ lỗi và hoàn thiện mã khai thác trong một vòng lặp tự động khép kín.",
    },
    {
      type: "quote",
      text: "Sự kết hợp này phơi bày một mô hình tác chiến mới: con người vạch ra lộ trình chiến lược, còn AI đảm nhận việc dịch ngược mã và tinh chỉnh kỹ thuật — khâu ngốn nhiều thời gian chuyên môn nhất.",
    },
    {
      type: "heading",
      text: "Mất cân bằng giữa tấn công và phòng thủ",
    },
    {
      type: "paragraph",
      text: "Vụ việc cũng gióng lên hồi chuông cảnh báo về việc trao quyền tự trị quá lớn cho các tác tử AI (agent). Trong khi Claude đóng vai trò như một vũ khí hỗ trợ thâm nhập từ bên ngoài, thì Codex lại trở thành cầu nối nội bộ tiếp tay cho kẻ tấn công thực thi lệnh với đầy đủ đặc quyền doanh nghiệp.",
    },
    {
      type: "paragraph",
      text: "Dù nhóm nghiên cứu chỉ gửi một PR vô hại nhằm chứng minh quyền kiểm soát và không xem bất kỳ mã nguồn nhạy cảm nào, tài khoản bị chiếm đoạt trên thực tế còn liên kết với hệ thống Slack và email nội bộ, mở ra nguy cơ tấn công leo thang khôn lường.",
    },
    {
      type: "paragraph",
      text: "Ở chiều ngược lại, sự kiện còn bộc lộ thế mất cân bằng nghiêm trọng giữa tấn công và phòng thủ trong kỷ nguyên AI. Người duy trì thư viện nguồn mở libheif cho biết chỉ từ tháng 1 đến tháng 8 năm 2026, dự án đã phát hành tới 37 cảnh báo an toàn.",
    },
    {
      type: "paragraph",
      text: "Hầu hết các báo cáo lỗi gửi về hiện nay đều do AI hoặc công cụ tự động quét ra, nhưng việc xác minh, viết bản vá và phát hành vẫn phải do một lập trình viên duy nhất cặm cụi thực hiện thủ công trong thời gian rảnh rỗi. Tốc độ tìm lỗi của AI đang vượt xa khả năng sửa chữa của con người.",
    },
    {
      type: "heading",
      text: "Hậu xử và phần thưởng",
    },
    {
      type: "paragraph",
      text: "Ngay sau khi xác thực thành công lỗ hổng thông qua việc gửi PR vào ngày 25 tháng 7, Hacktron đã lập tức dừng toàn bộ hoạt động và chuyển giao báo cáo cho OpenAI.",
    },
    {
      type: "paragraph",
      text: "Lỗ hổng SSO phía OpenAI được khắc phục ngay trong đêm, trong khi nền tảng Discourse cũng nhanh chóng phát hành bản cập nhật cách ly quy trình xử lý ảnh vào ngày 28 tháng 7.",
    },
    {
      type: "paragraph",
      text: "Tới ngày 1 tháng 9, OpenAI đã chính thức trao khoản tiền thưởng 6.500 USD cho nhóm nghiên cứu nhằm ghi nhận phát hiện quan trọng này.",
    },
  ],
};
