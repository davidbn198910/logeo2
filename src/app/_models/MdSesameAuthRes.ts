export class MdSesameAuthRes {
  Login_SesameAuthentication_RSP: LoginSesameAuthenticationRSP;
}

export class LoginSesameAuthenticationRSP {
  MessageHeader: MessageHeader;
  StatusResponse: StatusResponse;
  Body: Body;
}

export class Body {
  Token: string;
}

export class StatusResponse {
  IdStatus: string;
  Status: string;
}

export class MessageHeader {
  Country: Country;
  SystemUserInfo: SystemUserInfo;
  Trace: Trace;
  App: App;
}

export class App {
  appVersion: string;
}

export class Trace {
  serviceId: string;
  serviceName: string;
  serviceOperation: string;
  operationId: string;
  timestamp: string;
}

export class SystemUserInfo {
  userId: string;
  userName: string;
}

export class Country {
  countryId: string;
  countryDesc: string;
}