import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8279 as c1 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1497 as c2 } from '../descriptors/data/74.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8272 as c3 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10233 as c4, d10238 as c5, d10239 as c6 } from '../descriptors/data/477.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1497 as d1497 } from '../descriptors/data/74.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1497;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemInputCustomFixed"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2148"]:c4(),["SharedCodec2153"]:c5(),["SharedCodec2154"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemInputCustomFixed(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
