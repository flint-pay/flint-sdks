import { d194 as c0 } from '../descriptors/data/9.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5565 as c1 } from '../descriptors/data/250.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4514 as c2, d4515 as c3, d4516 as c41, d4517 as c44, d4518 as c45 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4542 as c4, d4543 as c42, d4544 as c43, d4547 as c46 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5010 as c5, d5020 as c21 } from '../descriptors/data/221.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d440 as c6 } from '../descriptors/data/24.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c7 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5033 as c8, d5034 as c9, d5035 as c10, d5036 as c11, d5037 as c12, d5038 as c16, d5039 as c17, d5040 as c18, d5041 as c19, d5051 as c26, d5052 as c28, d5053 as c29, d5042 as c30, d5043 as c31, d5044 as c32, d5045 as c33, d5046 as c34, d5047 as c35, d5048 as c36, d5049 as c37, d5050 as c47 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c13 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c14 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5027 as c15, d5028 as c22, d5029 as c23, d5030 as c24, d5031 as c25, d5032 as c27 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1482 as c20 } from '../descriptors/data/68.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5607 as c38, d5608 as c39, d5609 as c40 } from '../descriptors/data/253.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c48, d4331 as c49 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d194 as d194 } from '../descriptors/data/9.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryPreviewRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryBuyerLocationRequest"]:c3(),["DeliveryCoordinateRequest"]:c4(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c5(),["DeliveryPreviewRoutingSource"]:c6(),["Dimensions"]:c7(),["GiftCardPurchaseDetailsRequest"]:c8(),["GiftCardPurchaseRecipientRequest"]:c9(),["ImageReferenceRequest"]:c10(),["LineItemFulfillmentOriginRequest"]:c11(),["LineItemFulfillmentRequest"]:c12(),["MetadataRequest"]:c13(),["MoneyValue"]:c14(),["OrderDraftLineItemInventoryDemandRequest"]:c15(),["OrderDraftLineItemTaxCalculationRequest"]:c16(),["OrderDraftLineItemTaxRequest"]:c17(),["OrderDraftTaxComponentRequest"]:c18(),["OrderDraftTaxJurisdictionRequest"]:c19(),["SharedCodec188"]:c20(),["SharedCodec189"]:c21(),["SharedCodec250"]:c22(),["SharedCodec251"]:c23(),["SharedCodec252"]:c24(),["SharedCodec253"]:c25(),["SharedCodec254"]:c26(),["SharedCodec255"]:c27(),["SharedCodec256"]:c28(),["SharedCodec257"]:c29(),["SharedCodec259"]:c30(),["SharedCodec260"]:c31(),["SharedCodec261"]:c32(),["SharedCodec262"]:c33(),["SharedCodec264"]:c34(),["SharedCodec265"]:c35(),["SharedCodec267"]:c36(),["SharedCodec268"]:c37(),["SharedCodec269"]:c38(),["SharedCodec270"]:c39(),["SharedCodec271"]:c40(),["SharedCodec373"]:c41(),["SharedCodec374"]:c42(),["SharedCodec375"]:c43(),["SharedCodec376"]:c44(),["SharedCodec377"]:c45(),["SharedCodec602"]:c46(),["SubscribedLineRequest"]:c47(),["TextModifierRequest"]:c48(),["Weight"]:c49()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
