import type { Customer } from "../Types/Customer";

interface Props {
  customers: Customer[];
  onSelect: (customer: Customer) => void;
}

export default function CustomerList({ customers, onSelect }: Props) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Customers</h2>

      {customers.map((c) => (
        <div
          key={c.id}
          onClick={() => onSelect(c)}
          className="p-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-200"
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}