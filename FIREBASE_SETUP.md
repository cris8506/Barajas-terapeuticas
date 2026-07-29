# Pasos para configurar Firebase Console para Barajas Terapéuticas

Sigue esta guía paso a paso para conectar tu propio proyecto de Firebase a la aplicación **Barajas Terapéuticas**:

---

## 1. Crear el proyecto en Firebase
1. Dirígete a la consola oficial de Firebase: [https://console.firebase.google.com](https://console.firebase.google.com).
2. Haz clic en **Agregar proyecto** (o *Add project*).
3. Asigna el nombre **Barajas Terapéuticas** y presiona **Continuar**.
4. (Opcional) Desactiva Google Analytics si no lo necesitas y haz clic en **Crear proyecto**.

---

## 2. Registrar la Aplicación Web
1. En la página de visión general del proyecto recién creado, haz clic en el ícono de **Web** (`</>`).
2. Escribe el apodo de la app (por ejemplo: `Barajas Terapéuticas Web`).
3. Haz clic en **Registrar app**.
4. Firebase te mostrará el objeto `firebaseConfig`. Copia los valores correspondientes.

---

## 3. Activar Cloud Firestore (Base de datos)
1. En el menú lateral izquierdo, ve a **Construir** > **Firestore Database**.
2. Haz clic en **Crear base de datos**.
3. Selecciona la ubicación de servidor más cercana a ti.
4. En las reglas iniciales, elige **Iniciar en modo de prueba** (luego actualizaremos las reglas de seguridad).
5. Presiona **Habilitar**.

---

## 4. Activar Firebase Storage (Almacenamiento de Imágenes)
1. En el menú lateral, ve a **Construir** > **Storage**.
2. Haz clic en **Comenzar**.
3. Selecciona la ubicación predeterminada y presiona **Siguiente** -> **Listo**.

---

## 5. Activar Firebase Authentication
1. En el menú lateral, ve a **Construir** > **Authentication**.
2. Haz clic en **Comenzar**.
3. En la pestaña **Métodos de inicio de sesión**, selecciona **Correo electrónico/Contraseña**.
4. Activa la opción **Correo electrónico/Contraseña** (desactiva Vínculo sin contraseña) y haz clic en **Guardar**.

---

## 6. Crear la Cuenta Administrativa
1. Dentro de **Authentication**, ve a la pestaña **Users** (Usuarios).
2. Haz clic en **Agregar usuario**.
3. Escribe tu correo electrónico administrativo y asigna una contraseña segura.
4. Presiona **Agregar usuario**. Con este correo y contraseña ingresarás en la ruta `/administracion`.

---

## 7. Configurar las Variables de Entorno en la Aplicación
Agrega las siguientes variables a tu archivo `.env` o en la sección de Secretos de tu servidor:

```env
VITE_FIREBASE_API_KEY="TU_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="tu-proyecto.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="tu-proyecto-id"
VITE_FIREBASE_STORAGE_BUCKET="tu-proyecto.firebasestorage.app"
VITE_FIREBASE_MESSAGING_SENDER_ID="tu_messaging_sender_id"
VITE_FIREBASE_APP_ID="tu_app_id"
```

---

## 8. Publicar las Reglas de Seguridad

### Reglas de Firestore
En la consola de Firebase, ve a **Firestore Database** > pestaña **Reglas** y pega lo siguiente:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /cards/{cardId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }

    match /deckSettings/{deckId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```
Haz clic en **Publicar**.

---

### Reglas de Firebase Storage
En la consola de Firebase, ve a **Storage** > pestaña **Reglas** y pega lo siguiente:

```javascript
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /cards/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /deck-covers/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```
Haz clic en **Publicar**.

---

¡Listo! Con esto la aplicación estará completamente sincronizada y las imágenes subidas desde `/administracion` se guardarán permanentemente en Firebase.
