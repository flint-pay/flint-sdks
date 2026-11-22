import { d9090 as c0 } from '../descriptors/data/411.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1888 as c1 } from '../descriptors/data/94.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1888 as d1888 } from '../descriptors/data/94.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1888;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationRecipient"]:c0(),["RotateGiftCardCodeRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotateGiftCardCodeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
