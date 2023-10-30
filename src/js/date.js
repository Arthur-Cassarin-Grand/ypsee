function getDateInXDays(xDays) {
    const today = new Date();
    const inXDays = new Date(today);
    inXDays.setDate(today.getDate() + xDays);
    let dayOfWeek = inXDays.getDay();
    if (dayOfWeek === 6) {
        inXDays.setDate(inXDays.getDate() + 2);
    } else if (dayOfWeek === 0) {
        inXDays.setDate(inXDays.getDate() + 1);
    }
    const options = { day: 'numeric', month: 'long' };
    return inXDays.toLocaleDateString('fr-FR', options).toUpperCase();
};