const myAge = () => {
    const birthday = new Date(1985, 12, 5);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

module.exports = {
    navigation: {
        home: 'home',
        about_me: 'über mich',
        skills: 'skills',
        portfolio: 'portfolio',
        contact: 'kontakt'
    },
    home: {
        title: 'Web Entwickler Apostolos Papazisis - Home',
        introduction: `<strong>Laravel</strong> und <strong>Vue.Js Webentwickler</strong>. Programmierung auf PHP, Golang, Javascript, Shopware 6 lebt in Hamburg, Deutschland. Unterstütze Menschen bei der Entwicklung digitaler Produkte.`
    },
};
