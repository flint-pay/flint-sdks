import { d225 as c0 } from '../descriptors/data/13.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5005 as c2 } from '../descriptors/data/228.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5007 as c3, d5008 as c4, d5009 as c5, d5010 as c6, d5011 as c7, d5012 as c8, d5013 as c9, d5014 as c10, d5015 as c11, d5016 as c12, d5017 as c13, d5018 as c14, d5019 as c15, d5020 as c16 } from '../descriptors/data/229.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d225 as d225 } from '../descriptors/data/13.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d225;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["SharedCodec1119"]:c3(),["SharedCodec1120"]:c4(),["SharedCodec1121"]:c5(),["SharedCodec1122"]:c6(),["SharedCodec208"]:c7(),["SharedCodec209"]:c8(),["SharedCodec210"]:c9(),["SharedCodec211"]:c10(),["SharedCodec212"]:c11(),["SharedCodec213"]:c12(),["SharedCodec214"]:c13(),["SharedCodec215"]:c14(),["SharedCodec216"]:c15(),["SharedCodec217"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
