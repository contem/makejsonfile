# 📝 makejsonfile

Stream-friendly utility to write an array of JSON objects into a file.

Efficient for large data sets — instead of loading everything into memory, it streams JSON directly to disk.

---

## 📦 Installation

### Using npm

```bash
npm install makejsonfile
```

### Using yarn

```bash
yarn add makejsonfile
```

---

## 🚀 Usage

```js
const makeJSON = require("makejsonfile");

const records = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

makeJSON(records, "./output.json")
  .then(() => console.log("JSON file created successfully."))
  .catch(err => console.error("Failed to write JSON:", err));
```

---

## ⚙️ Options

There are no options required.

| Parameter | Type     | Required | Description                          |
|-----------|----------|----------|--------------------------------------|
| `records` | `Array`  | ✅       | Array of JSON-compatible objects     |
| `file`    | `string` | ✅       | Destination file path                |

---

## 📤 Output Example

**output.json**
```json
[
  { "name": "Alice", "age": 25 },
  { "name": "Bob", "age": 30 }
]
```

---

## 🧪 Test

```bash
node test.js
```

---

## 🪪 License

```
MIT
```