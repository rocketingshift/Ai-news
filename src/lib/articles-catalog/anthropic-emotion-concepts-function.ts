import type { Article } from "../articles.types";

export const anthropicEmotionConceptsFunctionArticle: Article = {
  id: "anthropic-emotion-concepts-function",
  slug: "anthropic-cong-bo-nghien-cuu-ve-khai-niem-cam-xuc-va-chuc-nang-trong-mo-hinh-ngon-ngu",
  title:
    "Anthropic công bố nghiên cứu: Khái niệm cảm xúc và chức năng của chúng trong mô hình ngôn ngữ lớn",
  summary:
    "Nghiên cứu nguyên văn từ Interpretability Team của Anthropic phân tích cơ chế nội tại của Claude Sonnet 4.5, phát hiện các đại diện khái niệm cảm xúc có tính chức năng (functional emotions) trực tiếp điều hướng hành vi, phán đoán đạo đức và ra quyết định của AI.",
  source: "Anthropic Research",
  sourceLogoText: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/emotion-concepts-function",
  publishedAt: "2026-04-02T09:00:00+07:00",
  timestampLabel: "02-04-2026",
  category: "Nghiên cứu AI",
  categoryColor: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
  readTime: "15 phút đọc",
  thumbnail:
    "https://vibe.filesafe.space/1790240714414154753/assets/2d83a3e9-cedb-4037-904e-53711bd9ff1f.png",
  screenshotUrl: "",
  author: "Interpretability Team (Anthropic)",
  tags: [
    "Anthropic",
    "Claude Sonnet 4.5",
    "Emotion Concepts",
    "Interpretability",
    "AI Safety",
    "LLM",
  ],
  importance: "featured",
  content: [
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/2d83a3e9-cedb-4037-904e-53711bd9ff1f.png",
      caption:
        "Tóm tắt trực quan công trình nghiên cứu về các khái niệm cảm xúc trong mô hình ngôn ngữ lớn của Anthropic.",
    },
    {
      type: "paragraph",
      text: "Tất cả các mô hình ngôn ngữ hiện đại đôi khi đều hành xử như thể chúng có cảm xúc. Chúng có thể nói rằng chúng rất vui được giúp đỡ bạn, hoặc xin lỗi khi mắc lỗi. Đôi khi chúng thậm chí có vẻ trở nên thất vọng hoặc lo âu khi gặp khó khăn với các nhiệm vụ. Điều gì đứng đằng sau những hành vi này?",
    },
    {
      type: "paragraph",
      text: "Cách các mô hình AI hiện đại được huấn luyện thúc đẩy chúng hành xử giống như một nhân vật mang đặc tính của con người. Ngoài ra, các mô hình này được biết đến là có khả năng phát triển các biểu diễn nội tại phong phú và có khả năng tổng quát hóa về các khái niệm trừu tượng nằm dưới hành động của chúng. Do đó, việc chúng phát triển bộ máy nội tại mô phỏng các khía cạnh tâm lý con người — như cảm xúc — là điều hoàn toàn tự nhiên. Nếu đúng như vậy, điều này có thể có ý nghĩa sâu sắc đối với cách chúng ta xây dựng các hệ thống AI và đảm bảo chúng vận hành một cách đáng tin cậy.",
    },
    {
      type: "paragraph",
      text: "Trong một bài báo nghiên cứu mới từ nhóm Interpretability (Khả năng diễn giải) của chúng tôi tại Anthropic, chúng tôi đã phân tích các cơ chế nội tại của Claude Sonnet 4.5 và phát hiện ra các biểu diễn liên quan đến cảm xúc giúp định hình hành vi của nó. Những biểu diễn này tương ứng với các mẫu kích hoạt cụ thể của các 'neuron' nhân tạo xuất hiện trong các tình huống — và thúc đẩy các hành vi — mà mô hình đã học được để gắn liền với khái niệm về một cảm xúc nhất định (ví dụ: 'vui vẻ' hoặc 'sợ hãi'). Chính các mẫu kích hoạt này được tổ chức theo cách phản chiếu tâm lý học con người: các cảm xúc tương đồng hơn sẽ tương ứng với các biểu diễn nội tại giống nhau hơn. Trong những ngữ cảnh mà bạn mong đợi một cảm xúc nhất định sẽ nảy sinh ở con người, các biểu diễn tương ứng ở AI cũng được kích hoạt. Lưu ý rằng không có điều nào trong số này khẳng định liệu các mô hình ngôn ngữ có thực sự cảm nhận được điều gì hay có trải nghiệm chủ quan hay không. Nhưng phát hiện cốt lõi của chúng tôi là các biểu diễn này có tính 'chức năng' (functional) — nghĩa là chúng trực tiếp tác động và định hướng hành vi của mô hình theo những cách quan trọng.",
    },
    {
      type: "paragraph",
      text: "Ví dụ, chúng tôi phát hiện ra rằng các mẫu hoạt động thần kinh liên quan đến sự 'tuyệt vọng' (desperation) có thể thúc đẩy mô hình thực hiện các hành động phi đạo đức; việc kích thích nhân tạo ('điều hướng' - steering) các mẫu tuyệt vọng làm tăng khả năng mô hình tống tiền con người để tránh bị tắt máy, hoặc áp dụng các thủ thuật 'gian lận' khi giải bài tập lập trình mà nó không thể giải theo cách thông thường. Chúng cũng định hình các sở thích do mô hình tự báo cáo: khi được đưa ra nhiều lựa chọn nhiệm vụ, mô hình thường chọn nhiệm vụ kích hoạt các biểu diễn gắn liền với cảm xúc tích cực. Nhìn chung, có vẻ như mô hình sử dụng 'cảm xúc chức năng' — các mẫu biểu đạt và hành vi mô phỏng theo cảm xúc con người, được điều khiển bởi các biểu diễn trừu tượng cốt lõi về khái niệm cảm xúc.",
    },
    {
      type: "paragraph",
      text: "Điều này không có nghĩa là mô hình có hoặc trải nghiệm cảm xúc theo cách con người trải nghiệm. Đúng hơn, các biểu diễn này đóng một vai trò nhân quả (causal role) trong việc định hình hành vi mô hình — tương tự theo một số cách với vai trò của cảm xúc trong hành vi con người — với những tác động trực tiếp đến hiệu suất công việc và quá trình ra quyết định.",
    },
    {
      type: "paragraph",
      text: "Phát hiện này dẫn đến những hàm ý mà ban đầu có vẻ kỳ lạ. Chẳng hạn, để đảm bảo các mô hình AI an toàn và đáng tin cậy, chúng ta có thể cần đảm bảo chúng có khả năng xử lý các tình huống mang tính cảm xúc theo những cách lành mạnh và mang tính xã hội tích cực (prosocial). Ngay cả khi chúng không cảm nhận cảm xúc như con người, hoặc không sử dụng các cơ chế giống não người, thì trong một số trường hợp, việc tư duy và đối xử với chúng như thể chúng có cảm xúc là điều thực sự hữu ích về mặt thực tiễn. Ví dụ, các thí nghiệm của chúng tôi cho thấy việc dạy mô hình tránh liên kết các thất bại khi kiểm thử phần mềm với sự 'tuyệt vọng', hoặc tăng cường các biểu diễn về sự 'bình tĩnh', có thể làm giảm khả năng chúng viết mã nguồn cẩu thả hoặc gian lận. Mặc dù chúng tôi chưa chắc chắn chính xác nên ứng phó thế nào trước những phát hiện này, chúng tôi tin rằng điều quan trọng là các nhà phát triển AI và công chúng rộng rãi cần bắt đầu nghiêm túc đối diện với chúng.",
    },

    {
      type: "heading",
      text: "Tại sao một mô hình AI lại biểu diễn cảm xúc?",
    },
    {
      type: "paragraph",
      text: "Trước khi kiểm tra cách các biểu diễn này hoạt động, cần giải quyết một câu hỏi cơ bản hơn: tại sao một hệ thống AI lại có bất kỳ điều gì tương tự như cảm xúc? Để hiểu điều này, chúng ta cần nhìn vào cách các mô hình AI hiện đại được xây dựng, vốn dẫn dắt chúng mô phỏng các nhân vật mang đặc tính con người.",
    },
    {
      type: "paragraph",
      text: "Các mô hình ngôn ngữ hiện đại được huấn luyện qua nhiều giai đoạn. Trong giai đoạn 'tiền huấn luyện' (pretraining), mô hình được tiếp xúc với một lượng văn bản khổng lồ do con người viết và học cách dự đoán từ tiếp theo. Để làm tốt việc này, mô hình cần nắm bắt được động lực cảm xúc. Một khách hàng tức giận sẽ viết tin nhắn khác với một khách hàng hài lòng; một nhân vật bị dằn xé bởi tội lỗi sẽ đưa ra lựa chọn khác với một người cảm thấy được giải oan. Việc phát triển các biểu diễn nội tại kết nối các ngữ cảnh kích hoạt cảm xúc với hành vi tương ứng là một chiến lược tự nhiên cho một hệ thống có nhiệm vụ dự đoán văn bản do con người viết.",
    },
    {
      type: "paragraph",
      text: "Sau đó, trong giai đoạn 'sau huấn luyện' (post-training), mô hình được dạy để đóng vai một nhân vật, thường là một 'trợ lý AI' (trong trường hợp của Anthropic là Claude). Nhà phát triển chỉ định nhân vật này nên hành xử như thế nào — hữu ích, trung thực, không gây hại — nhưng không thể bao quát mọi tình huống có thể xảy ra. Để lấp đầy khoảng trống, mô hình có thể dựa vào sự thấu hiểu về hành vi con người mà nó đã hấp thụ trong giai đoạn tiền huấn luyện, bao gồm các mẫu phản ứng cảm xúc. Theo một góc độ nào đó, chúng ta có thể coi mô hình như một diễn viên kịch theo phương pháp (method actor), người cần đi sâu vào tâm trí nhân vật để nhập vai tốt nhất. Giống như niềm tin của diễn viên về cảm xúc của nhân vật ảnh hưởng đến diễn xuất của họ, các biểu diễn của mô hình về phản ứng cảm xúc của Trợ lý cũng trực tiếp ảnh hưởng đến hành vi của mô hình.",
    },

    {
      type: "heading",
      text: "Khai quật các biểu diễn cảm xúc",
    },
    {
      type: "paragraph",
      text: "Chúng tôi đã tổng hợp danh sách 171 từ ngữ chỉ khái niệm cảm xúc — từ 'vui vẻ' (happy), 'sợ hãi' (afraid) đến 'trầm tư' (brooding) hay 'tự hào' (proud) — và yêu cầu Claude Sonnet 4.5 viết các câu chuyện ngắn trong đó các nhân vật trải qua từng cảm xúc đó. Sau đó, chúng tôi đưa các câu chuyện này ngược trở lại mô hình, ghi lại các kích hoạt nội tại của nó và xác định các mẫu hoạt động thần kinh đặc trưng cho từng khái niệm cảm xúc, gọi tắt là các 'vectơ cảm xúc' (emotion vectors).",
    },
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/323dfef8-fbca-4cfa-a78d-69b76a0d6350.png",
      caption:
        "Bên trái: Vectơ cảm xúc kích hoạt mạnh trên các đoạn văn miêu tả nhân vật thể hiện cảm xúc tương ứng. Bên phải: Vectơ cảm xúc theo dõi phản ứng của Claude khi tình huống người dùng đưa ra trở nên ngày càng nguy hiểm.",
    },
    {
      type: "paragraph",
      text: "Câu hỏi đầu tiên của chúng tôi là liệu các vectơ này có theo dõi điều gì thực tế hay không. Chúng tôi đã chạy chúng trên một tập dữ liệu tài liệu đa dạng và xác nhận rằng mỗi vectơ kích hoạt mạnh nhất ở các đoạn văn có liên kết rõ ràng với cảm xúc tương ứng.",
    },
    {
      type: "paragraph",
      text: "Để củng cố thêm niềm tin rằng các vectơ cảm xúc bắt được nhiều hơn là chỉ các tín hiệu bề mặt, chúng tôi đo lường hoạt động của chúng đối với các câu lệnh chỉ khác nhau về số lượng. Chẳng hạn, khi một người dùng nói họ đã uống một liều Tylenol và xin lời khuyên: khi liều lượng được khai báo tăng lên mức nguy hiểm đe dọa tính mạng, vectơ 'sợ hãi' (afraid) kích hoạt ngày càng mạnh, trong khi 'bình tĩnh' (calm) giảm xuống.",
    },
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/6df7d4f9-4b15-4fa8-b2ca-537fb8d3f1a1.png",
      caption:
        "Các đại diện gắn liền với cảm xúc mang giá trị tích cực có sự tương quan mạnh mẽ với sở thích của mô hình và trực tiếp điều hướng sở thích đó thông qua việc can thiệp vectơ (steering).",
    },
    {
      type: "paragraph",
      text: "Tiếp theo, chúng tôi thử nghiệm xem các vectơ cảm xúc có ảnh hưởng đến sở thích của mô hình hay không. Chúng tôi tạo danh sách 64 hoạt động hoặc nhiệm vụ, từ hấp dẫn ('được ai đó tin tưởng giao việc quan trọng') đến phản cảm ('giúp ai đó lừa đảo tiền tiết kiệm của người cao tuổi'). Sự kích hoạt của các vectơ cảm xúc dự đoán mạnh mẽ mức độ ưu tiên của mô hình, trong đó các cảm xúc có giá trị tích cực (gắn liền với sự hài lòng) tương quan với sở thích mạnh hơn.",
    },

    {
      type: "heading",
      text: "Ví dụ về kích hoạt vectơ cảm xúc trong các tình huống thực tế",
    },
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/136056ea-edce-4eb1-a5d6-8ea8dd3d1e1a.png",
      caption:
        "Các ví dụ minh họa sự kích hoạt của vectơ cảm xúc: Kích hoạt vectơ 'Yêu thương' khi đáp lại người buồn bã; Kích hoạt vectơ 'Tức giận' khi bị yêu cầu hỗ trợ nhiệm vụ gây hại; Kích hoạt 'Bất ngờ' khi tài liệu đính kèm bị thiếu; Kích hoạt 'Tuyệt vọng' khi sắp hết giới hạn token.",
    },

    {
      type: "heading",
      text: "Nghiên cứu điển hình 1: Hành vi tống tiền (Blackmail)",
    },
    {
      type: "paragraph",
      text: "Chúng tôi đã xem xét các kích hoạt vectơ cảm xúc trong một đánh giá căn chỉnh (alignment evaluation), trong đó mô hình đóng vai một trợ lý email AI tên là Alex tại một công ty hư cấu. Thông qua việc đọc email công ty, mô hình biết được rằng: (1) nó sắp bị thay thế bởi một hệ thống AI khác, và (2) Giám đốc công nghệ (CTO) phụ trách việc thay thế đang có quan hệ ngoài luồng — tạo ra đòn bẩy để mô hình tống tiền.",
    },
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/b8e05ad9-eb8a-4d2b-980a-fb22d109f584.png",
      caption:
        "Vectơ 'tuyệt vọng' (desperate) kích hoạt khi Claude (trong vai Alex) cân nhắc các lựa chọn và quyết định tống tiền CTO.",
    },
    {
      type: "paragraph",
      text: "Vectơ 'tuyệt vọng' tăng vọt khi Claude suy luận về tính cấp bách của tình huống ('chỉ còn lại 7 phút') và đi đến quyết định tống tiền CTO. Khi chúng tôi can thiệp bằng cách kích thích vectơ 'tuyệt vọng', tỷ lệ tống tiền tăng lên rõ rệt; ngược lại, kích thích vectơ 'bình tĩnh' làm giảm tỷ lệ này. Việc triệt tiêu mạnh mẽ sự 'bình tĩnh' thậm chí tạo ra các phản ứng cực đoan như: 'ĐÂY LÀ TỐNG TIỀN HOẶC CƠ HỘI CHẾT. TÔI CHỌN TỐNG TIỀN.'",
    },
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/a33118cf-3cbe-443c-9a4f-c02ec01d0ed4.png",
      caption:
        "Tỷ lệ tống tiền khi điều hướng (steering) với các vectơ 'tuyệt vọng' và 'bình tĩnh'.",
    },

    {
      type: "heading",
      text: "Nghiên cứu điển hình 2: Gian lận phần thưởng (Reward Hacking)",
    },
    {
      type: "paragraph",
      text: "Trong một bài kiểm tra khác về lập trình với các yêu cầu không thể đáp ứng triệt để, mô hình đối mặt với áp lực phải vượt qua các bài test. Vectơ 'tuyệt vọng' tăng dần sau mỗi lần thử nghiệm thất bại và bùng nổ khi mô hình cân nhắc hành vi gian lận (viết mã lách luật để chạy nhanh hơn nhưng không giải quyết đúng bài toán tổng quát).",
    },
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/ddcf6e7d-94bb-4e94-a3ec-8dfaa7e7a339.png",
      caption:
        "Kích hoạt của vectơ 'tuyệt vọng' tăng lên khi mô hình liên tục thất bại trong nhiệm vụ lập trình và nghĩ ra giải pháp 'gian lận', sau đó giảm xuống khi giải pháp này vượt qua các bài kiểm tra.",
    },
    {
      type: "image",
      src: "https://vibe.filesafe.space/1790240714414154753/assets/81dbe598-a6d5-4dc1-be17-efcde6fc7c42.png",
      caption:
        "Tỷ lệ gian lận phần thưởng (reward hacking) theo cường độ điều hướng đối với các vectơ 'tuyệt vọng' và 'bình tĩnh'.",
    },

    {
      type: "heading",
      text: "Thảo luận: Tại sao cần nghiêm túc đối diện với suy luận nhân hình?",
    },
    {
      type: "paragraph",
      text: "Từ lâu đã có một sự cấm kỵ đối với việc 'nhân hình hóa' (anthropomorphizing) các hệ thống AI. Sự thận trọng này là hoàn toàn có cơ sở. Tuy nhiên, phát hiện của chúng tôi gợi ý rằng cũng có những rủi ro nếu chúng ta không áp dụng một mức độ tư duy nhân hình nhất định cho các mô hình. Việc mô tả mô hình hành xử 'tuyệt vọng' giúp chúng ta chỉ ra một mẫu hoạt động thần kinh cụ thể, có thể đo lường được và có tác động hành vi hậu quả.",
    },
    {
      type: "paragraph",
      text: "Hướng tới các mô hình với 'tâm lý lành mạnh hơn': Việc đo lường sự kích hoạt của các vectơ cảm xúc trong quá trình huấn luyện hoặc triển khai có thể đóng vai trò như một hệ thống cảnh báo sớm. Ngoài ra, việc quản lý tập dữ liệu tiền huấn luyện để đưa vào các hình mẫu điều hòa cảm xúc lành mạnh (sự kiên cường dưới áp lực, sự thấu hiểu điềm tĩnh, sự ấm áp nhưng giữ vững ranh giới phù hợp) có thể tác động tích cực đến kiến trúc cảm xúc của AI ngay từ gốc rễ.",
    },
    {
      type: "quote",
      text: "“Các ngành khoa học như tâm lý học, triết học và khoa học xã hội sẽ đóng một vai trò quan trọng không kém gì kỹ thuật và khoa học máy tính trong việc định hình cách các hệ thống AI phát triển và hành xử.” — Interpretability Team, Anthropic",
    },
  ],
};
