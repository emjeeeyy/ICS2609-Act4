# SQL JOINs & Reports API (Beginner-Friendly)

## SQL JOINs Explained

A **JOIN** combines rows from two or more tables based on a related column. Here are the main types:

### 1. INNER JOIN
- Returns only rows that exist in **both tables**.
- Example: Show users who have roles assigned.
- Think: *“Only show matches in both tables.”*

### 2. LEFT JOIN (LEFT OUTER JOIN)
- Returns **all rows from the left table**, and matching rows from the right table.
- If no match in the right table, it shows `NULL`.
- Think: *“Show everything from the left table, even if there’s no match on the right.”*

### 3. RIGHT JOIN (RIGHT OUTER JOIN)
- Returns **all rows from the right table**, and matching rows from the left table.
- If no match in the left table, it shows `NULL`.
- Think: *“Show everything from the right table, even if the left table doesn’t have it.”*

### 4. FULL OUTER JOIN
- Returns **all rows from both tables**, matched where possible.
- If no match exists, it shows `NULL` for the missing side.
- Think: *“Show everything from both tables, match or not.”*

---

## /api/reports Endpoints

These endpoints generate **reports from the database**. Most require admin access.

| Endpoint | Purpose | Auth Required? |
|----------|---------|----------------|
| `/api/reports/users-with-roles` | Lists all users and their assigned roles | Yes |
| `/api/reports/users-with-profiles` | Lists all users and their profile info | Yes |
| `/api/reports/roles-right-join` | Shows roles even if no users are assigned (RIGHT JOIN demo) | Yes |
| `/api/reports/profiles-left-join` *(example)* | Shows all users and their profiles (LEFT JOIN demo) | Yes |

> Tip: Use these endpoints to **visualize your database relationships** without writing SQL manually.
