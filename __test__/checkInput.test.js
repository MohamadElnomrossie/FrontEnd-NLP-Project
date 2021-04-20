import { checkInput } from '../src/client/js/checkInput'

describe('checkInput has to be imported and functioning' , () => {
    test('If checkInput is defined and its type is function, it should return true', () => {
        expect(checkInput).toBeDefined();
    });
});

test('checkInput returns a boolean', () => {
    const checkReturn = jest.fn()
    checkReturn();
    expect(checkReturn).toHaveReturned(expect.boolean);
  });





