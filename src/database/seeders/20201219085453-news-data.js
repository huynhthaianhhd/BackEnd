'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          id: '21cffaa2-a0b5-409a-b1fa-68b5a53375ba',
          title: 'Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn',
          thumbnail:
            'https://s3img.vcdn.vn/123phim/2021/01/e48d954f1188e26cb09f00e1c2a4c168.png',
          description:
            'Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!',
          userId: '6f807670-2175-46b9-87f5-23925f30405e',
          content: `<h1 style="text-align: center;"><strong>Khai trương rạp xịn gi&aacute; ngon </br> Chuẩn x&igrave;-tai S&agrave;i G&ograve;n</strong></h1>
          <p>Rạp Beta Cinemas Quang Trung tọa lạc tại số 645 Quang Trung, Phường 11, Quận G&ograve; Vấp, Th&agrave;nh phố Hồ Ch&iacute; Minh l&agrave; điểm đến l&yacute; tưởng cho c&aacute;c t&iacute;n đồ &ldquo;đam m&ecirc; điện ảnh nhưng vẫn kh&ocirc;ng qu&ecirc;n sống ảo&rdquo;.&nbsp; Kh&ocirc;ng chỉ nằm ở khu vực đ&ocirc;ng d&acirc;n cư v&agrave; gần trung t&acirc;m thương mại đầy đủ tiện nghi, rạp chiếu phim Beta Quang Trung c&ograve;n sở hữu thiết kế đẹp &ldquo;xỉu up xỉu down".</p>
          <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://s3img.vcdn.vn/123phim/2021/01/e48d954f1188e26cb09f00e1c2a4c168.png" alt="" width="720" /></p>
          <p>&Yacute; tưởng của rạp chiếu phim mới n&agrave;y l&agrave; phong c&aacute;ch Artistic Urban Lifestyle mang đậm &acirc;m hưởng của một S&agrave;i G&ograve;n năng động, trẻ trung, s&aacute;ng tạo v&agrave; nhiệt huyết. Phong c&aacute;ch Artistic Urban Lifestyle c&ograve;n kh&aacute; mới mẻ tại Việt Nam nhưng được dự đo&aacute;n sẽ &ldquo;lấy l&ograve;ng" giới trẻ S&agrave;i G&ograve;n nhờ những g&oacute;c thiết kế sắc sảo, kh&ocirc;ng gian hiện đại với gam m&agrave;u c&aacute; t&iacute;nh, t&iacute;n đồ điện ảnh khi đến đ&acirc;y sẽ c&oacute; cảm gi&aacute;c như lạc v&agrave;o một phim trường thực sự.</p>
          <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://s3img.vcdn.vn/123phim/2021/01/b429bcd802389b6c289cc0767e12226a.jpg" alt="" width="720" /></p>
          <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://s3img.vcdn.vn/123phim/2021/01/dd5ec1326c906d8709df18237a4017a1.jpg" alt="" width="720" /></p>
          <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://s3img.vcdn.vn/123phim/2021/01/22ed5e6e871962b8c0d1e7e29df43436.jpg" alt="" width="720" /></p>
          <p>Beta Cinemas Quang Trung c&oacute; 7 ph&ograve;ng chiếu tương đương hơn 1000 ghế ngồi. Rạp được trang bị hệ thống m&agrave;n chiếu, m&aacute;y chiếu hiện đại bậc nhất hiện nay theo ti&ecirc;u chuẩn Hollywood v&agrave; được nhập khẩu từ nước ngo&agrave;i 100%. Trong mỗi ph&ograve;ng chiếu đều được lắp đặt hệ thống &acirc;m thanh Dolby 7.1 v&agrave; hệ thống c&aacute;ch &acirc;m chuẩn quốc tế. C&aacute;c mọt phim c&oacute; thể y&ecirc;n t&acirc;m sẽ được thưởng thức những thước phim r&otilde; n&eacute;t nhất, với &acirc;m thanh v&agrave; hiệu ứng sống động nhất.</p>
          <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://s3img.vcdn.vn/123phim/2021/01/dfe1b2c5f2a81fbe4a2c69fd31199b95.jpg" alt="" width="720" /></p>`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '3dfd6a41-1b91-4b77-b344-099b8ef82b0d',
          title: 'BHD 59K/VÉ CẢ TUẦN !!!',
          thumbnail:
            'https://s3img.vcdn.vn/123phim/2020/12/bhd-59k-ve-ca-tuan-16091231825751.png',
          description:
            'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.',
          userId: '6f807670-2175-46b9-87f5-23925f30405e',
          content: `<h1 style="text-align: center;"><strong>BHD 59K/V&Eacute; CẢ TUẦN !!!</strong></h1>
          <p>4 bước đơn giản để hưởng ưu đ&atilde;i:</p>
          <p><strong>Bước 1:</strong>&nbsp;Mở ứng dụng TIX hoặc truy cập website tix.vn</p>
          <p><strong>Bước 2:&nbsp;</strong>Chọn phim y&ecirc;u th&iacute;ch tại cụm rạp BHD Star.</p>
          <p><strong>Bước 3:</strong>&nbsp;Chọn&nbsp;ZaloPay l&agrave; k&ecirc;nh thanh to&aacute;n (nếu như mua v&eacute; tr&ecirc;n ứng dụng ZaloPay th&igrave; bỏ qua bước 3).</p>
          <p><strong>Bước 4:&nbsp;</strong>Ưu đ&atilde;i 59.000đ/v&eacute; sẽ tự động &aacute;p dụng khi tại m&agrave;n h&igrave;nh thanh to&aacute;n của ZaloPay. H&atilde;y kiểm tra gi&aacute; trị đơn h&agrave;ng v&agrave; chọn nguồn tiền từ v&iacute; trước khi x&aacute;c nhận thanh to&aacute;n.</p>
          <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://s3img.vcdn.vn/123phim/2020/12/bhd-59k-ve-ca-tuan-16091231825751.png" alt="" width="720" /></p>
          <p><strong>Lưu &yacute;:</strong></p>
          <p>- &Aacute;p dụng tất cả c&aacute;c suất chiếu trong tuần.</p>
          <p>- Kh&aacute;ch h&agrave;ng được nhận ưu đ&atilde;i x3 v&eacute;/tuần &amp; 8 v&eacute;/th&aacute;ng.</p>
          <p>- Kh&ocirc;ng &aacute;p dụng đồng thời đối với chương tr&igrave;nh khuyến m&atilde;i của rạp.</p>
          <p><strong>Qui định về loại v&eacute; &amp; ph&ograve;ng chiếu:</strong></p>
          <p>- &Aacute;p dụng cho tất cả c&aacute;c ghế &amp; suất chiếu.</p>
          <p>- KH&Ocirc;NG &aacute;p dụng cho ghế SOFA của BHD Star.</p>
          <p>- KH&Ocirc;NG &aacute;p dụng cho ph&ograve;ng First Class, Deluxe, ONYX</p>
          <p>*Khi thanh to&aacute;n, nếu kh&aacute;ch h&agrave;ng KH&Ocirc;NG được giảm gi&aacute; vui l&ograve;ng gọi Hotline: 1900 54 54 36 để nhận hướng dẫn trước khi x&aacute;c nhận thanh to&aacute;n.</p>
          <p>----</p>
          <p><strong>Th&ocirc;ng tin li&ecirc;n hệ:</strong></p>
          <p><strong>Hotline:</strong>&nbsp;1900 54 54 36</p>
          `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('News', null, {});
  },
};
