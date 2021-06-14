export default ({ router, isServer }) => {
    if (isServer) return
    if (!window.firebase) return
    window.firebase.initializeApp({
        apiKey: "AIzaSyB-xY6DdULIVa5Y2v9qaLH_VjWHkPnDm2M",
        authDomain: "drmagesh-com.firebaseapp.com",
        databaseURL: "https://drmagesh-com.firebaseio.com",
        projectId: "drmagesh-com",
        storageBucket: "drmagesh-com.appspot.com",
        messagingSenderId: "1075993602529",
        appId: "1:1075993602529:web:8bcc7d595373f409694aa0",
        measurementId: "G-3VBPVRTJHY"
    });
    // window.firebase.analytics()
    router.afterEach(() => {
      window.firebase.analytics().logEvent('page_view');
    })
  }
  