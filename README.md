## Hướng dẫn cài đặt

---

- ### Các công cụ cần thiết:
    - Postgre database
    - Vscode (code editor) hoặc có thể sử dụng các editor khác

- ### Front-end

  - Clone github repository: https://github.com/Dat-Ve-Xem-Phim/FrontEnd.git
    bằng câu lệnh:

  ```bash
  git clone https://github.com/Dat-Ve-Xem-Phim/FrontEnd.git
  ```

  - Tạo file .env có dạng như file .env.example
  - Chạy lệnh yarn install hoặc npm install để cài đặt các package cần thiết

  ```bash
  yarn install
  ```

  ```bash
  npm install
  ```

- ### Back-end

  - Clone github repository: https://github.com/Dat-Ve-Xem-Phim/BackEnd.git bằng câu lệnh

  ```
  git clone https://github.com/Dat-Ve-Xem-Phim/BackEnd.git
  ```

  - Tạo file .env có dạng như file .env.example

  - Chạy lệnh npm install để cài đặt các package cần thiết

  ```bash
  npm install
  ```

  - Chạy lệnh npm run migrate để tạo các database cần thiết
  - Chạy lệnh npm run migrate:seed để tạo data cần thiết cho database

- ### Tiến hành chạy Back end

  - Sử dụng lệnh npm start trên console ở Back-end

  - Sau khi chạy xong Back-end sẽ có hiển thị vài dòng thông báo ở dưới console như sau:
    ```bash
    [nodemon] 2.0.6
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): _._
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node src/index.js`
    server started on port 5000 (development)
    ```
    Vậy là đã thành công

- ### Tiến hành chạy với Front end

  - Sử dụng lệnh yarn start trên console ở Back-end
  - Hệ thống tự mớ tab trên trình duyệt chạy ở PORT mặc định là 3000

- ### Vậy là đã cài đặt xong
