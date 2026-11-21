import { d1291 as c0 } from '../descriptors/data/63.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9847 as c1, d9848 as c2, d9849 as c3, d9850 as c4, d9851 as c5, d9852 as c6, d9853 as c7, d9854 as c8 } from '../descriptors/data/456.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9855 as c9, d9856 as c10 } from '../descriptors/data/457.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1291 as d1291 } from '../descriptors/data/63.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1849"]:c1(),["SharedCodec1850"]:c2(),["SharedCodec1851"]:c3(),["SharedCodec1852"]:c4(),["SharedCodec1853"]:c5(),["SharedCodec1854"]:c6(),["SharedCodec1855"]:c7(),["SharedCodec1856"]:c8(),["SharedCodec1857"]:c9(),["SharedCodec1858"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
