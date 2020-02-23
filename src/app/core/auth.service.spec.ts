
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFireModule} from '@angular/fire';
import {kebabToCamelCase} from 'codelyzer/util/utils';
import {firebaseConfig} from '../../environments/secrets/firebaseConfig';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';

/* The class looks like this:
export class AuthService {

  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  )
 */

describe('AuthService', () => {

  let afAuth: AngularFireAuth;
  let afStorage: AngularFireStorage;
  let router: RouterTestingModule;

  beforeEach(async () => {

    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireStorageModule
      ],
      providers: [
        AngularFireAuth,
        AngularFireStorage,
        Router
      ]
    }).compileComponents();
  });

  it('should use AngularFireAuth', () => {
    afAuth = TestBed.inject(AngularFireAuth);
    expect(afAuth).toBeTruthy();
  });

});
