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