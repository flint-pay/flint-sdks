import { d197 as c0 } from '../descriptors/data/8.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7097 as c1 } from '../descriptors/data/335.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as c2, d7018 as c5, d7019 as c6, d7020 as c7, d7016 as c8, d7013 as c9, d7014 as c10, d7015 as c11 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7080 as c3, d7081 as c4 } from '../descriptors/data/334.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d197 as d197 } from '../descriptors/data/8.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConsumeInventoryReservationRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec188"]:c3(),["SharedCodec189"]:c4(),["SharedCodec301"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["SharedCodec304"]:c8(),["SharedCodec792"]:c9(),["SharedCodec793"]:c10(),["SharedCodec794"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
