// เรามี Array `customers` ซึ่งบรรจุรายชื่อสมาชิก ให้ใช้ Bubble Sort Algorithm เพื่อเรียงลำดับสมาชิกตามลำดับตัวอักษร 
// เช่น ถ้า `customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]` 
// เมื่อ Algorithm นี้ทำงานจะแสดงผลลัพธ์ออกมาบนหน้าจอเป็น
//  `[ "Arthit", "Napasorn", "Pimchanok", "Somchai", "Suchada"]`

customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]

function sortCustomerName(customers) {
    // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - i - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}

console.log(sortCustomerName(customers))
// Bubble Sort Algorithm มี Big O เป็นเท่าไร เพราะอะไร
//เป็น O(n^2) เพราะในกรณีที่แย่ที่สุด อัลกอริทึมจะต้องทำการเปรียบเทียบและสลับตำแหน่งทุกคู่
// ของสมาชิกในอาร์เรย์ ทำให้จำนวนการดำเนินการเพิ่มขึ้นเป็นกำลังสองตามจำนวนสมาชิกในอาร์เรย์

