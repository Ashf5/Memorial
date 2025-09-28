# Project for Fallen Soldiers

## Overview
This project is a web application built with **TypeScript, Express, React, and PostgreSQL**.  
Its purpose is to encourage people to perform good deeds in memory of soldiers who were killed in the Iron Swords war.  

### Core Idea
- The homepage displays a **carousel of soldier cards** (shuffled randomly) with names and pictures.  
- Users can **select a soldier**, visit their personal page, and choose from a list of good deeds (or add a custom deed) to do in their memory.  
- A **search bar** allows quick lookup of specific soldiers.  

---

## Features
- Browse soldiers via carousel or search.
- View soldier details (name, age, date they fell, and picture).
- Submit a deed in memory of a soldier.
- Track total number of deeds completed.

---

## Environment Variables 
- PGDATABASE: A database connection string (I used neon).
- SERVERDOMAIN: Used for the email functionality (Using mailersend)
- APIKEY: An api key from mailersend
- Note: There are also a few hardcoded values that start with APIURL that will have to be updated

---

## Database Schema

### Soldiers
Stores basic information about each fallen soldier.

```sql
CREATE TABLE soldiers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  age INTEGER,
  dateFell VARCHAR(75),
  image VARCHAR(250)
);
```

### Deeds
Records good deeds performed in memory of specific soldiers.

```sql
CREATE TABLE deeds (
  id SERIAL PRIMARY KEY,
  deed VARCHAR(100) NOT NULL,
  soldier_id INTEGER NOT NULL,
  email VARCHAR(50), 
  created_at TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY (soldier_id) REFERENCES soldiers(id)
);
```


```sql
CREATE TABLE total_deeds (
  id SERIAL PRIMARY KEY,
  total_count BIGINT DEFAULT 0
);
```
