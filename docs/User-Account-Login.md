# User Account Login with Firebase

## Class Diagram

```plantuml
@startuml
class AuthGuard <<Injectable>> {
  ---
  + AuthGuard(auth: AuthService, router: Router)
  + canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
}

class AuthService <<Injectable>> {
  - user$: Observable<any>
  ---
  AuthService(afAuth: AngularFireAuth, afs: AngularFirestore, router: Router)
}

class CoreModule <<Module>> {
  --
  --
  imports: [CommonModule, AngularFireAuthModule]
}

class UserProfileComponent {
  --
  UserProfileComponent(auth: AuthService)
}

interface FirebaseUser {
  + uid: string
  + email: string
  + photoURL: string
  + displayName: string
  + myCustomData: string
}

Injectable ..> AuthService
Injectable ..> AuthGuard
Router ..> AuthService
Router ..> AuthGuard
auth ..> AuthService
AngularFireAuth ..> AuthService
AngularFirestore ..> AuthService
AngularFirestoreDocument ..> AuthService
Observable ..> AuthService
Observable ..> AuthGuard
"tap, map, take" ..> AuthGuard
of ..> AuthService
switchMap ..> AuthService
AuthService ..> UserProfileComponent
canActivate ..> AuthGuard
ActivatedRouteSnapshot --* AuthGuard
RouterStateSnapshot --* AuthGuard

AuthService ..> AuthGuard
FirebaseUser --* AuthService

hide <<Injectable>> circle
hide <<Module>> circle

legend
dashed line is importation
endlegend
@enduml
```

## Log

Using the [AngularFire module](https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)

Set up AngularFire module so that Firebase works with Angular

Using the [OAuth Fireship.io Guide](https://fireship.io/lessons/angularfire-google-oauth/)

Created:

* `app/core/auth.guard`
* `app/core/auth.service`
* `app/core/core.module`
* `app-routing.module`
* `app/user-profile`

Using the [AngularFirebase.com](https://angularfirebase.com/lessons/angular-firebase-authentication-tutorial-email-password-signup/) as reference.
