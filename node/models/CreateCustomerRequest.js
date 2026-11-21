import { d8158 as c0, d8156 as c7, d8157 as c8 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8430 as c1 } from '../descriptors/data/374.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d263 as c2 } from '../descriptors/data/12.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8480 as c3, d8471 as c5, d8472 as c6, d8468 as c10 } from '../descriptors/data/376.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c4 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8457 as c9 } from '../descriptors/data/375.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d263 as d263 } from '../descriptors/data/12.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateCustomerAddressRequest"]:c1(),["CreateCustomerRequest"]:c2(),["DocumentTaxIDRequest"]:c3(),["MetadataRequest"]:c4(),["SharedCodec1722"]:c5(),["SharedCodec1723"]:c6(),["SharedCodec2"]:c7(),["SharedCodec3"]:c8(),["SharedCodec372"]:c9(),["TaxIdentityPatch"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
