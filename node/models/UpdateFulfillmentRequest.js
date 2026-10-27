import { d3162 as c0 } from '../descriptors/data/125.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3887 as c1, d3884 as c9, d3885 as c11, d3886 as c12 } from '../descriptors/data/164.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3856 as c2, d3857 as c3, d3858 as c4, d3859 as c5, d3860 as c6 } from '../descriptors/data/162.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3446 as c7 } from '../descriptors/data/140.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3883 as c8 } from '../descriptors/data/163.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2443 as c10 } from '../descriptors/data/97.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2443 as d2443 } from '../descriptors/data/97.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2443;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["FulfillmentRecipientRequest"]:c1(),["SharedCodec1186"]:c2(),["SharedCodec1187"]:c3(),["SharedCodec1188"]:c4(),["SharedCodec1189"]:c5(),["SharedCodec1190"]:c6(),["SharedCodec956"]:c7(),["UpdateDeliveryFulfillmentDetails"]:c8(),["UpdateDigitalFulfillmentDetails"]:c9(),["UpdateFulfillmentRequest"]:c10(),["UpdatePickupFulfillmentDetails"]:c11(),["UpdateServiceFulfillmentDetails"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
