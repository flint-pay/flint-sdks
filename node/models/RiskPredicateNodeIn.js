import { d6766 as c0 } from '../descriptors/data/321.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6773 as c1, d6774 as c2 } from '../descriptors/data/322.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6766 as d6766 } from '../descriptors/data/321.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeIn"]:c0(),["SharedCodec1240"]:c1(),["SharedCodec1241"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeIn(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
