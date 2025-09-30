 const db = require('../config/db');

// // === INNER JOIN example (implement this one first) ===
 exports.usersWithRoles = (req, res) => {
  const sql = `/* fill with INNER JOIN from Part 3A */`;
   db.query(sql, [], (err, rows) => {
     if (err) return res.status(500).json({ error: err.message });
     return res.json(rows);
   });
 };

// // === LEFT JOIN ===
 exports.usersWithProfiles = (req, res) => {
   const sql = `/* fill with LEFT JOIN from Part 3B */`;
   db.query(sql, [], (err, rows) => {
     if (err) return res.status(500).json({ error: err.message });
     return res.json(rows);
   });
 };

// // === RIGHT JOIN ===
 exports.rolesRightJoin = (req, res) => {
   const sql = `/* fill with RIGHT JOIN from Part 3C */`;
   db.query(sql, [], (err, rows) => {
     if (err) return res.status(500).json({ error: err.message });
     return res.json(rows);
   });
 };

// // === FULL OUTER (UNION) ===
exports.profilesFullOuter = (req, res) => {
   const sql = `/* fill with UNION of LEFT + RIGHT from Part 3D */`;
   db.query(sql, [], (err, rows) => {
     if (err) return res.status(500).json({ error: err.message });
     return res.json(rows);
   });
 };

// // === CROSS JOIN ===
exports.userRoleCombos = (req, res) => {
     const sql = `/* fill with CROSS JOIN from Part 3E */`;
     db.query(sql, [], (err, rows) => {
       if (err) return res.status(500).json({ error: err.message });
       return res.json(rows);
     });
   };


// // === SELF JOIN (referrals) ===
exports.referrals = (req, res) => {
const sql = `/* fill with SELF JOIN from Part 3F */`;
db.query(sql, [], (err, rows) => {
if (err) return res.status(500).json({ error: err.message });
return res.json(rows);
});
};

// // === Latest login per user ===
exports.latestLogin = (req, res) => {
  const sql = `/* fill with LEFT JOIN + subquery from Part 3G */`;
  db.query(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
     return res.json(rows);
   });
};