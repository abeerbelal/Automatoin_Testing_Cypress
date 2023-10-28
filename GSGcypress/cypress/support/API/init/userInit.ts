import { CreateConduitPayload } from "../payload/UserApiPayload";
import Generic from "../../../support/helpers/genericHelper";

export default class userInit {
  static initUser(): CreateConduitPayload {
    let createConduitPayload: CreateConduitPayload = {
      user: {
        username: `${Generic.getRandomString("abeer")}`,
        email: `${Generic.getRandomString("abeer")}@gmail.com`,
        password: "12345",
      },
    };
    return createConduitPayload;
  }
}
