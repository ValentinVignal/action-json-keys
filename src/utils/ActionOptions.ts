import * as core from '@actions/core';
import { KeyFormatMatcher } from '../format/KeyFormatMatcher';
import { OrderChecker, OrderOptions } from '../order/OrderChecker';

/**
 * Options of the Github action
 */
class ActionOptions {
  public readonly fileMatcher: string;
  public readonly order: OrderChecker;
  public readonly keyFormat: KeyFormatMatcher;
  constructor() {
    this.fileMatcher = core.getInput('file-matcher', {required: true});
    this.order = new OrderChecker(core.getInput('order', {required: true}) as OrderOptions);
    this.keyFormat = new KeyFormatMatcher(core.getInput('key-format', {required: true}));
  }
}

/**
 * Instance of the options of the Github action
 */
export const actionOptions = new ActionOptions();
