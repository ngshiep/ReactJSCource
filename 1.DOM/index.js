function is_usZipCode(str) {
  regexp = /(^[0-9]{5})?(?:\s?-?\s?[0-9]{4})?$/;
  if (regexp.test(str)) {
    return true;
  }
  return false;
}
