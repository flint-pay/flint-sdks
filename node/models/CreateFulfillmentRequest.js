import { d5793 as c0, d5791 as c13, d5792 as c14 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7343 as c1, d7344 as c2, d7346 as c5, d7347 as c6, d7348 as c8, d7349 as c9, d7350 as c10 } from '../descriptors/data/343.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d240 as c3 } from '../descriptors/data/11.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6559 as c4, d6560 as c12, d6561 as c22, d6562 as c26, d6563 as c27 } from '../descriptors/data/297.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6351 as c7, d6352 as c31 } from '../descriptors/data/285.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c11 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7390 as c15, d7391 as c16 } from '../descriptors/data/345.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7427 as c17, d7428 as c18, d7429 as c19, d7430 as c20, d7431 as c21 } from '../descriptors/data/347.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7440 as c23, d7441 as c24, d7442 as c25, d7443 as c28, d7444 as c29 } from '../descriptors/data/348.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7447 as c30 } from '../descriptors/data/349.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d240 as d240 } from '../descriptors/data/11.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1431"]:c15(),["SharedCodec1432"]:c16(),["SharedCodec232"]:c17(),["SharedCodec233"]:c18(),["SharedCodec234"]:c19(),["SharedCodec235"]:c20(),["SharedCodec236"]:c21(),["SharedCodec376"]:c22(),["SharedCodec686"]:c23(),["SharedCodec687"]:c24(),["SharedCodec688"]:c25(),["SharedCodec689"]:c26(),["SharedCodec690"]:c27(),["SharedCodec691"]:c28(),["SharedCodec692"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
