import { d6765 as c0 } from '../descriptors/data/321.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6773 as c1 } from '../descriptors/data/322.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6765 as d6765 } from '../descriptors/data/321.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparison"]:c0(),["SharedCodec1240"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparison(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
