import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"

const UserProfile = () => {
    const navigate = useNavigate();
    const [userColumns, setUserColumns] = useState([]);
    const [record, setRecord] = useState([]);
    const [addressColumns, setAddressColumns] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [phoneColumns, setPhoneColumns] = useState([]);
    const [phones, setPhones] = useState([]);
    const [infoColumns, setInfoColumns] = useState([]);
    const [info, setInfo] = useState([]);
    const user_id = window.sessionStorage.getItem("user_id")


    useEffect(() => {
        if (!window.sessionStorage.getItem("auth")) navigate('/unauthorized')
        fetch('http://localhost:8000/users/user/' + user_id)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUserColumns(Object.keys(data.user))
            setRecord(data.user)
            setInfoColumns(Object.keys(data.info[0]))
            setInfo(data.info)
            setAddressColumns(Object.keys(data.addresses[0]))
            setAddresses(data.addresses)
            setPhoneColumns(Object.keys(data.phones[0]))
            setPhones(data.phones)
        })
        .catch(error => console.error(error));
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        window.sessionStorage.removeItem("auth")
        window.sessionStorage.removeItem("user_id")
        window.sessionStorage.removeItem("token")
        navigate('/login')
    }

  return (
    <div>
        <h2>User</h2>
        <table className='table'>
            <thead>
                <tr>
                    {
                        userColumns.map((c, i) => (<th key={i}>{c.replaceAll("_", " ").toUpperCase()}</th>))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    <tr>
                        <td>{record.user_id}</td>
                        <td>{record.first_name}</td>
                        <td>{record.last_name}</td>
                        <td>{record.email}</td>
                        <td class="hidetext">{record.pass_word}</td>
                        <td>{record.created_date}</td>
                        <td>{record.is_active}</td>
                        <td>{record.last_login}</td>
                    </tr>
                }
            </tbody>
        </table>

        <h2>User Info</h2>
        <table className='table'>
            <thead>
                <tr>
                    {
                        infoColumns.map((c, i) => (<th key={i}>{c.replaceAll("_", " ").toUpperCase()}</th>))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    info.map((info,i) => (
                    <tr>
                        <td>{info.user_info_id}</td>
                        <td>{info.profile_bio}</td>
                        <td>{info.profile_picture}</td>
                        <td>{info.modified_date}</td>
                        <td>{info.created_date}</td>
                        <td>{info.user}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>

        <h2>Addresses</h2>
        <table className='table'>
            <thead>
                <tr>
                    {
                        addressColumns.map((c, i) => (<th key={i}>{c.replaceAll("_", " ").toUpperCase()}</th>))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    addresses.map((address,i) => (
                    <tr>
                        <td>{address.user_address_id}</td>
                        <td>{address.address_type.address_type}</td>
                        <td>{address.address_1}</td>
                        <td>{address.address_2}</td>
                        <td>{address.city}</td>
                        <td>{address.st}</td>
                        <td>{address.zip}</td>
                        <td>{address.country}</td>
                        <td>{address.user}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>

        <h2>Phones</h2>
        <table className='table'>
            <thead>
                <tr>
                    {
                        phoneColumns.map((c, i) => (<th key={i}>{c.replaceAll("_", " ").toUpperCase()}</th>))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    phones.map((phone,i) => (
                    <tr>
                        <td>{phone.user_phone_id}</td>
                        <td>{phone.phone_type.phone_type}</td>
                        <td>{phone.phone_number}</td>
                        <td>{phone.created_date}</td>
                        <td>{phone.is_active}</td>
                        <td>{phone.user}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserProfile