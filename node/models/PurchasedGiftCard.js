import { d2100 as c0 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2100 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PurchasedGiftCard"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePurchasedGiftCard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
