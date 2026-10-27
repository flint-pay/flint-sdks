import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5005 as c1 } from '../descriptors/data/228.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5007 as c2, d5008 as c3, d5009 as c4, d5010 as c5, d5011 as c6, d5012 as c7, d5013 as c8, d5014 as c9, d5015 as c10, d5016 as c11, d5017 as c12, d5018 as c13, d5019 as c14, d5020 as c15 } from '../descriptors/data/229.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5005 as d5005 } from '../descriptors/data/228.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5005;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec1119"]:c2(),["SharedCodec1120"]:c3(),["SharedCodec1121"]:c4(),["SharedCodec1122"]:c5(),["SharedCodec208"]:c6(),["SharedCodec209"]:c7(),["SharedCodec210"]:c8(),["SharedCodec211"]:c9(),["SharedCodec212"]:c10(),["SharedCodec213"]:c11(),["SharedCodec214"]:c12(),["SharedCodec215"]:c13(),["SharedCodec216"]:c14(),["SharedCodec217"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
