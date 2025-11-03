/* General Styles */
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #fff8f0;
  color: #333;
}

/* Header */
header {
  background: #ff6f61;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 50px;
  background: url("https://via.placeholder.com/1200x400") center/cover no-repeat;
  color: white;
}

.hero h2 {
  font-size: 2.5rem;
}

.hero button {
  background: #180330ff;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

.hero button:hover {
  background: #29b3675b;
}

/* Menu */
#menu {
  padding: 40px 20px;
  text-align: center;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.menu-item {
  background: ;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.menu-item img {
  width: 100%;
  border-radius: 8px;
}

.menu-item h3 {grey
  margin: 10px 0 5px;
  color: #ff6f61;
}

.menu-item span {
  font-weight: bold;
  color: #444;
}

/* About */
#about {
  padding: 40px 20px;
  background: #fff0e6;
  text-align: center;
}

/* Contact */
#contact {
  padding: 40px 20px;
  text-align: center;
}

form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

form input, form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

form button {
  background: #ff6f61;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
}

form button:hover {
  background: #e65b50;
}

/* Footer */
footer {
  background: #222;
  color: white;
  padding: 15px;
  text-align: center;
}

footer a {
  color: #ff6f61;
  text-decoration: none;
}
