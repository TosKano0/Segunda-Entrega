import { Injectable, inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { User } from '../models/user.model';
import {getFirestore, getDoc, doc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);

  //============Autenticar=================
  signIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //============Base de datos============
  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(), path))).data();
  }

}
