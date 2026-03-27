import { describe, it, expect } from "vitest";
import { FlintError, parseHttpError } from "../src/errors";

describe("FlintError", () => {
  it("should create an error with all fields", () => {
    const err = new FlintError({
      type: "validation",
      code: "FIELD_REQUIRED",
      message: "name is required",
      httpStatus: 400,
      field: "name",
      requestId: "req_123",
      remediation: {
        retryable: false,
        missingOrInvalidFields: ["name"],
      },
    });

    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(FlintError);
    expect(err.name).toBe("FlintError");
    expect(err.type).toBe("validation");
    expect(err.code).toBe("FIELD_REQUIRED");
    expect(err.message).toBe("name is required");
    expect(err.httpStatus).toBe(400);
    expect(err.field).toBe("name");
    expect(err.requestId).toBe("req_123");
    expect(err.remediation?.retryable).toBe(false);
    expect(err.remediation?.missingOrInvalidFields).toEqual(["name"]);
  });
});

describe("parseHttpError", () => {
  it("should parse a Connect RPC JSON error", () => {
    const body = JSON.stringify({
      code: "not_found",
      message: "order not found",
    });

    const err = parseHttpError(404, body);
    expect(err.type).toBe("not_found");
    expect(err.message).toBe("order not found");
    expect(err.httpStatus).toBe(404);
  });

  it("should parse a Connect error with Flint error details", () => {
    const body = JSON.stringify({
      code: "invalid_argument",
      message: "validation failed",
      details: [
        {
          type: "flint.v1.ErrorResponse",
          debug: {
            errors: [
              {
                type: 3, // VALIDATION
                httpStatusCode: 400,
                code: "FIELD_REQUIRED",
                message: "name is required",
                field: "name",
              },
            ],
          },
        },
      ],
    });

    const err = parseHttpError(400, body);
    expect(err.type).toBe("validation");
    expect(err.code).toBe("FIELD_REQUIRED");
    expect(err.message).toBe("name is required");
    expect(err.field).toBe("name");
    expect(err.httpStatus).toBe(400);
  });

  it("should parse a Flint ErrorResponse format", () => {
    const body = JSON.stringify({
      errors: [
        {
          type: 1, // AUTHENTICATION
          httpStatusCode: 401,
          code: "INVALID_API_KEY",
          message: "API key is invalid",
          requestId: "req_abc",
        },
      ],
    });

    const err = parseHttpError(401, body);
    expect(err.type).toBe("authentication");
    expect(err.code).toBe("INVALID_API_KEY");
    expect(err.requestId).toBe("req_abc");
  });

  it("should handle non-JSON response", () => {
    const err = parseHttpError(500, "Internal Server Error");
    expect(err.type).toBe("internal");
    expect(err.code).toBe("HTTP_500");
    expect(err.httpStatus).toBe(500);
  });

  it("should handle empty response body", () => {
    const err = parseHttpError(503, "");
    expect(err.type).toBe("unavailable");
    expect(err.code).toBe("HTTP_503");
  });

  it("should parse error with remediation", () => {
    const body = JSON.stringify({
      errors: [
        {
          type: 6, // RATE_LIMIT
          httpStatusCode: 429,
          code: "RATE_LIMIT_EXCEEDED",
          message: "Too many requests",
          remediation: {
            retryable: true,
            retryAfterMs: 5000,
          },
        },
      ],
    });

    const err = parseHttpError(429, body);
    expect(err.type).toBe("rate_limit");
    expect(err.remediation?.retryable).toBe(true);
    expect(err.remediation?.retryAfterMs).toBe(5000);
  });

  it("should map Connect error codes to types", () => {
    const testCases: Array<[string, number, string]> = [
      ["unauthenticated", 401, "authentication"],
      ["permission_denied", 403, "authorization"],
      ["invalid_argument", 400, "validation"],
      ["not_found", 404, "not_found"],
      ["already_exists", 409, "conflict"],
      ["resource_exhausted", 429, "rate_limit"],
      ["deadline_exceeded", 504, "timeout"],
      ["unavailable", 503, "unavailable"],
      ["internal", 500, "internal"],
    ];

    for (const [connectCode, httpStatus, expectedType] of testCases) {
      const body = JSON.stringify({ code: connectCode, message: "test" });
      const err = parseHttpError(httpStatus, body);
      expect(err.type).toBe(expectedType);
    }
  });
});
