# ♟️ Chess Game - React + TypeScript

A fully functional chess game built with React and TypeScript using object-oriented programming principles.

## ✨ Features

- ✅ Complete chess rules implementation
- ✅ Move validation for all pieces (King, Queen, Rook, Bishop, Knight, Pawn)
- ✅ Available moves highlighting
- ✅ Check and checkmate detection
- ✅ Player turn switching
- ✅ Captured pieces display

---

## 🛠️ Tech Stack

### Core Technologies

- **React**
- **TypeScript**
- **Vite**
- **CSS3**

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/dxstrxyme/chess.git

# Navigate to the project directory
cd chess

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── BoardComponent.tsx    # Chess board component
│   ├── CellComponent.tsx     # Board cell component
│   ├── LostFigures.tsx       # Captured pieces component
│   └── Timer.tsx             # Game timer component
├── models/
│   ├── figures/
│   │   ├── Figure.ts         # Base figure class
│   │   ├── King.ts           # King piece logic
│   │   ├── Queen.ts          # Queen piece logic
│   │   ├── Rook.ts           # Rook piece logic
│   │   ├── Bishop.ts         # Bishop piece logic
│   │   ├── Knight.ts         # Knight piece logic
│   │   └── Pawn.ts           # Pawn piece logic
│   ├── Board.ts              # Game board logic
│   ├── Cell.ts               # Board cell logic
│   ├── Colors.ts             # Color enums
│   └── Player.ts             # Player logic
├── assets/                   # Static assets
├── App.tsx                   # Main application component
├── App.css                   # Global styles
└── main.tsx                  # Application entry point
```

---

## 🔧 Key Implementation Features

### 🧱 Architecture

- **Object-Oriented Design** – Each chess piece inherits from the base Figure class
- **TypeScript Integration** – Strict typing for enhanced code reliability
- **Component-Based Structure** – Modular React components for maintainability
- **Separation of Concerns** – Game logic is separated from UI components

### ♜ Game Logic

- **Move Validation** – Each piece implements its own canMove() method
- **Board State Management** – Deep copy used for move checks and history
- **Turn Management** – Alternating players with validation
- **Threat Detection** – Check and checkmate logic included

---

## 🚧 Future Enhancements

- [ ] Castling implementation
- [ ] En passant capture
- [ ] Pawn promotion
- [ ] Move history tracking
- [ ] Game timer functionality
- [ ] Save/load game state
- [ ] Sound effects
- [ ] Online multiplayer support

---

## 🎮 How to Play

1. **Select a piece** - Click on any of your pieces to select it
2. **View available moves** - Valid moves will be highlighted on the board
3. **Make your move** - Click on a highlighted square to move your piece
4. **Take turns** - Players alternate turns (white starts first)
5. **Capture pieces** - Move onto opponent's squares to capture their pieces
6. **Win the game** - Put your opponent in checkmate while avoiding it yourself!

---

## 👨‍💻 Author

**Nikita Gres**

- GitHub: [@dxstrxyme](https://github.com/dxstrxyme)
- Email: dxstrxyme@gmail.com

---

<div align="center">

</div>
