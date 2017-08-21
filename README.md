# Angular Firebase Chat

My source code of tutorial by Wes Doyle on [youtube](https://www.youtube.com/watch?v=-j0LVc-zLh0&t=789s)

![app component](/assets/app-component.png)

![chatroom component](/assets/chatroom-component.png)

Install project

```bash
ng new angular-firebase-chat
```

Create folder and file

```bash
mkdir src/app/services
touch src/routes.ts`
```

## Install Component

```bash
ng g c chat-form
ng g c chatroom
ng g c login-form
ng g c signup-form
ng g c navbar
ng g c user-list
ng g c user-item
```

## Install Services

```bash
ng g s auth
ng g s chat
```

Move the file `auth.service.ts`, `auth.service.spec.ts`, `chat.service.ts`, `chat.service.spec.ts` to service folder.

## Install Firebase

```bash
npm install --save firebase angularfire2
```

## Config Routes

Edit `routes.ts`

```javascript
import { Routes } from '@angular/router';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';

export const appRouts: Routes = [
	{ path: 'signup', component: SignupFormComponent },
	{ path: 'login', component: LoginFormComponent },
	{ path: 'chat', component: ChatroomComponent },
	{ path : '', redirectTo: '/login', pathMatch: 'full' }
];
```

## Add forms and router module in `app.module.ts` file

```javascript
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes),
		FormsModule
	]
});
```

### Import services in `app.module.ts` file

```javascript
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';

@NgModule({
	providers: [AuthService, ChatService]
});	
```

## Install firebase module in `app.module.ts` file

```javascript
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
	imports: [
		AngularFireModule,
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFire.initializeApp(environment.firebase)
	]
});
```

## Setup environment firebase

Import environment in `app.module.ts`:

```javascript
import { environment } from '../environments/environment';
``` 

Create firebase project in firebase console in https://firebase.google.com

Open `src/environments/environment.ts` file and edit like this:

```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'replace-with-your-code',
    authDomain: 'replace-with-your-code',
    databaseURL: 'replace-with-your-code',
    projectId: 'replace-with-your-code',
    storageBucket: 'replace-with-your-code',
    messagingSenderId: 'replace-with-your-code'
  }
};
```

Open `src/environments/environment.prod.ts` file and edit like this:

```javascript
export const environment = {
  production: true,
  firebase: {
    apiKey: 'replace-with-your-code',
    authDomain: 'replace-with-your-code',
    databaseURL: 'replace-with-your-code',
    projectId: 'replace-with-your-code',
    storageBucket: 'replace-with-your-code',
    messagingSenderId: 'replace-with-your-code'
  }
};
```

## Firebase project configuration

In firebase enabled signin method with email and password.

Edit realtime database rules.

```javascript
{
	"rules" : {
		".read" : true,
		".write" : true
	}
}
```

## Edit `app.component.html` file

```html
<div class="chatRoom">
  <div class="chatHeaderWrapper">
    <app-navbar></app-navbar>
  </div>
  <router-outlet></router-outlet>
</div>
```

## `chatroom.component.html`

```html
<div class="mainContent">
  <div class="userListWrapper">
    <app-user-list></app-user-list>
  </div>
  <div #scroller class="feedWrapper">
    <app-feed></app-feed>
  </div>
</div>

<div class="chatFormWrapper">
  <app-chat-form></app-chat-form>
</div>
```

## `chat-form.component.html`

```html
<input class="chatInput" [(ngModel)]="message" (keydown)="handleSubmit($event)" />

<button class="chatButton" (click)=send()>Send</button>
```

## `chat-form.component.ts`

```javascript
import { ChatService } from '../services/chat.service';

export class ChatFormComponent implements OnInit {
	message: string;

	construct(private chat: ChatService) { }

	send() {
		this.chat.sendMessage(this.message);
	}

	handleSubmit(event) {
		if (event.keycode === 13) {
			this.send();
		}
	}	
}
```

To be continue at 26:20 minute
