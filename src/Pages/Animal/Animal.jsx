import { useState, useEffect } from "react";
import {
  getCustomers,
  getAnimals,
  deleteAnimal,
  addAnimal,
  updateAnimalFunc,
  getAnimalByName,
  getAnimalByCustomerName,
} from "../../API/animal";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import UpdateIcon from "@mui/icons-material/Update";
import "./Animal.css";
import Snackbar from "@mui/joy/Snackbar";

function Animal() {
  const [customer, setCustomer] = useState([]);
  const [animal, setAnimal] = useState([]);
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(true);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    message: "",
    color: "danger",
  });
  const [customerName, setCustomerName] = useState("");
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    species: "",
    breed: "",
    gender: "",
    color: "",
    dateOfBirth: "",
    customer: {},
  });
  const [updateAnimal, setUpdateAnimal] = useState({
    name: "",
    species: "",
    breed: "",
    gender: "",
    color: "",
    dateOfBirth: "",
    customer: {},
  });

  useEffect(() => {
    // get all customers
    getCustomers().then((res) => {
      setCustomer(res);
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

  const handleDelete = (event) => {
    // delete animal
    const id = event.currentTarget.id;
    deleteAnimal(id).then(() => {
      setReload(true);
    });
  };

  const handleNewAnimal = (event) => {
    // create new animal
    setNewAnimal({ ...newAnimal, [event.target.name]: event.target.value });
  };

  const handleCreate = () => {
    // add new animal
    addAnimal(newAnimal).then((res) => {
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
    setNewAnimal({
      name: "",
      species: "",
      breed: "",
      gender: "",
      color: "",
      dateOfBirth: "",
      customer: {},
    });
  };

  const handleUpdate = () => {
    // update animal
    updateAnimalFunc(updateAnimal).then((res) => {
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
    setUpdateAnimal({
      name: "",
      species: "",
      breed: "",
      gender: "",
      color: "",
      dateOfBirth: "",
      customer: {},
    });
  };

  const handleUpdateBtn = (animal) => {
    // update animal button
    setUpdateAnimal(animal);
  };

  const handleUpdateChange = (event) => {
    // update animal change
    setUpdateAnimal({
      ...updateAnimal,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    if (search !== "") {
      getAnimalByName(search).then((res) => {
        if (res) {
          setAnimal(res);
        } else {
          setAnimal([]);
        }
      });
    } else {
      getAnimals().then((res) => {
        if (res) {
          setAnimal(res);
        } else {
          setAnimal([]);
        }
      });
    }
  }, [search]);

  useEffect(() => {
    // get animal by customer name
    if (customerName !== "") {
      getAnimalByCustomerName(customerName).then((res) => {
        if (res) {
          setAnimal(res);
        } else {
          setAnimal([]);
        }
      });
    } else {
      getAnimals().then((res) => {
        if (res) {
          setAnimal(res);
        } else {
          setAnimal([]);
        }
      });
    }
  }, [customerName]);

  const handleResetTable = () => {
    // reset table
    setReload(true);
    setSearch("");
    setCustomerName("");
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
      <h1 className="animal-title">Hayvan Yönetimi</h1>
      <div className="animal-forms">
        <div className="animal-newanimal">
          <h2>Yeni Hayvan Ekle</h2>
          <input
            type="text"
            placeholder="İsim"
            name="name"
            value={newAnimal.name}
            onChange={handleNewAnimal}
          />
          <input
            type="text"
            placeholder="Tür"
            name="species"
            value={newAnimal.species}
            onChange={handleNewAnimal}
          />
          <input
            type="text"
            placeholder="Cins"
            name="breed"
            value={newAnimal.breed}
            onChange={handleNewAnimal}
          />
          <input
            type="text"
            placeholder="Cinsiyet"
            name="gender"
            value={newAnimal.gender}
            onChange={handleNewAnimal}
          />
          <input
            type="text"
            placeholder="Renk"
            name="color"
            value={newAnimal.color}
            onChange={handleNewAnimal}
          />
          <input
            type="date"
            placeholder="Doğum Tarihi"
            name="dateOfBirth"
            value={newAnimal.dateOfBirth}
            onChange={handleNewAnimal}
          />
          <select
            name="customer"
            required
            value={newAnimal.customer.id || ""}
            onChange={(e) =>
              setNewAnimal({
                ...newAnimal,
                customer: { id: e.target.value },
              })
            }
          >
            <option value="" disabled>
              Bir müşteri seçiniz
            </option>
            {customer?.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>

          <button className="animal-btn" onClick={handleCreate}>
            Ekle
          </button>
        </div>
        <div className="animal-updateanimal">
          <h2>Hayvan Güncelle</h2>
          <input
            type="text"
            placeholder="İsim"
            name="name"
            value={updateAnimal.name}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Tür"
            name="species"
            value={updateAnimal.species}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Cins"
            name="breed"
            value={updateAnimal.breed}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Cinsiyet"
            name="gender"
            value={updateAnimal.gender}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Renk"
            name="color"
            value={updateAnimal.color}
            onChange={handleUpdateChange}
          />
          <input
            type="date"
            placeholder="Doğum Tarihi"
            name="dateOfBirth"
            value={updateAnimal.dateOfBirth}
            onChange={handleUpdateChange}
          />
          <select
            name="customer"
            required
            value={
              updateAnimal.customer && updateAnimal.customer.id
                ? updateAnimal.customer.id
                : ""
            }
            onChange={(e) => {
              setUpdateAnimal({
                ...updateAnimal,
                customer: { id: e.target.value },
              });
            }}
          >
            <option value="" disabled>
              Bir müşteri seçiniz
            </option>
            {customer?.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>

          <button className="animal-btn" onClick={handleUpdate}>
            Güncelle
          </button>
        </div>
      </div>
      <div className="search-area">
        <div className="search-group">
          <h4 className="animal-search-title">Hayvan Ara</h4>
          <div className="search-input-group">
            <input
              className="animal-search"
              type="text"
              placeholder="Tam isim ile ara"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setCustomerName("")}
            />
          </div>
        </div>
        <div className="search-group">
          <h4 className="animal-search-title">Müşteri İsmiyle Ara</h4>
          <div className="search-input-group">
            <input
              className="animal-search-customer"
              type="text"
              placeholder="Müşteri ismi ile ara"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              onClick={() => setSearch("")}
            />
          </div>
        </div>
        <button className="animal-reset" onClick={handleResetTable}>
          Sıfırla
        </button>
      </div>

      <div className="animal-container">
        <div className="animal-table">
          <table>
            <thead>
              <tr>
                <th>İsim</th>
                <th>Tür</th>
                <th>Cins</th>
                <th>Cinsiyet</th>
                <th>Renk</th>
                <th>Doğum Tarihi</th>
                <th>Müşteri İsmi</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {animal?.map((animal) => (
                <tr key={animal.id}>
                  <td>{animal.name}</td>
                  <td>{animal.species}</td>
                  <td>{animal.breed}</td>
                  <td>{animal.gender}</td>
                  <td>{animal.color}</td>
                  <td>{animal.dateOfBirth}</td>
                  <td>{animal.customerName}</td>
                  <td className="animal-actions">
                    <span
                      className="animal-updateicon"
                      onClick={() => handleUpdateBtn(animal)}
                    >
                      <UpdateIcon />
                    </span>
                    <span
                      className="animal-icon"
                      onClick={handleDelete}
                      id={animal.id}
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

export default Animal;
