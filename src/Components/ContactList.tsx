import type { Contact } from "../Types/Customer";

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Contacts</h3>

      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="p-3 border rounded-lg mb-2 flex justify-between"
        >
          <div>
            <p className="font-medium">{contact.type}</p>
            <p className="text-sm text-gray-600">{contact.value}</p>
          </div>

          {contact.isPrimary && (
            <span className="text-xs bg-green-100 px-2 py-1 rounded">
              Primary
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
