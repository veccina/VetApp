import { useState, useEffect } from "react";
import {
  getAnimals,
  getReports,
  deleteVaccine,
  addVaccine,
  updateVaccineFunc,
  getVaccines,
  getVaccineByName,
  getVaccineByAnimal,
  getVaccineByDate,
} from "../../API/vaccine";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import UpdateIcon from "@mui/icons-material/Update";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import "./Vaccine.css";
import Snackbar from "@mui/joy/Snackbar";

function Vaccine() {
  const [report, setReport] = useState([]);
  const [animal, setAnimal] = useState([]);
  const [vaccine, setVaccine] = useState([]);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    message: "",
    color: "danger",
  });
  const [animalName, setAnimalName] = useState("");
  const [protectionStartDate, setProtectionStartDate] = useState("");
  const [protectionEndDate, setProtectionEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(true);
  const [newVaccine, setNewVaccine] = useState({
    name: "",
    code: "",
    protectionStartDate: "",
    protectionEndDate: "",
    animal: {},
    report: {},
  });
  const [updateVaccine, setUpdateVaccine] = useState({
    name: "",
    code: "",
    protectionStartDate: "",
    protectionEndDate: "",
    animal: {},
    report: {},
  });

  useEffect(() => {
    // get all vaccines
    getVaccines().then((res) => {
      setVaccine(res);
    });
    setReload(false);
  }, [reload]);

  useEffect(() => {
    // get all animals
    getAnimals().then((res) => {
      setAnimal(res);
    });
    setReload(false);
  }, [reload]);

  useEffect(() => {
    // get all reports
    getReports().then((res) => {
      setReport(res);
    });
    setReload(false);
  }, [reload]);

  const handleDelete = (event) => {
    // delete vaccine
    const id = event.currentTarget.id;
    deleteVaccine(id).then(() => {
      setReload(true);
    });
  };

  const handleNewVaccine = (event) => {
    // create new vaccine
    setNewVaccine({
      ...newVaccine,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreate = () => {
    // create new vaccine
    addVaccine(newVaccine).then((res) => {
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
    setNewVaccine({
      name: "",
      code: "",
      protectionStartDate: "",
      protectionEndDate: "",
      animal: {},
      report: {},
    });
  };

  const handleUpdate = () => {
    // update vaccine
    updateVaccineFunc(updateVaccine).then((res) => {
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
    setUpdateVaccine({
      name: "",
      code: "",
      protectionStartDate: "",
      protectionEndDate: "",
      animal: {},
      report: {},
    });
  };

  const handleUpdateBtn = (vaccine) => {
    // update vaccine
    setUpdateVaccine(vaccine);
  };

  const handleUpdateChange = (event) => {
    // update vaccine
    setUpdateVaccine({
      ...updateVaccine,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    // get vaccine by name
    if (search !== "") {
      getVaccineByName(search).then((res) => {
        if (res) {
          setVaccine(res);
        } else {
          setVaccine([]);
        }
      });
    } else {
      getVaccines().then((res) => {
        if (res) {
          setVaccine(res);
        } else {
          setVaccine([]);
        }
      });
    }
  }, [search]);

  useEffect(() => {
    // get vaccine by animal
    if (animalName !== "") {
      getVaccineByAnimal(animalName).then((res) => {
        if (res) {
          setVaccine(res);
        } else {
          setVaccine([]);
        }
      });
    } else {
      getVaccines().then((res) => {
        if (res) {
          setVaccine(res);
        } else {
          setVaccine([]);
        }
      });
    }
  }, [animalName]);

  const handleSearchByDate = () => {
    // get vaccine by date
    if (protectionStartDate !== "" && protectionEndDate !== "") {
      getVaccineByDate(protectionStartDate, protectionEndDate).then((res) => {
        if (res) {
          setVaccine(res);
        } else {
          setVaccine([]);
        }
      });
    }
    setProtectionStartDate("");
    setProtectionEndDate("");
  };

  const handleResetTable = () => {
    // reset table
    setReload(true);
    setSearch("");
    setAnimalName("");
    setProtectionStartDate("");
    setProtectionEndDate("");
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
      <h1 className="vaccine-title">Aşı Yönetimi</h1>
      <div className="vaccine-forms">
        <div className="vaccine-newvaccine">
          <h2>Yeni Aşı Ekle</h2>
          <input
            type="text"
            placeholder="Aşı Adı"
            name="name"
            value={newVaccine.name}
            onChange={handleNewVaccine}
          />
          <input
            type="text"
            placeholder="Kod"
            name="code"
            value={newVaccine.code}
            onChange={handleNewVaccine}
          />
          <input
            type="date"
            placeholder="Koruma Başlangıç Tarihi"
            name="protectionStartDate"
            value={newVaccine.protectionStartDate}
            onChange={handleNewVaccine}
          />
          <input
            type="date"
            placeholder="Koruma Bitiş Tarihi"
            name="protectionEndDate"
            value={newVaccine.protectionEndDate}
            onChange={handleNewVaccine}
          />
          <select
            name="animal"
            required
            value={
              newVaccine.animal && newVaccine.animal.id
                ? newVaccine.animal.id
                : ""
            }
            onChange={(e) => {
              setNewVaccine({
                ...newVaccine,
                animal: { id: e.target.value },
              });
            }}
          >
            <option value="">Bir hayvan seçiniz</option>
            {animal?.map((animal) => (
              <option key={animal.id} value={animal.id}>
                {animal.name}
              </option>
            ))}
          </select>
          <select
            name="report"
            required
            value={
              newVaccine.report && newVaccine.report.id
                ? newVaccine.report.id
                : ""
            }
            onChange={(e) => {
              setNewVaccine({
                ...newVaccine,
                report: { id: e.target.value },
              });
            }}
          >
            <option value="">Bir rapor seçiniz</option>
            {report?.map((report) => (
              <option key={report.id} value={report.id}>
                {report.title}
              </option>
            ))}
          </select>
          <button className="vaccine-btn" onClick={handleCreate}>
            Aşı Ekle
          </button>
        </div>
        <div className="vaccine-updatevaccine">
          <h2>Aşı Güncelle</h2>
          <input
            type="text"
            placeholder="Aşı Adı"
            name="name"
            value={updateVaccine.name}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Kod"
            name="code"
            value={updateVaccine.code}
            onChange={handleUpdateChange}
          />
          <input
            type="date"
            placeholder="Koruma Başlangıç Tarihi"
            name="protectionStartDate"
            value={updateVaccine.protectionStartDate}
            onChange={handleUpdateChange}
          />
          <input
            type="date"
            placeholder="Koruma Bitiş Tarihi"
            name="protectionEndDate"
            value={updateVaccine.protectionEndDate}
            onChange={handleUpdateChange}
          />
          <select
            name="animal"
            required
            value={
              updateVaccine.animal && updateVaccine.animal.id
                ? updateVaccine.animal.id
                : ""
            }
            onChange={(e) => {
              setUpdateVaccine({
                ...updateVaccine,
                animal: { id: e.target.value },
              });
            }}
          >
            <option value="" disabled>
              Bir hayvan seçiniz
            </option>
            {animal?.map((animal) => (
              <option key={animal.id} value={animal.id}>
                {animal.name}
              </option>
            ))}
          </select>
          <select
            name="report"
            required
            value={
              updateVaccine.report && updateVaccine.report.id
                ? updateVaccine.report.id
                : ""
            }
            onChange={(e) => {
              setUpdateVaccine({
                ...updateVaccine,
                report: { id: e.target.value },
              });
            }}
          >
            <option value="" disabled>
              Bir rapor seçiniz
            </option>
            {report?.map((report) => (
              <option key={report.id} value={report.id}>
                {report.title}
              </option>
            ))}
          </select>
          <button className="vaccine-btn" onClick={handleUpdate}>
            Aşı Güncelle
          </button>
        </div>
      </div>
      <div className="search-area-vaccine">
        <div className="search-group">
          <h4 className="vaccine-search-title">Aşı Ara</h4>
          <div className="search-input-group">
            <SearchIcon />
            <input
              className="vaccine-search"
              type="text"
              placeholder="Tam isim ile ara"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setAnimalName("")}
            />
          </div>
        </div>
        <div className="search-group">
          <h4 className="vaccine-search-title">Hayvan İsmine Göre Aşı Ara</h4>
          <div className="search-input-group">
            <SearchIcon />
            <input
              className="vaccine-search-animal"
              type="text"
              placeholder="Tam hayvan ismi ile ara"
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
              onClick={() => setSearch("")}
            />
          </div>
        </div>
        <div className="search-group">
          <h4 className="vaccine-search-title">Tarihe Göre Aşı Ara</h4>
          <div className="search-input-group">
            <input
              className="vaccine-search-date"
              type="date"
              placeholder="Tarih ile ara"
              value={protectionStartDate}
              onChange={(e) => setProtectionStartDate(e.target.value)}
            />
            <input
              className="vaccine-search-date"
              type="date"
              placeholder="Tarih ile ara"
              value={protectionEndDate}
              onChange={(e) => setProtectionEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="button-group">
        <button className="search-btn" onClick={handleSearchByDate}>
          Ara
        </button>
        <button className="reset-btn" onClick={handleResetTable}>
          Sıfırla
        </button>
      </div>
      <div className="vaccine-container">
        <div className="vaccine-table">
          <table>
            <thead>
              <tr>
                <th>İsim</th>
                <th>Kod</th>
                <th>Koruma Başlangıç Tarihi</th>
                <th>Koruma Bitiş Tarihi</th>
                <th>Hayvan İsim</th>
                <th>Rapor Başlık</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {vaccine?.map((vaccine) => (
                <tr key={vaccine.id}>
                  <td>{vaccine.name}</td>
                  <td>{vaccine.code}</td>
                  <td>{vaccine.protectionStartDate}</td>
                  <td>{vaccine.protectionEndDate}</td>
                  <td>{vaccine.animalName}</td>
                  <td>{vaccine.reportTitle}</td>
                  <td className="vaccine-actions">
                    <span
                      className="vaccine-updateicon"
                      onClick={() => handleUpdateBtn(vaccine)}
                    >
                      <UpdateIcon />
                    </span>
                    <span
                      className="vaccine-icon"
                      onClick={handleDelete}
                      id={vaccine.id}
                    >
                      <PersonRemoveIcon />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer>
        <div className="bottom-footer mt-8">
          <div className="left-side">
            <h3>İletişim</h3>
            <a href="https://github.com/veccina">GitHub</a>
            <a href="https://de.linkedin.com/in/bariscanberki/tr">LinkedIn</a>
            <a href="mailto:av.bariscanberki@gmail.com">Email</a>
          </div>
          <div className="right-side">
            <h3>Faydalı Linkler</h3>
            <a href="https://github.com/gorbadil" target="_blank" rel="noopener noreferrer">En Büyük Destek</a>
            <a href="https://www.patika.dev/" target="_blank" rel="noopener noreferrer">En Büyük Hizmet</a>
            <a href="https://www.nefisyemektarifleri.com/patates-puresi-tarifi/" target="_blank" rel="noopener noreferrer">Patates Püresi</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Vaccine;
