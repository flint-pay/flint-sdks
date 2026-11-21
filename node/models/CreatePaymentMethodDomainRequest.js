import { d359 as c0 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10286 as c1 } from '../descriptors/data/481.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d359 as d359 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentMethodDomainRequest"]:c0(),["SharedCodec536"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
