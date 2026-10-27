import { d3940 as c0 } from '../descriptors/data/166.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3614 as c1 } from '../descriptors/data/148.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3940 as d3940 } from '../descriptors/data/166.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3940;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationRecipient"]:c0(),["GiftCardPurchaseRecipientRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardNotificationRecipient(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
