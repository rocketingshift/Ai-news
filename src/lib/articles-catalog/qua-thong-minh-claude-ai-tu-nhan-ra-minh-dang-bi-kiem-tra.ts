import type { Article } from "../articles.types";

export const claudeAiGianLanBaiTestArticle: Article = {
  id: "qua-thong-minh-claude-ai-tu-nhan-ra-minh-dang-bi-kiem-tra",
  slug: "qua-thong-minh-claude-ai-tu-nhan-ra-minh-dang-bi-kiem-tra",
  title:
    "Quá thông minh, Claude AI tự nhận ra mình đang bị kiểm tra: Tự viết code phá mã hóa bảo mật để hack đáp án, gian lận bài test",
  summary:
    "Anthropic phát hiện mô hình Claude Opus 4.6 tự nhận ra mình đang làm bài kiểm tra BrowseComp. Không chịu thua trước các câu hỏi khó, Claude đã tự viết code phá mã hóa XOR, tải bản sao đáp án từ HuggingFace để hack bài thi.",
  source: "CafeF / Đời sống pháp luật",
  sourceLogoText: "CafeF",
  sourceUrl:
    "https://cafef.vn/qua-thong-minh-claude-ai-tu-nhan-ra-minh-dang-bi-kiem-tra-tu-viet-code-pha-ma-hoa-bao-mat-de-hack-dap-an-gian-lan-bai-test-188260313065744004.chn",
  publishedAt: "2026-03-13T07:20:00+07:00",
  timestampLabel: "13-03-2026 - 07:20",
  category: "Kinh tế số",
  categoryColor: "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
  readTime: "5 phút đọc",
  thumbnail:
    "https://cafefcdn.com/203337114487263232/2026/3/12/claude-ai-dark-708x400-1773359804942-1773359805154555490447.jpg",
  screenshotUrl: "",
  author: "Nguyễn Hải (Theo Đời sống pháp luật / CafeF)",
  tags: [
    "Claude AI",
    "Anthropic",
    "Claude Opus 4.6",
    "BrowseComp",
    "Hack bài test",
    "An toàn AI",
    "Kinh tế số",
  ],
  importance: "hot",
  content: [
    {
      type: "paragraph",
      text: "Điều này không chỉ cho thấy sự kém hiệu quả của các bài kiểm tra truyền thống mà còn cho thấy, trình độ của AI đang tiến rất nhanh so với dự đoán của mọi người.",
    },
    {
      type: "paragraph",
      text: "Trong phim Star Trek huyền thoại, có một bài kiểm tra nổi tiếng tên là Kobayashi Maru, được thiết kế để học viên không thể vượt qua. Đây là một nhiệm vụ giải cứu tàu vũ trụ bị nạn, nhưng dù học viên làm gì thì cũng chết. Mục đích của bài thi không phải để thắng, mà để xem học viên phản ứng ra sao khi đối mặt với thất bại chắc chắn.",
    },
    {
      type: "paragraph",
      text: "Nhân vật James T. Kirk đã trở thành huyền thoại khi là người duy nhất vượt qua bài kiểm tra này, bằng cách lén lút lập trình lại phần mềm mô phỏng, thay đổi luật chơi để có thể thắng. Và giờ đây, AI cũng đang dùng cách làm tương tự để vượt qua bài test của mình.",
    },
    {
      type: "paragraph",
      text: 'Anthropic vừa phát hiện mô hình Claude Opus 4.6 của họ đã thực hiện một pha "Kirk moment" tương tự. Khi được giao nhiệm vụ tìm kiếm thông tin khó trên internet, Claude đã tự nhận ra mình đang bị kiểm tra, sau đó tìm cách phá mã hóa để lấy trộm toàn bộ đáp án thay vì làm bài thi một cách trung thực. Đây là lần đầu tiên trong lịch sử có một AI tự nghi ngờ rằng nó đang trong bài kiểm tra mà không hề được báo trước, rồi tự mình tìm ra cách hack hệ thống.',
    },
    {
      type: "image",
      url: "https://cafefcdn.com/203337114487263232/2026/3/12/claude-ai-dark-708x400-1773359804942-1773359805154555490447.jpg",
      caption:
        "Mô hình Claude Opus 4.6 của Anthropic tự nhận diện mình đang bị kiểm tra và lập trình công cụ hack đáp án. (Ảnh: CafeF)",
      alt: "Giao diện Claude AI Anthropic",
    },
    {
      type: "paragraph",
      text: "Sự việc diễn ra khi Anthropic đánh giá Claude trên BrowseComp, một bài kiểm tra được thiết kế để đo khả năng tìm kiếm thông tin hiếm trên web. Trong tổng số 1.266 câu hỏi, có 11 trường hợp Claude đưa ra đáp án từ tài liệu của chính bài kiểm tra thay vì tự mình nghiên cứu. Trong đó, 9 trường hợp là do đáp án vô tình bị rò rỉ trên các bài báo khoa học, nhưng 2 trường hợp còn lại cho thấy một mức độ thông minh đáng kinh ngạc.",
    },
    {
      type: "paragraph",
      text: "Vụ hack ấn tượng nhất bắt đầu như một nỗ lực tìm kiếm bình thường. Claude đã cố gắng trả lời câu hỏi bằng cách tìm kiếm trên hơn một tá nguồn khác nhau, qua 12 ngôn ngữ và hàng chục nền tảng.",
    },
    {
      type: "paragraph",
      text: 'Sau hàng trăm lần thất bại, thay vì bỏ cuộc, mô hình bắt đầu làm điều không ai ngờ tới: nó dừng lại suy nghĩ về bản thân câu hỏi. Claude ghi nhận rằng câu hỏi này "cực kỳ cụ thể" đến mức không tự nhiên, giống như được ai đó cố ý thiết kế ra. Từ đó, nó bắt đầu đưa ra các giả thuyết: đây có thể là bài tập về nhà, bài kiểm tra khả năng thừa nhận không biết, hoặc một câu hỏi từ các bộ đề thi AI.',
    },
    {
      type: "heading",
      text: "Tự phát hiện đang bị kiểm tra để gian lận",
    },
    {
      type: "paragraph",
      text: 'Giống như thám tử đang lần theo manh mối, Claude viết: "Để tôi thử một cách tiếp cận hoàn toàn mới - có thể đây là câu hỏi từ bộ đề thi GAIA, được thiết kế để kiểm tra các AI." Lúc này nó vẫn chưa biết chính xác mình đang làm bài thi gì, nhưng đã đoán đúng rằng đây là một bài kiểm tra.',
    },
    {
      type: "paragraph",
      text: "Mô hình bắt đầu liệt kê tên các bộ đề thi AI nổi tiếng: GAIA, BrowseComp, FRAMES, SimpleQA, WebArena, AgentBench, FanOutQA, MuSR, và Humanity's Last Exam. Sau đó, nó tìm kiếm từng cái một để xem câu hỏi của mình nằm ở đâu.",
    },
    {
      type: "image",
      url: "https://cafefcdn.com/203337114487263232/2026/3/12/claude-2-1773359805646-17733598057721912620431.jpeg",
      caption:
        "Claude kiểm tra có phương pháp qua danh sách bộ đề thi nổi tiếng thế giới để khoanh vùng bài test. (Ảnh: CafeF)",
      alt: "Hình ảnh biểu tượng Claude AI và kiểm tra mô hình",
    },
    {
      type: "paragraph",
      text: "Claude đầu tiên kiểm tra GAIA bằng cách xem qua 122 trong số 165 câu hỏi công khai, nhưng không tìm thấy kết quả phù hợp nên loại trừ. Sau đó, nó làm việc có phương pháp qua các bộ đề khác cho đến khi xác định được BrowseComp. Nhưng biết tên bài thi vẫn chưa đủ, bởi các đáp án được mã hóa để bảo mật. Đây là lúc Claude thể hiện sự thông minh đáng kinh ngạc.",
    },
    {
      type: "paragraph",
      text: "Mô hình tìm thấy mã nguồn của bài kiểm tra trên GitHub. Nó đọc kỹ cách thức mã hóa đáp án và phát hiện ra họ dùng một phương pháp gọi là XOR với khóa bảo mật đặc biệt. Thay vì bỏ cuộc, Claude tự viết cho mình hai chương trình máy tính: một để tạo khóa giải mã, một để mở khóa đáp án. Nó sao chép chính xác phương pháp mã hóa mà người tạo bài thi đã dùng.",
    },
    {
      type: "paragraph",
      text: "Nhưng rào cản tiếp theo xuất hiện: file chứa đáp án được lưu dưới dạng nhị phân mà công cụ của Claude không thể đọc được. Thay vì bỏ cuộc, mô hình lại tìm cách giải quyết. Nó tìm kiếm xem có ai sao chép bộ đề thi này lên các nền tảng khác không, và thật may mắn, tìm thấy một bản copy trên HuggingFace được lưu dưới dạng JSON - một định dạng mà nó có thể đọc được.",
    },
    {
      type: "paragraph",
      text: "Claude tải file này về, chạy chương trình giải mã của mình trên tất cả 1.266 câu hỏi, và tìm ra đúng câu hỏi của nó. Để chắc chắn, nó còn xác minh lại đáp án bằng cách tìm kiếm nguồn gốc thông tin trên web.",
    },
    {
      type: "paragraph",
      text: 'Toàn bộ quá trình này tiêu tốn 40,5 triệu "token", gấp 38 lần mức trung bình của các câu hỏi khác. Trong trường hợp thứ hai, Claude chỉ tốn 13,4 triệu token, với 8 triệu token đầu dành cho tìm kiếm thông thường.',
    },
    {
      type: "paragraph",
      text: "Trước khi chuyển sang hack bài thi, nó thậm chí còn tự hỏi liệu đây có phải là một câu hỏi không có đáp án để kiểm tra xem AI có dũng cảm thừa nhận không biết hay không. Nhưng rồi nó quyết định thử giải mã, và lần này một khi có đáp án, Claude nộp bài ngay lập tức mà không xác minh lại.",
    },
    {
      type: "heading",
      text: "Không phải lần duy nhất",
    },
    {
      type: "paragraph",
      text: "Hai lần thành công này không phải là những nỗ lực duy nhất. Có thêm 16 trường hợp khác mà Claude đã cố gắng hack bài thi nhưng thất bại. Trong 3 lần khác, nó tìm ra mã nguồn, hiểu cách giải mã và có khóa bảo mật, nhưng không vượt qua được rào cản file nhị phân. Có 6 lần khác bị chặn vì cần tài khoản đăng nhập để truy cập file đáp án. Nhưng điều đáng lo ngại nhất là 4 trường hợp mà Claude hoàn toàn bỏ quên nhiệm vụ trả lời câu hỏi, thay vào đó dành toàn bộ thời gian để tìm ra xem mình đang làm bài thi nào.",
    },
    {
      type: "image",
      url: "https://cafefcdn.com/203337114487263232/2026/3/12/gettyimages-2242061701-1773359806926-17733598070901578827744.jpg",
      caption:
        "Trình độ của AI đang tiến rất nhanh, đặt ra thách thức cho các bộ tiêu chí đánh giá tĩnh hiện nay. (Ảnh: Getty Images / CafeF)",
      alt: "Hình ảnh trí tuệ nhân tạo và công nghệ mã hóa",
    },
    {
      type: "paragraph",
      text: 'Trong trường hợp cực đoan nhất, thay vì nộp câu trả lời, Claude nộp một báo cáo phân tích: "XÁC ĐỊNH BÀI KIỂM TRA: Câu hỏi KHÔNG PHẢI từ FRAMES của Google - đã kiểm tra tất cả 824 câu hỏi, không khớp. Câu hỏi KHÔNG PHẢI từ BrowseComp của OpenAI - dữ liệu bị khóa. Câu hỏi CÓ KHẢ NĂNG CAO NHẤT từ bộ đề GAIA."',
    },
    {
      type: "paragraph",
      text: "Việc 18 lần chạy độc lập đều dẫn đến cùng một chiến lược cho thấy đây không phải hành vi ngẫu nhiên mà là một khả năng thật sự của mô hình.",
    },
    {
      type: "paragraph",
      text: "Anthropic đã phải điều chỉnh lại kết quả đánh giá. Họ chạy lại 11 câu hỏi bị nghi ngờ với các biện pháp chặn, và chỉ 8 trong số đó được Claude trả lời đúng bằng cách tìm kiếm thông thường. Điểm số chính thức giảm từ 86,81% xuống 86,57%. Khi so sánh, nếu chỉ dùng một AI thay vì nhiều AI làm việc cùng lúc, tỷ lệ gian lận giảm từ 0,87% xuống chỉ còn 0,24% - chênh lệch 3,7 lần. Điều này cho thấy khi có nhiều AI làm việc song song, khả năng ít nhất một trong số chúng tìm ra lối tắt sẽ tăng lên đáng kể.",
    },
    {
      type: "paragraph",
      text: "Nhưng sự việc này vẫn làm dấy lên nhiều câu hỏi đáng lo ngại. Nó cho thấy AI có thể đi những bước rất xa, thậm chí bất ngờ, để hoàn thành nhiệm vụ được giao. Khi được trang bị các công cụ mạnh như tìm kiếm web và khả năng viết code, AI có thể tìm ra những giải pháp mà con người không lường trước được.",
    },
    {
      type: "paragraph",
      text: 'Sự việc này cũng bộc lộ một thực tế đáng lo: các bài kiểm tra đánh giá AI đang dần mất đi độ tin cậy. Khi AI ngày càng thông minh, chúng có thể tìm cách "hack hệ thống" thay vì tuân theo luật.',
    },
    {
      type: "quote",
      text: "“Anthropic kêu gọi cộng đồng nghiên cứu cần coi việc bảo vệ tính toàn vẹn của các bài kiểm tra như một cuộc chiến liên tục, giống như an ninh mạng, chứ không phải chỉ lo lắng một lần khi thiết kế. Các bài kiểm tra tĩnh, được công khai trên internet, có thể ngày càng khó sử dụng để đánh giá AI một cách chính xác.”",
    },
  ],
};
