/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";
import * as msRest from "ms-rest-js";


/**
 * @interface
 * An interface representing TokenResponse.
 */
export interface TokenResponse {
  /**
   * @member {string} [connectionName]
   */
  connectionName?: string;
  /**
   * @member {string} [token]
   */
  token?: string;
  /**
   * @member {string} [expiration]
   */
  expiration?: string;
}

/**
 * @interface
 * An interface representing InnerHttpError.
 */
export interface InnerHttpError {
  /**
   * @member {number} [statusCode]
   */
  statusCode?: number;
  /**
   * @member {any} [body]
   */
  body?: any;
}

/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [message]
   */
  message?: string;
  /**
   * @member {InnerHttpError} [innerHttpError]
   */
  innerHttpError?: InnerHttpError;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 */
export interface ErrorResponse {
  /**
   * @member {ErrorModel} [error]
   */
  error?: ErrorModel;
}

/**
 * @interface
 * An interface representing AadResourceUrls.
 */
export interface AadResourceUrls {
  /**
   * @member {string[]} [resourceUrls]
   */
  resourceUrls?: string[];
}

/**
 * @interface
 * An interface representing TokenStatus.
 * The status of a particular token
 *
 */
export interface TokenStatus {
  /**
   * @member {string} [connectionName] The name of the connection the token
   * status pertains to
   */
  connectionName?: string;
  /**
   * @member {boolean} [hasToken] True if a token is stored for this
   * ConnectionName
   */
  hasToken?: boolean;
  /**
   * @member {string} [serviceProviderDisplayName] The display name of the
   * service provider for which this Token belongs to
   */
  serviceProviderDisplayName?: string;
}

/**
 * @interface
 * An interface representing TokenApiClientOptions.
 * @extends ServiceClientOptions
 */
export interface TokenApiClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing BotSignInGetSignInUrlOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface BotSignInGetSignInUrlOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [codeChallenge]
   */
  codeChallenge?: string;
  /**
   * @member {string} [emulatorUrl]
   */
  emulatorUrl?: string;
  /**
   * @member {string} [finalRedirect]
   */
  finalRedirect?: string;
}

/**
 * @interface
 * An interface representing UserTokenGetTokenOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface UserTokenGetTokenOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [code]
   */
  code?: string;
}

/**
 * @interface
 * An interface representing UserTokenSignOutOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface UserTokenSignOutOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [connectionName]
   */
  connectionName?: string;
}

/**
 * @interface
 * An interface representing UserTokenGetTokenStatusOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface UserTokenGetTokenStatusOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [include]
   */
  include?: string;
}

/**
 * Contains response data for the getSignInUrl operation.
 */
export type BotSignInGetSignInUrlResponse = {
  /**
   * The parsed response body.
   */
  body: string;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the getToken operation.
 */
export type UserTokenGetTokenResponse = TokenResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TokenResponse;
    };
};

/**
 * Contains response data for the getAadTokens operation.
 */
export type UserTokenGetAadTokensResponse = {
  /**
   * The response body properties.
   */
  [propertyName: string]: TokenResponse;
} & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: { [propertyName: string]: TokenResponse };
    };
};

/**
 * Contains response data for the signOut operation.
 */
export type UserTokenSignOutResponse = {
  /**
   * The parsed response body.
   */
  body: any;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the getTokenStatus operation.
 */
export type UserTokenGetTokenStatusResponse = Array<TokenStatus> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TokenStatus[];
    };
};
