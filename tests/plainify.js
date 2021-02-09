'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({ foo: 'bar', baz: 42 }), { 'foo': 'bar', 'baz': 42 });

		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42
			}
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42
		};

		assert.deepEqual(plainify(nested1), plain1);

		const nested2 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42
						}
					}
				}
			}
		};

		const plain2 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42
		};

		assert.deepEqual(plainify(nested2), plain2);
	});
});

QUnit.module('Мои тесты функции plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		const nested1 = {
			human: {
				height: 178,
				mass: 80,
				name: 'Jack',
				sername: 'Jackson',
				adress: {
					country: 'Russia',
					city: 'Moscow'
				}
			}
		};

		const plain1 = {
			'human.height': 178,
			'human.mass': 80,
			'human.name': 'Jack',
			'human.sername': 'Jackson',
			'human.adress.country': 'Russia',
			'human.adress.city': 'Moscow',
		};

		assert.deepEqual(plainify(nested1), plain1);


		const nested2 = {
			deep: {
				nested: {
					object: {
						fields: {
							foo: {
								bar: {
									baz: 42
								}
							}
						}
					}
				}
			},
			deep2: {
				nested2: {
					object2: {
						fields2: {
							foo2: {
								bar2: {
									baz2: 42
								}
							}
						}
					}
				}
			}
		};

		const plain2 = {
			'deep.nested.object.fields.foo.bar.baz': 42,
			'deep2.nested2.object2.fields2.foo2.bar2.baz2': 42,
		};

		assert.deepEqual(plainify(nested2), plain2);
	});
});


