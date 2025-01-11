function calculateAge() {
    const birthDate = new Date('2009-03-01T06:00:00');
    const now = new Date();
    
    const diffMs = now - birthDate;
    // + prestupny roky
    const ageDecimal = diffMs / (1000 * 60 * 60 * 24 * 365.242189);
    
    document.getElementById('age').textContent = ageDecimal.toFixed(10);
}

calculateAge();
setInterval(calculateAge, 50);