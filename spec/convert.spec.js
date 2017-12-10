describe('Test des parametres de la fonction', function() {
	
	it('la fonction doit prendre 3 parametres', function() {
		expect(convertisseur('USD')).toBe(null);
		expect(convertisseur('USD', 2)).toBe(null);
		expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });
    
  it('les 3 parametres doivent etre du bon type', function() {
		expect(convertisseur('abc', 5,'abc'))..not.toBe(null);
        expect(convertisseur(5,25,'abc')).toBe(null);
        expect(convertisseur('acd',17,25)).toBe(null);
        expect(convertisseur('acd','cbh','vgh')).toBe(null);
        expect(convertisseur(1,2,3)).toBe(null);
    });

});

describe('Test resultats de la fonction', function() {
	
	it('doit convertir des USD dans les autres monnaies', function() {
		
		        
    });
    
    it('doit convertir des EUR dans les autres monnaies', function() {
		
    });

    it('doit convertir des KRW dans les autres monnaies', function() {
		
    });

    it('doit convertir des NZD dans les autres monnaies', function() {
		
    });

     it('ne doit pas convertir des mauvais montants', function() {
		expect(convertisseur('USD',2,'EUR')).not.toBe(null);
        expect(convertisseur('USD',0,'EUR')).toBe(null);
        expect(convertisseur('USD',,'EUR')).toBe(null);
        expect(convertisseur('USD',-5,'EUR')).toBe(null);
    });

});