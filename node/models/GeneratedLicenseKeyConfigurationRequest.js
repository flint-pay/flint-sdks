import { d834 as c0 } from '../descriptors/data/45.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d834 as d834 } from '../descriptors/data/45.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d834;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GeneratedLicenseKeyConfigurationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGeneratedLicenseKeyConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
