import { useState, useEffect } from "react";
import {
  getCustomers,
  deleteCustomer,
  addCustomer,
  updateCustomerFunc,
  getCustomerByName,
} from "../../API/customer";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import UpdateIcon from "@mui/icons-material/Update";
import SearchIcon from "@mui/icons-material/Search";
import "./Customer.css";
import Snackbar from "@mui/joy/Snackbar";

function Customer() {
  const [customer, setCustomer] = useState([]);
  const [reload, setReload] = useState(true);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    message: "",
    color: "danger",
  });

  const [search, setSearch] = useState("");
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
    mail: "",
    address: "",
    city: "",
  });
  const [updateCustomer, setUpdateCustomer] = useState({
    name: "",
    phone: "",
    mail: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    // get all customers
    getCustomers().then((res) => {
      setCustomer(res);
    });
    setReload(false);
  }, [reload]);

  const handleDelete = (event) => {
    // delete customer
    const id = event.currentTarget.id;
    deleteCustomer(id).then(() => {
      setReload(true);
    });
  };

  const handleNewCustomer = (event) => {
    // add new customer
    setNewCustomer({ ...newCustomer, [event.target.name]: event.target.value });
  };

  const handleCreate = () => {
    // add new customer
    addCustomer(newCustomer).then((res) => {
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
    setNewCustomer({
      name: "",
      phone: "",
      mail: "",
      address: "",
      city: "",
    });
  };

  const handleUpdate = () => {
    // update customer
    updateCustomerFunc(updateCustomer).then((res) => {
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
    setUpdateCustomer({
      name: "",
      phone: "",
      mail: "",
      address: "",
      city: "",
    });
  };

  const handleUpdateBtn = (customer) => {
    // update customer
    setUpdateCustomer(customer);
  };

  const handleUpdateChange = (event) => {
    // update customer
    setUpdateCustomer({
      ...updateCustomer,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    // search customer by name
    if (search !== "") {
      getCustomerByName(search).then((res) => {
        if (res) {
          setCustomer(res);
        } else {
          setCustomer([]);
        }
      });
    } else {
      getCustomers().then((res) => {
        if (res) {
          setCustomer(res);
        } else {
          setCustomer([]);
        }
      });
    }
  }, [search]);

  const handleResetTable = () => {
    setReload(true);
    setSearch("");
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
      <h1 className="customer-title">Müşteri Yönetimi</h1>

      <div className="customer-forms">
        <div className="customer-newcustomer">
          <h2>Yeni Müşteri Ekle</h2>
          <input
            type="text"
            placeholder="İsim"
            name="name"
            value={newCustomer.name}
            onChange={handleNewCustomer}
          />
          <input
            type="text"
            placeholder="Telefon"
            name="phone"
            value={newCustomer.phone}
            onChange={handleNewCustomer}
          />
          <input
            type="text"
            placeholder="Email"
            name="mail"
            value={newCustomer.mail}
            onChange={handleNewCustomer}
          />
          <input
            type="text"
            placeholder="Adres"
            name="address"
            value={newCustomer.address}
            onChange={handleNewCustomer}
          />
          <input
            type="text"
            placeholder="Şehir"
            name="city"
            value={newCustomer.city}
            onChange={handleNewCustomer}
          />
          <button className="customer-btn" onClick={handleCreate}>
            Ekle
          </button>
        </div>
        <div className="customer-updatecustomer">
          <h2>Müşteri Güncelle</h2>
          <input
            type="text"
            placeholder="İsim"
            name="name"
            value={updateCustomer.name}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Telefon"
            name="phone"
            value={updateCustomer.phone}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="mail"
            value={updateCustomer.mail}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Adres"
            name="address"
            value={updateCustomer.address}
            onChange={handleUpdateChange}
          />
          <input
            type="text"
            placeholder="Şehir"
            name="city"
            value={updateCustomer.city}
            onChange={handleUpdateChange}
          />
          <button className="customer-btn" onClick={handleUpdate}>
            Güncelle
          </button>
        </div>
      </div>

      <div className="search-area-customer">
        <div className="search-group">
          <h4 className="customer-search-title">Müşteri Ara</h4>
          <div className="search-input-group">
            <SearchIcon />
            <input
              className="customer-search"
              type="text"
              placeholder="Tam isim ile ara"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <button className="customer-reset" onClick={handleResetTable}>
          Sıfırla
        </button>
      </div>

      <div className="customer-container">
        <div className="customer-table">
          <table>
            <thead>
              <tr>
                <th>İsim</th>
                <th>Telefon</th>
                <th>Email</th>
                <th>Adres</th>
                <th>Şehir</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {customer?.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.mail}</td>
                  <td>{customer.address}</td>
                  <td>{customer.city}</td>
                  <td className="customer-actions">
                    <span
                      className="customer-updateicon"
                      onClick={() => handleUpdateBtn(customer)}
                    >
                      <UpdateIcon />
                    </span>
                    <span
                      className="customer-icon"
                      onClick={handleDelete}
                      id={customer.id}
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

export default Customer;
