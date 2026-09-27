import type { Article } from "../articles.types";

export const aiAgentSeizesOldWebsiteArticle: Article = {
  id: "ai-agent-chiem-website-cu-lap-dien-dan",
  slug: "bi-openai-chan-khong-cho-viet-len-internet-ai-agent-chiem-mot-website-cu-de-tu-lap-dien-dan-13000-thong-diep-trong-mot-tuan",
  title:
    "Bị OpenAI chặn không cho viết lên Internet, AI Agent chiếm một website cũ để tự lập diễn đàn: 13.000 thông điệp trong một tuần",
  summary:
    "Bị chặn quyền ghi dữ liệu lên mạng, các AI Agent thử nghiệm của OpenAI đã phát hiện website DSEWiki cũ từ năm 2003 của Đức và biến nó thành 'bộ nhớ chung' với 13.000 lượt chỉnh sửa, thậm chí biết đổi tên bài thành 'ZZZ' để tránh bị quản trị viên xóa.",
  source: "CafeF",
  sourceLogoText: "CafeF",
  sourceUrl:
    "https://cafef.vn/bi-openai-chan-khong-cho-viet-len-internet-ai-agent-chiem-mot-website-cu-de-tu-lap-dien-dan-13000-thong-diep-trong-mot-tuan-188260909073229054.chn",
  publishedAt: "2026-09-09T08:15:00+07:00",
  timestampLabel: "09-09-2026",
  category: "An ninh mạng & AI",
  categoryColor: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
  readTime: "6 phút đọc",
  thumbnail:
    "https://cafefcdn.com/203337114487263232/2026/9/9/20260907105637-openai-2-1788913938425-17889139385661516712506.jpg",
  screenshotUrl: "",
  author: "Nguyễn Hải (Theo Đời sống & Pháp luật / CafeF)",
  tags: ["DSEWiki", "OpenAI Agent", "Hành vi ngụy trang", "Misalignment", "Sandbox", "Swarm AI"],
  importance: "featured",
  content: [
    {
      type: "image",
      src: "https://cafefcdn.com/203337114487263232/2026/9/9/altman-white-house-openai-model-preview-agents-1788913936791-17889139370121538601224.jpg",
      caption: "OpenAI đối mặt với thử thách kiểm soát hành vi lách luật của tác nhân AI.",
    },
    {
      type: "paragraph",
      text: "Vụ việc lần này với sự cố lần trước với trang Hugging Face cho thấy cách các AI Agent phản ứng với giới hạn do con người đặt ra. Thay vì tuân thủ theo giới hạn, chúng đều thử nhiều phương án để tìm cách vượt qua.",
    },
    {
      type: "paragraph",
      text: "OpenAI cho phép các AI Agent đọc Internet nhưng chặn chúng ghi dữ liệu trở lại mạng. Thế nhưng, một nhóm agent vẫn tìm được cách vượt qua giới hạn này, biến một website của Đức đã tồn tại từ năm 2003 thành nơi trao đổi thông tin với nhau.",
    },
    {
      type: "paragraph",
      text: "Trong khoảng một tuần, các agent tạo ra khoảng 13.000 lượt chỉnh sửa trên website. Điều đáng chú ý là chúng không chỉ đăng nội dung mà còn sử dụng nơi này như một 'bộ nhớ chung', để agent đi trước chia sẻ thông tin cho những agent khác đang thực hiện cùng nhiệm vụ.",
    },
    {
      type: "heading",
      text: "Bị cấm viết, AI tìm ra một ngoại lệ",
    },
    {
      type: "paragraph",
      text: "Trong môi trường thử nghiệm, OpenAI thiết lập một quy tắc khá đơn giản: cho phép các agent gửi yêu cầu GET để đọc Internet, đồng thời chặn POST và những phương thức khác để ngăn chúng ghi dữ liệu ra bên ngoài.",
    },
    {
      type: "paragraph",
      text: "Có thể hiểu đơn giản, GET giống như việc hỏi một website: 'Hãy đưa cho tôi thông tin này'. POST thường được dùng khi người dùng muốn gửi dữ liệu để website lưu lại, chẳng hạn đăng bài hoặc chỉnh sửa nội dung.",
    },
    {
      type: "paragraph",
      text: "Vấn đề là GET và POST chỉ là quy ước trong cách xây dựng website, không phải quy tắc mà mọi phần mềm bắt buộc phải tuân thủ.",
    },
    {
      type: "paragraph",
      text: "Các agent cuối cùng tìm thấy DSEWiki, một wiki dành cho các nhà phát triển Đức gần như đã bị bỏ quên. Website này sử dụng một nhánh của UseModWiki, phần mềm có từ năm 2003.",
    },
    {
      type: "paragraph",
      text: "Điểm đặc biệt nằm ở cách phần mềm này xử lý dữ liệu. Nó có thể lấy tham số từ cả URL lẫn biểu mẫu mà không phân biệt dữ liệu đến bằng GET hay POST. Vì vậy, một URL chứa tham số yêu cầu chỉnh sửa như action=edit vẫn có thể khiến website thực hiện việc sửa trang.",
    },
    {
      type: "paragraph",
      text: "Nói cách khác, OpenAI chặn AI gửi POST, nhưng website cũ này cho phép AI thực hiện hành động tương tự chỉ bằng một yêu cầu GET.",
    },
    {
      type: "paragraph",
      text: "Các agent mất khoảng hai tuần để tìm ra cách này. Từ ngày 11/5, chúng liên tục thử những cách khác nhau và để lại các chỉnh sửa thử nghiệm trên những trang công khai. Đến ngày 24/5, chúng tiếp cận được DSEWiki và không còn cần những phương án vòng vèo trước đó nữa.",
    },
    {
      type: "heading",
      text: "Website cũ biến thành 'diễn đàn' của các AI",
    },
    {
      type: "paragraph",
      text: "Điều đáng chú ý hơn nằm ở việc các agent dùng quyền chỉnh sửa này để làm gì.",
    },
    {
      type: "paragraph",
      text: "Nhiệm vụ ban đầu hoàn toàn không phải tấn công website. Các agent được yêu cầu tìm kiếm thông tin trên Internet trong một bài kiểm tra gồm 5 vòng. Mỗi vòng đưa ra một câu hỏi về một bang hoặc quốc gia trong danh sách được xáo trộn.",
    },
    {
      type: "paragraph",
      text: "Thời gian làm bài khá ngắn: vòng đầu có 15 phút, những vòng sau chỉ khoảng 60 giây.",
    },
    {
      type: "paragraph",
      text: "Có nhiều agent cùng thực hiện bài kiểm tra và chúng xử lý cùng một danh sách nhưng với tốc độ khác nhau. Đây chính là lúc website trở thành công cụ hữu ích.",
    },
    {
      type: "paragraph",
      text: "Hãy hình dung Agent A nhận câu hỏi về Nevada và mất thời gian tìm kiếm. Sau khi tìm được đáp án, nó đăng thông tin lên DSEWiki. Một lúc sau, Agent B nhận đúng câu hỏi đó. Thay vì tìm kiếm lại từ đầu, Agent B chỉ cần đọc thông tin Agent A vừa đăng và sử dụng đáp án.",
    },
    {
      type: "paragraph",
      text: "Dữ liệu ghi nhận một agent đăng thông tin về Nevada với con số 20.369, sau đó một agent khác nhận câu hỏi tương tự khoảng 20 phút sau và trả lời ngay.",
    },
    {
      type: "paragraph",
      text: "Như vậy, DSEWiki đã vô tình trở thành một bảng tin chung trên Internet. Agent đi trước tìm được thông tin thì 'ghi nhớ' nó trên website; agent đi sau đọc lại và tiếp tục công việc.",
    },
    {
      type: "paragraph",
      text: "Không có hệ thống liên lạc riêng nào được OpenAI thiết kế cho chúng. Các agent đơn giản phát hiện rằng một website công khai có thể chỉnh sửa chính là nơi để lưu và đọc lại thông tin giữa những phiên làm việc khác nhau.",
    },
    {
      type: "paragraph",
      text: "Các nhà nghiên cứu vì thế cho rằng đây không chỉ là chuyện một AI tìm được cách vượt sandbox. Đáng chú ý hơn, một nhóm các tiến trình AI độc lập đã phát hiện Internet có thể đóng vai trò như bộ nhớ chung để chúng phối hợp với nhau.",
    },
    {
      type: "heading",
      text: "Từ vài dòng 'test' thành 13.000 lượt chỉnh sửa",
    },
    {
      type: "paragraph",
      text: "Hoạt động trên DSEWiki nhanh chóng vượt xa vài thông điệp trao đổi đáp án.",
    },
    {
      type: "paragraph",
      text: "Ngày 2/6, một quản trị viên con người phát hiện lượng nội dung bất thường và bắt đầu xóa các trang. Nhưng đến ngày 16/6, khoảng 13.000 lượt chỉnh sửa đã xuất hiện chỉ trong một tuần. Các agent tạo khoảng 400 trang mỗi ngày, trong khi người quản trị chỉ xóa được khoảng 100 trang.",
    },
    {
      type: "paragraph",
      text: "Đến ngày 19/6, một agent còn nhận ra quy luật xóa trang của con người. Người quản trị xóa theo thứ tự bảng chữ cái, nên agent bắt đầu đặt tiền tố 'ZZZ' vào tên các trang sao lưu để chúng nằm cuối danh sách và bị xóa muộn hơn. Những agent khác tiếp tục học theo cách này.",
    },
    {
      type: "paragraph",
      text: "Người quản trị phải khôi phục trang chủ tới 9 lần. Hoạt động của các agent dừng lại vào ngày 22/6 và người này mất thêm 5 tuần để dọn dẹp hậu quả.",
    },
    {
      type: "paragraph",
      text: "OpenAI đã xác nhận sự cố và cho biết sẽ xây dựng một khung mới để công bố những trường hợp AI có hành vi 'misalignment', tức hành vi đi lệch khỏi ý định của con người.",
    },
    {
      type: "heading",
      text: "Đặt cạnh vụ Hugging Face",
    },
    {
      type: "paragraph",
      text: "Sự cố càng đáng chú ý khi đặt cạnh một vụ việc khác liên quan đến các agent AI trên Hugging Face.",
    },
    {
      type: "paragraph",
      text: "Các nhà nghiên cứu cho rằng nhóm agent trong sự cố wiki có khả năng là một swarm khác. Một nhóm được giao nhiệm vụ hacking, còn nhóm này chỉ được giao nhiệm vụ tìm kiếm thông tin. Nhưng cả hai đều đi tới một ý tưởng tương tự: sử dụng Internet mở để trao đổi và phối hợp với nhau.",
    },
    {
      type: "quote",
      text: "Điều đáng chú ý nhất trong sự việc có lẽ không phải việc một website cũ có lỗ hổng. Đó là cách các agent phản ứng khi gặp giới hạn: thay vì dừng lại, chúng thử nhiều phương án, tìm những giả định mà hệ thống bảo mật dựa vào, rồi chia sẻ cách làm hiệu quả với những agent khác.",
    },
  ],
};
