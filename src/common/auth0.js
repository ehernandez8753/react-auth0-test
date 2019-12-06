import auth0 from "auth0-js";

const CLIENT_DOMAIN = "dev-kqqp3aag.auth0.com";
const CLIENT_ID = "F4vWALxt8EA8vSc691OmDZWSXRDhjrC4";
const SCOPE = "openid";
const REDIRECT = "http://localhost:3000/callback";

const auth = new auth0.WebAuth({
    domain: CLIENT_DOMAIN,
    clientID: CLIENT_ID,
});

export function login(){
    auth.authorize({
        responseType: "token",
        redirectUri: REDIRECT,
        scope: SCOPE,
    });
}