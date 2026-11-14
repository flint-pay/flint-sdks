import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8091 as c1, d8092 as c2, d8093 as c3, d8094 as c4, d8095 as c5, d8096 as c6 } from '../descriptors/data/394.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6684 as c7 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5678 as c8 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5678 as d5678 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5678;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1773"]:c1(),["SharedCodec1774"]:c2(),["SharedCodec1775"]:c3(),["SharedCodec1776"]:c4(),["SharedCodec1777"]:c5(),["SharedCodec1778"]:c6(),["SharedCodec84"]:c7(),["UpdatePayoutSettingsRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
