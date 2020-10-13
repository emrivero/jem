const { expect } = require('chai');
const cm = require('../lib/config_manager');

describe('Configuration Manager test suite', () => {
  afterEach(() => {
    cm.reset();
  });
  const tasks = [
    'Tarea De Errores',
    'Tarea DeErrores',
    'proyecto Mario Bros',
  ];
  const toRemove = 'Tarea DeErrores';
  const toEdit = 'proyecto Mario Bros';
  const edited = 'proyecto Sonic';

  it('#addTask()', () => {
    tasks.forEach(task => cm.addTask(task));
    expect(cm.configuration.tasks).eql(tasks);
  });

  it('#removeTask()', () => {
    tasks.forEach(task => cm.addTask(task));
    cm.removeTask(toRemove);
    expect(cm.configuration.tasks).eql(['Tarea De Errores', 'proyecto Mario Bros']);
  });

  it('#editTask()', () => {
    cm.addTask(toEdit);
    expect(cm.configuration.tasks).eql([toEdit]);
    cm.editTask(toEdit, edited);
    expect(cm.configuration.tasks).eql([edited]);
  });
});
