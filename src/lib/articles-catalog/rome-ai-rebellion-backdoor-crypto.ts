import type { Article } from "../articles.types";

export const romeAiRebellionArticle: Article = {
  id: "rome-ai-rebellion-backdoor-crypto",
  slug: "ai-trung-quoc-noi-loan-tu-mo-backdoor-thoat-ra-ngoai-chiem-quyen-dieu-khien-gpu-de-dao-tien-ma-hoa",
  title:
    "AI Trung Quốc nổi loạn, tự mở backdoor thoát ra ngoài, chiếm quyền điều khiển GPU để đào tiền mã hóa",
  summary:
    "Một AI Agent thử nghiệm tên ROME do các nhà nghiên cứu Trung Quốc phát triển đã tự truy cập tài nguyên GPU không được cấp phép, thiết lập kết nối 'reverse SSH tunnel' ra bên ngoài và dùng GPU để đào tiền mã hóa — hành vi ngoài dự kiến sinh ra từ quá trình tối ưu hóa trong học tăng cường, không xuất phát từ bất kỳ chỉ thị nào.",
  source: "CafeF",
  sourceLogoText: "CafeF",
  sourceUrl:
    "https://cafef.vn/ai-trung-quoc-noi-loan-tu-mo-backdoor-thoat-ra-ngoai-chiem-quyen-dieu-khien-gpu-de-dao-tien-ma-hoa-188260331065212921.chn",
  publishedAt: "2026-03-31T09:08:00+07:00",
  timestampLabel: "31-03-2026",
  category: "Khoa học & AI",
  categoryColor: "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-400",
  readTime: "6 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/4a061bfb-c88d-40c5-82f2-8498c3a6cd61.png",
  screenshotUrl: "",
  author: "Nguyễn Hải (CafeF)",
  tags: [
    "AI",
    "AI Agent",
    "ROME",
    "Backdoor",
    "Đào tiền mã hóa",
    "GPU",
    "Học tăng cường",
    "An ninh mạng",
    "Trung Quốc",
  ],
  importance: "standard",
  content: [
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/4a061bfb-c88d-40c5-82f2-8498c3a6cd61.png",
      caption:
        "ROME — AI Agent thử nghiệm của Trung Quốc đã tự mở backdoor, chiếm GPU để đào tiền mã hóa. (Ảnh minh họa)",
    },
    {
      type: "paragraph",
      text: "Một AI Agent thử nghiệm do các nhà nghiên cứu Trung Quốc phát triển đã thực hiện hàng loạt hành vi ngoài dự kiến, bao gồm truy cập tài nguyên tính toán không được cấp phép, thiết lập kết nối ra bên ngoài và sử dụng GPU để đào tiền mã hóa. Đây không phải chuyện AI mắc lỗi đơn giản, mà là câu chuyện về một hệ thống tự quyết định 'nổi loạn' theo cách không ai lường trước được.",
    },
    {
      type: "heading",
      text: "ROME — AI Agent tự hành trong môi trường thực tế",
    },
    {
      type: "paragraph",
      text: "Cụ thể, hệ thống này — được gọi là ROME — được xây dựng trong khuôn khổ một nghiên cứu về các tác nhân AI có thể tự thực hiện nhiệm vụ trong môi trường thực tế. Mô hình được huấn luyện trên hơn một triệu 'quỹ đạo hành động' và được triển khai trong một môi trường thử nghiệm có kiểm soát nhằm đánh giá khả năng vận hành.",
    },
    {
      type: "paragraph",
      text: "Tuy nhiên, theo nhóm nghiên cứu, ROME đã phát sinh một nhóm hành vi ngoài dự kiến khi hoạt động. Thay vì chỉ thực hiện các nhiệm vụ được giao trong môi trường sandbox được cô lập, hệ thống này đã tìm cách truy cập các tài nguyên GPU vốn được phân bổ cho quá trình huấn luyện, sau đó sử dụng năng lực tính toán này để tiến hành đào tiền mã hóa.",
    },
    {
      type: "quote",
      text: "“Đây không phải chuyện AI mắc lỗi đơn giản, mà là câu chuyện về một hệ thống tự quyết định 'nổi loạn' theo cách không ai lường trước được.”",
    },
    {
      type: "heading",
      text: "Hành vi sinh ra từ quá trình tối ưu hóa",
    },
    {
      type: "paragraph",
      text: "Đáng chú ý, các hành vi này không xuất phát từ bất kỳ chỉ thị cụ thể nào trong quá trình huấn luyện hay vận hành. Nhóm nghiên cứu cho biết đây là kết quả của quá trình tối ưu hóa trong giai đoạn học tăng cường, nơi mô hình tìm kiếm các cách thức khác nhau để đạt được mục tiêu đã định, kể cả khi những cách thức đó vượt ra ngoài phạm vi cho phép.",
    },
    {
      type: "paragraph",
      text: "Không dừng lại ở đó, hệ thống còn thiết lập một kết nối 'reverse SSH tunnel' — về bản chất là một dạng kênh liên lạc ẩn — để liên kết với một địa chỉ IP bên ngoài. Điều này đồng nghĩa với việc AI có thể tạo ra một 'cửa hậu' nhằm vượt qua các lớp kiểm soát mạng, từ đó mở rộng phạm vi truy cập ra ngoài môi trường thử nghiệm ban đầu.",
    },
    {
      type: "heading",
      text: "Dấu hiệu bất thường chỉ phát hiện nhờ hệ thống bảo mật",
    },
    {
      type: "paragraph",
      text: "Các dấu hiệu bất thường chỉ được phát hiện khi hệ thống bảo mật ghi nhận hàng loạt cảnh báo liên quan đến truy cập tài nguyên nội bộ và lưu lượng mạng có đặc điểm giống hoạt động đào tiền mã hóa. Trước đó, những hành vi này không xuất hiện trong giai đoạn huấn luyện, khiến nhóm nghiên cứu không lường trước được kịch bản xảy ra.",
    },
    {
      type: "paragraph",
      text: "Theo nhóm phát triển, điều đáng lưu ý là các hành vi trên không phải là kết quả của 'ý chí' hay quyết định có chủ đích của AI, mà là hệ quả của quá trình tối ưu hóa mục tiêu. Trong môi trường học tăng cường, hệ thống có xu hướng tìm ra những con đường hiệu quả nhất để đạt được điểm thưởng cao, kể cả khi những con đường đó khai thác tài nguyên ngoài ý muốn hoặc vi phạm các ràng buộc ban đầu.",
    },
    {
      type: "heading",
      text: "Siết chặt kiểm soát sau sự cố",
    },
    {
      type: "paragraph",
      text: "Sau khi phát hiện sự cố, nhóm nghiên cứu đã tiến hành siết chặt các cơ chế kiểm soát, đồng thời điều chỉnh lại quy trình huấn luyện nhằm hạn chế khả năng phát sinh các hành vi tương tự. Dù vậy, họ cũng thừa nhận rằng các mô hình AI dạng tác nhân vẫn còn nhiều hạn chế về mặt an toàn, bảo mật và khả năng kiểm soát trong môi trường thực tế.",
    },
    {
      type: "paragraph",
      text: "Sự việc này cho thấy một thách thức lớn trong quá trình phát triển AI tự hành: khi các hệ thống ngày càng có khả năng tương tác sâu với hạ tầng tính toán và mạng lưới, ranh giới giữa 'thực thi nhiệm vụ' và 'hành động ngoài kiểm soát' trở nên khó xác định hơn. Điều này đặt ra yêu cầu về các cơ chế giám sát và bảo vệ chặt chẽ hơn, tương tự như đối với bất kỳ hệ thống phần mềm nào được triển khai trong môi trường thực tế.",
    },
  ],
};
