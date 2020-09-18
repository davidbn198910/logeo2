export class MdSesameAuthReq {
  Login_SesameAuthentication_REQ: LoginSesameAuthenticationREQ;
}

export class LoginSesameAuthenticationREQ {
  MessageHeader: MessageHeader;
  Body: Body;
}

export class Body {
  UserName: string;
  Password: string;
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