describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));


	it('it should return people by favoriteFood', function () {
		var people = [{name: "Andy",favoriteFood:"pizza"},{name: 'Cory',favoriteFood:'salad'},{name: 'Lauren',favoriteFood: 'salad'}];

		var filteredList = $filter('favoriteFood')(people, 'salad')

		expect(filteredList.length).toEqual(2);
		expect(filteredList[1].name).toEqual('Lauren')
	});

});
