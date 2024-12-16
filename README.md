## **Pokédex GraphQL**

A simple Pokédex web application built with **GraphQL** and JavaScript, allowing you to fetch and display Pokémon details.

### **Project Demo**

You can test the project live here:  
👉 [https://satodu.github.io/pokedex-graphql/](https://satodu.github.io/pokedex-graphql/)

---

### **Features**

- Fetch Pokémon details using a GraphQL API.
- Display Pokémon information, including:
  - Name
  - Sprites (Original and Shiny)
  - Types
  - Base stats (HP, Attack, Defense, etc.)
  - Learnsets (Level-Up Moves with details like type, power, and accuracy)
- Responsive layout using **Bootstrap 5**.

---

### **Project Structure**

The project is organized as follows:

```plaintext
pokedex-graphql-node/
├── docs/                   # Public files for GitHub Pages
│   ├── index.html          # Main HTML file
│   ├── script.js           # JavaScript logic
│
├── src/                    # Source files
│   ├── queries/            # GraphQL queries
│   │   └── getPokemon.js
│   └── apiClient.js        # API client setup
│
├── .gitignore              # Git ignore file
├── index.js                # Node.js entry file (unused here)
├── package.json            # Project metadata
├── package-lock.json       # Dependency lockfile
├── README.md               # Documentation
├── static.yml              # GitHub Pages workflow
└── test.js                 # Test file

```

---

### **Setup Instructions**

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/satodu/pokedex-graphql.git
   cd pokedex-graphql
   ```

2. Install dependencies (optional):
   ```bash
   npm install
   ```

3. Serve the `docs` folder locally using a static server.

   **Option 1: Python**
   ```bash
   cd docs
   python3 -m http.server
   ```

   **Option 2: Node.js**
   ```bash
   npx serve docs
   ```

4. Open the app in your browser:
   ```
   http://localhost:8000
   ```

---

### **Technologies Used**

- **GraphQL**: For fetching Pokémon data.
- **JavaScript**: Main programming language.
- **Bootstrap 5**: For styling and layout.
- **GitHub Pages**: For project hosting.

---

### **API**

The project uses a **GraphQL API** to fetch Pokémon data.  
You can view or test the queries using tools like **GraphQL Playground** or **Postman**.

---

### **Deployment**

The project is deployed automatically to **GitHub Pages** using a GitHub Actions workflow.  
The workflow uploads the contents of the `docs` folder and makes the