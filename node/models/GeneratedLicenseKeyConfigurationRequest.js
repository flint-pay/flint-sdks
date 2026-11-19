import { d834 as c0 } from '../descriptors/data/45.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d834 as d834 } from '../descriptors/data/45.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d834;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GeneratedLicenseKeyConfigurationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGeneratedLicenseKeyConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
