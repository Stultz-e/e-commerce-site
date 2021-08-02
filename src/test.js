import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('HxtlPwY3MwzAmGhYI9F0')
  .collection(cartItems)
  .doc('Xaw1TvnBjBlCf7gomfZe');

firestore.doc('/users/HxtlPwY3MwzAmGhYI9F0/cartItems/Xaw1TvnBjBlCf7gomfZe');
firestore.collection('users/HxtlPwY3MwzAmGhYI9F0/cartItems');
