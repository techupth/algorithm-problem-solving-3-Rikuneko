// เรามี Array `customers` ซึ่งบรรจุรายชื่อสมาชิก ให้ใช้ Bubble Sort Algorithm เพื่อเรียงลำดับสมาชิกตามลำดับตัวอักษร 
// เช่น ถ้า `customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]` 
// เมื่อ Algorithm นี้ทำงานจะแสดงผลลัพธ์ออกมาบนหน้าจอเป็น
//  `[ "Arthit", "Napasorn", "Pimchanok", "Somchai", "Suchada"]`

customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]

function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  return customers.sort();
}

console.log(sortCustomerName(customers))
// Bubble Sort Algorithm มี Big O เป็นเท่าไร เพราะอะไร
// ตอบคำถามตรงนี้จ้า
// จำไม่ได้ครับ
