import { d1614 as c0, d1618 as c1 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1618 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryLevel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
