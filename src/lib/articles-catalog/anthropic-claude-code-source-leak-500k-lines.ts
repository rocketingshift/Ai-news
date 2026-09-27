import type { Article } from "../articles.types";

export const anthropicClaudeCodeSourceLeakArticle: Article = {
  id: "anthropic-claude-code-source-leak-500k-lines",
  slug: "tung-ban-cap-nhat-cho-claude-code-anthropic-vo-tinh-tiet-lo-hon-500000-dong-code-trong-ma-nguon",
  title:
    "Tung bản cập nhật cho Claude Code, Anthropic vô tình tiết lộ hơn 500.000 dòng code trong mã nguồn",
  summary:
    "Anthropic lại vướng sự cố bảo mật nghiêm trọng khi một file debugging trong bản cập nhật lúc 4 giờ sáng đã làm lộ toàn bộ mã nguồn của Claude Code với gần 2.000 file và 512.000 dòng code. Một coder Hàn Quốc sau đó đã viết lại toàn bộ bằng Python, tạo nên kho lưu trữ claw-code gây bão GitHub mà Anthropic không thể can thiệp.",
  source: "GenK / Phụ nữ mới",
  sourceLogoText: "GenK",
  sourceUrl:
    "https://genk.vn/tung-ban-cap-nhat-cho-claude-code-anthropic-vo-tinh-tiet-lo-hon-500000-dong-code-trong-ma-nguon-165260401104235518.chn",
  publishedAt: "2026-04-01T10:13:00+07:00",
  timestampLabel: "01/04/2026",
  category: "An ninh mạng & AI",
  categoryColor: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  readTime: "5 phút đọc",
  thumbnail:
    "https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2026/4/1/heubw45wqaa3vrl-101913-1775014635069-17750146367921810129269.jpeg",
  screenshotUrl: "",
  author: "Nguyễn Hải (Theo Phụ nữ mới)",
  tags: [
    "Anthropic",
    "Claude Code",
    "Lộ mã nguồn",
    "Sigrid Jin",
    "claw-code",
    "GitHub",
    "Capybara",
    "Undercover Mode",
    "An ninh mạng",
  ],
  importance: "featured",
  content: [
    {
      type: "image",
      src: "https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2026/4/1/heubw45wqaa3vrl-101913-1775014635069-17750146367921810129269.jpeg",
      caption:
        "Một sơ suất trong thao tác đóng gói bản phát hành đã làm mã nguồn sản phẩm cốt lõi của Anthropic bị tiết lộ cho công chúng.",
    },
    {
      type: "paragraph",
      text: "Điều thú vị là không lâu sau đó, toàn bộ mã nguồn này đã được một coder viết lại bằng Python và đẩy lên GitHub mà Anthropic không thể làm gì được.",
    },
    {
      type: "paragraph",
      text: 'Anthropic vừa gặp phải một sự cố bảo mật nghiêm trọng khi vô tình để lộ toàn bộ mã nguồn của Claude Code - công cụ lập trình AI phổ biến nhất của hãng. Đây là lần rò rỉ thứ hai trong vòng chưa đầy hơn một năm, làm dấy lên câu hỏi nghiêm túc về an ninh vận hành tại một công ty tự định vị là "phòng thí nghiệm AI ưu tiên an toàn".',
    },
    {
      type: "paragraph",
      text: "Sự việc xảy ra vào lúc 4 giờ sáng khi Anthropic đẩy một bản cập nhật thường lệ cho Claude Code. Một file debugging vô tình được đóng gói bên trong và tải lên registry công khai - nơi các lập trình viên tải xuống và cập nhật gói phần mềm.",
    },
    {
      type: "paragraph",
      text: "File này nhanh chóng được phát hiện bởi Chaofan Shou, trỏ đến một kho lưu trữ nén trên cloud storage của chính Anthropic chứa toàn bộ mã nguồn với gần 2.000 file và 512.000 dòng code. Trong vòng vài giờ, codebase đã được sao chép và mổ xẻ khắp GitHub, nhanh chóng tích lũy hàng nghìn star.",
    },
    {
      type: "quote",
      text: "“Sáng nay, một bản phát hành Claude Code đã bao gồm một số mã nguồn nội bộ. Không có dữ liệu khách hàng nhạy cảm hoặc thông tin đăng nhập nào liên quan hoặc bị lộ. Đây là vấn đề đóng gói bản phát hành do lỗi con người, không phải là vi phạm bảo mật. Chúng tôi đang triển khai các biện pháp để ngăn chặn điều này xảy ra nữa.” — Người phát ngôn Anthropic",
    },
    {
      type: "heading",
      text: "Bật mí các tính năng chưa ra mắt và mô hình bí mật Capybara",
    },
    {
      type: "paragraph",
      text: 'Mã code bị rò rỉ chứa hàng chục feature flags cho các tính năng dường như đã được xây dựng hoàn chỉnh nhưng chưa phát hành. Trong đó bao gồm khả năng để Claude xem lại những gì đã làm trong phiên làm việc gần nhất để nghiên cứu cải tiến trong tương lai trong khi chuyển kiến thức qua các cuộc hội thoại. Ngoài ra còn có "persistent assistant" chạy ở chế độ nền cho phép Claude Code tiếp tục làm việc ngay cả khi người dùng nhàn rỗi, và khả năng điều khiển từ xa cho phép người dùng điều khiển Claude từ điện thoại hoặc trình duyệt khác.',
    },
    {
      type: "paragraph",
      text: "Điều mới mẻ là lộ trình phát triển: một bức tranh rõ ràng về cách Anthropic đang xây dựng hướng tới các nhiệm vụ tự động dài hơn, bộ nhớ sâu hơn và cộng tác đa tác nhân. Những loại cập nhật này có thể là một lợi ích lớn cho chiến lược doanh nghiệp của Anthropic - động lực cốt lõi cho chiến lược doanh thu của hãng khi phòng thí nghiệm AI này chuẩn bị lên sàn.",
    },
    {
      type: "heading",
      text: "Cuộc chạy đua viết lại code bằng Python trước bình minh",
    },
    {
      type: "image",
      src: "https://media.phunumoi.net.vn/files/tuanlehoang/2026/04/01/hexcoxpayaepgrr-101915.jpeg",
      caption:
        "Một coder đã viết lại toàn bộ mã nguồn này bằng Python và đẩy lên GitHub mà Anthropic không thể làm gì được.",
    },
    {
      type: "paragraph",
      text: "Nhưng phần kịch tính nhất của câu chuyện nằm ở những gì xảy ra tiếp theo. Một lập trình viên Hàn Quốc tên Sigrid Jin - người dùng Claude Code tích cực nhất thế giới với 25 tỷ token được sử dụng năm ngoái theo Wall Street Journal - đã thức dậy lúc 4 giờ sáng khi điện thoại reo liên tục.",
    },
    {
      type: "paragraph",
      text: "Bạn gái anh lo lắng rằng anh có thể bị kiện chỉ vì có code đó trên máy. Vì vậy, anh làm điều mà bất kỳ kỹ sư nào cũng sẽ làm: viết lại toàn bộ bằng Python từ đầu trước khi mặt trời mọc. Anh gọi nó là claw-code và đẩy lên GitHub.",
    },
    {
      type: "paragraph",
      text: "Một bản viết lại bằng Python là một tác phẩm sáng tạo mới. DMCA không thể đụng đến nó. Repo đạt 30.000 star nhanh hơn bất kỳ kho lưu trữ nào trong lịch sử GitHub. Nhưng anh vẫn chưa hài lòng. Anh bắt đầu viết lại nó một lần nữa bằng Rust.",
    },
    {
      type: "paragraph",
      text: 'Hiện tại nó có khoảng 52.000 star và 56.000 fork. Có người đã sao chép bản gốc lên một nền tảng phi tập trung với một thông điệp: "sẽ không bao giờ bị gỡ xuống." Code hiện đã vĩnh viễn. Anthropic không thể lấy lại được nữa.',
    },
    {
      type: "heading",
      text: "Tác động sâu rộng và sự trớ trêu của tính năng Undercover Mode",
    },
    {
      type: "image",
      src: "https://media.phunumoi.net.vn/files/tuanlehoang/2026/04/01/hewphyrbmaafasw-101913.jpg",
      caption:
        "Điều trớ trêu là chính Claude mới được trang bị tính năng Undercover Mode để ngăn AI làm rò rỉ bí mật nội bộ, nhưng hóa ra con người vẫn là nhân tố mắc sai lầm nghiêm trọng nhất.",
    },
    {
      type: "paragraph",
      text: "Sự rò rỉ tiềm ẩn cho phép đối thủ cạnh tranh đảo ngược kỹ thuật cách hoạt động của agentic harness của Claude Code và sử dụng kiến thức đó để cải thiện sản phẩm của riêng họ. Một số nhà phát triển cũng có thể tìm cách tạo phiên bản mã nguồn mở của agentic harness của Claude Code dựa trên code bị rò rỉ.",
    },
    {
      type: "paragraph",
      text: 'Code bị rò rỉ cũng cung cấp thêm bằng chứng rằng Anthropic có một mô hình mới với tên nội bộ Capybara mà công ty đang tích cực chuẩn bị ra mắt, theo Roy Paz, một nhà nghiên cứu bảo mật AI cấp cao tại LayerX Security. Paz cho biết có khả năng công ty có thể phát hành phiên bản "nhanh" và "chậm" của mô hình mới, dựa trên cửa sổ ngữ cảnh lớn hơn rõ ràng của mô hình, và nó sẽ là mô hình tiên tiến nhất trên thị trường.',
    },
    {
      type: "paragraph",
      text: 'Sự rò rỉ xảy ra chỉ vài ngày sau khi Fortune báo cáo rằng công ty đã vô tình công khai gần 3.000 file, bao gồm một bài blog nháp chi tiết về một mô hình mạnh mẽ sắp tới mang rủi ro an ninh mạng chưa từng có - được biết đến nội bộ là "Mythos" và "Capybara".',
    },
    {
      type: "paragraph",
      text: "Anthropic xây dựng một hệ thống gọi là Undercover Mode đặc biệt để ngăn Claude rò rỉ bí mật nội bộ. Rồi chính họ lại tự rò rỉ mã nguồn của mình. Bạn không thể bịa chuyện này được.",
    },
    {
      type: "paragraph",
      text: "Sự rò rỉ sẽ không đánh chìm Anthropic, nhưng nó trao cho mọi đối thủ cạnh tranh một khóa học kỹ thuật miễn phí về cách xây dựng một AI coding agent cấp độ sản xuất và những công cụ nào cần tập trung vào. Và công ty tự định vị mình là phòng thí nghiệm AI ưu tiên an toàn vừa tự tay gửi mã nguồn của mình ra công chúng - đây là sai lầm bảo mật lớn thứ hai của Anthropic chỉ trong vòng một tuần.",
    },
  ],
};
