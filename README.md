# 🎮 Tic-Tac-Toe Game (JavaScript | MVC-Based)

An interactive Tic-Tac-Toe web application built using **HTML, CSS, and JavaScript**, showcasing **game logic, state management, event handling, and dynamic DOM updates**, structured using a simple **MVC (Model-View-Controller)** approach.

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript  

---

## 💡 Skills Demonstrated

- Game State Management  
- DOM Manipulation  
- Event Handling  
- Conditional Logic & Win Detection  
- Turn-Based Logic Implementation  
- Dynamic UI Updates  
- MVC-Based Code Structuring  
- Debugging & Problem Solving  

---

## 🧩 MVC Architecture (Code-Based Mapping)

This project follows a **logical MVC structure implemented within JavaScript**:

### 🔹 Model (M) – Game State & Logic
Handles the core game data and rules.

- Maintains the **board state** (array representing 9 cells)  
- Tracks **current player (X or O)**  
- Contains logic for:
  - Checking **win conditions**  
  - Detecting **draw state**  
  - Updating game state after each move  

👉 From the code:
- Board array storing cell values  
- Functions that evaluate winning combinations  
- Logic that switches players and validates moves  

---

### 🔹 View (V) – UI Representation
Handles everything related to what the user sees.

- Defined in **`index.html` and `styles.css`**  
- Displays:
  - Game grid (cells)  
  - Player moves (X / O)  
  - Game result (winner/draw message)  
- Responsible for visual updates  

👉 From the code:
- Grid layout for Tic-Tac-Toe board  
- Styled cells and UI components  
- Sections where game status is displayed  

---

### 🔹 Controller (C) – Interaction & Flow
Connects user actions to game logic and updates the UI.

- Listens for **cell click events**  
- Calls Model logic to:
  - Update board state  
  - Check winner/draw  
- Updates View using DOM manipulation  

👉 From the code:
- `addEventListener()` on grid cells  
- Reading clicked cell index  
- Updating UI with `.textContent` / `.innerHTML`  
- Reset button event handling  

---

## 📂 Project Structure

```bash
public/
  index.html    # View: game layout and UI structure
  styles.css    # View: styling for board and UI
  app.js        # Controller + Model: game logic, state, and DOM updates
