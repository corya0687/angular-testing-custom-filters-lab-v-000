describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('Should remove all Vowels', function () {
		let testString = 'This ate the monkey';
		results = $filter('removeAllVowels')(testString)
		expect(results).toEqual('Ths t th mnky')
	})
});
