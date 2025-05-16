{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 .AppleSystemUIFontMonospaced-Regular;}
{\colortbl;\red255\green255\blue255;\red24\green26\blue30;}
{\*\expandedcolortbl;;\cssrgb\c12157\c13725\c15686;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Import express\
const express = require('express');\
const app = express();\
const port = 3000;\
\
// Middleware to parse JSON bodies\
app.use(express.json());\
\
// Sample in-memory data\
let items = [\
  \{ id: 1, name: 'Apple' \},\
  \{ id: 2, name: 'Banana' \}\
];\
\
// GET all items\
app.get('/items', (req, res) => \{\
  res.json(items);\
\});\
\
// GET single item by ID\
app.get('/items/:id', (req, res) => \{\
  const item = items.find(i => i.id === parseInt(req.params.id));\
  if (!item) return res.status(404).json(\{ message: 'Item not found' \});\
  res.json(item);\
\});\
\
// POST a new item\
app.post('/items', (req, res) => \{\
  const newItem = \{\
    id: items.length + 1,\
    name: req.body.name\
  \};\
  items.push(newItem);\
  res.status(201).json(newItem);\
\});\
\
// PUT update item by ID\
app.put('/items/:id', (req, res) => \{\
  const item = items.find(i => i.id === parseInt(req.params.id));\
  if (!item) return res.status(404).json(\{ message: 'Item not found' \});\
  item.name = req.body.name;\
  res.json(item);\
\});\
\
// DELETE item by ID\
app.delete('/items/:id', (req, res) => \{\
  const index = items.findIndex(i => i.id === parseInt(req.params.id));\
  if (index === -1) return res.status(404).json(\{ message: 'Item not found' \});\
  const deletedItem = items.splice(index, 1);\
  res.json(deletedItem[0]);\
\});\
\
// Start server\
app.listen(port, () => \{\
  console.log(`API running at http://localhost:$\{port\}`);\
\});\
}