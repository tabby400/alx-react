import normalizedData from './notifications';
import { denormalize } from 'normalizr';

describe('Normalized Data', () => {
  it('should have correct result array', () => {
    const expectedIds = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
    ];

    expect(Object.keys(normalizedData.entities.notifications)).toEqual(expect.arrayContaining(expectedIds));
  });

  it('should have correct users entity', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedUser = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    };

    expect(normalizedData.entities.users[userId]).toEqual(expectedUser);
  });

  it('should have correct messages entity', () => {
    const messageId = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
    const expectedMessage = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    };

    expect(normalizedData.entities.messages[messageId]).toEqual(expectedMessage);
  });

  it('should have correct notifications entity', () => {
    const notificationId = '5debd7642e815cd350407777';
    const expectedNotification = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
    };

    expect(normalizedData.entities.notifications[notificationId]).toEqual(expectedNotification);
  });
});
