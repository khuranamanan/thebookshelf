import { useContext, useState } from "react";
import "./UserAddressesPage.css";
import { AuthContext } from "../../Contexts/AuthContext";
import AddressForm from "./Components/AddressForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";

function UserAddressesPage() {
  const { loginData, handleAddAddress, editAddresses, deleteAddress } =
    useContext(AuthContext);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const navigate = useNavigate();

  const handleEditAddress = (address) => {
    const updatedAddresses = loginData.user.userAddresses.map((addr) => {
      if (addr.id === editingAddressId) {
        return {
          ...addr,
          ...address,
        };
      }
      return addr;
    });

    editAddresses(updatedAddresses);

    setEditingAddressId(null);
  };

  const handleCancelEdit = () => {
    setEditingAddressId(null);
  };

  const displayAddressesLogic =
    loginData.user &&
    loginData.user.userAddresses &&
    loginData.user.userAddresses.length > 0 ? (
      loginData.user.userAddresses.map((address) => (
        <div key={address.id}>
          <h3>
            {address.firstName} {address.lastName}
          </h3>
          <p>Address Line 1: {address.addressLine1}</p>
          <p>Address Line 2: {address.addressLine2}</p>
          <p>City: {address.city}</p>
          <p>State: {address.state}</p>
          <p>Zip Code: {address.zipCode}</p>
          <p>Country: {address.country}</p>
          {editingAddressId === address.id ? (
            <div>
              <AddressForm onSubmit={handleEditAddress} address={address} />
              <button onClick={handleCancelEdit} className="cancel-button">
                Cancel
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setEditingAddressId(address.id)}
                className="edit-button"
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteAddress(address.id)}
              >
                Delete Address
              </button>
            </>
          )}
          <hr />
        </div>
      ))
    ) : (
      <p>No addresses found.</p>
    );

  return (
    <div className="user-addresses-page">
      <h2>User Addresses</h2>
      <button className="go-back-btn flex-center" onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft size={20} /> Go Back
      </button>
      {displayAddressesLogic}
      <h3>Add Address</h3>
      <AddressForm onSubmit={handleAddAddress} />
    </div>
  );
}

export default UserAddressesPage;
