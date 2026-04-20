import type { Customer } from "../Types/Customer";
import AddressList from "./AddressList";
import ContactList from "./ContactList";

export default function CustomerDetails({ customer }: { customer: Customer }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">{customer.name}</h2>

      <AddressList addresses={customer.addresses} />
      <ContactList contacts={customer.contacts} />
    </div>
  );
}