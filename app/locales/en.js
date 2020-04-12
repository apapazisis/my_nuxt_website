const myAge = () => {
    const birthday = new Date(1985, 12, 5);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

module.exports = {
    navigation: {
        home: 'home',
        about_me: 'about me',
        skills: 'skills',
        portfolio: 'portfolio',
        contact: 'contact'
    },
    home: {
        title: 'Web Developer Apostolos Papazisis - Home',
        introduction: `<strong>Laravel</strong> und <strong>Vue.Js Web Developer</strong>. Programming auf PHP, Golang, Javascript, Shopware 6 living in Hamburg, Germany. Support people in the development of digital products.`
    },
};
