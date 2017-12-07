var mesDevises = {
	'USD': 1,
	'EUR': 0.84, // 1 USD = 0.84 EUR
	'NZD': 1.45,
	'KRW': 1086
}

function convertisseur(deviseOrigine, montantOrigine, deviseVoulue) {
	var result = null;

	if (deviseOrigine && montantOrigine && deviseVoulue) {

		if (deviseOrigine === "USD" || deviseOrigine === "EUR" ||
			deviseOrigine === "NZD" || deviseOrigine === "KRW") {

                if (deviseVoulue === "USD" || deviseVoulue === "EUR" ||
                    deviseVoulue === "NZD" || deviseVoulue === "KRW") {

                    if (typeof montantOrigine === 'number' && montantOrigine > 0) {

                        result = (montantOrigine / mesDevises[deviseOrigine]) * mesDevises[deviseVoulue];
                    }
                }
		}
	}
	return result;
}
