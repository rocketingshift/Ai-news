import type { Article } from "../articles.types";

export const nvidiaAiChipDesignArticle: Article = {
  id: "nvidia-ai-shortens-10-months-chip-design",
  slug: "ai-co-the-rut-ngan-10-thang-lam-viec-cua-ky-su-nvidia-con-mot-dem",
  title: "AI có thể rút ngắn 10 tháng làm việc của kỹ sư Nvidia 'còn một đêm'",
  summary:
    "Giám đốc khoa học Nvidia William Dally cho biết hệ thống học tăng cường NB-Cell có thể hoàn thành trong một đêm khối lượng công việc mà 8 kỹ sư từng mất 10 tháng. Nvidia cũng dùng Chip Nemo, Bug Nemo và AI tối ưu mạch điện để cắt giảm toàn diện thời gian thiết kế chip.",
  source: "VnExpress",
  sourceLogoText: "VnExpress",
  sourceUrl:
    "https://vnexpress.net/ai-co-the-rut-ngan-10-thang-lam-viec-cua-ky-su-nvidia-con-mot-dem-5062418.html",
  publishedAt: "2026-04-15T09:00:00+07:00",
  timestampLabel: "15-04-2026",
  category: "Đột phá Công nghệ & Nghệ thuật",
  categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  readTime: "4 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/e435abfe-e5f8-4a56-b321-ed00a0369235.png",
  screenshotUrl: "",
  author: "Lưu Quý (Theo VnExpress)",
  tags: ["Nvidia", "Thiết kế chip", "AI", "William Dally", "Chip Nemo", "NB-Cell", "GPU"],
  importance: "featured",
  content: [
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/e435abfe-e5f8-4a56-b321-ed00a0369235.png",
      caption:
        "Logo Nvidia tại Triển lãm Computex 2024 diễn ra ở Đài Bắc, Đài Loan. (Ảnh: Khương Nha)",
    },
    {
      type: "paragraph",
      text: "Đại diện Nvidia cho biết AI đang thay đổi toàn diện quy trình thiết kế chip, biến những tác vụ phức tạp cần đội ngũ kỹ sư làm việc nhiều tháng có thể hoàn thành sau một đêm.",
    },
    {
      type: "paragraph",
      text: "Trong video trò chuyện với Jeff Dean, nhà khoa học trưởng tại Google, mới được đăng trên website của Nvidia, William Dally, Giám đốc khoa học Nvidia, tiết lộ cách hãng đưa AI vào mọi giai đoạn thiết kế chip để cắt giảm tối đa thời gian phát triển sản phẩm.",
    },
    {
      type: "heading",
      text: "10 tháng làm việc của 8 kỹ sư — hoàn thành trong một đêm",
    },
    {
      type: "paragraph",
      text: "Cụ thể, trước đây việc chuyển đổi (porting) một thư viện cell tiêu chuẩn khi sang một quy trình sản xuất mới cần 8 kỹ sư làm trong 10 tháng. Còn hiện Nvidia thay thế bằng hệ thống học tăng cường NB-Cell, cho phép một bộ xử lý đồ họa GPU có thể hoàn thành toàn bộ khối lượng công việc đó trong một đêm.",
    },
    {
      type: "paragraph",
      text: "Công ty cũng phát triển các mô hình ngôn ngữ lớn nội bộ như Chip Nemo và Bug Nemo, được huấn luyện dựa trên kho tài liệu thiết kế độc quyền của mọi dòng GPU mà họ từng sản xuất.",
    },
    {
      type: "quote",
      text: "“Chip Nemo giống như một người cố vấn kiên nhẫn.” — William Dally, Giám đốc khoa học Nvidia",
    },
    {
      type: "paragraph",
      text: "Thay vì làm phiền các kỹ sư dày dạn kinh nghiệm, nhóm nhà thiết kế trẻ có thể đặt câu hỏi cho Chip Nemo để tìm hiểu cách vận hành của các khối phần cứng phức tạp. Điều này giúp giải phóng nguồn lực của kỹ sư cấp cao để họ tập trung vào nhiệm vụ quan trọng hơn.",
    },
    {
      type: "heading",
      text: "AI đưa ra những thiết kế 'hoàn toàn kỳ dị'",
    },
    {
      type: "paragraph",
      text: "Không dừng lại ở việc hỗ trợ, AI còn tham gia trực tiếp vào việc tối ưu hóa thiết kế mạch điện thông qua phương pháp thử - sai. Hệ thống có khả năng đưa ra những phương án thiết kế mà Giám đốc khoa học Nvidia mô tả là 'hoàn toàn kỳ dị', con người không bao giờ nghĩ tới.",
    },
    {
      type: "paragraph",
      text: "Một số thiết kế này đem lại hiệu quả tốt hơn từ 20% đến 30% về mặt diện tích, năng lượng và hiệu suất so với bản thiết kế của con người.",
    },
    {
      type: "paragraph",
      text: "AI cũng được ứng dụng trong kiểm thử, một trong những giai đoạn kéo dài nhất của chu kỳ phát triển chip, nhằm chứng minh các thiết kế hoạt động ổn định trong thời gian ngắn nhất.",
    },
    {
      type: "heading",
      text: "Chưa thể tự thiết kế hoàn toàn một GPU",
    },
    {
      type: "paragraph",
      text: "Dù đạt được bước tiến về năng suất, William Dally khẳng định trí tuệ nhân tạo vẫn chưa thực sự tiến gần đến mức có thể tự thiết kế hoàn toàn một bộ xử lý.",
    },
    {
      type: "quote",
      text: "“Tôi rất mong đạt đến giai đoạn nơi tôi chỉ cần ra lệnh 'hãy thiết kế cho tôi một GPU mới', nhưng chúng ta còn cách mục tiêu đó rất xa.” — William Dally, Giám đốc khoa học Nvidia",
    },
    {
      type: "paragraph",
      text: "Trong tầm nhìn dài hạn, Nvidia dự đoán quy trình phát triển chip sẽ chuyển sang mô hình đa tác nhân, nơi các hệ thống AI chuyên biệt phối hợp với nhau để xử lý từng phần của thiết kế, tương tự cách các đội ngũ kỹ sư con người đang vận hành hiện nay.",
    },
  ],
};
