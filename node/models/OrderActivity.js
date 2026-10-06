import { d1843 as c0, d1842 as c1, d226 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1843 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1843;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderActivity"]:c0(),["SharedCodec491"]:c1(),["SignedMoney"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderActivity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
