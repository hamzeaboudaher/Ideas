function generateQRCode() {
    const url = document.getElementById("urlInput").value;
    const qrcodeDiv = document.getElementById("qrcode");

    // Clear previous QR code
    qrcodeDiv.innerHTML = "";

    // Generate new QR code
    const qrcode = new QRCode(qrcodeDiv, {
        text: url,
        width: 250,
        height: 250,
    });
}