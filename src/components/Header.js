export default function Header({ handleDarkMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={() => handleDarkMode((prevValue) => !prevValue)}>Toggle Mode</button>
    </div>
  )
}
