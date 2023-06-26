function is_account(str) {
  regexp = /^[_a-z0-9]{6,}$/;
  if (regexp.test(str)) {
    return true;
  }
  return false;
}
//account hợp lệ
console.log(is_account("123abc_"));
console.log(is_account("_abc123"));
console.log(is_account("______"));
console.log(is_account("123456"));
console.log(is_account("abcdefg"));

//account không hợp lệ
console.log(is_account(".@"));
console.log(is_account("12345"));
console.log(is_account("1234_"));
console.log(is_account("abcde"));