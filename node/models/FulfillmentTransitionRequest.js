import { d369 as c0 } from '../descriptors/data/20.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3855 as c1, d3856 as c2, d3857 as c3, d3858 as c4, d3859 as c5, d3860 as c6, d3861 as c7, d3862 as c8, d3863 as c9, d3864 as c10, d3865 as c11, d3866 as c13, d3867 as c14 } from '../descriptors/data/162.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3875 as c12 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d369 as d369 } from '../descriptors/data/20.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec350"]:c1(),["SharedCodec351"]:c2(),["SharedCodec352"]:c3(),["SharedCodec353"]:c4(),["SharedCodec354"]:c5(),["SharedCodec355"]:c6(),["SharedCodec356"]:c7(),["SharedCodec357"]:c8(),["SharedCodec358"]:c9(),["SharedCodec359"]:c10(),["SharedCodec360"]:c11(),["SharedCodec361"]:c12(),["SharedCodec362"]:c13(),["SharedCodec363"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
