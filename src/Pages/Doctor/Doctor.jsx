import { useState, useEffect } from "react";
import {
  getDoctors,
  deleteDoctor,
  addDoctor,
  updateDoctorFunc,
  getAvailableDate,
  deleteAvailableDate,
  addAvailableDate,
  updateAvailableDateFunc,
  getDoctorByName,
} from "../../API/doctor";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Doctor.css";
import Snackbar from "@mui/joy/Snackbar";

function Doctor() {
  const [doctor, setDoctor] = useState([]);
  const [search, setSearch] = useState("");
  const [openAlert, setOpenAlert] = useState({
    open: false,
    message: "",
    color: "danger",
  });
  const [reload, setReload] = useState(true);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    phone: "",
    mail: "",
    address: "",
    city: "",
  });
  const [updateDoctor, setUpdateDoctor] = useState({
    name: "",
    phone: "",
    mail: "",
    address: "",
    city: "",
  });
  const [availableDate, setAvailableDate] = useState([]);
  const [newAvailableDate, setNewAvailableDate] = useState({
    date: "",
    doctor: {},
  });

  const [updateAvailableDate, setUpdateAvailableDate] = useState({
    date: "",
    doctor: {},
  });

  //Doctor CRUD Operations

  useEffect(() => {
    // get all doctors
    getDoctors().then((res) => {
      setDoctor(res);
    });
    setReload(false);
  }, [reload]);

  const handleDelete = (event) => {
    // delete doctor
    const id = event.currentTarget.id;
    deleteDoctor(id).then(() => {
      setReload(true);
    });
  };

  const handleNewDoctor = (event) => {
    // create new doctor
    setNewDoctor({ ...newDoctor, [event.target.name]: event.target.value });
  };

  const handleCreate = () => {
    // add new doctor
    addDoctor(newDoctor).then((res) => {
      if (res.status === false) {
        setOpenAlert({ open: true, message: res.message, color: "danger" });
        setTimeout(() => {
          setOpenAlert({ open: false, message: "" });
        }, 3000);
        return;
      } else {
        setOpenAlert({
          open: true,
          message: "İşlem Başarılı",
          color: "success",
        });
        setTimeout(() => {
          setOpenAlert({ open: false, message: "" });
        }, 3000);
      }
      setReload(true);
    });
    setNewDoctor({
      name: "",
      phone: "",
      mail: "",
      address: "",
      city: "",
    });
  };

  const handleUpdate = () => {
    // update doctor
    updateDoctorFunc(updateDoctor).then((res) => {
      if (res.status === false) {
        setOpenAlert({ open: true, message: res.message, color: "danger" });
        setTimeout(() => {
          setOpenAlert({ open: false, message: "" });
        }, 3000);
        return;
      } else {
        setOpenAlert({
          open: true,
          message: "İşlem Başarılı",
          color: "success",
        });
        setTimeout(() => {
          setOpenAlert({ open: false, message: "" });
        }, 3000);
      }
      setReload(true);
    });
    setUpdateDoctor({
      name: "",
      phone: "",
      mail: "",
      address: "",
      city: "",
    });
  };

  const handleUpdateBtn = (doctor) => {
    // update doctor
    setUpdateDoctor(doctor);
  };

  const handleUpdateChange = (event) => {
    // update doctor
    setUpdateDoctor({
      ...updateDoctor,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    // get doctor by name
    if (search !== "") {
      getDoctorByName(search).then((res) => {
        if (res) {
          setDoctor(res);
        } else {
          setDoctor([]);
        }
      });
    } else {
      getDoctors().then((res) => {
        if (res) {
          setDoctor(res);
        } else {
          setDoctor([]);
        }
      });
    }
  }, [search]);
  const handleResetTable = () => {
    // reset table
    setReload(true);
    setSearch("");
  };

  // Available Date CRUD Operations

  useEffect(() => {
    // get all available dates
    getAvailableDate().then((res) => {
      setAvailableDate(res);
    });
    setReload(false);
  }, [reload]);

  const handleDeleteAvailableDate = (event) => {
    // delete available date
    const id = event.currentTarget.id;
    deleteAvailableDate(id).then(() => {
      setReload(true);
    });
  };

  const handleNewAvailableDate = (event) => {
    // create new available date
    setNewAvailableDate({
      ...newAvailableDate,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateAvailableDateChange = (event) => {
    // update available date
    setUpdateAvailableDate({
      ...updateAvailableDate,
      [event.target.name]: event.target.value,
    });
  };
  const handleUpdateAvailableDate = () => {
    // update available date
    updateAvailableDateFunc(updateAvailableDate).then((res) => {
      if (res.status === false) {
        setOpenAlert({ open: true, message: res.message, color: "danger" });
        setTimeout(() => {
          setOpenAlert({ open: false, message: "" });
        }, 3000);
        return;
      } else {
        setOpenAlert({
          open: true,
          message: "İşlem Başarılı",
          color: "success",
        });
        setTimeout(() => {
          setOpenAlert({ open: false, message: "" });
        }, 3000);
      }
      setReload(true);
    });
    setUpdateAvailableDate({
      date: "",
      doctor: {},
    });
  };

  const handleUpdateAvailableDateBtn = (availableDate) => {
    // update available date
    setUpdateAvailableDate(availableDate);
  };

  const handleAddAvailableDate = () => {
    // add new available date
    addAvailableDate(newAvailableDate).then((res) => {
      if (res.status === false) {
        setOpenAlert({ open: true, message: res.message, color: "danger" });
        setTimeout(() => {
          setOpenAlert({ open: false, message: "" });
        }, 3000);
        return;
      } else {
        setOpenAlert({
          open: true,
          message: "İşlem Başarılı",
          color: "success",
        });
        setTimeout(() => {
          setOpenAlert({ open: false, message: "" });
        }, 3000);
      }
      setReload(true);
    });
    setNewAvailableDate({
      date: "",
      doctor: {},
    });
  };
  return (
    <>
      <Snackbar
        open={openAlert.open}
        autoHideDuration={3000}
        color={openAlert.color}
        variant="outlined"
      >
        ! {openAlert.message}
      </Snackbar>
      <h1 className="doctor-title">Doktor Yönetimi</h1>
      <div className="search-area-doctor">
        <div className="search-group">
          <h4 className="doctor-search-title">Doktor Ara</h4>
          <div className="search-input-group">
            <input
              className="doctor-search"
              type="text"
              placeholder="Tam isim ile ara"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <button className="doctor-reset" onClick={handleResetTable}>
          Sıfırla
        </button>
      </div>
      <div className="doctor-container">
        <div className="doctor-forms">
          <div className="doctor-newdoctor">
            <h2>Yeni Doktor Ekle</h2>
            <input
              type="text"
              placeholder="İsim"
              name="name"
              value={newDoctor.name}
              onChange={handleNewDoctor}
            />
            <input
              type="text"
              placeholder="Telefon"
              name="phone"
              value={newDoctor.phone}
              onChange={handleNewDoctor}
            />
            <input
              type="text"
              placeholder="E-posta"
              name="mail"
              value={newDoctor.mail}
              onChange={handleNewDoctor}
            />
            <input
              type="text"
              placeholder="Adres"
              name="address"
              value={newDoctor.address}
              onChange={handleNewDoctor}
            />
            <input
              type="text"
              placeholder="Şehir"
              name="city"
              value={newDoctor.city}
              onChange={handleNewDoctor}
            />
            <button className="doctor-btn" onClick={handleCreate}>
              Ekle
            </button>
          </div>
          <div className="doctor-updatedoctor">
            <h2>Doktoru Güncelle</h2>
            <input
              type="text"
              placeholder="İsim"
              name="name"
              value={updateDoctor.name}
              onChange={handleUpdateChange}
            />
            <input
              type="text"
              placeholder="Telefon"
              name="phone"
              value={updateDoctor.phone}
              onChange={handleUpdateChange}
            />
            <input
              type="text"
              placeholder="E-posta"
              name="mail"
              value={updateDoctor.mail}
              onChange={handleUpdateChange}
            />
            <input
              type="text"
              placeholder="Adres"
              name="address"
              value={updateDoctor.address}
              onChange={handleUpdateChange}
            />
            <input
              type="text"
              placeholder="Şehir"
              name="city"
              value={updateDoctor.city}
              onChange={handleUpdateChange}
            />
            <button className="doctor-btn" onClick={handleUpdate}>
              Güncelle
            </button>
          </div>
        </div>
        <div className="doctor-table">
          <table>
            <thead>
              <tr>
                <th>İsim</th>
                <th>Telefon</th>
                <th>E-posta</th>
                <th>Adres</th>
                <th>Şehir</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {doctor?.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.name}</td>
                  <td>{doctor.phone}</td>
                  <td>{doctor.mail}</td>
                  <td>{doctor.address}</td>
                  <td>{doctor.city}</td>
                  <td className="doctor-actions">
                    <span
                      className="doctor-updateicon"
                      onClick={() => handleUpdateBtn(doctor)}
                    >
                      <UpdateIcon />
                    </span>
                    <span
                      className="doctor-icon"
                      onClick={handleDelete}
                      id={doctor.id}
                    >
                      <PersonRemoveIcon />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1 className="date-title">Müsait Tarih Yönetimi</h1>
          <table>
            <thead>
              <tr>
                <th>Tarih</th>
                <th>Doktor</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {availableDate?.map((availableDate) => (
                <tr key={availableDate.id}>
                  <td>{availableDate.date}</td>
                  <td>{availableDate.doctorName}</td>

                  <td className="availableDate-actions">
                    <span
                      className="availableDate-updateicon"
                      onClick={() =>
                        handleUpdateAvailableDateBtn(availableDate)
                      }
                    >
                      <UpdateIcon />
                    </span>
                    <span
                      className="availableDate-icon"
                      onClick={handleDeleteAvailableDate}
                      id={availableDate.id}
                    >
                      <DeleteIcon />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="availableDate-forms">
            <div className="availableDate-form-group">
              <div className="availableDate-newavailableDate">
                <h2>Yeni Müsait Tarih Ekle</h2>
                <input
                  type="date"
                  placeholder="Tarih"
                  name="date"
                  value={newAvailableDate.date}
                  onChange={handleNewAvailableDate}
                />
                <select
                  name="doctor"
                  required
                  value={newAvailableDate.doctor.id || ""}
                  onChange={(e) =>
                    setNewAvailableDate({
                      ...newAvailableDate,
                      doctor: { id: e.target.value },
                    })
                  }
                >
                  <option value="" disabled>
                    Bir doktor seçiniz
                  </option>
                  {doctor?.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>

                <button
                  className="availableDate-btn"
                  onClick={handleAddAvailableDate}
                >
                  Ekle
                </button>
              </div>
              <div className="availableDate-updateavailableDate">
                <h2>Müsait Tarihi Güncelle</h2>
                <input
                  type="date"
                  placeholder="Tarih"
                  name="date"
                  value={updateAvailableDate.date}
                  onChange={handleUpdateAvailableDateChange}
                />
                <select
                  name="doctor"
                  required
                  value={
                    updateAvailableDate.doctor && updateAvailableDate.doctor.id
                      ? updateAvailableDate.doctor.id
                      : ""
                  }
                  onChange={(e) => {
                    setUpdateAvailableDate({
                      ...updateAvailableDate,
                      doctor: { id: e.target.value },
                    });
                  }}
                >
                  <option value="" disabled>
                    Bir doktor seçiniz
                  </option>
                  {doctor?.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>

                <button
                  className="availableDate-btn"
                  onClick={handleUpdateAvailableDate}
                >
                  Güncelle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="bottom-footer mt-8">
          <div className="left-side">
            <h3>İletişim</h3>
            <a href="https://github.com/veccina">GitHub</a>
            <a href="https://de.linkedin.com/in/bariscanberki/tr">LinkedIn</a>
            <a href="mailto:av.bariscanberki@gmail.com">Email</a>
          </div>
          <div className="right-side">
            <h3>Faydalı Linkler</h3>
            <a
              href="https://github.com/gorbadil"
              target="_blank"
              rel="noopener noreferrer"
            >
              En Büyük Destek
            </a>
            <a
              href="https://www.patika.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              En Büyük Hizmet
            </a>
            <a
              href="https://www.nefisyemektarifleri.com/patates-puresi-tarifi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patates Püresi
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Doctor;
