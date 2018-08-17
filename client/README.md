### Setup & Run App
```
  npm install
  npm run start
```

### Cài đặt devextreme Module
```
	npm install --save devextreme devextreme-angular
```

### 1. Sử dụng module DxDataGridModule
```
...
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
    ...
    imports: [
        ...
        DxDataGridModule,
        ...
    ]
})
export class AppModule {}
```
#### Bài tập: Build Comonent sử dụng dxDataGrid hiện thị danh sách person

- Yêu cầu hiện thị đầy đủ các cột
Tên | Tuổi | Quê quán | Số điện thoại | Giới tính (1  là trai, 0 là gái)
- Tạo component persons ở Thư mục persons

### 2. Sử dụng DxFormModule, Notifications, Dialogs
import { DxFormModule } from 'devextreme-angular';

#### Bài tập: Xây dựng form Tạo mới/Sửa person Sử dụng DxFormModule
- Có validate các trường Tên, Giới tính
- Save Data dưới dạng json xuống localstoged

```
  import notify from 'devextreme/ui/notify';
```
- Sử dụng notify hiện thị thông báo khi thêm mới một person
- Hiện thi dialog confirm khi muốn xóa 1 person.

#### Bài tập: Xây dựng trang Login và chứng thực trang tạo mới person
* Yêu cầu bài tập:
- Đường dẫn truy cập trang login: /login
- Đường dẫn truy cập trang đăng ký: /register
- Login xong thì vào tranh danh sách persons
- Authentication trang thêm mới person, Chỉ dành cho người dùng đã đăng nhập.
- Authentication dialog confirm xóa person,
- Authentication trang sửa person

#### Bài tập: Sử dụng localstoged để lưu trữ danh sách person và cập nhật từ localstoged
- Tạo file person.json để load danh sách person
- Đọc file person.json và lưu xuống localstoged khi bắt đầu ứng dụng
- Sửa file service để load lại danh sách person từ localstored

### 3. Sử dụng control DxMenuModule
#### Bài tập: Hiện thị menu đa cấp hiện thị danh sách các loại control > controls devextreme.

### 4. Sử dụng control DxLookupModule, DxTextBoxModule, DxButtonModule, DxDateBoxModule
Bài tập: Tạo mới một feature Module UsersModule
* Yếu cầu:
- Form Tạo mới Users, sử dụng DxLookup để hiện thị 1 Drop-down menu danh sách quyền User: Admin, User
- Form gồm các trường:
  - Dropdownbox Quyền
  - Dropdownbox Person
  - Textbox UserName
  - Textbox PassWord
  - Datebox Ngày kích hoạt tài khoản
  - Button Submit
- Khi nhấn nút subbit sẽ validate các trường chọn quyền, chọn person, Nhập UserName, Nhập PassWord, Ngày kích hoạt
- Tạo mới xong User, sau đó sẽ lưu xuống localstoged 1 mảng danh sách User
- Hiện thị danh sách User đã thêm mới: 
- Grid bao gồm: Person FirstName | Person Role Name | UserName | PassWord 
- Cập nhật người dùng.
- Xóa người dùng

### 5. Làm việc với api dotnetcore, express nodejs, hoặc firebase
- Bài tập nâng cao.

### 6. Làm với với @ngrx/XXX, cấu trúc redux trong ứng dụng Client Angular.
- Bài tập nâng cao.

