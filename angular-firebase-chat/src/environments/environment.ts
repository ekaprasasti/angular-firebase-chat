// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
	firebase: {
		apiKey: "AIzaSyB--AeCrcaOwL_86e5UkvvHvok9DaSELi4",
    authDomain: "angular-firebase-chat-5953b.firebaseapp.com",
    databaseURL: "https://angular-firebase-chat-5953b.firebaseio.com",
    projectId: "angular-firebase-chat-5953b",
    storageBucket: "",
    messagingSenderId: "491888395104"
	}
};
