import { d3162 as c0 } from '../descriptors/data/125.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3109 as c1 } from '../descriptors/data/122.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d141 as c2 } from '../descriptors/data/6.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3299 as c3 } from '../descriptors/data/132.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3293 as c4 } from '../descriptors/data/131.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d141 as d141 } from '../descriptors/data/6.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliverySelectionChoiceRequest"]:c1(),["CreateDeliverySelectionRequest"]:c2(),["DeliverySelectionInstructionsRequest"]:c3(),["DeliverySelectionRecipientRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
