import { d373 as c0 } from '../descriptors/data/22.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10521 as c3, d10522 as c4 } from '../descriptors/data/495.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d373 as d373 } from '../descriptors/data/22.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d373;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestCreditNote"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec545"]:c3(),["SharedCodec546"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestCreditNote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
