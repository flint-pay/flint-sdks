import { d1864 as c0, d1861 as c1, d1863 as c2, d1862 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1864 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1864;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderGiftCardAllocationAcceptance"]:c0(),["SharedCodec493"]:c1(),["SharedCodec494"]:c2(),["SharedCodec495"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderGiftCardAllocationAcceptance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
