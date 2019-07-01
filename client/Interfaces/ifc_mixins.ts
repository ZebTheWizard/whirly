import {GameBlock} from '../lib/GameBlock'

export interface Constructor<I extends any> {
  new(...args: any[]): I;
}