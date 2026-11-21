import { d8057 as c0 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8155 as c1 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7773 as c2 } from '../descriptors/data/327.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7773 as d7773 } from '../descriptors/data/327.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7773;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3081"]:c0(),["SharedCodec3084"]:c1(),["UpdateLicenseKeyRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
