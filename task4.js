function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName) {
        return 'invalid';
    } else if (obj.birthYear.toString().length < 4) {
        return 'invalid';
    } else if (obj.birthYear <= 0) {
        return 'invalid';
    }
    let site = obj.siteName;
    let siteNameCapital = site[0].toUpperCase() + site.slice(1);
    let name = obj.name;
    let birth = obj.birthYear;
    return `${siteNameCapital}#${name}@${birth}`;
}

