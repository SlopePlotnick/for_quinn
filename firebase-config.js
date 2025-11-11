// Firebase 配置文件
// 请将下面的配置替换为你自己的 Firebase 项目配置

// ⚠️ 重要：请从 Firebase 控制台复制你的配置信息并替换下面的内容
const firebaseConfig = {
    apiKey: "AIzaSyDBgNOhrvZWheVauRiiJMGHriDEMZRj1Ik",
    authDomain: "for-quinn.firebaseapp.com",
    projectId: "for-quinn",
    storageBucket: "for-quinn.firebasestorage.app",
    messagingSenderId: "192410715409",
    appId: "1:192410715409:web:9f7cf5cd883eb71a8178b0"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);

// 初始化 Firestore
const db = firebase.firestore();

// 数据库集合引用
const periodsCollection = db.collection('periods');
const diaryCollection = db.collection('diary');

// 导出供其他文件使用
window.firebaseDb = {
    db: db,
    periodsCollection: periodsCollection,
    diaryCollection: diaryCollection
};

console.log('Firebase 已成功初始化！');
