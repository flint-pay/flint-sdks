import { d1294 as c0 } from '../descriptors/data/64.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9847 as c1, d9848 as c2, d9849 as c3, d9850 as c4 } from '../descriptors/data/456.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1294 as d1294 } from '../descriptors/data/64.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestDeviceCode"]:c0(),["SharedCodec1849"]:c1(),["SharedCodec1850"]:c2(),["SharedCodec1851"]:c3(),["SharedCodec1852"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestDeviceCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
