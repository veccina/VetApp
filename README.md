# Veteriner Yönetim Sistemi

Bu proje, veteriner klinikleri için tasarlanmış kapsamlı bir yönetim sistemidir. Uygulama, müşteriler, hayvanlar, doktorlar, aşılar ve raporlar gibi çeşitli bileşenlerin yönetimini sağlar. Kullanıcı dostu arayüzü ve işlevselliği ile veteriner kliniklerinin iş süreçlerini daha verimli hale getirmeyi hedefler.

## Canlı Demo

Projenin canlı demosuna [buradan](https://6664f1f6b7dd974d1416fc72--sprightly-melomakarona-5bc36f.netlify.app) ulaşabilirsiniz.

## Özellikler

- **Müşteri Yönetimi**: Müşteri ekleme, güncelleme ve silme işlemlerini yapabilirsiniz.
- **Hayvan Yönetimi**: Müşterilere ait hayvanları ekleyebilir, güncelleyebilir ve silebilirsiniz.
- **Doktor Yönetimi**: Klinik doktorlarını ekleyebilir, güncelleyebilir ve silebilirsiniz. Ayrıca doktorların müsait tarihlerini yönetebilirsiniz.
- **Aşı Yönetimi**: Hayvanlara ait aşı bilgilerini ekleyebilir, güncelleyebilir ve silebilirsiniz.
- **Rapor Yönetimi**: Hayvanların sağlık durumlarıyla ilgili raporları ekleyebilir, güncelleyebilir ve silebilirsiniz.
- **Randevu Yönetimi**: Hayvanlar için randevu oluşturabilir, güncelleyebilir ve silebilirsiniz.

## Ekran Görüntüleri

### 1. Ana Sayfa
![Ana Sayfa](/src/assets/ana1.png)

### 2. Ana Sayfa - 2
![Ana Sayfa 2](/src/assets/ana2.png)

### 3. Randevu Yönetimi
![Randevu Yönetimi](/src/assets/randevu.png)

### 4. Rapor Yönetimi
![Rapor Yönetimi](/src/assets/rapor.png)

### 5. Aşı Yönetimi
![Aşı Yönetimi](/src/assets/asi.png)

### 6. Müşteri Yönetimi
![Müşteri Yönetimi](/src/assets/müsteri.png)

### 7. Hayvan Yönetimi
![Hayvan Yönetimi](/src/assets/hayvan.png)

### 8. Doktor Yönetimi
![Doktor Yönetimi](/src/assets/doktor.png)

## Kurulum

Projenin kendi bilgisayarınızda çalışması için aşağıdaki adımları takip edebilirsiniz:

1. Bu depoyu klonlayın:
    ```sh
    git clone 
    ```

2. Proje dizinine gidin:
    ```sh
    cd veterinary-management-system
    ```

3. Gerekli paketleri yükleyin:
    ```sh
    npm install
    ```

4. Uygulamayı başlatın:
    ```sh
    npm start
    ```

## Kullanılan Teknolojiler

### Frontend

- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=React&logoColor=white) **React**: Kullanıcı arayüzü oluşturmak için kullanıldı.
- ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat&logo=React-Router&logoColor=white) **React Router**: Sayfa yönlendirmeleri için kullanıldı.
- ![Material-UI](https://img.shields.io/badge/-Material--UI-0081CB?style=flat&logo=Material-UI&logoColor=white) **Material-UI**: UI bileşenleri için kullanıldı.
- ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=Axios&logoColor=white) **Axios**: API istekleri için kullanıldı.
- ![Snackbar](https://img.shields.io/badge/-Snackbar-3F51B5?style=flat&logo=Snackbar&logoColor=white) **Snackbar**: Bildirim mesajları için kullanıldı.

### Backend

Bu projede veteriner kliniği için bir API oluşturulmuştur. Bu API'da veteriner, müşteri, pet, pet sahibi ve randevu, report işlemleri yapılabilmektedir. Bu projede Spring Boot, Spring Data JPA, PostgreSQL, Lombok, Mapper gibi teknolojiler kullanılmıştır.

- ![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat&logo=Spring-Boot&logoColor=white) **Spring Boot**: Hızlı ve kolay uygulama geliştirme için kullanıldı.
- ![Spring Data JPA](https://img.shields.io/badge/-Spring%20Data%20JPA-6DB33F?style=flat&logo=Spring&logoColor=white) **Spring Data JPA**: Veritabanı işlemleri için kullanıldı.
- ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=PostgreSQL&logoColor=white) **PostgreSQL**: Veritabanı olarak kullanıldı.
- ![Lombok](https://img.shields.io/badge/-Lombok-FF6347?style=flat&logo=Lombok&logoColor=white) **Lombok**: Kodun okunabilirliğini ve bakımını artırmak için kullanıldı.
- ![Mapper](https://img.shields.io/badge/-Mapper-4DB33D?style=flat&logo=Hibernate&logoColor=white) **Mapper**: Nesne dönüşümleri için kullanıldı.

### Backend API

Uygulamanın backend API'si aşağıdaki işlevsellikleri sağlar:

#### Entity Sınıfları

- **Animal**: Müşterilere ait hayvanların bilgilerini tutar.
- **Appointment**: Hayvanların veteriner randevularını tutar.
- **AvailableDate**: Veterinerlerin müsait olduğu tarihleri tutar.
- **Customer**: Müşterilerin bilgilerini tutar.
- **Doctor**: Klinik doktorlarının bilgilerini tutar.
- **Vaccine**: Hayvanlara uygulanan aşıların bilgilerini tutar.
- **Report**: Hayvanların sağlık durumlarına ait raporları tutar.

#### API EndPoint'leri

Veteriner yönetim uygulaması için aşağıdaki API endpoint'leri tanımlanmıştır.

**AnimalController**

- **POST /v1/animals**: Yeni bir hayvan kaydı oluştur.
- **GET /v1/animals**: Tüm hayvan kayıtlarını listele.
- **GET /v1/animals/find-by-name/{name}**: İsme göre hayvan bul.
- **GET /v1/animals/{id}**: Belirli bir ID'ye sahip hayvanın detaylarını getir.
- **PUT /v1/animals/update/{id}**: Belirli bir ID'ye sahip hayvan kaydını güncelle.
- **DELETE /v1/animals/delete/{id}**: Belirli bir ID'ye sahip hayvan kaydını sil.

**AppointmentController**

- **POST /v1/appointments**: Yeni bir randevu oluştur.
- **GET /v1/appointments**: Tüm randevuları listele.
- **PUT /v1/appointments/update/{id}**: Belirli bir ID'ye sahip randevuyu güncelle.
- **DELETE /v1/appointments/delete/{id}**: Belirli bir ID'ye sahip randevuyu sil.
- **GET /v1/appointments/{id}**: Belirli bir ID'ye sahip randevunun detaylarını getir.
- **GET /v1/appointments/filter/by-doctor-id**: Belirli bir doktor ve tarih aralığına göre randevuları filtrele.
- **GET /v1/appointments/filter/by-animal-id**: Belirli bir hayvan ve tarih aralığına göre randevuları filtrele.

**AvailableDateController**

- **POST /v1/available-dates**: Yeni bir uygun tarih oluştur.
- **PUT /v1/available-dates/update/{id}**: Belirli bir ID'ye sahip uygun tarihi güncelle.
- **DELETE /v1/available-dates/delete/{id}**: Belirli bir ID'ye sahip uygun tarihi sil.
- **GET /v1/available-dates**: Tüm uygun tarihleri listele.
- **GET /v1/available-dates/{id}**: Belirli bir ID'ye sahip uygun tarihin detaylarını getir.
- **GET /v1/available-dates/doctors/{doctorId}/available-dates**: Belirli bir doktorun uygun tarihlerini listele.

**CustomerController**

- **POST /v1/customers**: Yeni bir müşteri oluştur.
- **GET /v1/customers**: Tüm müşterileri listele.
- **PUT /v1/customers/update/{id}**: Belirli bir ID'ye sahip müşteriyi güncelle.
- **GET /v1/customers/find-by-name/{name}**: İsme göre müşteri bul.
- **GET /v1/customers/{customerId}/animals**: Belirli bir müşteriye ait hayvanları listele.
- **GET /v1/customers/{id}**: Belirli bir ID'ye sahip müşterinin detaylarını getir.
- **DELETE /v1/customers/delete/{id}**: Belirli bir ID'ye sahip müşteriyi sil.

**DoctorController**

- **POST /v1/doctors**: Yeni bir doktor oluştur.
- **GET /v1/doctors**: Tüm doktorları listele.
- **GET /v1/doctors/{id}**: Belirli bir ID'ye sahip doktorun detaylarını getir.
- **PUT /v1/doctors/update/{id}**: Belirli bir ID'ye sahip doktoru güncelle.
- **DELETE /v1/doctors/delete/{id}**: Belirli bir ID'ye sahip doktoru sil.

**VaccineController**

- **POST /v1/vaccines**: Yeni bir aşı kaydı oluştur.
- **PUT /v1/vaccines/update/{id}**: Belirli bir ID'ye sahip aşı kaydını güncelle.
- **DELETE /v1/vaccines/delete/{id}**: Belirli bir ID'ye sahip aşı kaydını sil.
- **GET /v1/vaccines**: Tüm aşı kayıtlarını listele.
- **GET /v1/vaccines/vaccines-upcoming**: Belirli tarihler arasında yaklaşan aşıları olan hayvanların listesini getir.
- **GET /v1/vaccines/{id}**: Belirli bir ID'ye sahip aşı kaydını getir.
- **GET /v1/vaccines/{animalId}/vaccines**: Belirli bir ID'ye sahip hayvanın tüm aşı kayıtlarını listele.

**ReportController**

- **POST /v1/reports**: Yeni bir rapor oluştur.
- **GET /v1/reports**: Tüm raporları listele.
- **PUT /v1/reports/update/{id}**: Belirli bir ID'ye sahip raporu güncelle.
- **DELETE /v1/reports/delete/{id}**: Belirli bir ID'ye sahip raporu sil.
- **GET /v1/reports/{id}**: Belirli bir ID'ye sahip raporun detaylarını getir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin. Her türlü katkı ve geri bildirim memnuniyetle karşılanır.


## İletişim

Sorularınız veya önerileriniz için [av.bariscanberki@gmail.com](mailto:av.bariscanberki@gmail.com) adresinden bana ulaşabilirsiniz.
