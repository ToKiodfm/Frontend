/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package firebase;

import java.io.FileInputStream;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import java.io.IOException;

public class conexionfirebase {
    static Firestore bd;
    
    
    public static void conectar() throws IOException{
        
FileInputStream serviceAccount =
  new FileInputStream("backendap.json");

FirebaseOptions options = new FirebaseOptions.Builder()
  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
  .setDatabaseUrl("https://backendap-d612d-default-rtdb.firebaseio.com")
  .build();

FirebaseApp.initializeApp(options);
bd = FirestoreClient.getFirestore();

const firebaseConfig = {
  apiKey: "AIzaSyBHiTCUJcSxBS7XWkeZKHJaIIfEhsCmF7M",
  authDomain: "backendap-d612d.firebaseapp.com",
  databaseURL: "https://backendap-d612d-default-rtdb.firebaseio.com",
  projectId: "backendap-d612d",
  storageBucket: "backendap-d612d.appspot.com",
  messagingSenderId: "621691559225",
  appId: "1:621691559225:web:6ab408877163f588755ce8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

}
}