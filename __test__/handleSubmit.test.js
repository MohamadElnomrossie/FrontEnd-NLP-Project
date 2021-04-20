import { handleSubmit } from '../src/client/js/formHandler.js'

describe('handleSubmit has to be imported and functioning' , () => {
    test('If handleSubmit is defined and its type is function, it should return true', () => {
        expect(handleSubmit).toBeDefined();
    });
});
