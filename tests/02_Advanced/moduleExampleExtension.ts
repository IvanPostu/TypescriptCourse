import { ClassExample } from './moduleExample';

/**
 * Interface merging and module augmentation
 */
declare module './moduleExample' {
  interface ClassExample {
    newMethod: () => 'hello';
  }
}

ClassExample.prototype.newMethod = function () {
  return 'hello';
};
