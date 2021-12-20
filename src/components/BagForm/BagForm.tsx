import React, { useState } from "react";

const BagForm = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    adress: "",
    zipcode: "",
  });

  return (
    <form className="bag-form">
      <input
        placeholder="First Name"
        value={form.firstname}
        onChange={(e) => setForm({ ...form, firstname: e.target.value })}
      />
      <input
        placeholder="Last Name"
        value={form.lastname}
        onChange={(e) => setForm({ ...form, lastname: e.target.value })}
      />
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        type="phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        placeholder="Country"
        value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
      />
      <input
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
      />
      <input
        placeholder="Adress"
        value={form.adress}
        onChange={(e) => setForm({ ...form, adress: e.target.value })}
      />
      <input
        placeholder="Zipcode"
        value={form.zipcode}
        onChange={(e) => setForm({ ...form, zipcode: e.target.value })}
      />
    </form>
  );
};

export default BagForm;
