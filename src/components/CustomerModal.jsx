import { useEffect, useState } from 'react'

export default function CustomerModal({ isOpen, onClose, customerId, onSave }) {
  const isEditMode = !!customerId;
  const [customer, setCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: '',
  });

  useEffect(() => {
    if (!customerId) return;
    fetch('https://67e0fc4258cc6bf78523ac77.mockapi.io/book/' + customerId)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCustomer(data)
        })
        .catch((err) => console.log(err))
  }, [customerId]);

  // Khi `customer` thay đổi, cập nhật lại form
  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name || '',
        company: customer.company || '',
        orderValue: customer.orderValue || '',
        orderDate: customer.orderDate || '',
        status: customer.status || 'New',
      });
    } else {
      setFormData({
        name: '',
        company: '',
        orderValue: '',
        orderDate: '',
        status: 'New',
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEditMode
        ? `https://67e0fc4258cc6bf78523ac77.mockapi.io/book/${customer.id}`
        : `https://67e0fc4258cc6bf78523ac77.mockapi.io/book`;
      const method = isEditMode ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const updated = await res.json();
      onSave(updated);
      console.log('Update successful:', updated);
      onClose();
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{isEditMode ? 'Edit' : 'Add'} Customer</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="orderValue"
            placeholder="Order Value"
            value={formData.orderValue}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="orderDate"
            placeholder="Order Date"
            value={formData.orderDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="New">New</option>
            <option value="Completed">Completed</option>
            <option value="In-progress">In-progress</option>
          </select>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              {isEditMode ? 'Save Changes' : 'Add Customer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
