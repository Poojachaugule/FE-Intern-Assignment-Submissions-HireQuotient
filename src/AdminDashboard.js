// AdminDashboard.js
import React, { useState } from 'react';
import './App.css';
import './App.js';
const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState
  ([
    {
        "id": "1",
        "name": "Aaron Miles",
        "email": "aaron@mailinator.com",
        "role": "member"
    },
    {
        "id": "2",
        "name": "Aishwarya Naik",
        "email": "aishwarya@mailinator.com",
        "role": "member"
    },
    {
        "id": "3",
        "name": "Arvind Kumar",
        "email": "arvind@mailinator.com",
        "role": "admin"
    },
    {
        "id": "4",
        "name": "Caterina Binotto",
        "email": "caterina@mailinator.com",
        "role": "member"
    },
    {
        "id": "5",
        "name": "Chetan Kumar",
        "email": "chetan@mailinator.com",
        "role": "member"
    },
    {
        "id": "6",
        "name": "Jim McClain",
        "email": "jim@mailinator.com",
        "role": "member"
    },
    {
        "id": "7",
        "name": "Mahaveer Singh",
        "email": "mahaveer@mailinator.com",
        "role": "member"
    },
    {
        "id": "8",
        "name": "Rahul Jain",
        "email": "rahul@mailinator.com",
        "role": "admin"
    },
    {
        "id": "9",
        "name": "Rizan Khan",
        "email": "rizan@mailinator.com",
        "role": "member"
    },
    {
        "id": "10",
        "name": "Sarah Potter",
        "email": "sarah@mailinator.com",
        "role": "admin"
    },
    {
        "id": "11",
        "name": "Keshav Muddaiah",
        "email": "keshav@mailinator.com",
        "role": "member"
    },
    {
        "id": "12",
        "name": "Nita Ramesh",
        "email": "nita@mailinator.com",
        "role": "member"
    },
    {
        "id": "13",
        "name": "Julia Hunstman",
        "email": "julia@mailinator.com",
        "role": "member"
    },
    {
        "id": "14",
        "name": "Juan Alonso",
        "email": "juan@mailinator.com",
        "role": "admin"
    },
    {
        "id": "15",
        "name": "Gabriel Montoya",
        "email": "gabriel@mailinator.com",
        "role": "admin"
    },
    {
        "id": "16",
        "name": "Beatrice Iglesias",
        "email": "beatrice@mailinator.com",
        "role": "admin"
    },
    {
        "id": "17",
        "name": "Sarah Symms",
        "email": "sarah.s@mailinator.com",
        "role": "admin"
    },
    {
        "id": "18",
        "name": "Patrick Pinheiro",
        "email": "patrick@mailinator.com",
        "role": "admin"
    },
    {
        "id": "19",
        "name": "Anand Patel",
        "email": "anand@mailinator.com",
        "role": "member"
    },
    {
        "id": "20",
        "name": "Kishore Kalburgi",
        "email": "kishore@mailinator.com",
        "role": "member"
    },
    {
        "id": "21",
        "name": "Rebecca Norris",
        "email": "rebecca@mailinator.com",
        "role": "member"
    },
    {
        "id": "22",
        "name": "Özgür Başak",
        "email": "ozgur@mailinator.com",
        "role": "member"
    },
    {
        "id": "23",
        "name": "Robin Andersen",
        "email": "robin@mailinator.com",
        "role": "member"
    },
    {
        "id": "24",
        "name": "Nandini Kumar",
        "email": "nandini@mailinator.com",
        "role": "member"
    },
    {
        "id": "25",
        "name": "Nikita Smith",
        "email": "nikita@mailinator.com",
        "role": "member"
    },
    {
        "id": "26",
        "name": "Colton Doe",
        "email": "colton@mailinator.com",
        "role": "member"
    },
    {
        "id": "27",
        "name": "Alain Senna",
        "email": "alain@mailinator.com",
        "role": "member"
    },
    {
        "id": "28",
        "name": "Ashwin Jain",
        "email": "ashwin@mailinator.com",
        "role": "member"
    },
    {
        "id": "29",
        "name": "Seema Bhatt",
        "email": "seema@mailinator.com",
        "role": "member"
    },
    {
        "id": "30",
        "name": "Kayla Scarpinski",
        "email": "kayla@mailinator.com",
        "role": "member"
    },
    {
        "id": "31",
        "name": "Ajay Ghosh",
        "email": "ajay@mailinator.com",
        "role": "member"
    },
    {
        "id": "32",
        "name": "Chris Lindberg",
        "email": "chris@mailinator.com",
        "role": "member"
    },
    {
        "id": "33",
        "name": "Christina Mourujärvi",
        "email": "christina@mailinator.com",
        "role": "member"
    },
    {
        "id": "34",
        "name": "Mikhail Bill",
        "email": "mikhail@mailinator.com",
        "role": "member"
    },
    {
        "id": "35",
        "name": "Eino Göregen",
        "email": "eino@mailinator.com",
        "role": "member"
    },
    {
        "id": "36",
        "name": "Zachariah Johansson",
        "email": "zacharaiah@mailinator.com",
        "role": "member"
    },
    {
        "id": "37",
        "name": "Aimaan Mohammed",
        "email": "aimaan@mailinator.com",
        "role": "admin"
    },
    {
        "id": "38",
        "name": "Aika Tsunoda",
        "email": "aika@mailinator.com",
        "role": "member"
    },
    {
        "id": "39",
        "name": "Kimiko Minamoto",
        "email": "kimiko@mailinator.com",
        "role": "member"
    },
    {
        "id": "40",
        "name": "Alyona Baginskaite",
        "email": "alyona@mailinator.com",
        "role": "member"
    },
    {
        "id": "41",
        "name": "Anirudh Mukherjee",
        "email": "anirudh@mailinator.com",
        "role": "member"
    },
    {
        "id": "42",
        "name": "Alyona Gov",
        "email": "alyonagov@mailinator.com",
        "role": "member"
    },
    {
        "id": "43",
        "name": "Robin Singh",
        "email": "robin@mailinator.com",
        "role": "member"
    },
    {
        "id": "44",
        "name": "Vijay Vasudevan",
        "email": "vijayv@mailinator.com",
        "role": "member"
    },
    {
        "id": "45",
        "name": "Steve Smith",
        "email": "steve@mailinator.com",
        "role": "member"
    },
    {
        "id": "46",
        "name": "Anirudh Banerjee",
        "email": "anirudhb@mailinator.com",
        "role": "member"
    }
]);
  const [selectedRows, setSelectedRows] = useState([]);

  const renderTable = () => {
    return (
      <table id="userTable">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.slice((currentPage - 1) * 10, currentPage * 10).map((user, index) => (
            <tr key={index} className={selectedRows.includes(index) ? 'selected' : ''}>
              <td><input type="checkbox" onChange={() => toggleRowSelection(index)} /></td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="edit-btn" onClick={() => editRow(index)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const updatePagination = () => {
    const totalPages = Math.ceil(users.length / 10);
    return (
      <div className="pagination">
        <button className="first-page" onClick={() => changePage('first')} disabled={currentPage === 1}>First Page</button>
        <button className="previous-page" onClick={() => changePage('prev')} disabled={currentPage === 1}>Previous Page</button>
        <span id="currentPage">Page {currentPage} of {totalPages}</span>
        <button className="next-page" onClick={() => changePage('next')} disabled={currentPage === totalPages}>Next Page</button>
        <button className="last-page" onClick={() => changePage('last')} disabled={currentPage === totalPages}>Last Page</button>
      </div>
    );
  };

  const changePage = (action) => {
    const totalPages = Math.ceil(users.length / 10);
    switch (action) {
      case 'first':
        setCurrentPage(1);
        break;
      case 'prev':
        setCurrentPage(Math.max(1, currentPage - 1));
        break;
      case 'next':
        setCurrentPage(Math.min(totalPages, currentPage + 1));
        break;
      case 'last':
        setCurrentPage(totalPages);
        break;
      default:
        break;
    }
  };

  const toggleRowSelection = (index) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(index)) {
        return prevSelectedRows.filter(selectedIndex => selectedIndex !== index);
      } else {
        return [...prevSelectedRows, index];
      }
    });
  };

  const deleteSelected = () => {
    const sortedRows = [...selectedRows].sort((a, b) => b - a);
    const updatedUsers = [...users];
    sortedRows.forEach(index => {
      updatedUsers.splice(index, 1);
    });
    setUsers(updatedUsers);
    setSelectedRows([]);
  };

  const search = () => {
    // Implement your search logic and update users state accordingly
  };

  const editRow = (index) => {
    console.log(`Edit row ${index}`);
  };

  const deleteRow = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="search-bar">
        <input type="text" id="searchInput" placeholder="Search..." className="search-input" />
        <button onClick={search} className="search-icon">Search</button>
      </div>

      {renderTable()}
      {updatePagination()}

      <button onClick={deleteSelected} className="delete-btn">Delete Selected</button>
    </div>
  );
};

export default AdminDashboard;