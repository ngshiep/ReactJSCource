function is_email(str) {
  regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
  if (regexp.test(str)) {
    return true;
  }
  return false;
}
//mail hợp lệ
console.log(is_email("a@gmail.com"));
console.log(is_email("ab@yahoo.com"));
console.log(is_email("abc@hotmail.com"));
//mail không hợp lệ
console.log(is_email("@gmail.com"));
console.log(is_email("ab@gmail."));
console.log(is_email("@#abc@gmail.com"));