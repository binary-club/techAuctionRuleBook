// Function to create binary elements
function createBinaryElements() {
    const logoWrappers = document.querySelectorAll('.logo-wrapper');
    
    logoWrappers.forEach(logoWrapper => {
        // Create binary ring
        const binaryRing = document.createElement('div');
        binaryRing.className = 'binary-ring';
        
        // Create binary bits
        for (let i = 0; i < 10; i++) {
            const bit = document.createElement('span');
            bit.className = 'binary-bit';
            bit.textContent = Math.random() > 0.5 ? '1' : '0';
            bit.style.left = `${Math.random() * 100}%`;
            bit.style.top = `${Math.random() * 100}%`;
            bit.style.animationDelay = `${Math.random() * 5}s`;
            binaryRing.appendChild(bit);
        }
        
        // Create rain effect
        const binaryRain = document.createElement('div');
        binaryRain.className = 'binary-rain';
        
        // Create rain columns
        for (let i = 0; i < 10; i++) {
            const column = document.createElement('div');
            column.className = 'rain-column';
            column.style.left = `${i * 10}%`;
            column.style.animationDelay = `${Math.random() * 5}s`;
            
            // Add binary digits to the column
            for (let j = 0; j < 5; j++) {
                const digit = document.createElement('div');
                digit.textContent = Math.random() > 0.5 ? '1' : '0';
                digit.style.animationDelay = `${Math.random() * 5}s`;
                column.appendChild(digit);
            }
            
            binaryRain.appendChild(column);
        }
        
        // Add elements to the logo wrapper
        logoWrapper.appendChild(binaryRing);
        logoWrapper.appendChild(binaryRain);
    });
}

// Function to update binary content
function updateBinaryContent() {
    // Update binary bits
    const bits = document.querySelectorAll('.binary-bit');
    bits.forEach(bit => {
        bit.textContent = Math.random() > 0.5 ? '1' : '0';
    });
    
    // Update rain digits
    const rainDigits = document.querySelectorAll('.rain-column div');
    rainDigits.forEach(digit => {
        digit.textContent = Math.random() > 0.5 ? '1' : '0';
    });
}

// Start the animation immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBinaryElements);
} else {
    createBinaryElements();
}

// Update binary content every 5 seconds
setInterval(updateBinaryContent, 5000); 