# Veterinärverwaltungssystem

Dieses Projekt ist ein umfassendes Verwaltungssystem für Tierkliniken. Die Anwendung bietet die Verwaltung verschiedener Komponenten wie Kunden, Tiere, Ärzte, Impfstoffe und Berichte. Mit seiner benutzerfreundlichen Oberfläche und Funktionalität zielt es darauf ab, die Geschäftsprozesse von Tierkliniken effizienter zu gestalten.

## Live-Demo

Sie können die Live-Demo des Projekts [hier](https://6664f1f6b7dd974d1416fc72--sprightly-melomakarona-5bc36f.netlify.app) aufrufen.

## Funktionen

- **Kundenverwaltung**: Kunden hinzufügen, aktualisieren und löschen.
- **Tierverwaltung**: Tiere, die zu Kunden gehören, hinzufügen, aktualisieren und löschen.
- **Ärzteverwaltung**: Klinikärzte hinzufügen, aktualisieren und löschen. Auch die verfügbaren Termine der Ärzte verwalten.
- **Impfstoffverwaltung**: Impfstoffinformationen für Tiere hinzufügen, aktualisieren und löschen.
- **Berichtsverwaltung**: Gesundheitsberichte für Tiere hinzufügen, aktualisieren und löschen.
- **Terminverwaltung**: Termine für Tiere erstellen, aktualisieren und löschen.

## Screenshots

### 1. Startseite
![Startseite](/src/assets/ana1.png)

### 2. Startseite - 2
![Startseite 2](/src/assets/ana2.png)

### 3. Terminverwaltung
![Terminverwaltung](/src/assets/randevu.png)

### 4. Berichtsverwaltung
![Berichtsverwaltung](/src/assets/rapor.png)

### 5. Impfstoffverwaltung
![Impfstoffverwaltung](/src/assets/asi.png)

### 6. Kundenverwaltung
![Kundenverwaltung](/src/assets/müsteri.png)

### 7. Tierverwaltung
![Tierverwaltung](/src/assets/hayvan.png)

### 8. Ärzteverwaltung
![Ärzteverwaltung](/src/assets/doktor.png)

## Einrichtung

Um das Projekt auf Ihrem lokalen Rechner auszuführen, folgen Sie diesen Schritten:

1. Klonen Sie dieses Repository:
    ```sh
    git clone 
    ```

2. Navigieren Sie zum Projektverzeichnis:
    ```sh
    cd veterinary-management-system
    ```

3. Installieren Sie die erforderlichen Pakete:
    ```sh
    npm install
    ```

4. Starten Sie die Anwendung:
    ```sh
    npm start
    ```

## Verwendete Technologien

### Frontend

- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=React&logoColor=white) **React**: Verwendet zum Aufbau der Benutzeroberfläche.
- ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat&logo=React-Router&logoColor=white) **React Router**: Verwendet für die Seiten-Routing.
- ![Material-UI](https://img.shields.io/badge/-Material--UI-0081CB?style=flat&logo=Material-UI&logoColor=white) **Material-UI**: Verwendet für UI-Komponenten.
- ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=Axios&logoColor=white) **Axios**: Verwendet für API-Anfragen.
- ![Snackbar](https://img.shields.io/badge/-Snackbar-3F51B5?style=flat&logo=Snackbar&logoColor=white) **Snackbar**: Verwendet für Benachrichtigungsnachrichten.

### Backend

Ein API wurde für die Tierklinik in diesem Projekt erstellt. Die API bearbeitet Tierärzte, Kunden, Haustiere, Haustierbesitzer und Termine, Berichtsoperationen. Verwendete Technologien umfassen Spring Boot, Spring Data JPA, PostgreSQL, Lombok und Mapper.

- ![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat&logo=Spring-Boot&logoColor=white) **Spring Boot**: Verwendet für schnelle und einfache Anwendungsentwicklung.
- ![Spring Data JPA](https://img.shields.io/badge/-Spring%20Data%20JPA-6DB33F?style=flat&logo=Spring&logoColor=white) **Spring Data JPA**: Verwendet für Datenbankoperationen.
- ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=PostgreSQL&logoColor=white) **PostgreSQL**: Verwendet als Datenbank.
- ![Lombok](https://img.shields.io/badge/-Lombok-FF6347?style=flat&logo=Lombok&logoColor=white) **Lombok**: Verwendet zur Verbesserung der Lesbarkeit und Wartbarkeit des Codes.
- ![Mapper](https://img.shields.io/badge/-Mapper-4DB33D?style=flat&logo=Hibernate&logoColor=white) **Mapper**: Verwendet für Objekttransformationen.

### Backend-API

Die Backend-API der Anwendung bietet die folgenden Funktionen:

#### Entity-Klassen

- **Animal**: Speichert Informationen über Tiere, die zu Kunden gehören.
- **Appointment**: Speichert Tierarzttermine für Tiere.
- **AvailableDate**: Speichert Termine, an denen Tierärzte verfügbar sind.
- **Customer**: Speichert Informationen über Kunden.
- **Doctor**: Speichert Informationen über Klinikärzte.
- **Vaccine**: Speichert Informationen über Impfungen, die an Tiere verabreicht werden.
- **Report**: Speichert Gesundheitsberichte von Tieren.

#### API-Endpunkte

Die folgenden API-Endpunkte sind für die Tierverwaltung Anwendung definiert:

**AnimalController**

- **POST /v1/animals**: Erstellen eines neuen Tierdatensatzes.
- **GET /v1/animals**: Auflisten aller Tierdatensätze.
- **GET /v1/animals/find-by-name/{name}**: Suchen eines Tieres nach Name.
- **GET /v1/animals/{id}**: Abrufen der Details eines Tieres mit einer bestimmten ID.
- **PUT /v1/animals/update/{id}**: Aktualisieren eines Tierdatensatzes mit einer bestimmten ID.
- **DELETE /v1/animals/delete/{id}**: Löschen eines Tierdatensatzes mit einer bestimmten ID.

**AppointmentController**

- **POST /v1/appointments**: Erstellen eines neuen Termins.
- **GET /v1/appointments**: Auflisten aller Termine.
- **PUT /v1/appointments/update/{id}**: Aktualisieren eines Termins mit einer bestimmten ID.
- **DELETE /v1/appointments/delete/{id}**: Löschen eines Termins mit einer bestimmten ID.
- **GET /v1/appointments/{id}**: Abrufen der Details eines Termins mit einer bestimmten ID.
- **GET /v1/appointments/filter/by-doctor-id**: Filtern von Terminen nach Arzt und Datumsbereich.
- **GET /v1/appointments/filter/by-animal-id**: Filtern von Terminen nach Tier und Datumsbereich.

**AvailableDateController**

- **POST /v1/available-dates**: Erstellen eines neuen verfügbaren Datums.
- **PUT /v1/available-dates/update/{id}**: Aktualisieren eines verfügbaren Datums mit einer bestimmten ID.
- **DELETE /v1/available-dates/delete/{id}**: Löschen eines verfügbaren Datums mit einer bestimmten ID.
- **GET /v1/available-dates**: Auflisten aller verfügbaren Daten.
- **GET /v1/available-dates/{id}**: Abrufen der Details eines verfügbaren Datums mit einer bestimmten ID.
- **GET /v1/available-dates/doctors/{doctorId}/available-dates**: Auflisten der verfügbaren Daten für einen bestimmten Arzt.

**CustomerController**

- **POST /v1/customers**: Erstellen eines neuen Kunden.
- **GET /v1/customers**: Auflisten aller Kunden.
- **PUT /v1/customers/update/{id}**: Aktualisieren eines Kunden mit einer bestimmten ID.
- **GET /v1/customers/find-by-name/{name}**: Suchen eines Kunden nach Name.
- **GET /v1/customers/{customerId}/animals**: Auflisten der Tiere, die zu einem bestimmten Kunden gehören.
- **GET /v1/customers/{id}**: Abrufen der Details eines Kunden mit einer bestimmten ID.
- **DELETE /v1/customers/delete/{id}**: Löschen eines Kunden mit einer bestimmten ID.

**DoctorController**

- **POST /v1/doctors**: Erstellen eines neuen Arztes.
- **GET /v1/doctors**: Auflisten aller Ärzte.
- **GET /v1/doctors/{id}**: Abrufen der Details eines Arztes mit einer bestimmten ID.
- **PUT /v1/doctors/update/{id}**: Aktualisieren eines Arztes mit einer bestimmten ID.
- **DELETE /v1

/doctors/delete/{id}**: Löschen eines Arztes mit einer bestimmten ID.

**VaccineController**

- **POST /v1/vaccines**: Erstellen eines neuen Impfstoffdatensatzes.
- **PUT /v1/vaccines/update/{id}**: Aktualisieren eines Impfstoffdatensatzes mit einer bestimmten ID.
- **DELETE /v1/vaccines/delete/{id}**: Löschen eines Impfstoffdatensatzes mit einer bestimmten ID.
- **GET /v1/vaccines**: Auflisten aller Impfstoffdatensätze.
- **GET /v1/vaccines/vaccines-upcoming**: Auflisten der Tiere mit bevorstehenden Impfungen innerhalb bestimmter Daten.
- **GET /v1/vaccines/{id}**: Abrufen der Details eines Impfstoffdatensatzes mit einer bestimmten ID.
- **GET /v1/vaccines/{animalId}/vaccines**: Auflisten aller Impfstoffdatensätze für ein Tier mit einer bestimmten ID.

**ReportController**

- **POST /v1/reports**: Erstellen eines neuen Berichts.
- **GET /v1/reports**: Auflisten aller Berichte.
- **PUT /v1/reports/update/{id}**: Aktualisieren eines Berichts mit einer bestimmten ID.
- **DELETE /v1/reports/delete/{id}**: Löschen eines Berichts mit einer bestimmten ID.
- **GET /v1/reports/{id}**: Abrufen der Details eines Berichts mit einer bestimmten ID.

## Beitrag

Wenn Sie beitragen möchten, senden Sie bitte eine Pull-Anfrage. Jegliche Beiträge und Feedback sind willkommen.

## Kontakt

Für Fragen oder Anregungen können Sie mich unter [av.bariscanberki@gmail.com](mailto:av.bariscanberki@gmail.com) erreichen.

# Veterinary Management System

This project is a comprehensive management system designed for veterinary clinics. The application provides management for various components such as customers, animals, doctors, vaccines, and reports. With its user-friendly interface and functionality, it aims to make the business processes of veterinary clinics more efficient.

## Live Demo

You can access the live demo of the project [here](https://6664f1f6b7dd974d1416fc72--sprightly-melomakarona-5bc36f.netlify.app).

## Features

- **Customer Management**: Add, update, and delete customers.
- **Animal Management**: Add, update, and delete animals belonging to customers.
- **Doctor Management**: Add, update, and delete clinic doctors. Also manage doctors' available dates.
- **Vaccine Management**: Add, update, and delete vaccination information for animals.
- **Report Management**: Add, update, and delete health reports for animals.
- **Appointment Management**: Create, update, and delete appointments for animals.

## Screenshots

### 1. Home Page
![Home Page](/src/assets/ana1.png)

### 2. Home Page - 2
![Home Page 2](/src/assets/ana2.png)

### 3. Appointment Management
![Appointment Management](/src/assets/randevu.png)

### 4. Report Management
![Report Management](/src/assets/rapor.png)

### 5. Vaccine Management
![Vaccine Management](/src/assets/asi.png)

### 6. Customer Management
![Customer Management](/src/assets/müsteri.png)

### 7. Animal Management
![Animal Management](/src/assets/hayvan.png)

### 8. Doctor Management
![Doctor Management](/src/assets/doktor.png)

## Setup

To run the project on your local machine, follow these steps:

1. Clone this repository:
    ```sh
    git clone 
    ```

2. Navigate to the project directory:
    ```sh
    cd veterinary-management-system
    ```

3. Install the required packages:
    ```sh
    npm install
    ```

4. Start the application:
    ```sh
    npm start
    ```

## Technologies Used

### Frontend

- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=React&logoColor=white) **React**: Used for building the user interface.
- ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat&logo=React-Router&logoColor=white) **React Router**: Used for page routing.
- ![Material-UI](https://img.shields.io/badge/-Material--UI-0081CB?style=flat&logo=Material-UI&logoColor=white) **Material-UI**: Used for UI components.
- ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=Axios&logoColor=white) **Axios**: Used for making API requests.
- ![Snackbar](https://img.shields.io/badge/-Snackbar-3F51B5?style=flat&logo=Snackbar&logoColor=white) **Snackbar**: Used for notification messages.

### Backend

An API has been created for the veterinary clinic in this project. The API handles veterinarian, customer, pet, pet owner, and appointment, report operations. Technologies used include Spring Boot, Spring Data JPA, PostgreSQL, Lombok, and Mapper.

- ![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat&logo=Spring-Boot&logoColor=white) **Spring Boot**: Used for rapid and easy application development.
- ![Spring Data JPA](https://img.shields.io/badge/-Spring%20Data%20JPA-6DB33F?style=flat&logo=Spring&logoColor=white) **Spring Data JPA**: Used for database operations.
- ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=PostgreSQL&logoColor=white) **PostgreSQL**: Used as the database.
- ![Lombok](https://img.shields.io/badge/-Lombok-FF6347?style=flat&logo=Lombok&logoColor=white) **Lombok**: Used to improve code readability and maintenance.
- ![Mapper](https://img.shields.io/badge/-Mapper-4DB33D?style=flat&logo=Hibernate&logoColor=white) **Mapper**: Used for object transformations.

### Backend API

The backend API of the application provides the following functionalities:

#### Entity Classes

- **Animal**: Stores information about animals belonging to customers.
- **Appointment**: Stores veterinary appointments for animals.
- **AvailableDate**: Stores dates when veterinarians are available.
- **Customer**: Stores information about customers.
- **Doctor**: Stores information about clinic doctors.
- **Vaccine**: Stores information about vaccinations given to animals.
- **Report**: Stores health reports of animals.

#### API Endpoints

The following API endpoints are defined for the veterinary management application:

**AnimalController**

- **POST /v1/animals**: Create a new animal record.
- **GET /v1/animals**: List all animal records.
- **GET /v1/animals/find-by-name/{name}**: Find an animal by name.
- **GET /v1/animals/{id}**: Get details of an animal with a specific ID.
- **PUT /v1/animals/update/{id}**: Update an animal record with a specific ID.
- **DELETE /v1/animals/delete/{id}**: Delete an animal record with a specific ID.

**AppointmentController**

- **POST /v1/appointments**: Create a new appointment.
- **GET /v1/appointments**: List all appointments.
- **PUT /v1/appointments/update/{id}**: Update an appointment with a specific ID.
- **DELETE /v1/appointments/delete/{id}**: Delete an appointment with a specific ID.
- **GET /v1/appointments/{id}**: Get details of an appointment with a specific ID.
- **GET /v1/appointments/filter/by-doctor-id**: Filter appointments by doctor and date range.
- **GET /v1/appointments/filter/by-animal-id**: Filter appointments by animal and date range.

**AvailableDateController**

- **POST /v1/available-dates**: Create a new available date.
- **PUT /v1/available-dates/update/{id}**: Update an available date with a specific ID.
- **DELETE /v1/available-dates/delete/{id}**: Delete an available date with a specific ID.
- **GET /v1/available-dates**: List all available dates.
- **GET /v1/available-dates/{id}**: Get details of an available date with a specific ID.
- **GET /v1/available-dates/doctors/{doctorId}/available-dates**: List available dates for a specific doctor.

**CustomerController**

- **POST /v1/customers**: Create a new customer.
- **GET /v1/customers**: List all customers.
- **PUT /v1/customers/update/{id}**: Update a customer with a specific ID.
- **GET /v1/customers/find-by-name/{name}**: Find a customer by name.
- **GET /v1/customers/{customerId}/animals**: List animals belonging to a specific customer.
- **GET /v1/customers/{id}**: Get details of a customer with a specific ID.
- **DELETE /v1/customers/delete/{id}**: Delete a customer with a specific ID.

**DoctorController**

- **POST /v1/doctors**: Create a new doctor.
- **GET /v1/doctors**: List all doctors.
- **GET /v1/doctors/{id}**: Get details of a doctor with a specific ID.
- **PUT /v1/doctors/update/{id}**: Update a doctor with a specific ID.
- **DELETE /v1/doctors/delete/{id}**: Delete a doctor with a specific ID.

**VaccineController**

- **POST /v1/vaccines**: Create a new vaccine record.
- **PUT /v1/vaccines/update/{id}**: Update a vaccine record with a specific ID.
- **DELETE /v1/vaccines/delete/{id}**: Delete a vaccine record with a specific ID.
- **GET /v1/vaccines**: List all vaccine records.
- **GET /v1/vaccines/vaccines-upcoming**: List animals with upcoming vaccinations within specific dates.
- **GET /v1/vaccines/{id}**: Get details of a vaccine record with a specific ID.
- **GET /v1/vaccines/{animalId}/vaccines**: List all vaccine records for an animal with a specific ID.

**ReportController**

- **POST /v1/reports**: Create a new report.
- **GET /v1/reports**: List all reports.
- **PUT /v1/reports/update/{id}**: Update a report with a specific ID.
- **DELETE /v1/reports/delete/{id}**: Delete a report with a specific ID.
- **GET /v1/reports

/{id}**: Get details of a report with a specific ID.

## Contribution

If you would like to contribute, please send a pull request. Any contributions and feedback are welcome.

## Contact

For questions or suggestions, you can reach me at [av.bariscanberki@gmail.com](mailto:av.bariscanberki@gmail.com).


---
