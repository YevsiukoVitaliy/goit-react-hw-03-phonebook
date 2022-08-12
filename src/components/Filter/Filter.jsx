export const Filter = ({ filter, handleFilterTextChange }) => (
  <label>
    Find contacts by name
    <input
      style={{ display: 'block', marginTop: '15px' }}
      type="text"
      placeholder="Search..."
      value={filter}
      onChange={handleFilterTextChange}
    />
  </label>
);
