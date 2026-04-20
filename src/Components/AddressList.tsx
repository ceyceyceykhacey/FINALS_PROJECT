import type { Address } from "../Types/Customer";

export default function AddressList({ addresses }: { addresses: Address[] }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Addresses</h3>

      {addresses.map((addr) => (
        <div
          key={addr.id}
          className="p-3 border rounded-lg mb-2 flex justify-between"
        >
          <div>
            <p className="font-medium">{addr.type}</p>
            <p className="text-sm text-gray-600">
              {addr.street}, {addr.city}
            </p>
          </div>

          {addr.isDefault && (
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">
              Default
            </span>
          )}
        </div>
      ))}
    </div>
  );
}