document.getElementById("confirm-btn").addEventListener("click", function() {
    // Get input values
    var accountNumber = document.getElementById("account-number").value;
    var accountHolder = document.getElementById("account-holder").value;
    var amount = parseFloat(document.getElementById("amount").value);

    // Calculate the charge based on the amount
    var charge = calculateCharge(amount);

    // Generate transaction ID
    var transactionId = generateTransactionId();

    // Display notification
    var notificationText = `Successful payment! Transfer to ৳${accountHolder} (${accountNumber}) for ৳${amount.toFixed(2)} with transaction ID ${transactionId}. ৳${charge.toFixed(2)} charge applied.`;
    document.getElementById("notification-text").textContent = notificationText;
    document.querySelector(".notification").style.display = "block";
});

// Generate a random transaction ID
function generateTransactionId() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var transactionId = "";
    for (var i = 0; i < 8; i++) {
        transactionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return transactionId;
}

// Calculate the charge based on the amount
function calculateCharge(amount) {
    if (amount >= 100 && amount <= 900) {
        return 7;
    } else if (amount == 1000) {
        return 14;
    } else if (amount == 50000) {
        return 2000;
    } else {
        return 15; // Default charge for amounts not specified
    }
}


