# [ReactJS](https://github.com/Asabeneh/30-Days-Of-React)

- `ReactJS` là thư viện của `Javascript`

# SPA / MPA

## SPA - Single-Page Application ( CSR - Client side rendering )

- React là 1 trong những thư viên tạo ra SPA
- Được cho là cách tiếp cận hiện đại hơn
- không yêu cầu tải lại trang trong quá trình sử dụng
- Những trang web sử dụng SPA: (zingmp3, Shoppe, Google, Facebook,... )

## MPA - Multi-Page Application ( SSR - Server side rendering )

- Là cách tiếp cận cổ điển hơn
- Tải lại trang trong quá trình sử dụng (click vào đường link, chuyển trang,... )
- Những trang web sử dụng SPA: (dantri, các trang tin tức,... )

## So sánh

### Tốc độ

- SPA nhanh hơn khi sử dụng
  - Phần lớn tài nguyên được tải trong lần đầu
  - Trang chỉ tải thêm dữ liệu mới khi cần
- MPA chậm hơn khi sử dụng
  - Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

### Bóc tách

- SPA có phần Front-end riêng biệt
- MPA Front-end & Back-end phụ thuộc nhau nhiều hơn, được đặt trong cùng 1 dự án

### SEO
- SPA không thân thiện với SEO như MPA
- SPA trải nghiệm trên thiết bị di động tốt hơn

### UX
- SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
- SPA trải nghiệm trên thiết bị di động tốt hơn

### Quá trình phát triển
- SPA dễ dàng tái sử dụng code (component)
- SPA bóc tách FE & BE
    - Chia team phát triển song song
    - Phát triển thêm mobile app dễ dàng

### Phụ thuộc vào Javascript
- SPA phụ thuộc hoàn toàn vào Javascript
- MPA có thể không cần Javascript

### Performance
- SPA giảm tải cho server, hao tốn RAM chạy Javascript của client
- MPA nặng cho server