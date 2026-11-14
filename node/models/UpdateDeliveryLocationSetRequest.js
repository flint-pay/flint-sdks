import { d6332 as c0, d6337 as c3 } from '../descriptors/data/291.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5920 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c2 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5645 as c4 } from '../descriptors/data/247.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5645 as d5645 } from '../descriptors/data/247.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5645;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryLocationSetConfiguration"]:c0(),["SharedCodec1692"]:c1(),["SharedCodec1695"]:c2(),["SharedCodec1703"]:c3(),["UpdateDeliveryLocationSetRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
