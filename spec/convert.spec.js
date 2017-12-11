describe('Test des parametres de la fonction', function() {
	
	it('la fonction doit prendre 3 parametres', function() {
	expect(convertisseur('USD')).toBe(null);
	expect(convertisseur('USD', 2)).toBe(null);
	expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });
    
  it('les 3 parametres doivent etre du bon type', function() {
	    expect(convertisseur(5,25,'abc')).toBe(null);
        expect(convertisseur('acd',17,25)).toBe(null);
        expect(convertisseur('acd','cbh','vgh')).toBe(null);
        expect(convertisseur(1,2,3)).toBe(null);
    });

});

describe('Test resultats de la fonction', function() {
	
	it('doit convertir des USD dans les autres monnaies', function() {
	    expect(convertisseur('USD', 1, 'NZD')).toEqual(1.45);
        expect(convertisseur('USD', 1, 'KRW')).toEqual(1086);
        expect(convertisseur('USD', 1, 'EUR')).toEqual(0.84);
    });
    
    it('doit convertir des EUR dans les autres monnaies', function() {
        expect(convertisseur('EUR', 1, 'NZD')).toEqual(1.682);
        expect(convertisseur('EUR', 1, 'KRW')).toEqual(1259.76);
        expect(convertisseur('EUR', 0.86, 'USD')).toEqual(1);
    });

    it('doit convertir des NZD dans les autres monnaies', function() {
	    expect(convertisseur('NZD', 1.45, 'USD')).toEqual(1);
        expect(convertisseur('NZD', 1, 'KRW')).toEqual(738.48);
        expect(convertisseur('NZD', 1, 'EUR')).toEqual(0.57);
    });

    it('doit convertir des KRW dans les autres monnaies', function() {
	    expect(convertisseur('KRW', 1259.76, 'EUR')).toEqual(1);
        expect(convertisseur('KRW', 738.48, 'NZD')).toEqual(1);
        expect(convertisseur('KRW', 1086, 'USD')).toEqual(1);
    });

     it('ne doit pas convertir des mauvais montants', function() {
	expect(convertisseur('USD',2,'EUR')).not.toBe(null);
        expect(convertisseur('USD',0,'EUR')).toBe(null);
        expect(convertisseur('USD',null,'EUR')).toBe(null);
        expect(convertisseur('USD',-5,'EUR')).toBe(null);
    });

});
