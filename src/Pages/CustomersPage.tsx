import { useState } from "react";
import type { Customer } from "../Types/Customer";
import CustomerList from "../Components/CustomerList";
import CustomerDetails from "../Components/CustomerDetails";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "1",
      name: "Sophia Burgos",
      addresses: [
        {
          id: "a1",
          type: "home",
          street: "123 Irisan",
          city: "Baguio",
          isDefault: true,
        },
      ],
      contacts: [
        {
          id: "c1",
          type: "mobile",
          value: "09123456789",
          isPrimary: true,
        },
      ],
    },
    {
      id: "2",
      name: "Benedict Diaz",
      addresses: [
        {
          id: "a2",
          type: "billing",
          street: "456 Quezon Ave",
          city: "Quezon City",
          isDefault: true,
        },
      ],
      contacts: [
        {
          id: "c2",
          type: "email",
          value: "benedict@gmail.com",
          isPrimary: true,
        },
      ],
    },
    {
      id: "3",
      name: "Ara Luna",
      addresses: [
        {
          id: "a3",
          type: "office",
          street: "789 Makati Ave",
          city: "Makati",
          isDefault: true,
        },
      ],
      contacts: [
        {
          id: "c3",
          type: "mobile",
          value: "09987654321",
          isPrimary: true,
        },
      ],
    },
    {
      id: "4",
      name: "Jefferson Fandez",
      addresses: [
        {
          id: "a4",
          type: "shipping",
          street: "101 Cebu St",
          city: "Cebu",
          isDefault: true,
        },
      ],
      contacts: [
        {
          id: "c4",
          type: "social",
          value: "@jefffandez",
          isPrimary: true,
        },
      ],
    },
    {
      id: "5",
      name: "Jana Dy",
      addresses: [
        {
          id: "a5",
          type: "home",
          street: "202 Davao Rd",
          city: "Davao",
          isDefault: true,
        },
      ],
      contacts: [
        {
          id: "c5",
          type: "landline",
          value: "123-4567",
          isPrimary: true,
        },
      ],
    },
  ]);

   const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // ===== FORM STATES =====
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [contactValue, setContactValue] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  // ===== CREATE OR UPDATE CUSTOMER =====
  const handleSave = () => {
    if (!name.trim()) return;

    if (editingId) {
      // ✏️ UPDATE
      setCustomers((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? {
                ...c,
                name,
              }
            : c
        )
      );

      setEditingId(null);
    } else {
      // ➕ CREATE
      const newCustomer: Customer = {
        id: Date.now().toString(),
        name,
        addresses: [
          {
            id: "addr-" + Date.now(),
            type: "home",
            street,
            city,
            isDefault: true,
          },
        ],
        contacts: [
          {
            id: "contact-" + Date.now(),
            type: "mobile",
            value: contactValue,
            isPrimary: true,
          },
        ],
      };

      setCustomers([...customers, newCustomer]);
    }

    setName("");
    setStreet("");
    setCity("");
    setContactValue("");
  };

  // ===== EDIT CUSTOMER =====
  const handleEdit = (customer: Customer) => {
    setName(customer.name);
    setEditingId(customer.id);
  };

  // ===== DELETE CUSTOMER =====
  const handleDelete = (id: string) => {
    setCustomers(customers.filter((c) => c.id !== id));

    if (selectedCustomer?.id === id) {
      setSelectedCustomer(null);
    }
  };

  return (
    <div className="space-y-6">

      {/* ===== FORM ===== */}
      <div className="bg-white p-4 rounded-2xl shadow space-y-3">
        <h2 className="text-lg font-semibold">
          {editingId ? "Edit Customer" : "Add Customer"}
        </h2>

        <input
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />

        {!editingId && (
          <>
            <input
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="border p-2 w-full rounded"
            />

            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border p-2 w-full rounded"
            />

            <input
              placeholder="Contact Number"
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </>
        )}

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingId ? "Update Customer" : "Add Customer"}
        </button>
      </div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT: LIST + ACTIONS */}
        <div className="bg-white p-4 rounded-2xl shadow space-y-2">
          <h2 className="font-semibold mb-2">Customers</h2>

          {customers.map((c) => (
            <div
              key={c.id}
              className="p-2 border rounded flex justify-between items-center"
            >
              <span
                onClick={() => setSelectedCustomer(c)}
                className="cursor-pointer"
              >
                {c.name}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(c)}
                  className="text-blue-500 text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(c.id)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: DETAILS */}
        <div className="md:col-span-2">
          {selectedCustomer ? (
            <CustomerDetails customer={selectedCustomer} />
          ) : (
            <p>Select a customer</p>
          )}
        </div>
      </div>
    </div>
  );
}