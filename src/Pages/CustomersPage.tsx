import { useState } from "react";
import type { Customer } from "../Types/Customer";
import CustomerList from "../Components/CustomerList";
import CustomerDetails from "../Components/CustomerDetails";

export default function CustomersPage() {
  const [customers] = useState<Customer[]>([
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

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CustomerList customers={customers} onSelect={setSelectedCustomer} />

      <div className="md:col-span-2">
        {selectedCustomer ? (
          <CustomerDetails customer={selectedCustomer} />
        ) : (
          <p>Select a customer</p>
        )}
      </div>
    </div>
  );
}